/**
 * [CLINIC NAME] - Physiotherapy Landing Page Scripts
 * Features:
 * - Sticky Header scroll elevation
 * - Accessible mobile navigation drawer
 * - Smooth anchor scrolling with offset
 * - FAQ Accordion with ARIA states
 * - Testimonial slider (controls, pagination dots, touch swipe)
 * - Scroll-reveal IntersectionObserver animations
 * - Accessible booking form validation and confirmation
 * - Service card quick-booking pre-selection
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initFAQAccordion();
  initTestimonialsSlider();
  initScrollReveal();
  initBookingForm();
  initServiceSelectTriggers();
});

/* --------------------------------------------------------------------------
 * 1. Sticky Header Elevation on Scroll
 * -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
 * 2. Mobile Navigation Drawer & Toggle
 * -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn-cta');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking background backdrop
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeMenu();
    }
  });

  // Close when clicking nav items
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
 * 3. Smooth Anchor Scrolling with Header Height Offset
 * -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  const header = document.querySelector('.site-header');
  const headerOffset = header ? header.offsetHeight : 76;

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerOffset + 16);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set focus for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * 4. FAQ Accordion (Accessible with ARIA states)
 * -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other FAQs for clean single-focus reading
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current FAQ
      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * 5. Testimonials Slider (Arrows, Dots & Touch Gestures)
 * -------------------------------------------------------------------------- */
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayTimer = null;

  // Generate pagination dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlider();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      restartAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      restartAutoplay();
    });
  }

  // Touch Swipe for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      restartAutoplay();
    }
  }

  // Autoplay
  function startAutoplay() {
    autoPlayTimer = setInterval(nextSlide, 7000);
  }

  function stopAutoplay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  track.parentElement.addEventListener('mouseenter', stopAutoplay);
  track.parentElement.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

/* --------------------------------------------------------------------------
 * 6. Scroll Reveal Animations (IntersectionObserver)
 * -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
 * 7. Booking Form Validation & Submission
 * -------------------------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  const successBanner = document.getElementById('form-success-banner');
  const dateInput = document.getElementById('booking-date');

  if (!form) return;

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Fields to validate
    const nameField = document.getElementById('booking-name');
    const phoneField = document.getElementById('booking-phone');
    const concernField = document.getElementById('booking-concern');
    const dateField = document.getElementById('booking-date');

    // Validation helper
    function validateField(field, condition, errorMsgId) {
      const errElem = document.getElementById(errorMsgId);
      if (!condition) {
        field.classList.add('invalid');
        if (errElem) errElem.classList.add('visible');
        return false;
      } else {
        field.classList.remove('invalid');
        if (errElem) errElem.classList.remove('visible');
        return true;
      }
    }

    // Name check
    if (!validateField(nameField, nameField.value.trim().length >= 2, 'name-error')) {
      isValid = false;
    }

    // Phone check (at least 10 digits)
    const phoneClean = phoneField.value.replace(/[^0-9+]/g, '');
    if (!validateField(phoneField, phoneClean.length >= 10, 'phone-error')) {
      isValid = false;
    }

    // Concern check
    if (!validateField(concernField, concernField.value !== '', 'concern-error')) {
      isValid = false;
    }

    // Date check
    if (!validateField(dateField, dateField.value !== '', 'date-error')) {
      isValid = false;
    }

    if (!isValid) {
      // Focus first invalid input
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Process Submission (Simulated Instant Confirmation)
    const submitBtn = form.querySelector('.form-submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
      Confirming Appointment...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Populate confirmation banner with patient name & chosen date
      const patientName = nameField.value.trim();
      const bookedDate = dateField.value;

      if (successBanner) {
        successBanner.innerHTML = `
          <h4 style="font-size: 1.15rem; font-weight: 700; color: #065F46; margin-bottom: 0.5rem;">
            ✓ Appointment Request Received!
          </h4>
          <p style="font-size: 0.95rem; color: #047857; margin-bottom: 0.75rem;">
            Thank you, <strong>${escapeHTML(patientName)}</strong>. Dr. [PHYSIOTHERAPIST NAME]'s desk at [CLINIC NAME] will call you at <strong>${escapeHTML(phoneField.value)}</strong> to confirm your slot for <strong>${escapeHTML(bookedDate)}</strong>.
          </p>
          <a href="https://wa.me/[WHATSAPP NUMBER]?text=${encodeURIComponent('Hello Dr. [PHYSIOTHERAPIST NAME], I just requested an appointment on ' + bookedDate + ' for ' + patientName + '.')}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn" 
             style="background: #25D366; color: #FFFFFF; font-size: 0.875rem; padding: 0.5rem 1rem; border-radius: 8px;">
            💬 Speed up confirmation on WhatsApp
          </a>
        `;
        successBanner.classList.add('visible');
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      form.reset();
    }, 900);
  });

  // Remove invalid state on typing
  const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      const errorMsg = input.parentElement.querySelector('.field-error');
      if (errorMsg) errorMsg.classList.remove('visible');
    });
  });
}

/* --------------------------------------------------------------------------
 * 8. Pre-select Service Dropdown from Service Card CTA
 * -------------------------------------------------------------------------- */
function initServiceSelectTriggers() {
  const serviceButtons = document.querySelectorAll('[data-service-target]');
  const concernSelect = document.getElementById('booking-concern');

  serviceButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetService = btn.getAttribute('data-service-target');
      if (concernSelect && targetService) {
        concernSelect.value = targetService;
      }
    });
  });
}

/* Helper to prevent XSS in client-side interpolation */
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Inline keyframe for spinner
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

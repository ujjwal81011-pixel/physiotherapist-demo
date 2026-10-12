# 🏥 [CLINIC NAME] – Physiotherapy Landing Website

A high-converting, mobile-first, SEO-engineered landing website for **[PHYSIOTHERAPIST NAME]** practicing at **[CLINIC NAME]** in **[CITY, STATE]**.

Built with vanilla HTML5, CSS3, and JavaScript—zero framework dependencies, ultra-fast load times, WCAG AA contrast compliance, and full Schema.org structured data.

---

## 📁 File Structure

```text
physio-landing/
├── index.html            # Main semantic HTML5 landing page with JSON-LD schema
├── css/
│   └── style.css         # Complete design system, responsive styles & CSS variables
├── js/
│   └── main.js           # Vanilla JS: slider, drawer, accordion, form validator, animations
├── assets/
│   ├── images/
│   │   ├── hero.webp     # Hero consultation showcase (high priority)
│   │   ├── doctor.webp   # Physiotherapist doctor profile image
│   │   ├── og-image.jpg  # Open Graph & Twitter social share card (1200x630)
│   │   └── services/     # 6 Service cards WebP images
│   │       ├── sports-injury.webp
│   │       ├── back-neck.webp
│   │       ├── post-surgery.webp
│   │       ├── neuro.webp
│   │       ├── manual-therapy.webp
│   │       └── geriatric.webp
│   ├── icons/
│   │   ├── favicon.ico
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   └── fonts/            # Google Fonts preconnected (Plus Jakarta Sans & Inter)
├── favicon.ico           # Root favicon
├── site.webmanifest      # Progressive Web App manifest
├── robots.txt            # Search engine crawler instructions
├── sitemap.xml           # XML sitemap with canonical URL
├── generate_assets.py    # Python script to regenerate graphics/icons
└── README.md             # Documentation, replacement guide & SEO checklist
```

---

## 🔍 Comprehensive [BRACKETED PLACEHOLDERS] Replacement Table

Search and replace the following tokens across the codebase (primarily in `index.html`, `sitemap.xml`, `robots.txt`, and `site.webmanifest`):

| Placeholder | Example Value | Description |
| :--- | :--- | :--- |
| `[PHYSIOTHERAPIST NAME]` | Dr. Sarah Jenkins | Full name of lead physiotherapist |
| `[CLINIC NAME]` | Apex Physio & Rehab Center | Registered brand or clinic trade name |
| `[CITY]` | Pune | Primary target city for local SEO |
| `[STATE]` | Maharashtra | State/Province |
| `[ADDRESS]` | Shop 4, Green Avenue, Baner Road | Physical clinic street address |
| `[POSTAL CODE]` | 411045 | Area postal code / ZIP code |
| `[PHONE]` | +91 98765 43210 | Official clinic contact phone number |
| `[WHATSAPP NUMBER]` | 919876543210 | WhatsApp number with country code (digits only, no +) |
| `[EMAIL]` | contact@apexphysio.com | Clinic email address |
| `[HOURS]` | Mon–Sat: 8:00 AM – 8:00 PM | Operating hours |
| `[BPT/MPT]` | MPT (Sports Rehabilitation), BPT | Doctor's academic degrees |
| `[REG. NO.]` | IAP-12345/2016 | Professional council registration number |
| `[SPECIALIZATION]` | Orthopedic & Sports Rehabilitation | Primary clinical specialization |
| `[X]+ Years` | 12+ Years | Years of active clinical experience |
| `[X]+ Patients` | 4,500+ Patients | Total patients treated milestone |
| `[X]` (Rating) | 4.9 | Google Review rating average (out of 5) |
| `[YOUR-DOMAIN]` | apexphysiopune.com | Production domain name without trailing slash |
| `[LATITUDE]` | 18.5590 | Clinic GPS latitude for Google Schema |
| `[LONGITUDE]` | 73.7868 | Clinic GPS longitude for Google Schema |
| `[GOOGLE_BUSINESS_URL]` | g.page/r/apex-physio-pune | Google Business Profile link |
| `[CLINIC_FACEBOOK]` | apexphysiopune | Facebook page handle |
| `[CLINIC_INSTAGRAM]` | apexphysiopune | Instagram profile handle |
| `[CLINIC_LINKEDIN]` | apex-physio-pune | LinkedIn company page handle |
| `[AREA 1]` ... `[AREA 5]` | Baner, Aundh, Balewadi, Wakad, Hinjawadi | Target suburbs / neighborhoods for local search |
| `[CONSULTATION_FEE]` | 700 | Initial assessment consultation charge (INR/USD) |
| `[SESSION_FEE]` | 500 | Regular treatment session starting charge |
| `[PATIENT NAME 1..3]` | Rohan Verma, Priya Nair, Rajesh K. | Patient review display names |

---

## 📸 Image Replacement & Unsplash Stock Recommendations

The project includes pre-built vector WebP assets in `assets/images/`. To replace them with actual clinic photography:

### Recommended Image Dimensions & Formats
1. **Hero Banner (`assets/images/hero.webp`)**:
   - Ideal dimensions: `1200 x 900 px` (Aspect ratio ~ 4:3)
   - Content: Doctor examining a patient or standing warmly in the clinic.
   - Unsplash fallback: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80`
2. **Doctor Portrait (`assets/images/doctor.webp`)**:
   - Ideal dimensions: `800 x 960 px` (Aspect ratio ~ 4:5)
   - Content: Warm, professional headshot in medical scrubs or white coat with stethoscope.
   - Unsplash fallback: `https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80`
3. **Open Graph Banner (`assets/images/og-image.jpg`)**:
   - Dimensions: `1200 x 630 px` (Strict standard)
   - Content: Clinic logo, doctor name, and "Best Physiotherapy in [CITY]".
4. **Service Cards (`assets/images/services/*.webp`)**:
   - Dimensions: `600 x 400 px` (Aspect ratio 3:2 or 16:10)
   - Sports Injury: `https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&w=600&q=80`
   - Back & Neck Pain: `https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=600&q=80`
   - Post-Surgery: `https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80`
   - Neuro Rehab: `https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80`
   - Manual Therapy: `https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80`
   - Geriatric Care: `https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80`

---

## 🚀 Local SEO Checklist for Dominating Google Map Pack & Local Organic Search

### 1. Google Business Profile (GBP) Optimization
- [ ] Claim or create your Google Business Profile with the exact identical **NAP** (Name, Address, Phone) used on this website.
- [ ] Set Primary Category to: `Physiotherapist` or `Physical therapy clinic`.
- [ ] Add Secondary Categories: `Sports medicine clinic`, `Rehabilitation center`.
- [ ] Set exact pinpoint GPS coordinates on Google Maps.
- [ ] Link website directly to your canonical URL: `https://[YOUR-DOMAIN]/`.
- [ ] Add high-resolution photos of the clinic facade, reception, treatment beds, and doctor.
- [ ] Enable the Google messaging / appointment booking link.

### 2. Search Console & Bing Webmaster Verification
- [ ] Add `https://[YOUR-DOMAIN]/` to **Google Search Console**.
- [ ] Submit `https://[YOUR-DOMAIN]/sitemap.xml` under Sitemaps.
- [ ] Submit site URL to **Bing Webmaster Tools**.
- [ ] Request URL indexing on the root page for rapid crawling.

### 3. Local Citations & Directories (NAP Consistency)
Register your clinic on reputable medical & local directories ensuring identical NAP:
- [ ] Practo
- [ ] Lybrate
- [ ] Justdial / Sulekha
- [ ] Apple Maps (Apple Business Connect)
- [ ] Bing Places for Business
- [ ] Facebook Business Page

### 4. Review Generation Engine
- [ ] Generate a direct Google Review shortlink (e.g. `https://g.page/r/[ID]/review`).
- [ ] Create a WhatsApp automated message sent to patients after their 3rd or 4th session asking for feedback on Google.
- [ ] Respond to all patient reviews within 24–48 hours incorporating local keywords naturally (e.g., *"Thank you Rohan, happy to help your knee recover at our Pune clinic!"*).

---

## ⚡ Performance Targets & Core Web Vitals Compliance

- **LCP (Largest Contentful Paint)**: < 1.8s (Preloaded WebP hero image + preconnected Google Fonts).
- **CLS (Cumulative Layout Shift)**: 0.00 (Fixed aspect ratio attributes on all image and media containers).
- **INP (Interaction to Next Paint)**: < 100ms (Lightweight vanilla JavaScript; no bulky UI libraries).
- **Lighthouse Scores**: 98+ across Performance, Accessibility, Best Practices, and SEO.

---

## 💻 Local Preview & Production Deployment

### Option A: Local Testing with Python or Node
Run a local static HTTP server from the `physio-landing` directory:
```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .
```
Visit `http://localhost:3000` in your browser.

### Option B: Deploying to Vercel / Netlify / Cloudflare Pages
1. Push this folder to a GitHub repository.
2. Link your repository in [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Build Command: Leave blank (Static site).
4. Output Directory: `.` or root.
5. Add your custom domain `[YOUR-DOMAIN]`.
6. Ensure SSL (HTTPS) is enabled automatically.

---

## ⚖️ Medical Compliance & Disclaimer Notice
The content templates provided follow ethical medical standards. Avoid promising guaranteed cures or exaggerated timelines to remain compliant with healthcare advertising guidelines and local medical council codes.

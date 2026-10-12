# Fonts Directory

This landing page loads Google Fonts (`Plus Jakarta Sans` and `Inter`) directly via CDN with `preconnect` and `display=swap` for maximum edge-caching and performance.

If you prefer self-hosting fonts for offline or strict GDPR environments:
1. Download the `.woff2` font files for "Plus Jakarta Sans" (600, 700, 800) and "Inter" (400, 500, 600).
2. Place them in this `assets/fonts/` folder.
3. Update `css/style.css` with `@font-face` declarations pointing to these local files.

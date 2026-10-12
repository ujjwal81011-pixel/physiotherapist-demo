import os
from PIL import Image, ImageDraw, ImageFont

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

ensure_dir("e:/Physiotherapist/physio-landing/assets/icons")
ensure_dir("e:/Physiotherapist/physio-landing/assets/images/services")

# Palette
TEAL = (15, 118, 110)        # #0F766E
TEAL_DARK = (11, 90, 84)     # #0B5A54
TEAL_LIGHT = (20, 184, 166)  # #14B8A6
NAVY = (11, 37, 69)          # #0B2545
MINT = (230, 244, 241)       # #E6F4F1
WHITE = (255, 255, 255)
ORANGE = (249, 115, 22)      # #F97316
TEXT = (51, 65, 85)          # #334155
MUTED = (100, 116, 139)      # #64748B
BG_SURFACE = (248, 250, 252) # #F8FAFC

def draw_gradient(draw, width, height, start_color, end_color, horizontal=False):
    for i in range(height if not horizontal else width):
        ratio = i / (height if not horizontal else width)
        r = int(start_color[0] + (end_color[0] - start_color[0]) * ratio)
        g = int(start_color[1] + (end_color[1] - start_color[1]) * ratio)
        b = int(start_color[2] + (end_color[2] - start_color[2]) * ratio)
        if not horizontal:
            draw.line([(0, i), (width, i)], fill=(r, g, b))
        else:
            draw.line([(i, 0), (i, height)], fill=(r, g, b))

# 1. Create Icons & Favicon
def create_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    # Background rounded squircle / circle
    padding = int(size * 0.05)
    draw.rounded_rectangle([padding, padding, size - padding, size - padding], radius=int(size * 0.28), fill=TEAL)
    
    # Inner subtle glow ring
    ring_pad = int(size * 0.12)
    draw.rounded_rectangle([ring_pad, ring_pad, size - ring_pad, size - ring_pad], radius=int(size * 0.22), outline=TEAL_LIGHT, width=max(1, int(size * 0.03)))
    
    # Medical Caduceus / Physiotherapy Cross + Wave symbol
    cx, cy = size // 2, size // 2
    arm_len = int(size * 0.26)
    arm_thick = max(2, int(size * 0.09))
    
    # Medical cross
    draw.rounded_rectangle([cx - arm_thick//2, cy - arm_len, cx + arm_thick//2, cy + arm_len], radius=arm_thick//2, fill=WHITE)
    draw.rounded_rectangle([cx - arm_len, cy - arm_thick//2, cx + arm_len, cy + arm_thick//2], radius=arm_thick//2, fill=WHITE)
    
    # Active orange pulse dot / spark
    spark_r = max(2, int(size * 0.08))
    draw.ellipse([cx + arm_len - spark_r, cy - arm_len + spark_r//2, cx + arm_len + spark_r, cy - arm_len + int(spark_r*2.5)], fill=ORANGE)
    
    return img

icon_512 = create_icon(512)
icon_512.save("e:/Physiotherapist/physio-landing/assets/icons/icon-512.png", "PNG")

icon_192 = create_icon(192)
icon_192.save("e:/Physiotherapist/physio-landing/assets/icons/icon-192.png", "PNG")

icon_180 = create_icon(180)
icon_180.save("e:/Physiotherapist/physio-landing/assets/icons/apple-touch-icon.png", "PNG")

icon_32 = create_icon(32)
icon_32.save("e:/Physiotherapist/physio-landing/assets/icons/favicon-32x32.png", "PNG")

# Favicon .ico
icon_512.save("e:/Physiotherapist/physio-landing/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
icon_512.save("e:/Physiotherapist/physio-landing/assets/icons/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

# Helper to draw badges & typography-like visuals
def draw_stylish_card(draw, box, fill_color, border_color=None, radius=16):
    draw.rounded_rectangle(box, radius=radius, fill=fill_color, outline=border_color, width=2 if border_color else 0)

# 2. Hero Image (assets/images/hero.webp)
def make_hero_image():
    w, h = 800, 680
    img = Image.new("RGB", (w, h), MINT)
    draw = ImageDraw.Draw(img)
    draw_gradient(draw, w, h, (230, 244, 241), (210, 235, 230))
    
    # Decorative organic circles in background
    draw.ellipse([w - 300, -100, w + 200, 400], fill=(20, 184, 166, 60))
    draw.ellipse([-80, h - 350, 320, h + 80], fill=(240, 253, 250))
    
    # Main clinical card
    card_x1, card_y1, card_x2, card_y2 = 60, 40, w - 60, h - 40
    draw.rounded_rectangle([card_x1, card_y1, card_x2, card_y2], radius=24, fill=WHITE, outline=(226, 232, 240), width=2)
    
    # Clinic illustration interior
    # Banner top
    draw.rounded_rectangle([card_x1 + 20, card_y1 + 20, card_x2 - 20, card_y1 + 140], radius=16, fill=NAVY)
    
    # Doctor / Clinical silhouette & posture graphic
    center_x = w // 2
    # Silhouette doctor figure
    draw.ellipse([center_x - 55, card_y1 + 170, center_x + 55, card_y1 + 280], fill=TEAL)
    # Stethoscope / collar
    draw.arc([center_x - 45, card_y1 + 220, center_x + 45, card_y1 + 310], 0, 180, fill=WHITE, width=6)
    # Body torso
    draw.rounded_rectangle([center_x - 110, card_y1 + 280, center_x + 110, card_y1 + 450], radius=30, fill=TEAL_DARK)
    # White doctor lab coat overlay
    draw.polygon([
        (center_x - 110, card_y1 + 450),
        (center_x - 70, card_y1 + 290),
        (center_x, card_y1 + 340),
        (center_x + 70, card_y1 + 290),
        (center_x + 110, card_y1 + 450)
    ], fill=WHITE)
    # Tie / badge
    draw.polygon([(center_x - 10, card_y1 + 340), (center_x + 10, card_y1 + 340), (center_x, card_y1 + 400)], fill=ORANGE)
    
    # Floating trust badge 1: "Certified Specialist"
    b1_x1, b1_y1 = card_x1 + 40, card_y1 + 320
    draw.rounded_rectangle([b1_x1, b1_y1, b1_x1 + 230, b1_y1 + 75], radius=14, fill=WHITE, outline=(20, 184, 166), width=2)
    draw.ellipse([b1_x1 + 14, b1_y1 + 18, b1_x1 + 54, b1_y1 + 58], fill=TEAL)
    draw.line([(b1_x1 + 24, b1_y1 + 38), (b1_x1 + 32, b1_y1 + 46), (b1_x1 + 44, b1_y1 + 28)], fill=WHITE, width=3)
    
    # Floating trust badge 2: "100% Evidence-Based"
    b2_x1, b2_y1 = card_x2 - 270, card_y1 + 350
    draw.rounded_rectangle([b2_x1, b2_y1, b2_x1 + 230, b2_y1 + 75], radius=14, fill=WHITE, outline=(249, 115, 22), width=2)
    draw.ellipse([b2_x1 + 14, b2_y1 + 18, b2_x1 + 54, b2_y1 + 58], fill=ORANGE)
    
    # Bottom banner
    draw.rounded_rectangle([card_x1 + 30, card_y2 - 95, card_x2 - 30, card_y2 - 20], radius=14, fill=MINT)
    
    img.save("e:/Physiotherapist/physio-landing/assets/images/hero.webp", "WEBP", quality=92)

make_hero_image()

# 3. Doctor Portrait Image (assets/images/doctor.webp)
def make_doctor_image():
    w, h = 600, 720
    img = Image.new("RGB", (w, h), MINT)
    draw = ImageDraw.Draw(img)
    draw_gradient(draw, w, h, (15, 118, 110), (11, 37, 69))
    
    # Modern card container
    pad = 30
    draw.rounded_rectangle([pad, pad, w - pad, h - pad], radius=24, fill=(248, 250, 252))
    
    # Inner gradient background for portrait
    inner_pad = 50
    draw.rounded_rectangle([inner_pad, inner_pad, w - inner_pad, h - 140], radius=18, fill=MINT)
    
    # Doctor Head & Face contour
    cx = w // 2
    draw.ellipse([cx - 70, inner_pad + 50, cx + 70, inner_pad + 190], fill=(224, 172, 137))
    # Hair
    draw.arc([cx - 75, inner_pad + 35, cx + 75, inner_pad + 150], 170, 370, fill=NAVY, width=28)
    
    # Torso & Clinical Attire
    draw.rounded_rectangle([cx - 150, inner_pad + 200, cx + 150, inner_pad + 440], radius=32, fill=WHITE, outline=(226, 232, 240), width=2)
    # Scrub inner shirt
    draw.polygon([(cx - 45, inner_pad + 200), (cx + 45, inner_pad + 200), (cx, inner_pad + 270)], fill=TEAL)
    
    # Stethoscope
    draw.arc([cx - 65, inner_pad + 200, cx + 65, inner_pad + 320], 0, 180, fill=NAVY, width=7)
    draw.ellipse([cx + 40, inner_pad + 320, cx + 65, inner_pad + 345], fill=TEAL_LIGHT)
    
    # Name banner at bottom of card
    draw.rounded_rectangle([inner_pad + 20, h - 115, w - inner_pad - 20, h - 50], radius=14, fill=NAVY)
    
    img.save("e:/Physiotherapist/physio-landing/assets/images/doctor.webp", "WEBP", quality=92)

make_doctor_image()

# 4. OpenGraph Social Share Image (1200x630 og-image.jpg)
def make_og_image():
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), NAVY)
    draw = ImageDraw.Draw(img)
    draw_gradient(draw, w, h, (11, 37, 69), (15, 118, 110), horizontal=True)
    
    # Border & geometry
    draw.rounded_rectangle([30, 30, w - 30, h - 30], radius=24, outline=TEAL_LIGHT, width=3)
    
    # Left Clinic Graphic Card
    draw.rounded_rectangle([70, 70, 520, h - 70], radius=18, fill=WHITE)
    # Cross symbol
    cx, cy = 295, 230
    draw.rounded_rectangle([cx - 20, cy - 80, cx + 20, cy + 80], radius=10, fill=TEAL)
    draw.rounded_rectangle([cx - 80, cy - 20, cx + 80, cy + 20], radius=10, fill=TEAL)
    draw.ellipse([cx + 50, cy - 80, cx + 85, cy - 45], fill=ORANGE)
    
    # Banner under cross
    draw.rounded_rectangle([110, 360, 480, 430], radius=12, fill=MINT)
    draw.rounded_rectangle([110, 450, 480, 520], radius=12, fill=NAVY)
    
    # Right Content Cards / Placeholders
    draw.rounded_rectangle([560, 70, w - 70, 200], radius=16, fill=(255, 255, 255, 30), outline=WHITE, width=2)
    draw.rounded_rectangle([560, 230, w - 70, 420], radius=16, fill=(15, 118, 110, 90), outline=TEAL_LIGHT, width=2)
    
    # CTA orange badge
    draw.rounded_rectangle([560, 450, 900, 530], radius=14, fill=ORANGE)
    
    img.save("e:/Physiotherapist/physio-landing/assets/images/og-image.jpg", "JPEG", quality=90)

make_og_image()

# 5. Service WebP Images (6 services)
services = [
    ("sports-injury", "Sports Injury Rehab", (239, 68, 68)),
    ("back-neck", "Back & Neck Pain", (15, 118, 110)),
    ("post-surgery", "Post-Surgery Rehabilitation", (59, 130, 246)),
    ("neuro", "Neuro Physiotherapy", (147, 51, 234)),
    ("manual-therapy", "Manual Therapy", (16, 185, 129)),
    ("geriatric", "Geriatric Care", (245, 158, 11))
]

def make_service_image(slug, name, accent_color):
    w, h = 600, 400
    img = Image.new("RGB", (w, h), MINT)
    draw = ImageDraw.Draw(img)
    draw_gradient(draw, w, h, (240, 253, 250), (226, 232, 240))
    
    # Inner stylized medical illustration
    draw.rounded_rectangle([20, 20, w - 20, h - 20], radius=20, fill=WHITE, outline=(226, 232, 240), width=2)
    
    # Central badge ring
    cx, cy = w // 2, h // 2 - 20
    draw.ellipse([cx - 80, cy - 80, cx + 80, cy + 80], fill=MINT, outline=accent_color, width=4)
    
    # Medical cross + wave inside
    draw.rounded_rectangle([cx - 12, cy - 45, cx + 12, cy + 45], radius=6, fill=accent_color)
    draw.rounded_rectangle([cx - 45, cy - 12, cx + 45, cy + 12], radius=6, fill=accent_color)
    
    # Bottom banner in card
    draw.rounded_rectangle([40, h - 90, w - 40, h - 40], radius=12, fill=NAVY)
    
    img.save(f"e:/Physiotherapist/physio-landing/assets/images/services/{slug}.webp", "WEBP", quality=90)

for slug, name, color in services:
    make_service_image(slug, name, color)

print("All image assets generated successfully!")

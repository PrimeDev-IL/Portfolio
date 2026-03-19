"""
Generate OG images (1200x630) for PrimeDev portfolio.
- Resizes/recreates the main og-image.png
- Generates 4 per-post branded OG images

Brand: dark navy background (#0d0d1e), gold accent (#FFD700), white text
"""

from PIL import Image, ImageDraw, ImageFont
import os, textwrap

PUBLIC = os.path.join(os.path.dirname(__file__), '..', 'public')
W, H = 1200, 630

# ── Brand colours ────────────────────────────────────────────────────────────
BG       = (13,  13,  30)    # #0d0d1e
GOLD     = (255, 215,  0)    # #FFD700
GOLD2    = (255, 184,  0)    # #FFB800  (gradient end)
WHITE    = (255, 255, 255)
SUBTEXT  = (180, 180, 210)
CARDLINE = (30,  30,  60)

# ── Font setup (system fonts on macOS) ───────────────────────────────────────
def load_font(size, bold=False):
    paths = [
        f'/System/Library/Fonts/Supplemental/{"Arial Bold" if bold else "Arial"}.ttf',
        f'/System/Library/Fonts/{"Helvetica Bold" if bold else "Helvetica"}.ttc',
        '/Library/Fonts/Inter-Bold.ttf' if bold else '/Library/Fonts/Inter-Regular.ttf',
    ]
    for p in paths:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, size)
            except: pass
    return ImageFont.load_default(size=size)

def draw_gold_bar(draw, y=H-14, thickness=14):
    for i in range(W):
        t = i / W
        r = int(GOLD[0] + (GOLD2[0]-GOLD[0])*t)
        g = int(GOLD[1] + (GOLD2[1]-GOLD[1])*t)
        b = int(GOLD[2] + (GOLD2[2]-GOLD[2])*t)
        draw.line([(i, y), (i, y+thickness)], fill=(r,g,b))

def draw_corner_accent(draw):
    """Gold rectangle in top-left corner"""
    draw.rectangle([0, 0, 8, H], fill=GOLD)

def draw_logo_text(draw, font_bold):
    draw.text((36, 38), '</>', font=font_bold, fill=GOLD)
    draw.text((82, 38), 'PrimeDev', font=font_bold, fill=WHITE)

def draw_domain(draw, font_sm):
    draw.text((36, H-52), 'primedev.co.il', font=font_sm, fill=SUBTEXT)

def wrap_title(title, font_lg, max_width):
    """Wrap title text to fit within max_width"""
    words = title.split()
    lines, line = [], ''
    tmp_img = Image.new('RGB', (1, 1))
    tmp_draw = ImageDraw.Draw(tmp_img)
    for word in words:
        test = f'{line} {word}'.strip()
        bbox = tmp_draw.textbbox((0, 0), test, font=font_lg)
        if bbox[2] > max_width and line:
            lines.append(line)
            line = word
        else:
            line = test
    if line:
        lines.append(line)
    return lines


def make_image(filename, title, subtitle, tag_label, tag_color=GOLD):
    img = Image.new('RGB', (W, H), BG)
    draw = ImageDraw.Draw(img)

    # Subtle grid pattern
    for x in range(0, W, 60):
        draw.line([(x, 0), (x, H)], fill=CARDLINE, width=1)
    for y in range(0, H, 60):
        draw.line([(0, y), (W, y)], fill=CARDLINE, width=1)

    # Left accent bar
    draw_corner_accent(draw)

    # Bottom gold bar
    draw_gold_bar(draw)

    # Logo + domain
    font_logo  = load_font(28, bold=True)
    font_sm    = load_font(20)
    draw_logo_text(draw, font_logo)
    draw_domain(draw, font_sm)

    # Tag pill
    font_tag = load_font(18, bold=True)
    tag_bbox = draw.textbbox((0, 0), tag_label, font=font_tag)
    tag_w = tag_bbox[2] - tag_bbox[0] + 28
    tag_h = tag_bbox[3] - tag_bbox[1] + 14
    draw.rounded_rectangle([36, 120, 36+tag_w, 120+tag_h], radius=6, fill=tag_color)
    draw.text((36+14, 120+7), tag_label, font=font_tag, fill=BG)

    # Title (large)
    font_title = load_font(54, bold=True)
    lines = wrap_title(title, font_title, W - 80)
    y_title = 170
    for line in lines[:3]:
        draw.text((36, y_title), line, font=font_title, fill=WHITE)
        bbox = draw.textbbox((36, y_title), line, font=font_title)
        y_title += bbox[3] - bbox[1] + 8

    # Subtitle
    if subtitle:
        font_sub = load_font(24)
        sub_lines = wrap_title(subtitle, font_sub, W - 80)
        y_sub = y_title + 18
        for ln in sub_lines[:2]:
            draw.text((36, y_sub), ln, font=font_sub, fill=SUBTEXT)
            bbox = draw.textbbox((36, y_sub), ln, font=font_sub)
            y_sub += bbox[3] - bbox[1] + 6

    out = os.path.join(PUBLIC, filename)
    img.save(out, 'PNG', optimize=True)
    print(f'✓ {filename}  ({W}x{H})')


# ── Main og-image (homepage / generic fallback) ──────────────────────────────
make_image(
    'og-image.png',
    'Full-Stack, DevOps & Security Automation',
    'Expert development, integrations, and SOAR solutions for modern teams.',
    'primedev.co.il',
    tag_color=GOLD,
)

# ── Per-post OG images ────────────────────────────────────────────────────────
make_image(
    'og-post-fullstack.png',
    'Full-Stack with React & Node.js: Best Practices 2026',
    'Component architecture, API design, and production-ready patterns.',
    'Full-Stack',
)

make_image(
    'og-post-devops.png',
    'CI/CD & Kubernetes: From GitHub to Production',
    'Automate deployments with GitHub Actions, Docker, and Kubernetes.',
    'DevOps',
    tag_color=(80, 180, 255),
)

make_image(
    'og-post-soar.png',
    'SOAR with Cortex XSOAR: Security Automation at Scale',
    'Accelerate incident response and eliminate alert fatigue.',
    'SOAR / Security',
    tag_color=(220, 80, 100),
)

make_image(
    'og-post-api.png',
    'RESTful API Design Best Practices',
    'HTTP methods, versioning, authentication & scalability strategies.',
    'API Design',
    tag_color=(80, 220, 160),
)

print('\nAll OG images generated successfully.')

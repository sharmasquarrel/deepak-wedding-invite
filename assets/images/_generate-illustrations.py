#!/usr/bin/env python3
"""
Generates every illustration used by the invitation.

Style brief: childish storybook cartoons — thick rounded outlines, flat bright
fills, big heads, simple dot eyes, doodle stars and flowers. No photographs and
no real people anywhere.

Run from this folder:  python3 _generate-illustrations.py
"""

# ---------------------------------------------------------------- palette ----
INK    = '#4a2b4f'   # every outline
CREAM  = '#fff6e8'
GOLD   = '#f2c14e'
GOLD_D = '#d99b2b'
ROSE   = '#f3899b'
ROSE_D = '#d9607a'
MAROON = '#a63a52'
TEAL   = '#6fc3bd'
LEAF   = '#7cc47f'
SKY    = '#cfe9f5'
SKIN   = '#f7d5b5'
HAIR   = '#3b2340'
WHITE  = '#ffffff'
FLAME  = '#ff9b54'

# thick rounded outline, used on almost every shape
O  = 'stroke="%s" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"' % INK
O3 = 'stroke="%s" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"' % INK


# ------------------------------------------------------------- characters ----
def groom():
    """Chibi groom: cream sherwani, maroon safa. Head at (0,-72), feet at +114."""
    return '''
    <ellipse cx="-15" cy="115" rx="15" ry="9" fill="{HAIR}" {O3}/>
    <ellipse cx="15"  cy="115" rx="15" ry="9" fill="{HAIR}" {O3}/>
    <path d="M-20 62 L-23 108 H-5 L-3 62 Z" fill="{CREAM}" {O3}/>
    <path d="M20 62 L23 108 H5 L3 62 Z"     fill="{CREAM}" {O3}/>
    <path d="M0 -34 C32 -34 44 12 42 78 L-42 78 C-44 12 -32 -34 0 -34 Z" fill="{CREAM}" {O}/>
    <path d="M-41 70 H41" stroke="{GOLD_D}" stroke-width="7" stroke-linecap="round"/>
    <path d="M0 -32 V74"  stroke="{GOLD_D}" stroke-width="4"/>
    <circle cx="0" cy="-12" r="4" fill="{GOLD}"/>
    <circle cx="0" cy="8"   r="4" fill="{GOLD}"/>
    <circle cx="0" cy="28"  r="4" fill="{GOLD}"/>
    <path d="M-24 -28 C-6 22 16 46 38 54 l6 -14 C22 32 4 10 -12 -32 Z" fill="{ROSE}" {O3}/>
    <path d="M-34 -12 C-50 8 -50 36 -42 52 l14 -6 C-34 32 -32 14 -22 0 Z"  fill="{CREAM}" {O3}/>
    <path d="M34 -12 C50 8 50 36 42 52 l-14 -6 C34 32 32 14 22 0 Z"        fill="{CREAM}" {O3}/>
    <circle cx="-42" cy="56" r="10" fill="{SKIN}" {O3}/>
    <circle cx="42"  cy="56" r="10" fill="{SKIN}" {O3}/>
    <circle cx="-36" cy="-70" r="7" fill="{SKIN}" {O3}/>
    <circle cx="36"  cy="-70" r="7" fill="{SKIN}" {O3}/>
    <circle cx="0" cy="-72" r="36" fill="{SKIN}" {O}/>
    <circle cx="-21" cy="-61" r="7" fill="{ROSE}" opacity=".45"/>
    <circle cx="21"  cy="-61" r="7" fill="{ROSE}" opacity=".45"/>
    <circle cx="-13" cy="-76" r="5" fill="{INK}"/>
    <circle cx="13"  cy="-76" r="5" fill="{INK}"/>
    <circle cx="-11" cy="-78" r="1.8" fill="{WHITE}"/>
    <circle cx="15"  cy="-78" r="1.8" fill="{WHITE}"/>
    <path d="M-11 -60 Q0 -50 11 -60" fill="none" {O3}/>
    <path d="M-41 -78 C-47 -126 47 -126 41 -78 C14 -91 -14 -91 -41 -78 Z" fill="{MAROON}" {O}/>
    <path d="M-30 -96 C-10 -109 18 -107 33 -92" fill="none" stroke="{GOLD}" stroke-width="4" stroke-linecap="round"/>
    <path d="M-24 -108 C-6 -118 14 -117 26 -108" fill="none" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>
    <path d="M24 -116 C32 -140 44 -138 45 -124" fill="none" stroke="{GOLD_D}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="24" cy="-116" r="6" fill="{GOLD}" {O3}/>
    '''.format(**globals())


def bride():
    """Chibi bride: rose lehenga, dupatta, braid. Head at (0,-66), hem at +86."""
    return '''
    <path d="M0 -28 C26 -28 36 8 56 86 L-56 86 C-36 8 -26 -28 0 -28 Z" fill="{ROSE}" {O}/>
    <path d="M-54 76 C-18 85 18 85 54 76" fill="none" stroke="{GOLD_D}" stroke-width="7" stroke-linecap="round"/>
    <circle cx="-24" cy="44" r="5" fill="{GOLD}"/>
    <circle cx="6"   cy="56" r="5" fill="{GOLD}"/>
    <circle cx="30"  cy="36" r="5" fill="{GOLD}"/>
    <path d="M0 -28 C20 -28 29 -8 27 12 L-27 12 C-29 -8 -20 -28 0 -28 Z" fill="{MAROON}" {O}/>
    <path d="M30 -98 C70 -64 70 4 54 62 C44 18 38 -38 22 -82 Z" fill="{ROSE_D}" {O3}/>
    <path d="M-28 -8 C-44 12 -44 38 -36 52 l14 -6 C-28 32 -26 16 -16 2 Z" fill="{SKIN}" {O3}/>
    <path d="M28 -8 C44 12 44 38 36 52 l-14 -6 C28 32 26 16 16 2 Z"       fill="{SKIN}" {O3}/>
    <circle cx="-36" cy="56" r="9" fill="{SKIN}" {O3}/>
    <circle cx="36"  cy="56" r="9" fill="{SKIN}" {O3}/>
    <path d="M-28 -56 C-52 -26 -50 14 -40 32" fill="none" stroke="{HAIR}" stroke-width="13" stroke-linecap="round"/>
    <circle cx="-41" cy="36" r="7" fill="{GOLD}" {O3}/>
    <circle cx="-34" cy="-54" r="7" fill="{SKIN}" {O3}/>
    <circle cx="34"  cy="-54" r="7" fill="{SKIN}" {O3}/>
    <circle cx="0" cy="-66" r="34" fill="{SKIN}" {O}/>
    <path d="M-33 -68 C-33 -102 33 -102 33 -68 C19 -85 -19 -85 -33 -68 Z" fill="{HAIR}" {O3}/>
    <path d="M-35 -72 C-28 -104 28 -104 35 -72" fill="none" stroke="{ROSE_D}" stroke-width="8" stroke-linecap="round"/>
    <path d="M0 -99 V-90" stroke="{GOLD_D}" stroke-width="3"/>
    <circle cx="0" cy="-87" r="5" fill="{GOLD}" {O3}/>
    <circle cx="0" cy="-74" r="4" fill="{MAROON}"/>
    <circle cx="-20" cy="-56" r="6.5" fill="{ROSE}" opacity=".5"/>
    <circle cx="20"  cy="-56" r="6.5" fill="{ROSE}" opacity=".5"/>
    <circle cx="-12" cy="-67" r="5.5" fill="{INK}"/>
    <circle cx="12"  cy="-67" r="5.5" fill="{INK}"/>
    <circle cx="-10" cy="-69" r="2" fill="{WHITE}"/>
    <circle cx="14"  cy="-69" r="2" fill="{WHITE}"/>
    <path d="M-20 -74 l-6 -4" fill="none" {O3}/>
    <path d="M20 -74 l6 -4" fill="none" {O3}/>
    <path d="M-10 -54 Q0 -45 10 -54" fill="none" {O3}/>
    <circle cx="-33" cy="-44" r="6" fill="{GOLD}" {O3}/>
    <circle cx="33"  cy="-44" r="6" fill="{GOLD}" {O3}/>
    <path d="M-16 -34 Q0 -20 16 -34" fill="none" stroke="{GOLD_D}" stroke-width="4" stroke-linecap="round"/>
    '''.format(**globals())


# ------------------------------------------------------------------ props ----
def flower(x, y, r=12, petal=ROSE, heart=GOLD, rot=0):
    p = []
    for i in range(5):
        a = i * 72
        p.append('<ellipse cx="0" cy="%s" rx="%s" ry="%s" fill="%s" %s '
                 'transform="rotate(%s)"/>' % (-r, r * 0.52, r, petal, O3, a))
    return ('<g transform="translate(%s %s) rotate(%s)">%s'
            '<circle cx="0" cy="0" r="%s" fill="%s" %s/></g>'
            % (x, y, rot, ''.join(p), r * 0.45, heart, O3))


def star(x, y, r=10, fill=GOLD):
    return ('<g transform="translate(%s %s)"><path d="M0 %s Q%s %s %s 0 Q%s %s 0 %s '
            'Q%s %s %s 0 Q%s %s 0 %s Z" fill="%s" %s/></g>'
            % (x, y, -r, r * .26, -r * .26, r, r * .26, r * .26, r,
               -r * .26, r * .26, -r, -r * .26, -r * .26, -r, fill, O3))


def heart(x, y, s=1, fill=ROSE_D):
    return ('<g transform="translate(%s %s) scale(%s)"><path d="M0 14 C-18 2 -16 -12 -7 -12 '
            'C-2 -12 0 -8 0 -6 C0 -8 2 -12 7 -12 C16 -12 18 2 0 14 Z" fill="%s" %s/></g>'
            % (x, y, s, fill, O3))


def leafy(x, y, rot=0):
    return ('<g transform="translate(%s %s) rotate(%s)">'
            '<path d="M0 0 C16 -10 30 -4 32 10 C16 18 2 12 0 0 Z" fill="%s" %s/>'
            '<path d="M2 2 C12 2 22 6 28 10" fill="none" stroke="%s" stroke-width="2.5"/></g>'
            % (x, y, rot, LEAF, O3, INK))


def confetti(w, h):
    """Scattered doodles used as the sticker-book background texture.

    Positions are fractions of the canvas, so the same call works on a wide
    gallery card and a tall portrait without anything drifting off-frame.
    """
    bits = []
    spots = [(.09, .16, 7), (.88, .21, 8), (.15, .75, 6), (.82, .75, 7), (.47, .10, 6)]
    for i, (fx, fy, r) in enumerate(spots):
        bits.append(star(round(w * fx), round(h * fy), r, GOLD if i % 2 else ROSE))
    bits.append(flower(round(w * .78), round(h * .11), 10, ROSE, GOLD, 12))
    bits.append(flower(round(w * .12), round(h * .42), 9, GOLD, ROSE_D, -20))
    return ''.join(bits)


# ------------------------------------------------------------------ frame ----
def scene(w, h, inner, c1=CREAM, c2=SKY, pad=True):
    """Wraps content in a soft rounded card with a sticker-style border."""
    frame = ''
    if pad:
        frame = ('<rect x="9" y="9" width="%s" height="%s" rx="26" fill="none" '
                 'stroke="%s" stroke-width="5"/>' % (w - 18, h - 18, INK))
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %s %s" width="%s" height="%s">'
            '<defs><linearGradient id="bg" x1="0" y1="0" x2="0.4" y2="1">'
            '<stop offset="0%%" stop-color="%s"/><stop offset="100%%" stop-color="%s"/>'
            '</linearGradient></defs>'
            '<rect width="%s" height="%s" rx="30" fill="url(#bg)"/>'
            '%s%s</svg>' % (w, h, w, h, c1, c2, w, h, frame, inner))


def write(name, svg):
    open(name, 'w').write(svg + '\n')
    print('  wrote', name)


# =========================================================== illustrations ===
print('portraits')

write('portrait-groom.svg', scene(400, 500,
    confetti(400, 500) +
    '<ellipse cx="200" cy="478" rx="112" ry="18" fill="%s" opacity=".35"/>' % TEAL +
    '<g transform="translate(200 300) scale(1.45)">%s</g>' % groom() +
    flower(62, 452, 15, GOLD, ROSE_D) + flower(340, 440, 13, ROSE, GOLD) +
    star(326, 120, 11) + star(70, 96, 9, ROSE),
    CREAM, '#e9f3fb'))

write('portrait-bride.svg', scene(400, 500,
    confetti(400, 500) +
    '<ellipse cx="200" cy="452" rx="128" ry="18" fill="%s" opacity=".35"/>' % ROSE +
    '<g transform="translate(200 324) scale(1.5)">%s</g>' % bride() +
    flower(60, 456, 15, ROSE, GOLD) + flower(342, 444, 13, GOLD, ROSE_D) +
    star(324, 118, 11, ROSE) + star(72, 100, 9),
    CREAM, '#fdeef1'))


print('ganesha')

GANESH = '''
<g transform="translate(210 232)">
  <ellipse cx="0" cy="150" rx="128" ry="22" fill="{GOLD}" opacity=".3"/>
  <path d="M-120 128 C-80 100 -34 142 0 142 C34 142 80 100 120 128 C96 160 52 170 0 170 C-52 170 -96 160 -120 128 Z" fill="{ROSE}" {O}/>
  <path d="M0 142 C-30 118 -62 112 -92 120" fill="none" {O3}/>
  <path d="M0 142 C30 118 62 112 92 120" fill="none" {O3}/>
  <path d="M0 24 C44 24 62 70 60 126 L-60 126 C-62 70 -44 24 0 24 Z" fill="{GOLD}" {O}/>
  <path d="M-58 112 H58" stroke="{GOLD_D}" stroke-width="7" stroke-linecap="round"/>
  <path d="M-50 44 C-80 60 -86 96 -74 118 l18 -8 C-64 92 -58 68 -36 56 Z" fill="{GOLD}" {O3}/>
  <path d="M50 44 C80 60 86 96 74 118 l-18 -8 C64 92 58 68 36 56 Z" fill="{GOLD}" {O3}/>
  <circle cx="-78" cy="124" r="12" fill="{GOLD}" {O3}/>
  <circle cx="78"  cy="124" r="12" fill="{GOLD}" {O3}/>
  <path d="M-62 -36 C-116 -44 -130 20 -84 40 C-74 8 -70 -12 -58 -24 Z" fill="{ROSE}" {O}/>
  <path d="M62 -36 C116 -44 130 20 84 40 C74 8 70 -12 58 -24 Z" fill="{ROSE}" {O}/>
  <circle cx="0" cy="-42" r="66" fill="{ROSE}" {O}/>
  <path d="M0 10 C14 44 2 72 -18 78 C-38 84 -50 66 -40 54 C-32 44 -20 50 -22 60" fill="none" stroke="{ROSE}" stroke-width="22" stroke-linecap="round"/>
  <path d="M0 10 C14 44 2 72 -18 78 C-38 84 -50 66 -40 54 C-32 44 -20 50 -22 60" fill="none" {O3}/>
  <path d="M-40 26 C-52 40 -50 54 -44 62" fill="none" stroke="{WHITE}" stroke-width="9" stroke-linecap="round"/>
  <path d="M-40 26 C-52 40 -50 54 -44 62" fill="none" {O3}/>
  <path d="M40 26 C52 40 50 54 44 62" fill="none" stroke="{WHITE}" stroke-width="9" stroke-linecap="round"/>
  <path d="M40 26 C52 40 50 54 44 62" fill="none" {O3}/>
  <circle cx="-24" cy="-52" r="7" fill="{INK}"/>
  <circle cx="24"  cy="-52" r="7" fill="{INK}"/>
  <circle cx="-21" cy="-55" r="2.4" fill="{WHITE}"/>
  <circle cx="27"  cy="-55" r="2.4" fill="{WHITE}"/>
  <circle cx="-42" cy="-30" r="9" fill="{ROSE_D}" opacity=".55"/>
  <circle cx="42"  cy="-30" r="9" fill="{ROSE_D}" opacity=".55"/>
  <path d="M0 -92 V-78" stroke="{GOLD_D}" stroke-width="4"/>
  <circle cx="0" cy="-70" r="5" fill="{MAROON}"/>
  <path d="M-56 -84 C-62 -132 62 -132 56 -84 C22 -100 -22 -100 -56 -84 Z" fill="{GOLD}" {O}/>
  <path d="M0 -150 l12 24 h-24 z" fill="{GOLD}" {O3}/>
  <circle cx="0" cy="-156" r="7" fill="{ROSE_D}" {O3}/>
</g>
'''.format(**globals())

write('ganesh.svg', scene(420, 460,
    star(52, 70, 11) + star(368, 84, 10, ROSE) + star(60, 390, 9, ROSE) +
    star(364, 382, 11) + flower(44, 220, 12, GOLD, ROSE_D) +
    flower(378, 224, 12, ROSE, GOLD) + GANESH,
    '#fff9ec', '#fdeedd'))


print('gallery scenes')

# 1 — puja / havan
write('gallery-1.svg', scene(640, 440,
    confetti(640, 440) +
    '<ellipse cx="320" cy="376" rx="210" ry="26" fill="%s" opacity=".3"/>' % GOLD +
    # havan kund
    '<path d="M232 356 L250 266 H390 L408 356 Z" fill="%s" %s/>' % (MAROON, O) +
    '<path d="M244 300 H396" stroke="%s" stroke-width="6" stroke-linecap="round"/>' % GOLD +
    # flames
    '<path d="M320 258 C300 228 314 206 320 186 C330 208 350 216 344 248 C340 262 330 264 320 258 Z" fill="%s" %s/>' % (FLAME, O) +
    '<path d="M320 250 C312 232 318 220 322 206 C330 222 336 232 330 246 Z" fill="%s" %s/>' % (GOLD, O3) +
    # kalash left
    '<path d="M120 356 C100 330 104 292 136 286 C168 292 172 330 152 356 Z" fill="%s" %s/>' % (TEAL, O) +
    '<rect x="112" y="272" width="48" height="16" rx="8" fill="%s" %s/>' % (GOLD, O3) +
    '<circle cx="136" cy="258" r="17" fill="%s" %s/>' % (LEAF, O3) +
    # diya right
    '<path d="M470 352 C470 332 520 332 520 352 Z" fill="%s" %s/>' % (MAROON, O) +
    '<path d="M495 330 C487 316 492 306 495 298 C500 308 506 316 500 330 Z" fill="%s" %s/>' % (FLAME, O3) +
    flower(196, 404, 15, ROSE, GOLD) + flower(258, 414, 12, GOLD, ROSE_D) +
    flower(420, 410, 14, ROSE, GOLD) + flower(486, 404, 11, GOLD, ROSE_D) +
    leafy(146, 400, 12) + leafy(498, 388, 160) +
    star(574, 196, 12) + star(66, 150, 10, ROSE),
    '#fff6e8', '#ffe9cf'))

# 2 — haldi
write('gallery-2.svg', scene(640, 440,
    confetti(640, 440) +
    '<ellipse cx="320" cy="380" rx="190" ry="24" fill="%s" opacity=".35"/>' % GOLD +
    '<path d="M196 276 C196 350 248 382 320 382 C392 382 444 350 444 276 Z" fill="%s" %s/>' % (TEAL, O) +
    '<path d="M186 272 H454" stroke="%s" stroke-width="12" stroke-linecap="round"/>' % INK +
    '<path d="M206 268 C240 248 400 248 434 268 C400 284 240 284 206 268 Z" fill="%s" %s/>' % (GOLD, O) +
    '<circle cx="300" cy="262" r="9" fill="%s"/>' % GOLD_D +
    '<circle cx="356" cy="266" r="7" fill="%s"/>' % GOLD_D +
    # splashes
    '<circle cx="168" cy="218" r="13" fill="%s" %s/>' % (GOLD, O3) +
    '<circle cx="130" cy="176" r="9"  fill="%s" %s/>' % (GOLD_D, O3) +
    '<circle cx="478" cy="212" r="14" fill="%s" %s/>' % (GOLD, O3) +
    '<circle cx="516" cy="168" r="9"  fill="%s" %s/>' % (GOLD_D, O3) +
    # two little hands dipping in
    '<path d="M252 196 C238 160 258 140 276 150 C286 128 310 136 306 160 L302 212 Z" fill="%s" %s/>' % (SKIN, O) +
    '<path d="M388 196 C402 160 382 140 364 150 C354 128 330 136 334 160 L338 212 Z" fill="%s" %s/>' % (SKIN, O) +
    flower(176, 390, 15, ROSE, GOLD) + flower(466, 386, 14, ROSE, GOLD) +
    leafy(226, 396, 8) + leafy(420, 398, 168) +
    star(586, 300, 11) + star(60, 300, 10, ROSE),
    '#fffbee', '#fff0cf'))

# 3 — mehndi
write('gallery-3.svg', scene(640, 440,
    confetti(640, 440) +
    # big palm
    '<path d="M250 392 C222 330 224 268 240 236 C228 206 232 176 248 174 C262 172 270 192 272 212 '
    'C272 180 278 156 294 156 C310 156 316 180 316 212 C318 180 326 158 342 160 C358 162 362 186 358 214 '
    'C364 190 378 180 390 188 C402 196 400 220 390 242 C408 268 404 340 376 392 Z" fill="%s" %s/>' % (SKIN, O) +
    # mehndi swirls
    '<circle cx="312" cy="300" r="26" fill="none" stroke="%s" stroke-width="7"/>' % MAROON +
    '<circle cx="312" cy="300" r="11" fill="%s"/>' % MAROON +
    '<path d="M312 262 C292 248 290 228 304 222" fill="none" stroke="%s" stroke-width="6" stroke-linecap="round"/>' % MAROON +
    '<path d="M312 338 C294 352 294 370 308 376" fill="none" stroke="%s" stroke-width="6" stroke-linecap="round"/>' % MAROON +
    '<path d="M274 300 C258 290 248 300 252 314" fill="none" stroke="%s" stroke-width="6" stroke-linecap="round"/>' % MAROON +
    '<path d="M350 300 C366 290 376 300 372 314" fill="none" stroke="%s" stroke-width="6" stroke-linecap="round"/>' % MAROON +
    '<circle cx="258" cy="252" r="7" fill="%s"/>' % MAROON +
    '<circle cx="368" cy="256" r="7" fill="%s"/>' % MAROON +
    # bangles
    '<path d="M248 388 H378" stroke="%s" stroke-width="13" stroke-linecap="round"/>' % GOLD +
    '<path d="M248 388 H378" fill="none" %s/>' % O3 +
    # mehndi cone
    '<g transform="translate(484 230) rotate(24)">'
    '<path d="M0 0 L46 -16 L30 44 Z" fill="%s" %s/>'
    '<circle cx="4" cy="6" r="7" fill="%s" %s/></g>' % (CREAM, O, MAROON, O3) +
    flower(146, 160, 16, ROSE, GOLD) + flower(120, 324, 13, GOLD, ROSE_D) +
    flower(520, 350, 15, ROSE, GOLD) +
    star(568, 128, 12) + star(78, 232, 10, ROSE),
    '#fff6ef', '#fde7e2'))

# 4 — baraat: dhol, garlands, music
write('gallery-4.svg', scene(640, 440,
    confetti(640, 440) +
    # garland swag across the top
    '<path d="M40 86 C200 170 440 170 600 86" fill="none" stroke="%s" stroke-width="6"/>' % LEAF +
    ''.join(flower(40 + i * 50, 86 + [0, 34, 56, 70, 76, 76, 70, 56, 34, 0][i % 10] + 8,
                   10, ROSE if i % 2 else GOLD, GOLD if i % 2 else ROSE_D)
            for i in range(11)) +
    '<ellipse cx="320" cy="384" rx="170" ry="24" fill="%s" opacity=".3"/>' % MAROON +
    # dhol
    '<path d="M214 250 C214 222 426 222 426 250 L414 342 C414 368 226 368 226 342 Z" fill="%s" %s/>' % (MAROON, O) +
    '<ellipse cx="320" cy="250" rx="106" ry="26" fill="%s" %s/>' % (CREAM, O) +
    '<ellipse cx="320" cy="250" rx="60" ry="14" fill="%s" opacity=".5"/>' % GOLD +
    '<path d="M224 276 C320 296 320 296 418 276" fill="none" stroke="%s" stroke-width="6"/>' % GOLD +
    '<path d="M228 310 C320 330 320 330 414 310" fill="none" stroke="%s" stroke-width="6"/>' % GOLD +
    # sticks
    '<path d="M150 214 L248 274" stroke="%s" stroke-width="11" stroke-linecap="round"/>' % GOLD_D +
    '<path d="M490 214 L392 274" stroke="%s" stroke-width="11" stroke-linecap="round"/>' % GOLD_D +
    # music notes
    '<g transform="translate(118 300)"><circle cx="0" cy="0" r="14" fill="%s" %s/>'
    '<path d="M13 -2 V-44 L40 -52" fill="none" %s/></g>' % (TEAL, O3, O3) +
    '<g transform="translate(508 318) scale(.8)"><circle cx="0" cy="0" r="14" fill="%s" %s/>'
    '<path d="M13 -2 V-44 L40 -52" fill="none" %s/></g>' % (ROSE_D, O3, O3) +
    star(574, 220, 12) + star(64, 206, 11, ROSE) + star(320, 406, 10) +
    flower(176, 392, 14, ROSE, GOLD) + flower(464, 392, 14, GOLD, ROSE_D),
    '#fff4e4', '#ffe4c9'))

# 5 — the couple together
write('gallery-5.svg', scene(640, 440,
    confetti(640, 440) +
    # arch
    '<path d="M110 400 V210 C110 110 530 110 530 210 V400" fill="none" stroke="%s" stroke-width="10" stroke-linecap="round"/>' % LEAF +
    ''.join(flower(x, y, 11, ROSE if i % 2 else GOLD, GOLD if i % 2 else ROSE_D)
            for i, (x, y) in enumerate([(110, 240), (116, 186), (150, 146), (206, 124),
                                        (272, 116), (340, 116), (406, 124), (462, 146),
                                        (506, 184), (530, 238)])) +
    '<ellipse cx="320" cy="396" rx="166" ry="22" fill="%s" opacity=".3"/>' % ROSE +
    '<g transform="translate(246 282) scale(.92)">%s</g>' % groom() +
    '<g transform="translate(390 292) scale(.96)">%s</g>' % bride() +
    heart(320, 180, 1.5) +
    star(90, 140, 12) + star(556, 150, 11, ROSE),
    '#fff7ef', '#fdebe6'))


print('pre-wedding scenes')

# 1 — the first look
write('prewed-1.svg', scene(480, 600,
    confetti(480, 600) +
    '<ellipse cx="240" cy="520" rx="170" ry="24" fill="%s" opacity=".3"/>' % ROSE +
    '<g transform="translate(150 404) scale(1.02)">%s</g>' % groom() +
    '<g transform="translate(330 414) scale(1.06)">%s</g>' % bride() +
    heart(240, 188, 2.1) + heart(176, 150, 1.1) + heart(306, 142, 1.3) +
    star(70, 250, 12) + star(414, 270, 11, GOLD) +
    flower(66, 500, 15, ROSE, GOLD) + flower(418, 496, 14, GOLD, ROSE_D),
    '#fff5f3', '#fde3e8'))

# 2 — golden hour
write('prewed-2.svg', scene(480, 600,
    # big low sun
    '<circle cx="240" cy="330" r="128" fill="%s" opacity=".55"/>' % GOLD +
    '<circle cx="240" cy="330" r="92" fill="%s" %s/>' % (GOLD, O) +
    ''.join('<path d="M240 %s V%s" stroke="%s" stroke-width="7" stroke-linecap="round" '
            'transform="rotate(%s 240 330)"/>' % (330 - 112, 330 - 138, GOLD_D, a)
            for a in range(0, 360, 30)) +
    # ground
    '<path d="M0 470 C120 440 360 440 480 470 V600 H0 Z" fill="%s" %s/>' % (LEAF, O) +
    '<g transform="translate(176 406) scale(.86)">%s</g>' % groom() +
    '<g transform="translate(306 414) scale(.9)">%s</g>' % bride() +
    # birds
    '<path d="M88 150 q14 -14 28 0 q14 -14 28 0" fill="none" %s/>' % O3 +
    '<path d="M336 112 q11 -11 22 0 q11 -11 22 0" fill="none" %s/>' % O3 +
    star(70, 240, 12) + star(412, 214, 11, ROSE) +
    flower(60, 540, 15, ROSE, GOLD) + flower(424, 534, 14, ROSE, GOLD),
    '#fff3dd', '#ffd9a8'))

# 3 — by the water
write('prewed-3.svg', scene(480, 600,
    confetti(480, 600) +
    # water
    '<path d="M0 404 H480 V600 H0 Z" fill="%s" %s/>' % (SKY, O3) +
    ''.join('<path d="M%s %s q18 -12 36 0 q18 12 36 0" fill="none" stroke="%s" '
            'stroke-width="5" stroke-linecap="round"/>' % (x, y, TEAL)
            for x, y in [(40, 470), (210, 500), (90, 542), (290, 460), (330, 540)]) +
    # boat
    '<path d="M86 400 C86 452 150 478 240 478 C330 478 394 452 394 400 Z" fill="%s" %s/>' % (MAROON, O) +
    '<path d="M78 396 H402" stroke="%s" stroke-width="12" stroke-linecap="round"/>' % GOLD_D +
    '<g transform="translate(184 310) scale(.74)">%s</g>' % groom() +
    '<g transform="translate(300 318) scale(.78)">%s</g>' % bride() +
    # ducks
    '<g transform="translate(406 512)"><ellipse cx="0" cy="0" rx="26" ry="17" fill="%s" %s/>'
    '<circle cx="18" cy="-18" r="12" fill="%s" %s/>'
    '<path d="M28 -18 l12 3 -12 5 z" fill="%s" %s/>'
    '<circle cx="21" cy="-21" r="2.4" fill="%s"/></g>' % (WHITE, O3, WHITE, O3, GOLD, O3, INK) +
    '<g transform="translate(74 548) scale(.72)"><ellipse cx="0" cy="0" rx="26" ry="17" fill="%s" %s/>'
    '<circle cx="18" cy="-18" r="12" fill="%s" %s/>'
    '<path d="M28 -18 l12 3 -12 5 z" fill="%s" %s/>'
    '<circle cx="21" cy="-21" r="2.4" fill="%s"/></g>' % (WHITE, O3, WHITE, O3, GOLD, O3, INK) +
    heart(240, 178, 1.5) + star(66, 212, 12) + star(418, 196, 11, ROSE),
    '#eaf7fb', '#cfe9f5'))

# 4 — just us, under a tree
write('prewed-4.svg', scene(480, 600,
    confetti(480, 600) +
    # tree
    '<path d="M300 520 V330" stroke="%s" stroke-width="26" stroke-linecap="round"/>' % GOLD_D +
    '<path d="M300 400 C340 380 362 390 374 404" fill="none" stroke="%s" stroke-width="12" stroke-linecap="round"/>' % GOLD_D +
    '<circle cx="300" cy="258" r="96" fill="%s" %s/>' % (LEAF, O) +
    '<circle cx="212" cy="304" r="52" fill="%s" %s/>' % (LEAF, O) +
    '<circle cx="386" cy="312" r="46" fill="%s" %s/>' % (LEAF, O) +
    ''.join(flower(x, y, 9, ROSE, GOLD) for x, y in
            [(262, 210), (334, 198), (300, 282), (228, 288), (382, 296), (356, 252)]) +
    '<path d="M0 512 C120 488 360 488 480 512 V600 H0 Z" fill="%s" %s/>' % (LEAF, O) +
    '<g transform="translate(166 436) scale(.84)">%s</g>' % groom() +
    '<g transform="translate(286 444) scale(.88)">%s</g>' % bride() +
    heart(226, 352, 1.2) + heart(120, 300, 1) +
    flower(62, 544, 14, ROSE, GOLD) + flower(430, 548, 13, GOLD, ROSE_D) +
    star(74, 180, 12) + star(420, 164, 11, ROSE),
    '#f3fbf1', '#dcf0dc'))


print('motifs, favicon, share card')

write('motif-ganesh.svg',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" '
      'aria-hidden="true"><g transform="translate(80 86) scale(.42)">%s</g></svg>'
      % GANESH.replace('translate(210 232)', 'translate(0 0)'))

write('motif-floral.svg',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" '
      'aria-hidden="true">%s%s%s%s%s%s</svg>' % (
          flower(80, 80, 26, ROSE, GOLD),
          flower(34, 46, 15, GOLD, ROSE_D, 18),
          flower(126, 46, 15, GOLD, ROSE_D, -18),
          flower(34, 118, 14, ROSE, GOLD, 30),
          flower(126, 118, 14, ROSE, GOLD, -30),
          star(80, 20, 11) + star(80, 142, 11)))

write('favicon.svg',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">'
      '<rect width="64" height="64" rx="16" fill="%s"/>%s</svg>'
      % (CREAM, heart(32, 26, 1.9)))

write('og-preview.svg',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">'
      '<defs><linearGradient id="g" x1="0" y1="0" x2="0.3" y2="1">'
      '<stop offset="0%%" stop-color="#fff6e8"/><stop offset="100%%" stop-color="#fde3e8"/>'
      '</linearGradient></defs>'
      '<rect width="1200" height="630" fill="url(#g)"/>'
      '<rect x="22" y="22" width="1156" height="586" rx="34" fill="none" stroke="%s" stroke-width="6"/>'
      '%s%s%s%s%s'
      '<g transform="translate(420 430) scale(.95)">%s</g>'
      '<g transform="translate(600 440) scale(1)">%s</g>'
      '%s'
      '<text x="820" y="250" font-family="Georgia,serif" font-size="56" fill="%s">दीपक</text>'
      '<text x="820" y="312" font-family="Georgia,serif" font-size="30" fill="%s">एवं</text>'
      '<text x="820" y="378" font-family="Georgia,serif" font-size="56" fill="%s">आकांक्षा</text>'
      '<text x="820" y="434" font-family="Helvetica,Arial,sans-serif" font-size="19" fill="%s" letter-spacing="5">DEEPAK WEDS AKANKSHA</text>'
      '<text x="820" y="478" font-family="Helvetica,Arial,sans-serif" font-size="18" fill="%s" letter-spacing="9">05 · 12 · 2026</text>'
      '</svg>' % (
          INK,
          star(120, 90, 16), star(1090, 110, 14, ROSE),
          flower(150, 520, 22, ROSE, GOLD), flower(1070, 500, 20, GOLD, ROSE_D),
          star(1010, 560, 13),
          groom(), bride(),
          heart(510, 250, 2.2),
          INK, ROSE_D, INK, INK, GOLD_D))

print('\ndone')

# दीपक एवं आकांक्षा — विवाह निमंत्रण
# Deepak weds Akanksha — Wedding Invitation Website

A modern, single-page wedding invitation that plays itself: the pages advance on
their own every 3 seconds, the gallery and pre-wedding photos cross-fade at 2
seconds each, a live countdown ticks down to the muhurat, and a shuffled
background playlist runs uninterrupted across every page.

It is fully bilingual — **हिन्दी (Devanagari) is the default**, with an English
toggle on the opening screen.

No build step, no dependencies, no server required — it is plain HTML, CSS and
JavaScript.

## Quick start

Open the file directly:

```bash
open index.html
```

Or serve it locally (recommended, so audio and images load exactly as they will
in production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## File layout

```
.
├── index.html              # all nine pages live here
├── css/style.css           # the entire design system
├── js/app.js               # CONFIG block + all behaviour
├── assets/
│   ├── images/             # placeholder SVGs — replace with real photos
│   └── audio/              # drop your .mp3 files here (see its README)
└── README.md
```

## The pages, in order

| # | Page | What it holds |
|---|------|---------------|
| 1 | Blessings | Ganesha image, the Vakratunda shloka, opening blessing |
| 2 | Invitation | The invitation message and both families' names |
| 3 | The Couple | "Deepak weds Akanksha" with both portraits |
| 4 | Countdown | Live days / hours / minutes / seconds to the wedding |
| 5 | Ceremonies | Haldi, Mehndi, Tilak, Baraat, Reception |
| 6 | Gallery | Photos cross-fading, 2 seconds each |
| 7 | Pre-Wedding | The pre-wedding shoot, 2 seconds per photo |
| 8 | Venue | Full address, Google Maps link, add-to-calendar, contacts |
| 9 | Thank You | Closing note, RSVP button, share button, hashtag |

## What to edit

### 1. Text, dates, ceremonies, photos and music — `js/app.js`

Almost everything is driven by the `CONFIG` object at the very top of
`js/app.js`. Nothing below the `END OF CONFIG` marker needs to be touched.

Any value written as `{ hi: '…', en: '…' }` is bilingual — the invitation shows
whichever language is active. A plain string is used as-is in both languages,
which is what you want for phone numbers, the hashtag, and anything you would
rather not transliterate.

```js
const CONFIG = {
  defaultLang: 'hi',                             // 'hi' = हिन्दी | 'en' = English

  groom: { hi: 'दीपक',    en: 'Deepak' },
  bride: { hi: 'आकांक्षा', en: 'Akanksha' },
  hashtag: '#DeepakWedsAkanksha',

  weddingDateTime: '2026-12-05T19:30:00',        // ← what the timer counts to
  weddingLabel: { hi: 'विवाह संस्कार', en: 'Wedding Ceremony' },

  pageDuration: 3000,                            // ← default page auto-advance (ms)
  ceremoniesDuration: 8000,                      // ← Ceremonies page, longer to read
  galleryInterval: 2000,                         // ← seconds per gallery photo
  preWeddingInterval: 2000,                      // ← seconds per shoot photo

  venueName:    { hi: 'सफायर रिज़ॉर्ट', en: 'Sapphire Resort' },
  venueAddress: { hi: 'धनबाद, झारखंड',  en: 'Dhanbad, Jharkhand' },
  rsvpWhatsApp: '910000000000',                  // ← no '+', country code first

  ceremonies: [ /* one object per ceremony card, each field bilingual */ ],
  gallery:    [ /* gallery photos */ ],
  preWedding: [ /* pre-wedding shoot photos */ ],
  playlist:   [ /* your mp3s — order is shuffled on every load */ ],

  volume: 0.55
};
```

Not every page holds for the same time. The Gallery and Pre-Wedding pages work
out their own screen time — `number of photos × interval` — so every photo gets
its full turn, and the Ceremonies page gets a longer fixed dwell because it
carries five cards of detail:

| Page | On screen for |
|------|---------------|
| Gallery | 5 photos × 2 s = **10 s** |
| Pre-Wedding | 4 photos × 2 s = **8 s** |
| Ceremonies | **8 s** (`ceremoniesDuration`) |
| Everything else | **3 s** (`pageDuration`) |

Under the hood each of those pages carries a `data-dwell` attribute in
milliseconds, which the deck reads when the page comes up; the progress bar at
the top of the screen is retimed to match. To give any other page its own
duration, add it to `applyPageDurations()` in `js/app.js`.

### 2. Prose printed in the markup — `index.html`

Free-form prose lives directly in `index.html`. Each piece of text is stored
twice: **the Hindi is the element's own inline text, and the English sits in its
`data-en` attribute.**

```html
<h2 class="title" data-en="You Are Invited">आप आमंत्रित हैं</h2>
```

To re-word something, edit both halves. The same pattern applies to
`data-aria-en` (screen-reader labels), `data-alt-en` (image alt text) and
`data-label-en` (the page-dot tooltips on each `<section>`).

Everything you need to fill in is marked with a `PLACEHOLDER` comment, so
searching the file for `PLACEHOLDER` will walk you through all of them:

- the invitation message (page 2) — the fathers' names below it are already set
- the couple's one-line quote (page 3)
- the two assistance contact names and phone numbers (page 8)
- the `og:` meta tags at the top, used for WhatsApp and social previews

### 2a. Language — हिन्दी / English

Hindi in Devanagari is the default. A toggle on the opening screen switches to
English, and the choice is remembered in `localStorage` for return visits.

To open in English instead, set `defaultLang: 'en'` in `CONFIG`.

Two typographic details are handled automatically when Hindi is active, because
the Latin defaults are wrong for Devanagari:

- **Fonts** switch to Noto Serif Devanagari and Mukta.
- **Letter-spacing is reset to near zero and uppercasing is switched off** —
  tracking visually breaks Devanagari conjuncts and matras, and the script has no
  upper case for `text-transform` to apply. Both are driven by the
  `--track-*` and `--caps` variables under `html[lang='hi']` in `css/style.css`.

### 3. Illustrations — `assets/images/`

Every image is a **hand-drawn cartoon illustration** — childish storybook style,
thick rounded outlines, flat bright fills, doodle stars and flowers. There are no
photographs and no real people anywhere on the site.

They are all SVG, generated by `assets/images/_generate-illustrations.py`:

| File | Scene |
|------|-------|
| `ganesh.svg` | Cartoon Ganesha on a lotus |
| `portrait-groom.svg` | The groom in a sherwani and safa |
| `portrait-bride.svg` | The bride in a lehenga and dupatta |
| `gallery-1.svg` | Puja / havan — kund, flames, kalash, diya |
| `gallery-2.svg` | Haldi — bowl of turmeric, hands, splashes |
| `gallery-3.svg` | Mehndi — patterned palm and a mehndi cone |
| `gallery-4.svg` | Baraat — dhol, sticks, garland, music notes |
| `gallery-5.svg` | The couple under a flower arch |
| `prewed-1.svg` | The first look |
| `prewed-2.svg` | Golden hour |
| `prewed-3.svg` | By the water — boat and ducks |
| `prewed-4.svg` | Just us — under a tree |
| `motif-ganesh.svg`, `motif-floral.svg`, `favicon.svg`, `og-preview.svg` | Decorative marks and the share card |

To change the artwork, edit the generator and re-run it:

```bash
cd assets/images && python3 _generate-illustrations.py
```

The palette, outline weight and the `groom()` / `bride()` characters are all at
the top of that file, so a colour or costume change is a one-line edit that
propagates to every scene at once. Or ignore the generator entirely and drop your
own files in, pointing `CONFIG.gallery` / `CONFIG.preWedding` at them.

Your original photographs are kept in `assets/images/real-photos-backup/` —
nothing was deleted.

**Aspect ratios are never altered.** Every image on the site is fitted, not
filled — nothing is stretched, squashed or cropped to match a container. Mixed
portrait and landscape images can sit side by side safely:

- **Gallery** images are centred and scaled down to fit the screen, keeping their
  own proportions.
- **Pre-wedding** images are shown one at a time on a flexible stage, each fitted
  inside it at its own proportions.
- **Portraits** and the **Ganesha** image are width-capped only; their height
  follows from the image itself.

Being SVG, they stay perfectly sharp at any size and each file is only a few KB.

### 4. Colours and fonts — `css/style.css`

The palette and typography are a handful of CSS custom properties at the top of
the file:

```css
:root {
  --ink:        #2b1b2e;   /* deep plum, all body text */
  --paper:      #fdf8f3;   /* warm ivory background */
  --gold:       #c08f3c;   /* antique gold accents */
  --rose:       #c75a6b;   /* rose highlight */
  ...
}
```

## How the automatic behaviour works

- **Pages advance every 3 seconds** — except the Gallery and Pre-Wedding pages,
  which hold for 2 seconds per photo so none of their images is cut off, and the
  Ceremonies page, which holds for 8 seconds so the five cards can be read.
  Hovering over a page pauses the rotation so guests can finish reading, and it
  resumes when the pointer leaves. Rotation also pauses whenever the browser tab
  is in the background.
- **The thin bar at the top** shows how long the current page has left.
- **Guests can take over at any time** — the arrow keys, the on-screen arrows,
  swipe gestures on touch devices, and the dots down the left edge all jump
  straight to a page. The "Auto-play on" pill at the bottom right (or the
  spacebar) stops the rotation entirely.
- **Music starts on the first tap.** The entry screen exists because browsers
  refuse to autoplay audio until the user interacts with the page once.
- **The playlist is shuffled on every load** and reshuffled each time it runs
  out, and the same player continues across all pages so the music never
  restarts mid-invitation.
- **The countdown** reads `CONFIG.weddingDateTime` (the Baraat, 5 December
  2026 at 12:00 PM) and
  switches to a "आज ही वह शुभ दिन है!" / "Today is the day!" message once that
  moment passes.
- **The language choice persists** — a returning guest sees the language they
  last picked.
- **Add to Calendar** generates a `.ics` file in the browser from the same
  config, so it never goes out of sync with the countdown.
- **Flowers and stars fall across every screen.** A single canvas
  (`js/app.js` → `Fx`) drifts soft petals and four-point sparkles down the page.
  Motion is time-based, so it looks the same on a 60 Hz and a 120 Hz screen, the
  particle count scales with the viewport so phones stay light, and it stops
  animating while the tab is hidden. It never intercepts clicks.

  It blends rather than overlays: the petals `multiply` over the ivory pages, so
  they tint the paper like watercolour, and `screen` over the dark entry screen
  and gallery, so the same warm tones read as glowing light. Tune the density
  and palette in `Fx.count()` and `Fx.colours`, and the blending in the `.fx`
  rules in `css/style.css`.
- **Reduced motion is respected** — guests who have enabled "reduce motion" in
  their OS get the content without the animation, and the falling petals are
  switched off entirely.

## Publishing it

The site is fully static, so any static host works. Two easy options:

- **GitHub Pages** — push this folder to a repository and enable Pages on the
  default branch. The invitation will be live at
  `https://<user>.github.io/<repo>/`.
- **Netlify / Vercel / Cloudflare Pages** — drag the folder onto their dashboard;
  no build command and no output directory are needed.

Before sharing the link, do a final pass:

- [ ] Replaced every image in `assets/images/`
- [ ] Added your `.mp3` files to `assets/audio/` and listed them in `playlist`
- [ ] Added the missing ceremony **times** (only the Baraat has one so far)
- [ ] Pointed `weddingDateTime` at the pheras muhurat once it is fixed
      (currently the Baraat, 2026-12-05 12:00)
- [ ] Proof-read the Hindi, and the English behind each `data-en`
- [ ] Added the venue's street / locality line (only "Dhanbad, Jharkhand" so far)
- [ ] Confirmed `rsvpWhatsApp` is the right RSVP destination
      (currently the groom's number)
- [ ] Searched `index.html` for `PLACEHOLDER` and resolved every hit
- [ ] Opened it on a phone — that is where most guests will see it

## Browser support

Any current version of Chrome, Safari, Firefox or Edge, on desktop and mobile.
The layout is responsive down to small phones and also handles short landscape
screens.
"# deepak-wedding-invite" 

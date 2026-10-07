/* ==========================================================================
   दीपक एवं आकांक्षा — विवाह निमंत्रण
   Deepak weds Akanksha — Wedding Invitation
   ------------------------------------------------------------------
   EVERYTHING YOU NEED TO EDIT IS IN THE `CONFIG` BLOCK BELOW.
   No build step, no dependencies — just open index.html.

   BILINGUAL CONTENT
   -----------------
   Hindi (Devanagari) is the default language; English is the alternate.
   Any text below written as  { hi: '…', en: '…' }  is shown in whichever
   language is active. A plain string is used as-is in both languages
   (handy for names, numbers and addresses you don't want transliterated).

   Text that lives directly in index.html follows the same idea: the
   inline text is the Hindi, and the `data-en` attribute holds English.
   ========================================================================== */

'use strict';

/* ==========================================================================
   CONFIG  ⟵  EDIT THIS
   ========================================================================== */

const CONFIG = {

  /* ---------- which language the invitation opens in ---------- */
  defaultLang: 'hi',       // 'hi' = हिन्दी (default) | 'en' = English

  /* ---------- the couple ---------- */
  groom: { hi: 'दीपक',  en: 'Deepak' },
  bride: { hi: 'आकांक्षा', en: 'Akanksha' },
  hashtag: '#DeepakWedsAkanksha',

  /* ---------- the main wedding moment the timer counts down to ----------
     Format: 'YYYY-MM-DDTHH:MM:SS' in local time.
     Set to the Baraat — 5 December 2026, 12:00 PM — which is the one
     confirmed time on the wedding day. Change this to the pheras muhurat
     once that is fixed.                                                 */
  weddingDateTime: '2026-12-05T12:00:00',
  weddingLabel: { hi: 'विवाह संस्कार', en: 'Wedding Ceremony' },

  /* ---------- how long each page stays on screen (ms) ---------- */
  pageDuration: 3000,

  /* ---------- the Ceremonies page gets longer ----------
     It carries five cards of dates, times and venues, which is more than
     anyone can read in 3 seconds.                                       */
  ceremoniesDuration: 8000,

  /* ---------- how long each photo is held (ms) ----------
     The Gallery and Pre-Wedding pages show one photo at a time at this
     pace. Those two pages automatically stay on screen for
     (number of photos x this value), so every photo gets its full turn
     instead of being cut off by the 3-second page flip.                */
  galleryInterval: 2000,
  preWeddingInterval: 2000,

  /* ---------- venue (also used for the .ics calendar file) ----------
     PLACEHOLDER: add the street / locality line when you have it.       */
  venueName: {
    hi: 'सफायर रिज़ॉर्ट',
    en: 'Sapphire Resort'
  },
  venueAddress: {
    hi: 'धनबाद, झारखंड',
    en: 'Dhanbad, Jharkhand'
  },

  /* ---------- RSVP ----------
     PLACEHOLDER: your WhatsApp number in international format, no '+'. */
  rsvpWhatsApp: '917050332827',   // the groom's number — change if RSVPs should go elsewhere

  /* ---------- CEREMONIES ----------
     In date order. Dates are confirmed; only the Baraat has a confirmed
     time, so the rest say "time to be confirmed".
     PLACEHOLDER: the missing times.                                     */
  ceremonies: [
    {
      icon: '🌿',
      name: { hi: 'हल्दी',                en: 'Haldi' },
      date: { hi: '4 दिसम्बर 2026, शुक्रवार', en: '4 December 2026, Friday' },
      time: { hi: 'समय शीघ्र सूचित होगा',   en: 'Time to be confirmed' },
      venue:{ hi: 'सफायर रिज़ॉर्ट',          en: 'Sapphire Resort' },
      address: { hi: 'धनबाद, झारखंड',       en: 'Dhanbad, Jharkhand' }
    },
    {
      icon: '🌺',
      name: { hi: 'मेहंदी',                en: 'Mehndi' },
      date: { hi: '4 दिसम्बर 2026, शुक्रवार', en: '4 December 2026, Friday' },
      time: { hi: 'समय शीघ्र सूचित होगा',   en: 'Time to be confirmed' },
      venue:{ hi: 'सफायर रिज़ॉर्ट',          en: 'Sapphire Resort' },
      address: { hi: 'धनबाद, झारखंड',       en: 'Dhanbad, Jharkhand' }
    },
    {
      icon: '🪔',
      name: { hi: 'तिलक',                 en: 'Tilak' },
      date: { hi: '5 दिसम्बर 2026, शनिवार', en: '5 December 2026, Saturday' },
      time: { hi: 'समय शीघ्र सूचित होगा',   en: 'Time to be confirmed' },
      venue:{ hi: 'सफायर रिज़ॉर्ट',          en: 'Sapphire Resort' },
      address: { hi: 'धनबाद, झारखंड',       en: 'Dhanbad, Jharkhand' }
    },
    {
      icon: '💍',
      name: { hi: 'बारात',                en: 'Baraat' },
      date: { hi: '5 दिसम्बर 2026, शनिवार', en: '5 December 2026, Saturday' },
      time: { hi: 'दोपहर 12:00 बजे',      en: '12:00 PM' },
      venue:{ hi: 'सफायर रिज़ॉर्ट',          en: 'Sapphire Resort' },
      address: { hi: 'धनबाद, झारखंड',       en: 'Dhanbad, Jharkhand' }
    },
    {
      icon: '🥂',
      name: { hi: 'प्रीतिभोज',             en: 'Reception' },
      date: { hi: '8 दिसम्बर 2026, मंगलवार', en: '8 December 2026, Tuesday' },
      time: { hi: 'समय शीघ्र सूचित होगा',   en: 'Time to be confirmed' },
      venue:{ hi: 'सफायर रिज़ॉर्ट',          en: 'Sapphire Resort' },
      address: { hi: 'धनबाद, झारखंड',       en: 'Dhanbad, Jharkhand' }
    }
  ],

  /* ---------- GALLERY ILLUSTRATIONS ----------
     Cartoon scenes, generated by assets/images/_generate-illustrations.py.
     Swap `src` for your own files whenever you like.                    */
  gallery: [
    { src: 'assets/images/gallery-1.svg', alt: { hi: 'पूजा एवं हवन',   en: 'Puja and havan' } },
    { src: 'assets/images/gallery-2.svg', alt: { hi: 'हल्दी की रस्म',   en: 'The haldi ritual' } },
    { src: 'assets/images/gallery-3.svg', alt: { hi: 'मेहंदी',          en: 'Mehndi' } },
    { src: 'assets/images/gallery-4.svg', alt: { hi: 'ढोल और बारात',   en: 'Dhol and baraat' } },
    { src: 'assets/images/gallery-5.svg', alt: { hi: 'वर एवं वधू',      en: 'The couple' } }
  ],

  /* ---------- PRE-WEDDING SCENES (cartoon illustrations) ---------- */
  preWedding: [
    {
      src: 'assets/images/prewed-1.svg',
      alt:     { hi: 'प्री-वेडिंग शूट 1', en: 'Pre-wedding shoot 1' },
      caption: { hi: 'पहली नज़र',         en: 'The first look' }
    },
    {
      src: 'assets/images/prewed-2.svg',
      alt:     { hi: 'प्री-वेडिंग शूट 2', en: 'Pre-wedding shoot 2' },
      caption: { hi: 'सुनहरी शाम',        en: 'Golden hour' }
    },
    {
      src: 'assets/images/prewed-3.svg',
      alt:     { hi: 'प्री-वेडिंग शूट 3', en: 'Pre-wedding shoot 3' },
      caption: { hi: 'जल किनारे',         en: 'By the water' }
    },
    {
      src: 'assets/images/prewed-4.svg',
      alt:     { hi: 'प्री-वेडिंग शूट 4', en: 'Pre-wedding shoot 4' },
      caption: { hi: 'बस हम दोनों',       en: 'Just us' }
    }
  ],

  /* ---------- MUSIC  ⟵  PLACEHOLDER
     Put your .mp3 files in assets/audio/ and list them here.
     The SAME player runs across every page (music never restarts when
     the page changes). The ORDER IS SHUFFLED ON EVERY PAGE LOAD, and
     re-shuffled each time the playlist is exhausted.                   */
  playlist: [
    { src: 'assets/audio/track-1.mp3', title: 'Track One' },
    { src: 'assets/audio/track-2.mp3', title: 'Track Two' },
    { src: 'assets/audio/track-3.mp3', title: 'Track Three' },
    { src: 'assets/audio/track-4.mp3', title: 'Track Four' }
  ],

  volume: 0.55
};

/* ==========================================================================
   END OF CONFIG — implementation below
   ========================================================================== */


/* ---------- tiny helpers ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));


/* ==========================================================================
   LANGUAGE — हिन्दी (default) / English

   Strings that live in index.html carry their Hindi inline and their English
   in a `data-en` attribute. The inline Hindi is cached into `data-hi` on the
   first pass, so switching is a straight swap between the two.
   ========================================================================== */

/** Strings the script itself builds, rather than reading out of the markup. */
const STR = {
  hi: {
    untilTpl:  '<strong>%s</strong> में शेष',
    today:     '<strong>आज ही वह शुभ दिन है!</strong>',
    autoOn:    'स्वतः चल रहा है',
    autoOff:   'स्वतः बंद',
    copied:    'लिंक कॉपी हो गया ✓',
    share:     'निमंत्रण साझा करें',
    shareText: 'हमारे विवाह में आप सादर आमंत्रित हैं!',
    rsvpText:  'हम अवश्य आएंगे!',
    noAudio:   'assets/audio में mp3 जोड़ें',
    rowDate:   'तिथि',
    rowTime:   'समय',
    rowVenue:  'स्थान',
    dotsLabel: 'निमंत्रण के पृष्ठ',
    photoNth:  'तस्वीर %s'
  },
  en: {
    untilTpl:  'until the <strong>%s</strong>',
    today:     '<strong>Today is the day!</strong>',
    autoOn:    'Auto-play on',
    autoOff:   'Auto-play off',
    copied:    'Link copied ✓',
    share:     'Share Invitation',
    shareText: "You're invited to our wedding!",
    rsvpText:  'We will be there!',
    noAudio:   'Add mp3s to assets/audio',
    rowDate:   'Date',
    rowTime:   'Time',
    rowVenue:  'Venue',
    dotsLabel: 'Invitation sections',
    photoNth:  'Photo %s'
  }
};

const Lang = {
  current: 'hi',

  /** Resolve a CONFIG value that may be a plain string or {hi, en}. */
  t(v) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    return v[this.current] ?? v.hi ?? v.en ?? '';
  },

  /** A script-owned string for the active language. */
  s(key) {
    return (STR[this.current] || STR.hi)[key] ?? '';
  },

  init() {
    const saved = (() => {
      try { return localStorage.getItem('invitation-lang'); } catch (_) { return null; }
    })();
    this.set(saved === 'en' || saved === 'hi' ? saved : (CONFIG.defaultLang || 'hi'), false);

    $$('.langswitch__btn').forEach((btn) => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang, true));
    });
  },

  set(lang, remember) {
    this.current = lang === 'en' ? 'en' : 'hi';
    document.documentElement.lang = this.current;

    if (remember) {
      try { localStorage.setItem('invitation-lang', this.current); } catch (_) { /* private mode */ }
    }

    $$('.langswitch__btn').forEach((b) => {
      const on = b.dataset.lang === this.current;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });

    this.apply();
  },

  /** Swap every translatable node in the document into the active language. */
  apply() {
    const en = this.current === 'en';

    // --- element text (inline Hindi, data-en English) ---
    $$('[data-en]').forEach((el) => {
      if (el.dataset.hi === undefined) el.dataset.hi = el.innerHTML.trim();
      el.innerHTML = en ? el.dataset.en : el.dataset.hi;
    });

    // --- aria-labels ---
    $$('[data-aria-en]').forEach((el) => {
      if (el.dataset.ariaHi === undefined) el.dataset.ariaHi = el.getAttribute('aria-label') || '';
      el.setAttribute('aria-label', en ? el.dataset.ariaEn : el.dataset.ariaHi);
    });

    // --- image alt text ---
    $$('[data-alt-en]').forEach((el) => {
      if (el.dataset.altHi === undefined) el.dataset.altHi = el.getAttribute('alt') || '';
      el.setAttribute('alt', en ? el.dataset.altEn : el.dataset.altHi);
    });

    // --- everything the script renders itself ---
    applyNames();
    renderCeremonies();
    renderVenue();
    if (typeof Slideshows !== 'undefined') Slideshows.forEach((s) => s.relabel());
    if (Countdown.ready) Countdown.render();
    if ($('#calLink')) buildCalendarLink();
    if (AutoPlay.ready) AutoPlay.render();
    $('#dots')?.setAttribute('aria-label', this.s('dotsLabel'));
    Deck.relabelDots();
  }
};

/** Shorthand used throughout. */
const t = (v) => Lang.t(v);

/** Fisher–Yates shuffle, returns a new array. */
function shuffle(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const pad2 = (n) => String(n).padStart(2, '0');


/* ==========================================================================
   DECK — auto-advancing pages
   ========================================================================== */

const Deck = {
  pages: [],
  index: 0,
  timer: null,
  running: false,

  init() {
    this.pages = $$('.page');
    this.progressFill = $('#progressFill');
    this.buildDots();
    this.show(0);

    // ----- manual navigation -----
    $('#nextBtn').addEventListener('click', () => this.step(1, true));
    $('#prevBtn').addEventListener('click', () => this.step(-1, true));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') this.step(1, true);
      if (e.key === 'ArrowLeft'  || e.key === 'PageUp')   this.step(-1, true);
      if (e.key === ' ') { e.preventDefault(); AutoPlay.toggle(); }
    });

    // ----- swipe -----
    let x0 = null, y0 = null;
    const deck = $('#deck');
    deck.addEventListener('touchstart', (e) => {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    }, { passive: true });
    deck.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) this.step(dx < 0 ? 1 : -1, true);
      x0 = y0 = null;
    }, { passive: true });

    // ----- hovering a page pauses the rotation so guests can read -----
    deck.addEventListener('mouseenter', () => this.pause());
    deck.addEventListener('mouseleave', () => { if (AutoPlay.on) this.start(); });

    // ----- never rotate in a background tab -----
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.pause();
      else if (AutoPlay.on) this.start();
    });
  },

  buildDots() {
    const wrap = $('#dots');
    this.pages.forEach((page, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'dot';
      b.addEventListener('click', () => { this.show(i); if (AutoPlay.on) this.start(); });
      wrap.appendChild(b);
    });
    this.dots = $$('.dot', wrap);
    this.relabelDots();
  },

  /** Dot tooltips come from each section's data-label / data-label-en. */
  relabelDots() {
    if (!this.dots) return;
    const en = Lang.current === 'en';
    this.dots.forEach((b, i) => {
      const page = this.pages[i];
      const label = (en ? page.dataset.labelEn : page.dataset.label) || `${i + 1}`;
      b.dataset.label = label;
      b.setAttribute('aria-label', label);
    });
  },

  show(i) {
    this.index = (i + this.pages.length) % this.pages.length;
    const current = this.pages[this.index];

    this.pages.forEach((p, n) => p.classList.toggle('is-active', n === this.index));
    this.dots.forEach((d, n) => d.classList.toggle('is-on', n === this.index));

    // a slideshow only runs while its own page is on screen
    Slideshows.forEach((show, page) => {
      if (page === current) show.start();
      else show.stop();
    });

    // invert the fixed chrome over dark pages
    document.body.classList.toggle('is-dark', current.classList.contains('page--gallery'));

    this.restartProgress();
  },

  step(dir, manual) {
    this.show(this.index + dir);
    if (manual && AutoPlay.on) this.start();   // restart the dwell clock
  },

  /**
   * How long the current page stays up. Pages carrying a slideshow set their
   * own `data-dwell` (photos x per-photo interval); everything else uses the
   * default page duration.
   */
  dwell() {
    const d = parseInt(this.pages[this.index].dataset.dwell, 10);
    return Number.isFinite(d) && d > 0 ? d : CONFIG.pageDuration;
  },

  restartProgress() {
    const el = this.progressFill;
    el.classList.remove('is-running');
    el.style.animationDuration = `${this.dwell()}ms`;
    void el.offsetWidth;                        // force reflow to replay the animation
    if (this.running) el.classList.add('is-running');
  },

  start() {
    this.pause();
    this.running = true;
    this.restartProgress();
    this.queueNext();
  },

  /** setTimeout rather than setInterval, so each page can have its own dwell. */
  queueNext() {
    this.timer = setTimeout(() => {
      this.show(this.index + 1);
      if (this.running) this.queueNext();
    }, this.dwell());
  },

  pause() {
    this.running = false;
    clearTimeout(this.timer);
    this.timer = null;
    this.progressFill.classList.remove('is-running');
  }
};


/* ==========================================================================
   AUTO-PLAY TOGGLE
   ========================================================================== */

const AutoPlay = {
  on: true,
  ready: false,

  init() {
    this.btn = $('#autoBtn');
    this.label = $('#autoLabel');
    this.btn.addEventListener('click', () => this.toggle());
    this.ready = true;
    this.render();
  },

  render() {
    if (!this.ready) return;
    this.btn.setAttribute('aria-pressed', String(this.on));
    this.label.textContent = Lang.s(this.on ? 'autoOn' : 'autoOff');
  },

  toggle() {
    this.on = !this.on;
    this.render();
    if (this.on) Deck.start();
    else Deck.pause();
  }
};


/* ==========================================================================
   MUSIC — one shared player, shuffled every load
   ========================================================================== */

const Music = {
  queue: [],
  cursor: 0,
  misses: 0,        // consecutive unplayable tracks — stops a 404 spin-loop
  dead: false,      // every track in the playlist failed to load

  init() {
    this.audio = $('#audio');
    this.btn = $('#musicBtn');
    this.toast = $('#nowPlaying');

    this.audio.volume = CONFIG.volume;
    this.reshuffle();

    // a track that actually started playing resets the failure counter
    this.audio.addEventListener('playing', () => { this.misses = 0; });

    // when a track ends, roll to the next one (re-shuffling at the end)
    this.audio.addEventListener('ended', () => this.next());

    // a missing / unsupported mp3 must not kill the rest of the playlist
    this.audio.addEventListener('error', () => {
      if (!this.audio.getAttribute('src')) return;
      this.misses += 1;
      if (this.misses >= this.queue.length) {
        // nothing in assets/audio/ is playable yet — go quiet, don't spin
        this.dead = true;
        this.btn.classList.add('is-muted');
        this.announce(Lang.s('noAudio'));
        return;
      }
      this.next();
    });

    this.btn.addEventListener('click', () => this.toggle());
  },

  /** New random order. Called on load and whenever the queue runs out. */
  reshuffle() {
    this.queue = shuffle(CONFIG.playlist);
    this.cursor = 0;
  },

  load(i) {
    const track = this.queue[i];
    if (!track) return;
    this.audio.src = track.src;
    this.announce(t(track.title));
  },

  play() {
    if (this.dead || !this.queue.length) return;
    if (!this.audio.getAttribute('src')) this.load(this.cursor);
    const p = this.audio.play();
    if (p && p.catch) p.catch(() => this.btn.classList.add('is-muted'));
    this.btn.classList.remove('is-muted');
  },

  next() {
    if (this.dead) return;
    this.cursor += 1;
    if (this.cursor >= this.queue.length) this.reshuffle();   // shuffled again
    this.load(this.cursor);
    this.play();
  },

  toggle() {
    if (this.dead) { this.announce(Lang.s('noAudio')); return; }
    if (this.audio.paused) this.play();
    else {
      this.audio.pause();
      this.btn.classList.add('is-muted');
    }
  },

  announce(title) {
    if (!title) return;
    this.toast.textContent = `♪ ${title}`;
    this.toast.classList.add('is-on');
    clearTimeout(this._t);
    this._t = setTimeout(() => this.toast.classList.remove('is-on'), 3200);
  }
};


/* ==========================================================================
   COUNTDOWN
   ========================================================================== */

const Countdown = {
  ready: false,

  init() {
    this.target = new Date(CONFIG.weddingDateTime).getTime();
    this.els = {
      d: $('#cdDays'), h: $('#cdHours'), m: $('#cdMins'), s: $('#cdSecs')
    };
    this.msg = $('#countdownMsg');
    this.ready = true;

    this.render();
    this.tick();
    setInterval(() => this.tick(), 1000);
  },

  /** The wedding date, spelled out in the active language. */
  formatTarget() {
    if (Number.isNaN(this.target)) {
      return Lang.current === 'en' ? 'DD Month YYYY · 00:00 AM' : 'DD माह YYYY · प्रातः 00:00';
    }
    return new Date(this.target).toLocaleString(
      Lang.current === 'en' ? 'en-IN' : 'hi-IN',
      { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit' }
    );
  },

  /** The sentence under the digits — rebuilt whenever the language changes. */
  render() {
    if (!this.ready) return;
    const past = !Number.isNaN(this.target) && this.target - Date.now() <= 0;

    const line = past
      ? Lang.s('today')
      : Lang.s('untilTpl').replace('%s', t(CONFIG.weddingLabel));

    const sub = past
      ? `${t(CONFIG.groom)} &amp; ${t(CONFIG.bride)}`
      : this.formatTarget();

    this.msg.innerHTML = `${line}<br /><span class="countdown__when">${sub}</span>`;
  },

  tick() {
    if (Number.isNaN(this.target)) return;
    const diff = this.target - Date.now();

    if (diff <= 0) {
      Object.values(this.els).forEach((el) => { el.textContent = '00'; });
      if (!this.wasPast) { this.wasPast = true; this.render(); }
      return;
    }

    const s = Math.floor(diff / 1000);
    this.els.d.textContent = pad2(Math.floor(s / 86400));
    this.els.h.textContent = pad2(Math.floor((s % 86400) / 3600));
    this.els.m.textContent = pad2(Math.floor((s % 3600) / 60));
    this.els.s.textContent = pad2(s % 60);
  }
};


/* ==========================================================================
   GALLERY — continuous cross-fade with Ken Burns drift
   ========================================================================== */

/**
 * Builds a self-timed, cross-fading photo slideshow.
 *
 * Each photo is held for exactly `interval` ms. The timer only runs while the
 * slideshow's page is on screen (Deck starts and stops it), and it rewinds to
 * the first photo each time the page comes back around — so every photo always
 * gets its full turn.
 */
function createSlideshow({ items, stage, thumbs, caption, interval, prefix }) {
  // A page can be commented out of index.html (the Pre-Wedding page currently
  // is). In that case there is nothing to build, so hand back an inert
  // controller rather than throwing — `length: 0` also stops Deck registering
  // the page, so the deck simply has one page fewer.
  if (!stage || !items || !items.length) {
    const noop = () => {};
    return { start: noop, stop: noop, show: noop, relabel: noop, length: 0 };
  }

  const slides = [];
  const thumbEls = [];
  let i = 0;
  let timer = null;

  items.forEach((img, n) => {
    const slide = document.createElement('div');
    slide.className = `${prefix}__slide`;
    slide.innerHTML = `<img src="${img.src}" alt="" loading="${n === 0 ? 'eager' : 'lazy'}" />`;
    stage.appendChild(slide);
    slides.push(slide);

    if (thumbs) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `${prefix}__thumb`;
      btn.innerHTML = `<img src="${img.src}" alt="" loading="lazy" />`;
      btn.addEventListener('click', () => { show(n); restart(); });
      thumbs.appendChild(btn);
      thumbEls.push(btn);
    }
  });

  function show(n) {
    if (!slides.length) return;
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-on', k === i));
    thumbEls.forEach((b, k) => b.classList.toggle('is-on', k === i));
    if (caption) caption.textContent = t(items[i].caption);
  }

  /** Re-applies alt text, thumb labels and the caption in the active language. */
  function relabel() {
    items.forEach((img, n) => {
      const alt = t(img.alt) || Lang.s('photoNth').replace('%s', String(n + 1));
      slides[n]?.querySelector('img')?.setAttribute('alt', alt);
      thumbEls[n]?.setAttribute('aria-label', alt);
    });
    if (caption) caption.textContent = t(items[i]?.caption);
  }

  function stop() { clearInterval(timer); timer = null; }

  /** Keep the current photo, but give it a fresh full interval. */
  function restart() {
    stop();
    timer = setInterval(() => show(i + 1), interval);
  }

  /** Called when the page becomes visible: rewind to photo 1 and run. */
  function start() {
    show(0);
    restart();
  }

  show(0);
  relabel();
  return { start, stop, show, relabel, length: slides.length };
}


const Slideshows = new Map();   // page element -> slideshow controller

function initSlideshows() {
  const gallery = createSlideshow({
    items: CONFIG.gallery,
    stage: $('#gallery'),
    thumbs: $('#galleryThumbs'),
    interval: CONFIG.galleryInterval,
    prefix: 'gallery'
  });

  const shoot = createSlideshow({
    items: CONFIG.preWedding,
    stage: $('#prewedStage'),
    thumbs: $('#prewedThumbs'),
    caption: $('#prewedCap'),
    interval: CONFIG.preWeddingInterval,
    prefix: 'shoot'
  });

  // Hold each page long enough for every one of its photos to get its turn.
  register('.page--gallery', gallery, CONFIG.galleryInterval);
  register('.page--prewed',  shoot,   CONFIG.preWeddingInterval);

  function register(selector, show, interval) {
    const page = $(selector);
    if (!page || !show.length) return;
    page.dataset.dwell = String(show.length * interval);
    Slideshows.set(page, show);
  }
}

/**
 * Pages that need more than the default `pageDuration` carry their own
 * `data-dwell` (in ms), which Deck.dwell() reads. The two slideshow pages set
 * theirs in initSlideshows(); everything else is listed here.
 */
function applyPageDurations() {
  const events = $('.page--events');
  if (events) events.dataset.dwell = String(CONFIG.ceremoniesDuration);
}


/* ==========================================================================
   FALLING FLOWERS & STARS

   One canvas, two kinds of particle: soft petals that tumble and sway, and
   small four-point sparkles that twinkle. Everything is time-based (delta
   seconds) rather than per-frame, so the motion is identical on a 60 Hz and
   a 120 Hz screen and never speeds up after a stall.

   Blending is handled in CSS (see `.fx`) — multiply over the ivory pages,
   screen over the dark ones — which is what lets it sit inside the artwork
   instead of on top of it.
   ========================================================================== */

const Fx = {
  particles: [],
  last: 0,
  raf: null,

  /* Palette drawn from the site's own colours, so it always harmonises. */
  colours: [
    [231, 198, 137],   // gold light
    [192, 143,  60],   // gold
    [199,  90, 107],   // rose
    [232, 160, 173],   // blush
    [240, 212, 216]    // rose soft
  ],

  init() {
    this.canvas = $('#fx');
    if (!this.canvas) return;

    // guests who asked for less motion get none of this
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.canvas.remove();
      this.canvas = null;
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.spawn();

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { this.resize(); this.spawn(); }, 180);
    }, { passive: true });

    // don't burn battery animating an invisible tab
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stop();
      else this.start();
    });

    this.start();
  },

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);   // 2x is plenty
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.round(this.w * dpr);
    this.canvas.height = Math.round(this.h * dpr);
    this.canvas.style.width = `${this.w}px`;
    this.canvas.style.height = `${this.h}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  },

  /** Particle count scales with the viewport, so phones stay light. */
  count() {
    return Math.round(Math.min(64, Math.max(20, (this.w * this.h) / 26000)));
  },

  spawn() {
    const n = this.count();
    this.particles = Array.from({ length: n }, (_, i) => this.make(i / n));
  },

  /**
   * `seed` (0..1) spreads the initial batch up the screen so they don't all
   * enter in one wave. Respawned particles come in from just above the top.
   */
  make(seed) {
    const isStar = Math.random() < 0.38;
    const rgb = this.colours[Math.floor(Math.random() * this.colours.length)];
    const depth = Math.random();                   // 0 = far, 1 = near

    return {
      star: isStar,
      rgb,
      x: Math.random() * this.w,
      y: seed === undefined ? -20 : seed * -this.h,
      size: isStar
        ? 2 + depth * 5
        : 5 + depth * 11,
      // nearer particles fall faster — a cheap sense of depth
      vy: (isStar ? 10 : 16) + depth * (isStar ? 22 : 38),
      drift: (Math.random() - 0.5) * 14,           // steady sideways breeze
      swayAmp: 6 + Math.random() * 20,             // how far it wanders
      swayHz: 0.12 + Math.random() * 0.28,         // how slowly it wanders
      phase: Math.random() * Math.PI * 2,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 1.1,             // tumble speed (rad/s)
      alpha: (isStar ? 0.35 : 0.3) + depth * 0.4,
      twinkleHz: 0.5 + Math.random() * 1.4
    };
  },

  start() {
    if (this.raf || !this.canvas) return;
    this.last = 0;
    this.raf = requestAnimationFrame((ts) => this.frame(ts));
  },

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
  },

  frame(ts) {
    // seconds since the previous frame, clamped so a stall never teleports
    const dt = this.last ? Math.min((ts - this.last) / 1000, 0.05) : 0.016;
    this.last = ts;

    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
    const t = ts / 1000;

    for (const p of this.particles) {
      p.y += p.vy * dt;
      p.x += (p.drift + Math.sin(t * p.swayHz * Math.PI * 2 + p.phase) * p.swayAmp) * dt;
      p.rot += p.vr * dt;

      // recycle once it has cleared the bottom, or drifted off the sides
      if (p.y - p.size > this.h || p.x < -60 || p.x > this.w + 60) {
        Object.assign(p, this.make(), { y: -p.size - Math.random() * 40 });
        continue;
      }

      const fade = p.star
        ? 0.55 + 0.45 * Math.sin(t * p.twinkleHz * Math.PI * 2 + p.phase)
        : 1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = `rgba(${p.rgb[0]}, ${p.rgb[1]}, ${p.rgb[2]}, ${p.alpha * fade})`;
      if (p.star) this.drawStar(ctx, p.size);
      else this.drawPetal(ctx, p.size);
      ctx.restore();
    }

    this.raf = requestAnimationFrame((next) => this.frame(next));
  },

  /** A single soft petal — two mirrored bezier curves. */
  drawPetal(ctx, r) {
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.bezierCurveTo( r * 0.9, -r * 0.5,  r * 0.6, r * 0.8, 0, r);
    ctx.bezierCurveTo(-r * 0.6,  r * 0.8, -r * 0.9, -r * 0.5, 0, -r);
    ctx.fill();
  },

  /** A four-point sparkle with concave sides. */
  drawStar(ctx, r) {
    const w = r * 0.28;
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.quadraticCurveTo( w,  -w,  r,  0);
    ctx.quadraticCurveTo( w,   w,  0,  r);
    ctx.quadraticCurveTo(-w,   w, -r,  0);
    ctx.quadraticCurveTo(-w,  -w,  0, -r);
    ctx.fill();
  }
};


/* ==========================================================================
   STATIC CONTENT RENDERERS
   ========================================================================== */

function renderCeremonies() {
  const wrap = $('#events');
  if (!wrap) return;
  wrap.innerHTML = CONFIG.ceremonies.map((c) => `
    <article class="event">
      <div class="event__icon" aria-hidden="true">${c.icon || '✦'}</div>
      <h3 class="event__name">${t(c.name)}</h3>
      <p class="event__row"><b>${Lang.s('rowDate')}</b><span>${t(c.date)}</span></p>
      <p class="event__row"><b>${Lang.s('rowTime')}</b><span>${t(c.time)}</span></p>
      <p class="event__row"><b>${Lang.s('rowVenue')}</b><span>${t(c.venue)}${
        c.address ? `<br />${t(c.address)}` : ''
      }</span></p>
    </article>
  `).join('');
}

function renderVenue() {
  const nameEl = $('#venueName');
  const addrEl = $('#venueAddr');
  if (nameEl) nameEl.textContent = t(CONFIG.venueName);
  // newlines in the address become line breaks
  if (addrEl) addrEl.innerHTML = t(CONFIG.venueAddress).split('\n').join('<br />');
}

function applyNames() {
  const groom = t(CONFIG.groom);
  const bride = t(CONFIG.bride);

  document.title = Lang.current === 'en'
    ? `${groom} weds ${bride} — Wedding Invitation`
    : `${groom} एवं ${bride} — विवाह निमंत्रण`;

  $$('[data-name="groom"]').forEach((el) => { el.textContent = groom; });
  $$('[data-name="bride"]').forEach((el) => { el.textContent = bride; });
  $$('[data-name="hashtag"]').forEach((el) => { el.textContent = CONFIG.hashtag; });

  // RSVP link text is translated via data-en; only the message needs rebuilding
  const rsvp = $('#rsvpLink');
  if (rsvp && CONFIG.rsvpWhatsApp) {
    rsvp.href = `https://wa.me/${CONFIG.rsvpWhatsApp}?text=${encodeURIComponent(Lang.s('rsvpText'))}`;
  }
}


/* ==========================================================================
   ADD TO CALENDAR (.ics) + SHARE
   ========================================================================== */

function buildCalendarLink() {
  const link = $('#calLink');
  const start = new Date(CONFIG.weddingDateTime);
  if (Number.isNaN(start.getTime())) return;

  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);   // 4-hour block
  const stamp = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/,/g, '\\,')
                              .replace(/;/g, '\\;').replace(/\n/g, ' ');

  const groom = t(CONFIG.groom);
  const bride = t(CONFIG.bride);
  const joiner = Lang.current === 'en' ? 'weds' : 'एवं';

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `UID:${start.getTime()}@wedding-invitation`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${esc(`${groom} ${joiner} ${bride} — ${t(CONFIG.weddingLabel)}`)}`,
    `LOCATION:${esc(`${t(CONFIG.venueName)}, ${t(CONFIG.venueAddress)}`)}`,
    `DESCRIPTION:${esc(`${groom} & ${bride} ${CONFIG.hashtag}`)}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  if (link.dataset.blob) URL.revokeObjectURL(link.dataset.blob);
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
  link.dataset.blob = url;
  link.href = url;
  link.download = 'wedding.ics';
}

function initShare() {
  const btn = $('#shareBtn');
  btn.addEventListener('click', async () => {
    const joiner = Lang.current === 'en' ? 'weds' : 'एवं';
    const data = {
      title: `${t(CONFIG.groom)} ${joiner} ${t(CONFIG.bride)}`,
      text: `${Lang.s('shareText')} ${CONFIG.hashtag}`,
      url: location.href
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(location.href);
        btn.textContent = Lang.s('copied');
        setTimeout(() => { btn.textContent = Lang.s('share'); }, 2200);
      }
    } catch (_) { /* user dismissed the share sheet — nothing to do */ }
  });
}


/* ==========================================================================
   BOOT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  Lang.init();                 // sets the language and renders all text

  initSlideshows();            // must run before Deck.init()
  applyPageDurations();        // ditto — Deck reads data-dwell on first show
  Countdown.init();
  AutoPlay.init();
  Music.init();
  Deck.init();
  Fx.init();                   // falling flowers & stars

  buildCalendarLink();
  initShare();

  // The gate's single tap is what unlocks audio autoplay in every browser.
  const gate = $('#gate');
  const open = () => {
    gate.classList.add('is-open');
    // drop the gate's dark-blend flag so the petals switch to the ivory mix
    document.body.classList.remove('is-gate');
    Music.play();
    Deck.start();
    setTimeout(() => { gate.style.display = 'none'; }, 1000);
  };
  $('#gateBtn').addEventListener('click', open, { once: true });
});

/* ================================================================
   main.js — vanilla JS, no dependencies
   ================================================================ */
'use strict';

document.documentElement.classList.add('js-ready');

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Loader ── */
(function () {
  const loader = document.getElementById('ftco-loader');
  if (!loader) return;
  const root = document.documentElement;
  const started = Date.now();
  let done = false;
  const hide = () => {
    if (done) return;
    done = true;
    const wait = reducedMotion() ? 0 : Math.max(0, 450 - (Date.now() - started));
    setTimeout(() => {
      loader.classList.remove('show');
      root.classList.add('is-loaded');
    }, wait);
  };
  const ready = () => {
    const fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fonts.then(hide, hide);
  };
  if (document.readyState === 'complete') ready();
  else window.addEventListener('load', ready);
  setTimeout(hide, 2500);
})();

/* ── Theme toggle (stored choice → system → dark) ── */
(function () {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function apply(theme, persist) {
    if (persist && !reducedMotion()) {
      root.classList.add('theme-anim');
      setTimeout(() => root.classList.remove('theme-anim'), 650);
    }
    root.dataset.theme = theme;
    if (persist) { try { localStorage.setItem('portfolio-theme', theme); } catch (e) {} }
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#09090f' : '#f7f7fc');
  }

  let stored = null;
  try { stored = localStorage.getItem('portfolio-theme'); } catch (e) {}
  if (stored === 'light' || stored === 'dark') apply(stored, false);
  else apply(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark', false);

  if (btn) btn.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
})();

/* ── Nav: scrolled state + active section ── */
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const links = $$('.nav-link[href^="#"]');
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => {
        const on = a.getAttribute('href') === '#' + e.target.id;
        a.classList.toggle('active', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
})();

/* ── Mobile menu with focus trap ── */
(function () {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  const FOCUSABLE = 'a[href], button:not([disabled])';
  const mq = window.matchMedia('(max-width: 767px)');
  let isOpen = false;

  function setOpen(open, restoreFocus) {
    isOpen = open;
    menu.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      document.addEventListener('keydown', onKey);
      const first = menu.querySelector(FOCUSABLE);
      if (first) first.focus();
    } else {
      document.removeEventListener('keydown', onKey);
      if (restoreFocus) toggle.focus();
    }
  }

  function onKey(e) {
    if (e.key === 'Escape') { setOpen(false, true); return; }
    if (e.key !== 'Tab') return;
    const items = $$(FOCUSABLE, menu).concat($('#theme-toggle'), toggle).filter(Boolean);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  toggle.addEventListener('click', () => setOpen(!isOpen, true));
  $$('.nav-link', menu).forEach(a => a.addEventListener('click', () => setOpen(false, false)));
  mq.addEventListener('change', () => { if (!mq.matches && isOpen) setOpen(false, false); });
})();

/* ── Smooth in-page anchors ── */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.classList.contains('skip-link')) return;
  const id = a.getAttribute('href');
  if (id.length < 2) return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  const nav = document.getElementById('site-nav');
  const offset = id === '#home-section' ? 0 : (nav ? nav.offsetHeight : 72) - 1;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: reducedMotion() ? 'auto' : 'smooth' });
  if (history.pushState) history.pushState(null, '', id);
});

/* ── Resume tabs (ARIA tab pattern) ── */
(function () {
  const tabs = $$('[role="tab"]', $('.resume-tabs') || document);
  if (!tabs.length) return;

  function activate(tab, focus) {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.classList.toggle('active', on);
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab, false));
    tab.addEventListener('keydown', e => {
      let next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); activate(next, true); }
    });
  });
  activate(tabs[0], false);
})();

/* ── Scroll reveal ── */
(function () {
  const els = $$('.reveal');
  if (!els.length) return;
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.filter(e => e.isIntersecting).forEach((e, i) => {
      const el = e.target;
      el.style.setProperty('--d', Math.min(i * 90, 450) + 'ms');
      el.classList.add('is-visible');
      obs.unobserve(el);
      // Release the entrance styles so the element's own hover transitions take over.
      setTimeout(() => {
        el.classList.remove('reveal', 'is-visible');
        el.style.removeProperty('--d');
      }, 1500);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ── Hero typed text ── */
(function () {
  const el = $('.txt-rotate');
  if (!el) return;
  let phrases;
  try { phrases = JSON.parse(el.getAttribute('data-rotate')); } catch (e) { return; }
  if (!phrases || !phrases.length) return;
  const period = parseInt(el.getAttribute('data-period'), 10) || 2000;

  const render = txt => {
    el.textContent = '';
    const w = document.createElement('span');
    w.className = 'wrap';
    w.textContent = txt;
    el.appendChild(w);
  };

  if (reducedMotion()) {
    let n = 0;
    render(phrases[0]);
    setInterval(() => { n = (n + 1) % phrases.length; render(phrases[n]); }, period + 1000);
    return;
  }

  let loop = 0, txt = '', deleting = false;
  (function tick() {
    const full = phrases[loop % phrases.length];
    txt = deleting ? full.substring(0, txt.length - 1) : full.substring(0, txt.length + 1);
    render(txt);
    let delta = deleting ? 50 : 100;
    if (!deleting && txt === full) { delta = period; deleting = true; }
    else if (deleting && txt === '') { deleting = false; loop++; delta = 500; }
    setTimeout(tick, delta);
  })();
})();

/* ── Contact form: inline validation (posting is untouched) ── */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const submit = $('button[type="submit"]', form);
  const messages = {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address, like name@example.com.',
    message: 'Please write a short message.'
  };

  function showError(field) {
    const group = field.closest('.form-group');
    const err = group.querySelector('.field-error');
    group.classList.add('has-error');
    field.setAttribute('aria-invalid', 'true');
    err.textContent = messages[field.name] || 'This field is required.';
    err.hidden = false;
  }
  function clearError(field) {
    const group = field.closest('.form-group');
    group.classList.remove('has-error');
    field.removeAttribute('aria-invalid');
    const err = group.querySelector('.field-error');
    err.hidden = true;
    err.textContent = '';
  }

  const fields = $$('input[required], textarea[required]', form);
  fields.forEach(f => {
    f.addEventListener('invalid', e => {
      e.preventDefault();
      showError(f);
      if (f === fields.find(x => !x.validity.valid)) {
        f.focus();
        if (status) status.textContent = 'Please fix the highlighted fields and try again.';
      }
    });
    f.addEventListener('input', () => { if (f.validity.valid) clearError(f); });
  });

  form.addEventListener('submit', () => {
    if (!form.checkValidity()) {
      const bad = fields.find(f => !f.validity.valid);
      if (bad) bad.focus();
      if (status) status.textContent = 'Please fix the highlighted fields and try again.';
      return;
    }
    if (status) status.textContent = 'Sending your message…';
    if (submit) submit.disabled = true;
  });

  window.addEventListener('pageshow', e => {
    if (e.persisted && submit) { submit.disabled = false; if (status) status.textContent = ''; }
  });
})();

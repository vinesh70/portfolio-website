/* ================================================================
   effects.js — decorative interaction layer (no dependencies).
   Safe to remove: the page works without it. Pointer effects only run
   on fine pointers and when reduced motion is not requested.
   ================================================================ */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fancy = fine && !calm;

  function all(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function clamp(n, a, b) { return Math.min(b, Math.max(a, n)); }

  /* ── Stagger indexes + skill tooltips ── */
  all('.resume-panel').forEach(function (panel) {
    all('.timeline-entry', panel).forEach(function (el, i) { el.style.setProperty('--i', i); });
    all('.skill-item', panel).forEach(function (el, i) {
      el.style.setProperty('--i', i);
      var img = el.querySelector('img');
      if (img && img.alt) el.setAttribute('data-name', img.alt);
    });
  });

  /* ── Scroll progress, hero parallax, back-to-top ── */
  var bar = doc.querySelector('.scroll-progress');
  var toTop = doc.getElementById('to-top');
  var heroContent = doc.querySelector('.hero-content');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || root.scrollTop;
    var max = Math.max(1, root.scrollHeight - window.innerHeight);
    var p = clamp(y / max, 0, 1).toFixed(4);
    if (bar) bar.style.setProperty('--p', p);
    if (toTop) {
      toTop.style.setProperty('--p', p);
      toTop.classList.toggle('show', y > 600);
    }
    if (heroContent && !calm) {
      var h = window.innerHeight;
      heroContent.style.setProperty('--hy', (clamp(y, 0, h) * 0.16).toFixed(1) + 'px');
      heroContent.style.setProperty('--ho', clamp(1 - y / (h * 0.85), 0, 1).toFixed(3));
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
      var brand = doc.querySelector('.nav-brand');
      if (brand) brand.focus({ preventScroll: true });
    });
  }

  /* ── Sliding nav indicator (desktop) ── */
  (function () {
    var container = doc.querySelector('.nav-container');
    var list = doc.getElementById('nav-menu');
    if (!container || !list) return;
    var ind = doc.createElement('span');
    ind.className = 'nav-indicator';
    ind.setAttribute('aria-hidden', 'true');
    container.insertBefore(ind, list);
    var desktop = window.matchMedia('(min-width: 768px)');

    function place() {
      var a = list.querySelector('.nav-link.active');
      if (!a || !desktop.matches) { ind.classList.remove('on'); return; }
      var c = container.getBoundingClientRect();
      var r = a.getBoundingClientRect();
      ind.style.setProperty('--x', (r.left - c.left).toFixed(1) + 'px');
      ind.style.setProperty('--w', r.width.toFixed(1) + 'px');
      ind.classList.add('on');
    }
    new MutationObserver(place).observe(list, { attributes: true, subtree: true, attributeFilter: ['class'] });
    window.addEventListener('resize', place);
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(place);
    place();
  })();

  if (!fancy) return;

  /* ── Hero: spotlight + orb parallax ── */
  var hero = doc.querySelector('.hero');
  if (hero) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
      hero.style.setProperty('--px', ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
      hero.style.setProperty('--py', ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
      hero.classList.add('is-hover');
    });
    hero.addEventListener('pointerleave', function () {
      hero.classList.remove('is-hover');
      hero.style.setProperty('--px', 0);
      hero.style.setProperty('--py', 0);
    });
  }

  /* ── Card spotlight ── */
  all('.cert-card, .project-card, .contact-card, .timeline-entry, .contact-form-wrap').forEach(function (el) {
    el.classList.add('spot');
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    el.addEventListener('pointerleave', function () {
      el.style.removeProperty('--mx');
      el.style.removeProperty('--my');
    });
  });

  /* ── 3D tilt ── */
  function tilt(el, max) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', ((0.5 - y) * 2 * max).toFixed(2) + 'deg');
      el.style.setProperty('--ry', ((x - 0.5) * 2 * max).toFixed(2) + 'deg');
    });
    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  }
  all('.project-card').forEach(function (el) { tilt(el, 5); });
  all('.profile-frame').forEach(function (el) { tilt(el, 10); });

  /* ── Magnetic buttons ── */
  all('.btn-primary').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height / 2);
      el.style.translate = (dx * 0.18).toFixed(1) + 'px ' + (dy * 0.3).toFixed(1) + 'px';
    });
    el.addEventListener('pointerleave', function () { el.style.translate = ''; });
  });

  /* ── Cursor ring ── */
  var ring = doc.querySelector('.cursor-ring');
  if (ring) {
    var tx = 0, ty = 0, cx = 0, cy = 0, running = false;
    var HOT = 'a, button, [role="tab"], input, textarea, .project-card';

    function loop() {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      ring.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) requestAnimationFrame(loop);
      else running = false;
    }
    doc.addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY;
      ring.classList.add('on');
      ring.classList.toggle('hot', !!(e.target.closest && e.target.closest(HOT)));
      if (!running) { running = true; requestAnimationFrame(loop); }
    });
    doc.documentElement.addEventListener('pointerleave', function () { ring.classList.remove('on', 'hot'); });
  }
})();

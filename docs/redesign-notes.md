# Redesign Notes

## Files
| File | Role |
|------|------|
| `index.html` | Entry point. Semantic markup, one `h1`, inline SVG icons, ARIA tabs |
| `css/tokens.css` | Colour (dark + light), type scale, spacing, radius, shadow, motion tokens |
| `css/base.css` | Reset, typography, focus ring, skip link, layout primitives, scroll-reveal, reduced-motion |
| `css/components.css` | Buttons, tags, form, timeline entries, skill tiles, loader |
| `css/sections.css` | Nav, hero, about, resume, certifications, projects, contact, footer |
| `css/effects.css` | Motion + finishing details (decorative layer) |
| `js/effects.js` | Pointer/scroll effects (decorative layer) |
| `css/pdf-resume.css` | Original PDF-resume styles, copied verbatim (Poppins, hardcoded colours) |
| `js/main.js` | Vanilla JS: theme, nav, mobile menu + focus trap, smooth scroll, tabs, reveal, typed text, form validation |

## Design tokens
- **Dark (default):** bg `#09090f`, surface `#111119`, text `#edeef5`, muted `#9aa0b8`, faint `#7d839c`, accent `#6b98ff`, accent-2 `#3ecfb0`
- **Light:** bg `#f7f7fc`, surface `#fff`, text `#0d0e1a`, muted `#4f5573`, faint `#5e6483`, accent `#2b5fce`, accent-2 `#0b7360`
- Theme order: saved choice (`localStorage: portfolio-theme`) → `prefers-color-scheme` → dark. A tiny inline script in `<head>` sets it before first paint (no flash).
- All text pairs computed >= 4.5:1 in both themes (script check, not a browser audit).
- Radius 6/12/20/28/pill. Spacing 4px base (`--sp-1`..`--sp-24`). Fluid type via `clamp()`.

## Fonts
Syne (display), Inter (body), JetBrains Mono (tags, dates, metadata), loaded from Google Fonts with `display=swap` and system fallback stacks.
Poppins is loaded **only on demand** when "Download Resume" is clicked, because the PDF template is designed in Poppins.

## Removed
Page no longer uses: Bootstrap 4, jQuery (+ migrate), AOS, Owl Carousel, Magnific Popup, Stellar, Scrollax, Waypoints, animateNumber, particles.js, animate.css, Flaticon/IcoMoon icon fonts, Poppins as a page font. Kept: html2pdf.js 0.10.1 (CDN, `defer`).

### Deleted files (approved by you; recoverable from git)
- `css/`: bootstrap.min.css, bootstrap/, animate.css, aos.css, owl.carousel.min.css, owl.theme.default.min.css, magnific-popup.css, flaticon.css, icomoon.css, style.css, ajax-loader.gif
- `js/`: every file except `main.js` (and the new `effects.js`)
- `fonts/` (flaticon, icomoon, mustardo)
- `images/`: IMG_8294~2.jpg, ResumePhoto.jpg, about.jpeg, contact.jpeg, favicon.png, linkedin.png, vinesh.jpg, vinesh_photo.jpeg, and unused skills icons (csharp, dart, flutter, illustrator, lightroom, linux, photoshop)
- **Still present, awaiting your decision:** `contact.php`, `PHPMailer/`, `README.md`

## Motion and detail layer (`css/effects.css`, `js/effects.js`)
Purely decorative; deleting both files leaves a complete page.
- Grain overlay, scroll-progress bar, back-to-top button with progress ring, theme-switch cross-fade
- Loader waits for fonts, then the hero plays: masked word reveal, shining gradient on the surname, pulsing status dot, blinking caret, scroll-mouse cue, drifting blurred orbs with pointer parallax, pointer spotlight, hero content parallax-fades on scroll
- Nav: sliding pill indicator that follows the active section; staggered mobile-menu links
- About: rotating conic photo border, two orbiting dashed rings, 3D photo tilt, row hover bar
- Resume: staggered entrance of entries and skill tiles on every tab switch, rail stubs between timeline cards, skill-name tooltips (from each image's alt text)
- Certifications: logo flick, corner arrow, verified-dot pulse. Projects: orbiting beam border, 3D tilt, index numerals, whole card clickable (same single link), tags light up. Contact: beam border on form focus, icon spring, ambient glow. Footer: gradient hairline, heartbeat.
- Pointer-spotlight on cards, magnetic primary buttons, trailing cursor ring (fine pointers only)
- Large screens: container widens at 1600px, whole UI scales 112.5% at 1920px. Landscape-phone and touch (no sticky hover) tweaks.
- `prefers-reduced-motion`: all animations/transitions collapse, pointer effects and parallax are not started, typed text becomes a plain phrase swap.

## Changes that touch content or behaviour (please review)
1. **"Live Demo" link label** added to each project card (new visible text; requested by the design direction). Each also has screen-reader-only text "— <project> (opens in new tab)".
2. **Tech tags** were `• A • B • C` inside one `<strong>`; now one pill per tech. Words unchanged, bullets dropped.
3. **CineMatch** link previously opened in the same tab; all project links now open in a new tab with `rel="noopener noreferrer"`.
4. **Hero/nav:** brand link now points to `#home-section` (was `index.html`); the mobile "Menu" text label is replaced by a hamburger icon with `aria-label`.
5. **Footer headings** are now `h2` with the same text (were `h2` too, restyled); footer social links gained `aria-label`s and `rel="noopener noreferrer"`.
6. **Form:** action, `_subject`, `_honey` and field names untouched. Added inline error text, `aria-describedby`, a "Sending…" state and a live status region. The post-submit confirmation is still formsubmit.co's own page.
7. **Resume** is now a true tab widget (one panel visible at a time, arrow/Home/End keys) instead of three stacked sections with a scroll-spy sidebar.
8. **Hero typed text** under `prefers-reduced-motion`: phrases cycle without typing animation.
9. **Section numerals 01-05** (aria-hidden, decorative) added above section headings.
10. Added `og:type`, `og:url`, `twitter:*`, `theme-color` meta. **No `og:image`** yet (none exists in the repo).

## Flagged, not fixed
- `fiverr.com/ahsankhan26` — only in a commented-out block in the old HTML; not carried into the new page.
- Duplicate jQuery copies (`jquery.min.js` and `jquery-3.2.1.min.js`).
- `contact.php` + `PHPMailer/` unused; `contact.php` takes unvalidated input.
- Phone and email in plain text (scrapable). Optional fix: assemble them in JS at runtime or use a contact-form-only approach. Not applied.
- Personal Gmail (handled separately per your note).
- **Phone mismatch:** page `+91 7021448700` vs PDF resume `+91 9820 596 491`.
- **PDF resume content differs from the visible resume:** different schools (Thakur College / Our Lady of Remedy vs S.I.E.S / K.M.S), different Cognitio name ("Cognitio Analytics Pvt. Ltd." vs "Cognitio Knowledge Tech Pvt Ltd"), extra metrics (93.2%, 94.4%, "~12%", "97.4% precision", "Hackathon Winner … Top 10 Nationally") and project details that don't appear on the site. Left untouched.
- Typos kept as-is: "Vidyalankar Instiute", "oxyptocurrency", "an seamless".
- Resume PDF single-source proposal: build the PDF DOM from one JS data object that also renders the visible resume. Not done (it would force a decision on the content mismatches above).

## Not verified (no browser automation available on this machine)
Headless browsers are blocked by an admin policy, so these were **not** run: screenshots at 360/768/1024/1440/1920, both themes, Lighthouse scores, click-testing, keyboard and reduced-motion passes, and a rendered check of the downloaded PDF. Static checks that were run: content/link/image diff vs original, class coverage, id references, JS syntax, CSS brace balance, computed contrast.

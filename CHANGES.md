# Project review and changes

## 2026-09-30 — Mobile contact bar

- Added fixed Call / WhatsApp actions at phone widths up to 760px; the bar and its spacer are hidden on larger screens.
- The bar appears only once the hero's contact buttons have scrolled above the viewport and hides again on returning to them. Passive scroll handling is batched with requestAnimationFrame and accounts for direct anchor jumps, resizing and enlarged text.
- Added Portuguese/English labels and accessible names, using the existing phone number and WhatsApp destination.
- Kept buttons at least 48px high and allowed labels to wrap with enlarged text. Enabled viewport safe-area support and padded the bar for phone gesture areas and side insets.
- Reserved the bar's measured height after the footer and added bottom scroll padding, so the final content and focused controls remain reachable. Observers are cleaned up when the component unmounts. Without JavaScript, existing page contact links remain available and the extra bar stays hidden.
- Updated the README and rebuilt the static GitHub Pages output in `/docs`.
- Validation: `bun run check` and the production build passed with no warnings/errors. Chromium checks passed for both languages at 320, 390 and 760px (visible after the hero) and 768, 1024 and 1440px (hidden). Verified destinations, 48px targets, footer clearance, returning to the top, 200% text, direct anchor loads and language/viewport changes. No runtime or HTTP errors; custom-domain and Pages files remain intact.

## 2026-09-30 — Readable text and touch targets

- Kept main reading text at 1rem (normally 16px), supporting text at 0.875rem (14px) and decorative labels at 0.75rem (12px). Converted responsive heading sizes to rem-based limits so they also follow enlarged-text preferences.
- Enlarged PT/EN targets to at least 44×44px and ensured visible navigation, contact and footer links have comfortable targets, including the compact navbar.
- Replaced crowded inline mobile/tablet section links with a native Menu disclosure at widths up to 1080px. Full section labels appear in a dropdown, while PT/EN stays visible. The menu supports keyboard activation, Escape with focus restoration, outside-tap dismissal and closing after a section is chosen; native disclosure also works without JavaScript.
- Preserved the compact header's 60px desktop / 56px mobile minimum row height. Allowed wrapping when enlarged text requires more room, and measured the actual header height for anchor offsets so section headings remain visible.
- Added layout safeguards for long translated text, email wrapping, enlarged headings and image captions. No bottom contact bar was added; that remains a proposed feature.
- Updated the README and regenerated the GitHub Pages files in `/docs`.
- Validation: `bun run check` passed with zero errors/warnings and the production build passed. Chromium checks passed for Portuguese and English at 320, 390, 768, 1024 and 1440px, with both normal and 200% text size: visible links/disclosures meet 44×44px, no horizontal overflow, keyboard menu open/Escape/focus restoration, section headings clear of the header and compact scrolling. Language switching and native menu/FAQ operation without JavaScript also passed, with no runtime errors.

## 2026-09-30 — Smaller navbar and English support

- Reduced the compact main header row again: 72px → 60px on desktop and 64px → 56px on mobile. Desktop logo and brand text are slightly smaller; contact links retain 44px tap targets.
- Reserved the expanded header's layout space so resizing it does not move the page's scroll position.
- Added PT/EN language links to desktop and mobile navigation, with a visible current-language indicator. Shortened mobile section labels to keep the navigation usable on narrow screens.
- Kept Portuguese at `/` and added English at `/en/`. Both pages use the same section components and are statically generated; language selection stays in the URL for refreshes and sharing.
- Moved translated copy from `site.ts` and individual components into typed `pt.ts` and `en.ts` files. Shared business details remain in `site.ts`. Translated services, FAQs, navigation, section content, alt text, accessibility labels and metadata; kept the business name unchanged.
- Added correct document language in generated HTML and during client navigation, localized canonical/social/structured metadata, alternate-language links and a bilingual sitemap.
- Enabled trailing slashes so the English build produces `docs/en/index.html`, supporting direct access on GitHub Pages without a server rewrite. No runtime translation service or new dependency is required.
- Updated maintenance documentation and rebuilt `/docs`, retaining CNAME and `.nojekyll`.
- Validation: type checks passed with zero warnings/errors and the static build passed. Both languages passed Chromium checks at 320, 390, 768, 1024 and 1440px, including header sizes/restoration, no horizontal overflow, section links and keyboard FAQ controls. Verified desktop/mobile switching, direct English access, refresh, browser back, localized metadata and switching without JavaScript. Confirmed all generated local assets and Pages files; no browser runtime or HTTP errors.

## 2026-09-30 — Compact navbar on scroll

- Added a compact navbar state after scrolling 64px, restoring the full size within 8px of the top. Separate thresholds prevent flickering as the header changes height.
- Reduced the main header row from 89px to 72px on desktop and 76px to 64px on mobile. The logo, brand text, phone number and phone icon shrink together with a subtle 220ms transition.
- Kept contact/navigation targets at least 44px high and respected reduced-motion preferences. Footer branding is unaffected.
- Enabled client-side hydration in `src/routes/+layout.ts` for the scroll listener, with passive scrolling and listener cleanup. The page remains prerendered into `/docs`; its content, links and FAQs still work without JavaScript.
- Updated the README and regenerated the GitHub Pages output.
- Validation: `bun run check` passed with zero errors/warnings; `bun run build` passed. Chromium checks confirmed shrinking/restoration and stable sizing at 320, 390, 768 and 1440px, unchanged footer branding, 44px phone targets and reduced-motion support. Existing responsive, keyboard, anchor, contact and no-JavaScript FAQ checks also passed.

## 2026-09-30 — Presentation and structure

### Findings addressed

- The full-screen hero depended on a roughly 13 MB background image, and important information was hidden at smaller screen sizes.
- Long, repetitive service copy, placeholder text, spelling inconsistencies and an unrelated company name weakened the presentation.
- Contact details and SVGs were duplicated. The page mixed large content blocks with layout, while unused helpers, styles and imports obscured the active code.
- FAQs waited for an intersection observer and JavaScript before rendering. They also introduced a second `h1` and used a custom toggle instead of native disclosure semantics.
- There was no section navigation or skip link. Several icon-only links had no accessible name, images had empty alt text, and the email was not a link.
- CSS imported Tailwind twice; an unused legacy Tailwind configuration did not match the current v4 setup.
- `CNAME` existed only in `docs/`, where a clean build could remove it. Prerender HTTP failures were reduced to warnings.

### Design and content

- Retained the Portuguese blind repair theme, original photos, blue/orange identity, phone, email, WhatsApp destination and service region.
- Replaced the full-screen banner with a responsive split hero, restrained navy/blue/orange palette, consistent typography, spacing, borders and button styles.
- Added sticky desktop navigation, a mobile navigation row, keyboard skip link and a full company-name wordmark using the existing blind icon.
- Shortened service copy into three equal cards with practical descriptions and service lists. All cards remain visible on mobile.
- Presented the service process as four numbered steps, added a service-area section, and grouped phone, WhatsApp and email in a dedicated contact section.
- Rewrote the FAQs with concise European Portuguese answers. Removed the reference to “Doutor House”, placeholder text, market-leader/best-price claims and unsupported fixed warranty/immediate-arrival promises. Pricing, timing and warranty terms now direct customers to confirm their specific case. No testimonials, ratings or statistics were invented.
- Added visible phone-call information and improved footer navigation. The footer year is generated during the build.

### Code and accessibility

- Centralized business information and editable copy in `src/lib/content/site.ts`.
- Reduced `+page.svelte` to clearly named section components. Replaced `Wwd`/`WwdCard` and `SeqCard` with `Services` and `Process`; removed the unused contact-formatting, intersection and click-outside helpers.
- Reused the existing logo and added a small shared decorative SVG icon component. Fixed `currentColro` to `currentColor`.
- Consolidated styling in `src/app.css`, with design tokens and responsive/reduced-motion rules; removed `layout.css` and the unused legacy `tailwind.config.js`. Limited Tailwind scanning to source files so generated `docs/` content cannot add stale utilities.
- Used one `h1`, named sections, meaningful image descriptions, explicit link names, focus styles and generous contact/FAQ targets.
- Replaced FAQ scripting with native `<details>/<summary>`, including keyboard support and answers in prerendered HTML.
- Kept prerendering and disabled client-side rendering: this page now works as HTML/CSS without shipping hydration scripts. Future JavaScript interactions require re-enabling CSR.

### Performance, metadata and deployment

- Added 800px and 1600px WebP hero variants, responsive `srcset`, intrinsic dimensions and high fetch priority. Kept the original images. Lazy-loaded the service photos.
- Replaced the external Google Fonts import with a system font stack, avoiding a font request and layout shifts while fonts load.
- Kept the existing title, canonical domain and business schema; sourced contact/service information from the shared content module and added locale, email and social-preview image metadata.
- Preserved the static adapter's `docs/` output, empty custom-domain base path, `.nojekyll`, sitemap, robots.txt and Google verification file.
- Added `static/CNAME` so the domain survives every build; removed the stale repository-name variable and restored default strict handling of prerender HTTP failures.
- Regenerated `docs/` from the updated source. No deployment, push or Pages settings changes were made.
- Added `README.md` with editing locations, local commands, image regeneration and the `/docs` publishing workflow.

### Validation

- `bun run check`: zero errors and zero warnings.
- `bun run build`: static production output successfully generated in `docs/`.
- Served the actual `docs/` directory and checked it in Chromium at 320, 390, 768, 1024 and 1440px: no horizontal overflow, working FAQ disclosure and visible anchor targets below the sticky header.
- Checked keyboard skip navigation and FAQ activation, one `h1`, canonical and structured metadata, phone/email destinations, all section anchors and loaded images.
- Checked content and FAQ operation with JavaScript disabled; no browser runtime exceptions or HTTP errors.
- Inspected desktop and mobile screenshots. Final artifact checks also cover CNAME, `.nojekyll`, verification files and absence of client hydration scripts.

The environment's system npm executable fails before running scripts (`Yallist is not a constructor`); Bun was used to run the existing scripts. This does not change project dependencies or lockfiles.

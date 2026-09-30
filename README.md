# Estores Sem Problema

Portuguese and English service website for blind repair, installation and maintenance in Leiria and nearby towns. Built with Svelte 5, SvelteKit, TypeScript and Tailwind CSS 4. Published on GitHub Pages from the committed `docs/` directory at **https://estoresemproblema.com/**.

## Development

Use a Node version supported by the installed Vite version and install the locked dependencies:

```sh
npm ci
npm run dev
```

Before publishing:

```sh
npm run check
npm run build
npm run preview
```

Bun can also run the existing scripts (`bun run check`, `bun run build`, `bun run dev`). No dependencies were added for the redesign. The system npm executable in the review environment failed with `TypeError: Yallist is not a constructor`, so validation used Bun with the existing dependencies.

## Where to edit

| File or directory | Purpose |
| --- | --- |
| `src/lib/content/site.ts` | Shared business details, phone, email, WhatsApp and service areas |
| `src/lib/content/pt.ts` / `en.ts` | Portuguese and English copy, navigation, service descriptions, FAQs, accessibility labels and metadata |
| `src/lib/content/context.ts` | Typed translation registry and reactive content context |
| `src/lib/components/` | Named page sections: Header, Hero, Services, Process, ServiceArea, Contact and Footer; shared icons |
| `src/lib/components/faq/` | FAQ section and native HTML disclosure component |
| `src/lib/components/HomePage.svelte` | Shared section order and main landmark for both languages |
| `src/routes/+page.svelte` / `en/+page.svelte` | Portuguese `/` and English `/en/` pages |
| `src/hooks.server.ts` | Correct document language in generated HTML |
| `src/routes/+layout.svelte` | Shared stylesheet, page metadata, social preview and structured business data |
| `src/routes/+layout.ts` | Static prerendering and client-side hydration for the compact header |
| `src/app.css` | Design tokens, shared styles, section layouts and responsive breakpoints |
| `static/` | Images, favicon, CNAME, `.nojekyll`, search verification, sitemap and robots.txt |
| `docs/` | Generated production site; rebuild rather than editing it directly |

The page uses native anchor links and `<details>/<summary>` FAQs, which work without JavaScript. Client-side rendering is enabled for the navbar: after scrolling 64px, it smoothly reduces its height, logo, brand text and phone number. Returning to the top restores the full size. The transition respects reduced-motion preferences; without JavaScript, the full-size sticky header remains usable. Static prerendering and the GitHub Pages deployment stay the same.

Keep the canonical domain in `site.ts`, `static/CNAME`, `static/sitemap.xml` and `static/robots.txt` aligned if the domain changes. The footer year is generated at build time.

## Readability and mobile controls

Main reading text uses `1rem`, secondary text `0.875rem`, and decorative labels `0.75rem`. Headings use rem-based responsive limits so browser text-size preferences are respected. Links and disclosure controls have at least 44×44px touch targets.

At widths up to 1080px, a native **Menu** disclosure replaces the crowded section-link row. PT/EN remains visible beside it. The menu can be opened with Enter or Space, dismissed with Escape or an outside tap, and closes after selecting a section. It also opens without JavaScript. The dropdown fades and slides over 220ms, with a rotating chevron; unsupported browsers keep instant disclosure. The compact header is retained; enlarged text can wrap, and anchor offsets track the actual header height.

When verifying layout changes, check both languages at 320px and larger, with normal and 200% text size. Keep the phone, language switch and menu accessible at both sizes.

Buttons and service cards have subtle hover transitions on devices with a mouse or trackpad. The mobile contact bar fades in with a short upward movement. Reduced-motion preferences disable these effects. Service cards use their titles without decorative numbering; the process section keeps its numbered steps.

## FAQ interaction

The FAQ uses a shared `name="service-faq"` on native details elements to keep at most one answer open. Answers expand/collapse and fade over 260ms; the plus/minus icon follows the same timing. Reduced-motion preferences turn these effects off.

The behavior does not depend on client JavaScript. CSS animation is progressively enhanced with `::details-content` and discrete transitions; browsers lacking those features retain normal instant disclosure. See the [native grouping reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) and [details-content animation reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::details-content).

## Mobile contact bar

`src/lib/components/MobileContactBar.svelte` adds Call and WhatsApp buttons along the screen's bottom edge at viewport widths up to **760px**. It appears after `#hero-contact-actions` scrolls above the viewport and hides when returning to the hero. Larger screens never display it.

The labels follow the selected language and the destinations use `site.ts`. Safe-area padding accommodates phone gesture areas; a resize observer keeps footer spacing and bottom scroll padding aligned with the actual bar height, including enlarged text. The bar stays hidden without JavaScript, while the regular contact links continue to work.

## Languages

Portuguese is served at `/` and English at `/en/`. The PT/EN links in the navbar switch between complete pages; the selected language remains in the URL when refreshed or shared. No automatic language redirects or storage are required. The company name remains **Estores Sem Problema** in both languages.

Edit Portuguese copy in `src/lib/content/pt.ts` and its English equivalent in `en.ts`. English is checked against the Portuguese object type, so missing translation keys fail the type check. Contact information stays in `site.ts` and is shared by both versions.

Both pages are prerendered, including translated page titles, descriptions, social metadata, structured data and accessible labels. Each has its own canonical URL, with alternate-language links and sitemap entries. `src/hooks.server.ts` sets the HTML language at build time; the layout updates it during client navigation. Language links and FAQs also work without JavaScript.

The English page is generated as `docs/en/index.html`, allowing direct visits and refreshes on GitHub Pages. To add another language later, add its typed translation and route, extend language selection in `+layout.ts` and `hooks.server.ts`, and update the switcher, alternate-language links and sitemap.

## GitHub Pages deployment

1. Run the checks and build. The static adapter writes HTML and assets to **`docs/`**.
2. Review and commit source changes **and all generated changes in `docs/`**, including added and removed hashed assets.
3. Push to the branch configured in GitHub Pages. Its publishing source should remain **Deploy from a branch → that branch → `/docs`**.
4. Keep the custom domain set to `estoresemproblema.com` and HTTPS enabled in Pages settings.

`static/CNAME` and `static/.nojekyll` are copied into `docs/` on every build. The CNAME originally existed only in generated output; keeping it in `static/` prevents rebuilds from losing the domain configuration. `.nojekyll` allows Pages to serve SvelteKit's `_app` assets.

The base path is deliberately empty because the custom domain serves the site at `/`. If you switch to the default project URL (`https://esp2025-alt.github.io/esp2025-test/`), set the base to `/esp2025-test`, remove the custom-domain CNAME, and update canonical/social metadata, robots.txt and the sitemap for that deployment. Local image and home links already use SvelteKit's base path.

To test the exact output without a Vite server:

```sh
python3 -m http.server 4187 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:4187`. Check `/` and `/en/` at desktop and mobile widths, language switching, anchor navigation, keyboard focus, FAQs and contact links. FAQs and navigation should also work with JavaScript disabled.

## Images

The original photos are preserved. The hero uses responsive WebP copies of `static/images/hero.jpg` (approximately 17 KB and 48 KB, versus the 13 MB original). Other images load lazily. To regenerate the hero variants with FFmpeg:

```sh
ffmpeg -y -i static/images/hero.jpg -vf scale=800:-1 -frames:v 1 -c:v libwebp -quality 80 static/images/hero-800.webp
ffmpeg -y -i static/images/hero.jpg -vf scale=1600:-1 -frames:v 1 -c:v libwebp -quality 82 static/images/hero-1600.webp
```

See [CHANGES.md](CHANGES.md) for the review findings, design decisions and verification record.

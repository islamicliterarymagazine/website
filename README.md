# Islamic Literary Magazine at Yale — website

## Files
- `index.html`, `issues.html`, `issue.html`, `who-we-are.html`, `resources.html`, `contact.html`, `404.html`
- `style.css` — all styles
- `script.js` — settings (Part 1), issues (Part 2), site code (Part 3)
- `assets/img/` — logo and favicon
- `assets/issues/<id>/` — each issue's `cover.jpg` and `issue.pdf`

Plain HTML, CSS and JavaScript. No build step, no server code. Upload the whole folder to any static host (GitHub Pages, Netlify, Yale web space, or any web server) with `index.html` at the root.

## Pages
- `index.html` — Home: current issue, its contents, about, get involved, recent issues
- `issues.html` — Past Issues, grouped by volume
- `issue.html?id=…` — one issue: cover, editors' note, page-turning PDF reader, contents, then the pieces themselves
- `who-we-are.html` — mission, masthead, **Join the Board** (`#join`), **Apply for Leadership** (`#leadership`)
- `resources.html`, `contact.html`, `404.html`

## Adding a new issue
1. Create `assets/assets/issues/<id>/` (like `assets/issues/legacy/`) and put `issue.pdf` and `cover.jpg` in it.
2. Open `script.js (Part 2)`, copy an entry to the **top** of the list and fill it in (`cover`, `pdf`, `contents` …).
3. Move `current: true` to the new entry. The home page and archive update themselves.
No cover yet? Leave `cover` empty and a typographic cover is drawn using `arabic` and `tone`.
The site currently holds one issue, *Legacy* (Vol. I, No. 1). Its piece texts were extracted from the PDF — proofread the line breaks. "Wandering Nights" is image-only in the PDF, so it is listed without text.

## Settings — `script.js (Part 1)`
- Email, Instagram
- `boardFormUrl` / `leadershipFormUrl` — paste Google Form links; empty opens an email to the magazine
- `leadershipOpen`, `leadershipDeadline` — switches the “Applications open / closed” label and button
- `calligraphy` — `ruqaa` (default), `naskh`, `kufi` or `nastaliq`
- `arabicMark` — the calligraphic mark (default علم)

## Editing text
Masthead names, mission, roles, positions, timeline and resources are plain text in the HTML files — search for the words and replace them. The masthead (2025–26) comes from the Legacy issue; add colleges and class years if you like.

## Type
EB Garamond (text), Cormorant Garamond (display), Aref Ruqaa (calligraphy), Amiri (Arabic text) — all from Google Fonts.

## Page-turning reader
If an issue has a `pdf`, its page shows the PDF as a book with animated page turns (PDF.js renders the pages, StPageFlip animates them; both load from a CDN only on issue pages). Click or drag a page corner, use the arrow buttons, or the ← → keys.
- The PDF must be on the same site as the pages. It won't work when opening files straight from your computer (`file://`); preview with a local server or on the live host.
- Keep PDFs under ~30 MB; every page is rendered when the reader opens.
- Pages paint in the background starting from the one being read, so the book opens right away even for long issues.

## Logo
`assets/img/logo.png` (transparent). The header and footer tint it with the theme colours using a CSS mask; replace the file to update it everywhere.

## Contact
No forms: the Contact page lists subjects, and each opens a pre-addressed email to islamicliterarymagazine@gmail.com.

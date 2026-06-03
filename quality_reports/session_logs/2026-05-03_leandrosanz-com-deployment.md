# Session log — leandrosanz.com deployment and iteration

## Current goal
Build and ship a new personal academic website for Leandro Sanz at
`https://leandrosanz.com`, replacing the legacy Jekyll site at
`https://leandrosanz.github.io`. Iterate on content, layout, and SEO.

## Status
Site is live and fully functional:
- New static site at `https://leandrosanz.com` (HTTP and HTTPS)
- TLS cert issued by Let's Encrypt (valid until 2026-07-25, auto-renewing)
- Old `leandrosanz.github.io` redirects (301) to the new domain
- DNS records at Cloudflare resolve to all four GitHub Pages IPs
- SEO basics in place: `sitemap.xml`, `robots.txt`, canonical URLs,
  Open Graph + Twitter Card tags, Schema.org `Person` JSON-LD
- Clean URL structure: `/` (home/about) and `/research/` (papers)

## Tech stack
- Plain HTML5 + custom CSS (no framework, no build step)
- Vanilla JS for theme toggle, mobile nav, abstract expand/collapse
- Hosted on GitHub Pages from `master` branch of
  `github.com/leandrosanz/leandrosanz.github.io`
- `.nojekyll` flag at root so GitHub serves files as-is
- Domain: `leandrosanz.com` purchased through Cloudflare; CNAME file
  in repo root tells GitHub Pages the canonical domain

## Working directories
- `~/Dropbox/Website 2.0/` — site source, git repo connected to GitHub Pages
- `~/code/overleaf/cv` — clone of Overleaf CV project for git-based edits
  (URL: `https://git@git.overleaf.com/647380ee0e110f15931f17d6`)
- `~/Dropbox/Website/leandrosanz.github.io/` — legacy Jekyll site, kept
  for archival reference; not connected to the live deployment

## Content
**Home (`index.html`)**
- Hero: name, title, photo, short bio, contact row (email, address,
  LinkedIn, Google Scholar), Ph.D. line
- "Selected working papers": Supply Chain Disruptions, Large Startups
  (Unicorns), each with short note + collapsible abstract + figure
  thumbnail row + PDF/SSRN/Abstract pill buttons

**Research (`research/index.html`)**
- Working papers (2): Supply Chain Disruptions, Large Startups
- Registered reports (1): Global Financial Markets and MNC Investment
  (R&R RCFS)
- Publications (5, newest-first): EPU, EDGAR, Connectedness, Reg
  Arbitrage, Property Rights — each with Journal + PDF + Abstract
  buttons

**CV (`assets/files/Leandro_Sanz_CV.pdf`)**
- Source: `~/code/overleaf/cv/template.tex`
- Updated to point to `leandrosanz.com` and the new Supply Chain paper

## Recent fixes
- `/research/` (trailing slash) was 404'ing; moved `research.html` to
  `research/index.html` and converted all asset/nav links to root-
  absolute paths so they work from any URL depth
- Updated sitemap to use `/research/` instead of `/research.html`

## Pending user actions
1. **Enable "Enforce HTTPS"** in GitHub repo Settings → Pages (cert is
   issued; checkbox should be available now)
2. **Verify `leandrosanz.com` in Google Search Console** and submit
   `https://leandrosanz.com/sitemap.xml` to accelerate indexing
3. **Update external profiles** (Google Scholar, SSRN, Notre Dame
   faculty page, ORCID, email signature) to point to new domain
4. *(Optional)* Flip Cloudflare proxy from gray (DNS only) to orange
   (Proxied) for CDN/DDoS benefits once HTTPS is enforced

## Key style/voice rules established
- No em dashes in prose
- No colons in prose (bibliographic citation colons in publication
  meta lines are fine)
- Abstracts are collapsible behind an "Abstract" pill button; default
  state collapsed
- Each working paper has a 1–2 sentence note above the abstract;
  published papers do not (CV-style citation only)
- Figures sit below the link buttons, as a single horizontal row of
  small thumbnails, only on the Supply Chain paper

## Update workflow
- **Website:** edit in `~/Dropbox/Website 2.0/`, then
  `git add -A && git commit -m '...' && git push`. GitHub Pages
  rebuilds in ~1–2 min.
- **CV:** edit `~/code/overleaf/cv/template.tex`, commit and push to
  Overleaf, recompile in Overleaf browser, drop the PDF into
  `~/Dropbox/Website 2.0/assets/files/Leandro_Sanz_CV.pdf`, then
  commit and push the website.

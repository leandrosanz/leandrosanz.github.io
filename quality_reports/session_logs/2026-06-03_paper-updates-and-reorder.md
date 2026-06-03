# Session log — paper updates, new working paper, newest-first ordering

## Current goal
Maintain the live site at `https://leandrosanz.com`: add a new working
paper, update an existing paper's links, fix the office address, and
order working papers newest-first across the site and CV.

## Status
Site is live and fully functional (see 2026-05-03 log for deployment
details: GitHub Pages, Cloudflare DNS, Let's Encrypt TLS, clean URLs).
All changes below are committed and pushed; verified live.

## Changes this session

**New working paper added**
- "Who Sets the Price? The Vertical Origins of Uniform Pricing"
  (Alvin Chen, Leandro Sanz, Michael D. Wittry), June 2026
- SSRN: `abstract_id=6870999`
- PDF hosted at `assets/files/Who_Sets_the_Price.pdf`
- Added to home page, research page, and CV
- PDF was converted to markdown via `marker_single` to extract the
  exact abstract before drafting the card

**Who Sets the Price — key figures**
- Added a four-figure thumbnail row to the card (home + research),
  same treatment as the Supply Chain paper
- Source: `~/Dropbox/Apps/Overleaf/AI externalities/Figures/`
- Selected: `event_study_linkup_ai_matched.png` (AI adoption),
  `sdid3.png` (price dispersion), `sdid5.png` (repricing frequency),
  `sdid1.png` (price level); copied to
  `assets/images/papers/who-sets-the-price/`
- All clean navy event-study plots; trace the narrative AI adoption
  then dispersion up, repricing up, price level down

**CV cleanup (Who Sets the Price)**
- Dropped the redundant separate "SSRN Link"; title carries the link
- Removed a stale duplicate of the paper from the Work in Progress
  section (it had graduated to a working paper)

**Organization capital / large startups paper**
- Replaced the older "Why do Startups Become Unicorns" version with
  the new "Organization capital, large startups, and the dearth of
  IPOs" (Fahlenbrach, Sanz, Stulz), May 2026
- SSRN: `abstract_id=6712199`; NBER WP: `https://www.nber.org/papers/w35191`
- Coauthor Davydova removed; Media line dropped on website (kept on CV)

**Office address**
- Replaced multi-line street address with a single linked
  "University of Notre Dame" pointing to the Mendoza directory:
  `https://mendoza.nd.edu/mendoza-directory/profile/leandro-sanz/`
- Building icon replaces the map-pin icon in the contact row

**Hero blurb** (updated earlier this session)
- "I study corporate finance, with a focus on how firms respond to
  frictions in capital markets, product markets, and production
  networks. My recent work examines supply chain risk, intangible
  assets, and firms' pricing decisions."

**Ordering**
- Working papers are now newest-first on home, research, and CV:
  1. Who Sets the Price? (June 2026)
  2. Organization capital, large startups (May 2026)
  3. Building Corporate Resilience to Supply Chain Disruptions (April 2026)

## Working directories
- `~/Dropbox/Website 2.0/` — site source, git repo → GitHub Pages
- `~/code/overleaf/cv` — Overleaf CV clone
  (`https://git@git.overleaf.com/647380ee0e110f15931f17d6`)
- Paper PDFs/sources dropped by user into `~/Dropbox/Website 2.0/Papers/`
  and `~/Downloads/`; copied into `assets/files/` with clean names

**CV PDF refreshed**
- User compiled the CV in Overleaf and saved to `~/Downloads/Leandro_Sanz_CV.pdf`
- Copied into `assets/files/Leandro_Sanz_CV.pdf`, committed, pushed
- Verified live at `https://leandrosanz.com/assets/files/Leandro_Sanz_CV.pdf`
  (89,749 bytes, content-type application/pdf)
- Hosted CV now reflects the new working papers and newest-first order

## Pending user actions
1. Carryover from 2026-05-03: enable "Enforce HTTPS" in GitHub Pages
   settings; verify domain in Google Search Console; update external
   profile links; optionally flip Cloudflare proxy to orange

## Key style/voice rules (unchanged)
- No em dashes, no colons in prose (bibliographic citation colons OK)
- Working papers: 1–2 sentence note above a collapsible abstract
- Published papers: citation only, no note
- Abstracts collapsed by default behind an "Abstract" pill button
- Figures only on the Supply Chain paper, single row of small thumbnails

## Update workflow
- **Website:** edit in `~/Dropbox/Website 2.0/`, then
  `git add -A && git commit && git push`. Rebuilds in ~1–2 min.
  Verify live with a cache-busting query string.
- **CV:** edit `~/code/overleaf/cv/template.tex`, `git pull --rebase`
  first (Overleaf auto-commits), then commit + push; recompile in
  Overleaf; drop PDF into `assets/files/`.

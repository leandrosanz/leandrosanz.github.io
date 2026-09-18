# Session log — Google Analytics (GA4) tagging

## Current goal
Get `https://leandrosanz.com` reporting to Google Analytics. The user
had GA open in Chrome and saw no data; the site had never been tagged.

## Status
Done and verified live. Both pages now load Google's gtag.js and send
pageview hits to GA4 property `G-ZBSD9RPTNT`. The GA home page will
show "No data received from your website yet" until the first hits are
processed; Realtime should populate within minutes, standard reports
within 24 to 48 hours.

## Changes this session

**Google Analytics property (created by the user in Chrome)**
- Google account `lean.sanz50@gmail.com`, GA account `sanz8`,
  property `Website`, web stream for `leandrosanz.com`
- Measurement ID `G-ZBSD9RPTNT`
- Dashboard: `https://analytics.google.com/analytics/web/#/a285682917p407281513/reports/intelligenthome`

**Tag added to the site** (commit `5ec9089`)
- Standard gtag.js snippet inserted immediately after
  `<meta charset="UTF-8">` in `index.html` and `research/index.html`
- `research.html` at the root is only a redirect stub, left untagged
- Any future page must carry the same snippet; copy it from the head
  of `index.html`

**Verification**
- Polled the live site with cache-busting query strings until both
  pages served the ID (about one minute after push)
- Loaded the live homepage in a real browser and inspected it:
  `gtag` defined, `google_tag_manager["G-ZBSD9RPTNT"]` configured,
  gtag.js fetched from googletagmanager.com, and two
  `google-analytics.com/g/collect?v=2&tid=G-ZBSD9RPTNT` hits sent
- No console errors

## Tooling notes
- The Claude in Chrome extension is not connected on this Mac. The
  Measurement ID was read off the user's Chrome window with the
  computer-use screenshot tools (browser apps are read-only there).
- The first computer-use permission grant triggered macOS
  Accessibility and Screen Recording prompts that restarted the
  desktop app twice; it works once those are granted.

## Pending user actions
1. Open GA Realtime after visiting the site to confirm hits arrive
2. Optional: in GA Admin, define internal traffic for your own IP so
   your visits are excluded from reports
3. Optional: link the GA property to Google Search Console
4. Carryover from 2026-05-03: enable "Enforce HTTPS" in GitHub Pages
   settings; verify domain in Google Search Console; update external
   profile links; optionally flip Cloudflare proxy to orange

## Update workflow (unchanged)
- **Website:** edit in `~/Dropbox/Website 2.0/`, then
  `git add -A && git commit && git push`. Rebuilds in ~1–2 min.
  Verify live with a cache-busting query string.

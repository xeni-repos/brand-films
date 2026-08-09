# AI Travel Agent — B2B brand film

A ~24-second, self-contained HTML brand film for the white-label AI Travel Agent, aimed at travel professionals: independent agents, group consultants, host agencies, and leisure travel planners.

The reseller's brand sits front and center; the Xeni Travel Commerce Platform (xTCP) runs underneath.

## The story (autoplays and loops)

1. **Plan by intent** — a sales agent briefs the AI in plain language about a client's trip (John's Amalfi honeymoon), and gets back two complete itineraries. The agent reviews them and sends them to the client for Purchase Allowance approval.
2. **Autonomous booking** — the agent sets a target nightly rate; the platform books the room the moment the market hits it. It's paid within the approved allowance, so the customer never shares card or bank details and money never leaves their account.
3. **Auto-rebook & refund** — after booking, a rate drop triggers an automatic rebooking, and the savings are split between the traveler and the agent.

## How to preview

- **Easiest:** download `index.html` and open it in any modern browser. It's fully self-contained — no build step, no internet needed (the background photo is embedded).
- **Embed on a page:**
  ```html
  <iframe src="index.html"
          title="AI Travel Agent"
          style="width:100%;max-width:940px;aspect-ratio:16/9;border:0;border-radius:16px"
          loading="lazy"></iframe>
  ```

## Rebrand per partner (no code edits)

The hero and CTA show a placeholder brand ("Your Travel Brand"). Swap it per partner with URL parameters:

| Param | Sets |
|-------|------|
| `?brand=` | Hero/CTA wordmark, and auto-names the in-product agent |
| `?agent=` | Overrides just the in-product agent name |
| `?url=`   | CTA domain |

Example — a Hashgraph Travel cut:

```
index.html?brand=Hashgraph%20Travel&url=ai.hashgraphtravel.com
```

## Produce social videos (music + voiceover)

To turn the silent web loop into a narrated LinkedIn / Reels / Shorts video:

1. **Capture a clean MP4** — record the film straight from the live URL:
   ```bash
   # one-time: ffmpeg on PATH (brew install ffmpeg), then:
   npm i playwright && npx playwright install chromium
   node capture.mjs
   ```
   Produces `ai-travel-agent-16x9.mp4` (silent, 1080p) using the film's `?fill=1`
   full-bleed capture mode. Override `W`/`H`/`SEC`/`OUT`/`URL` via env vars.
2. **Add audio + reframe** — follow [`social-production-kit.md`](social-production-kit.md):
   voiceover script (timed to the beats), music brief + royalty-free sources,
   platform specs, and how to reframe 16:9 → 9:16 / 1:1 in CapCut.

## Notes

- Bright coastal/beach theme; all text checked for WCAG AA contrast over the photo.
- Background photo is free-license (Pexels, no attribution required) and embedded as a data URI.
- Respects `prefers-reduced-motion` and pauses when scrolled off-screen.

Authored-by: Anand Palanisamy - anand@xeni.com

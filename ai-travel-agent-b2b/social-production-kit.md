# Your Branded Travel Agent — Social Production Kit

For turning the film into LinkedIn / Instagram Reels / YouTube Shorts videos with **music + voiceover**.

> There are **two cuts**: the **~15s** cut (`social-15s.html`) is the default for social — tight pacing, captions + voiceover carry the reading. The **~24s** cut (`index.html`) is the relaxed web/landscape version. Pick the VO script below that matches the cut you captured.

---

## 1a. Voiceover script — **15s cut** (default for social)

Tight and punchy; on-screen captions carry the detail. ~40 words. Let the music breathe where there's no line.

| Time | Scene | Voiceover |
|------|-------|-----------|
| 0:00–0:01.5 | Hero | "Your agency's own AI booking agent." |
| 0:01.5–0:06.6 | Agent chat | "Describe the trip — complete, priced itineraries in seconds, ready for your client to approve." |
| 0:06.6–0:09.2 | Autonomous booking | "Set a target rate — it books automatically." |
| 0:09.2–0:11.6 | Auto-rebook | "Then rebooks lower, and splits the savings with you." |
| 0:11.6–0:12.9 | Network | "You set the goals." |
| 0:12.9–0:14.6 | CTA | "Xeni handles the rest." |

**Tone notes:** brisk but warm, not rushed. The on-screen text already carries "no cards / money never leaves the account" and "Sign up for early access" — don't crowd the VO with them.

## 1b. Voiceover script — **24s cut** (relaxed web/landscape)

Warm, confident, unhurried. ~48–52 words total (comfortable at a natural pace).

| Time | Scene | Voiceover |
|------|-------|-----------|
| 0:00–0:03 | Hero | "This is your travel agency's own AI booking agent — your brand out front, a powerful platform underneath." |
| 0:03–0:09 | Agent chat | "Just describe the trip. It builds complete, priced itineraries in seconds — ready for your client to approve." |
| 0:09–0:13 | Autonomous booking | "Set a target rate, and it books the moment the market hits it. No cards shared — money never leaves your client's account." |
| 0:13–0:18 | Auto-rebook | "It keeps working after booking, too — rebooking at lower rates and splitting the savings between your traveler and you." |
| 0:18–0:22 | CTA | "Plan, book, auto-rebook, and delight every traveler. Your Branded Travel Agent — powered by Xeni. Sign up for early access." |

**Tone notes:** conversational, not announcer-y. Land "no cards shared" and "splitting the savings" — those are the differentiators. Slight lift on the final line.

**Where to make the VO (either cut):**
- **ElevenLabs** (elevenlabs.io) — best natural AI voices; pick a warm professional voice, export MP3/WAV.
- **Descript** (descript.com) — has Overdub voices and syncs to video in one place.
- Or record a human — it's quick either way.

---

## 2. Music brief

- **Mood:** modern, optimistic, "premium travel-tech." Bright but not frantic.
- **Tempo:** ~100–112 BPM.
- **Instrumentation:** soft four-on-the-floor or light percussion + plucky synth/marimba + airy pads; a small lift/riser into the CTA.
- **Mix:** duck music to ~-18 to -20 dB under the VO; bring it back up for the last 2s CTA.

**Royalty-free sources (safe for commercial/social):**
- **Uppbeat** — uppbeat.io (free tier, no copyright strikes; grab a "corporate/uplifting" track ~100 BPM)
- **Pixabay Music** — pixabay.com/music (CC0-style, free commercial use)
- **YouTube Audio Library** — free, filter by "Happy/Inspirational"
- **Artlist / Epidemic Sound** — paid subscription, highest quality if you have it

Search terms: *"uplifting corporate"*, *"bright travel"*, *"modern tech optimistic"*.

---

## 3. Platform specs

| Platform | Aspect | Size | Length | Notes |
|----------|--------|------|--------|-------|
| Instagram Reels | 9:16 | 1080×1920 | ≤90s (aim 15–22s) | Keep text clear of bottom ~250px (UI overlay) |
| YouTube Shorts | 9:16 | 1080×1920 | ≤60s | Same safe-area rule |
| LinkedIn feed | 1:1 or 4:5 | 1080×1080 / 1080×1350 | 15–30s ideal | Square performs well in-feed |
| LinkedIn / X landscape | 16:9 | 1920×1080 | — | The current web version works here |

Use the **9:16** and **1:1** cuts of the film (see the preview links I'm setting up) for capture.

---

## 4. Workflow (HTML → MP4 → post)

1. **Record the animation to video** — run the capture script (`capture.mjs`, provided) for each format. It produces a clean, silent MP4 at the exact loop timing.
2. **Add audio in an editor** (CapCut is free and fast; Descript or Premiere also fine):
   - Drop in the MP4, the music track, and the VO.
   - Duck the music under the VO; align the VO lines to the on-screen beats using the table above.
   - Add auto-captions (accessibility + most feeds autoplay muted) — CapCut/Descript do this in one click.
3. **Export** per the specs table (H.264 MP4, 1080p, ~8–12 Mbps).
4. **Post.** For Reels/Shorts, keep the key text above the bottom ~250px safe area.

### 4b. Reframe 16:9 → 9:16 / 1:1 in the editor (CapCut, free)

You captured a 16:9 MP4; here's how to make the vertical/square versions from it — this is the standard, fast route:

1. **New project** at the target canvas: 1080×1920 (Reels/Shorts) or 1080×1080 (LinkedIn).
2. **Branded background band:** add the film's beach still (or a solid navy `#0F2E3D` / soft cyan) as a full-canvas background so the top/bottom aren't black. A subtle blurred copy of the video also works.
3. **Place the 16:9 clip** centered, scaled to the canvas width. It'll sit as a band across the middle — that's the intended look.
4. **Add a headline above** and the **CTA below** the video band (big, legible): e.g. top = "Your Branded Travel Agent ✦", bottom = "Sign up for early access · xeni.com". This uses the vertical space and keeps the message readable even at a glance.
5. **Captions:** auto-generate from the VO (one click in CapCut/Descript). Most feeds autoplay muted, so captions carry the message.
6. **Safe areas:** keep text/logos out of the bottom ~250px (Reels/Shorts UI) and ~120px top.
7. **Export** H.264 MP4, 1080p, ~8–12 Mbps.

*(If you later want pixel-native 9:16/1:1 builds instead of editor-framed, that's a separate HTML build — just ask.)*

---

*Authored-by: Anand Palanisamy - anand@xeni.com*

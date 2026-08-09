// capture.mjs — record the HTML brand film to a clean, silent MP4.
// Authored-by: Anand Palanisamy - anand@xeni.com
//
// Prereqs (one time):
//   npm init -y
//   npm i playwright
//   npx playwright install chromium
//   # ffmpeg must be on your PATH (brew install ffmpeg)
//
// Run (the ~15s social cut, the default — tighter pacing for narrated/captioned video):
//   node capture.mjs
//
// Capture the ~24s web version instead (better for a landscape web/feed post):
//   URL='https://xeni-repos.github.io/brand-films/ai-travel-agent-b2b/index.html?fill=1' SEC=26 OUT=agent-24s.mp4 node capture.mjs
//
// The film is captured full-bleed via the ?fill=1 flag. Record one loop + a small
// margin (SEC), then trim to the exact loop length in your editor.

import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { readdirSync, mkdirSync, rmSync } from 'node:fs';

const URL = process.env.URL
  || 'https://xeni-repos.github.io/brand-films/ai-travel-agent-b2b/social-15s.html?fill=1';
const W   = Number(process.env.W   || 1920);   // 16:9 = 1920x1080
const H   = Number(process.env.H   || 1080);
const SEC = Number(process.env.SEC || 16);     // record window (one ~14.6s loop + margin)
const OUT = process.env.OUT || 'ai-travel-agent-15s.mp4';

const tmp = './.capture';
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
  recordVideo: { dir: tmp, size: { width: W, height: H } },
});
const page = await context.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.reload({ waitUntil: 'networkidle' });  // restart the loop from t=0
await page.waitForTimeout(SEC * 1000);
await context.close();   // finalizes the .webm
await browser.close();

const webm = readdirSync(tmp).find(f => f.endsWith('.webm'));
if (!webm) throw new Error('no video captured');

// transcode webm -> clean H.264 mp4 (social-friendly, faststart for web)
execSync(
  `ffmpeg -y -i "${tmp}/${webm}" -vf "fps=30,format=yuv420p" -c:v libx264 -crf 18 -preset slow -movflags +faststart "${OUT}"`,
  { stdio: 'inherit' }
);
console.log('\n✓ wrote', OUT);
console.log('  Next: drop it in CapCut/Descript/Premiere, add the music + voiceover, add captions, export per platform.');

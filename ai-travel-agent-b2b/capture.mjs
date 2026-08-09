// capture.mjs — record the HTML brand film to a clean, silent MP4.
// Authored-by: Anand Palanisamy - anand@xeni.com
//
// Prereqs (one time):
//   npm init -y
//   npm i playwright
//   npx playwright install chromium
//   # ffmpeg must be on your PATH (brew install ffmpeg)
//
// Run (16:9, the default — best supported):
//   node capture.mjs
//
// Override via env vars, e.g. a longer safety window or a different output:
//   SEC=26 OUT=agent-16x9.mp4 node capture.mjs
//
// The film is captured full-bleed via the ?fill=1 flag. It loops ~24s, so we
// record ~26s and trim in your editor, or set SEC to the exact loop length.

import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { readdirSync, mkdirSync, rmSync } from 'node:fs';

const URL = process.env.URL
  || 'https://xeni-repos.github.io/brand-films/ai-travel-agent-b2b/index.html?fill=1';
const W   = Number(process.env.W   || 1920);   // 16:9 = 1920x1080
const H   = Number(process.env.H   || 1080);
const SEC = Number(process.env.SEC || 26);     // record window (one ~24s loop + margin)
const OUT = process.env.OUT || 'ai-travel-agent-16x9.mp4';

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

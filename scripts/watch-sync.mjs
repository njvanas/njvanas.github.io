#!/usr/bin/env node
/**
 * Watches source files and syncs to GitHub after edits settle.
 * Run: npm run watch:sync
 */
import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const WATCH_PATHS = ['src', 'public', 'index.html'];
const DEBOUNCE_MS = 8_000;

let timer = null;

function scheduleSync() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    timer = null;
    const child = spawn(process.execPath, ['scripts/sync-to-github.mjs', '--force'], {
      cwd: ROOT,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
    child.on('error', (error) => {
      console.error('[watch:sync]', error.message);
    });
  }, DEBOUNCE_MS);
}

for (const target of WATCH_PATHS) {
  const path = join(ROOT, target);
  try {
    watch(path, { recursive: true }, scheduleSync);
    console.log(`[watch:sync] watching ${target}`);
  } catch (error) {
    console.warn(`[watch:sync] could not watch ${target}:`, error.message);
  }
}

console.log('[watch:sync] Auto-sync enabled. Press Ctrl+C to stop.');

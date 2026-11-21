#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const SOURCE_CODE = 'sk-taman-ria';
export const SOURCE_NAME = 'Sekolah Kebangsaan Taman Ria';
export const ORG_CODE = 'SKTR';
export const SOURCE_BASE_URL = 'https://pustaka-terbuka.github.io/sk-taman-ria/';
export const HARVESTER_NAME = 'errin-ils-harvester';
export const HARVESTER_VERSION = '1.0.0';

export function parseArgs(args = process.argv.slice(2)) {
  const opts = { maxRecords: null, runId: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--max-records') opts.maxRecords = parseInt(args[++i], 10);
    else if (args[i] === '--run-id') opts.runId = args[++i];
  }
  return opts;
}

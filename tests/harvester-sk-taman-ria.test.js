import { test } from 'node:test';
import assert from 'node:assert';
import path from 'path';
import fs from 'fs';
import { SOURCE_CODE, ORG_CODE, parseArgs } from '../tools/harvesters/sk-taman-ria/harvester.js';
import { validateInbox } from '../tools/validate-inbox.js';

test('Sekolah Kebangsaan Taman Ria Harvester constants and argument parsing', () => {
  assert.strictEqual(SOURCE_CODE, 'sk-taman-ria');
  assert.strictEqual(ORG_CODE, 'SKTR');
  const opts = parseArgs(['--max-records', '10', '--run-id', 'test-01']);
  assert.strictEqual(opts.maxRecords, 10);
  assert.strictEqual(opts.runId, 'test-01');
});

test('Sekolah Kebangsaan Taman Ria inbox passes validation', async () => {
  const inboxBase = path.resolve('harvest/inbox/sk-taman-ria');
  if (fs.existsSync(inboxBase)) {
    const runs = fs.readdirSync(inboxBase);
    if (runs.length > 0) {
      const latestRun = path.join(inboxBase, runs[runs.length - 1]);
      const res = await validateInbox(latestRun, { skipDropGate: true });
      assert.strictEqual(res.valid, true, `Validation failed: ${res.errors ? res.errors.join(', ') : ''}`);
    }
  }
});

import assert from 'node:assert/strict';
import { InMemoryRunStore, isTerminalStatus } from '@x12i/runs';

const store = new InMemoryRunStore();
const run = await store.create({ type: 'research', request: { query: 'example' }, requestHash: 'example-request-1' });
assert.equal(run.status, 'queued');
await store.update(run.id, { status: 'running' });
const completed = await store.update(run.id, { status: 'completed' });
assert.equal(isTerminalStatus(completed.status), true);
assert.equal((await store.get(run.id)).status, 'completed');
console.log({ id: completed.id, status: completed.status });

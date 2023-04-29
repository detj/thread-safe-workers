import { Worker } from "node:worker_threads";

const workers = [];
let doneCount = 0;
const count = 12;
const sharedArrayBuffer = new SharedArrayBuffer(1);
const mutexStore = new SharedArrayBuffer(4);
const typedArray = new Uint8Array(sharedArrayBuffer);
typedArray[0] = 10;

function log(...args) {
  console.log(`main:`, ...args);
}

for (let i = 0; i < count; ++i) {
  const worker = new Worker(new URL("./worker.js", import.meta.url));

  worker.on('message', () => {
    doneCount = doneCount + 1;
    if (doneCount === count) {
      queueMicrotask(() => terminate());
    }
  });

  workers.push(worker);
  worker.postMessage({ sharedArrayBuffer, mutexStore });
}

function terminate() {
  workers.forEach(worker => worker.terminate());
  log(`final value`, typedArray[0]);
}

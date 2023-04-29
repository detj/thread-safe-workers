import { parentPort } from "node:worker_threads";
import { Mutex } from "./mutex.js";

parentPort.on("message", ({ sharedArrayBuffer, mutexStore }) => {
  const ta = new Uint8Array(sharedArrayBuffer);
  const mutex = new Mutex(mutexStore);
  mutex.lock();
  ta[0] = ta[0] + 10;
  mutex.unlock();
  parentPort.postMessage("done");
});

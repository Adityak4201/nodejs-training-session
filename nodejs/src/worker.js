import { parentPort } from "worker_threads";

const limit = 2000000;
for (let i = 0; i < limit; i++) {
  console.log(`Counter: ${i}`);
}

parentPort.postMessage("done");
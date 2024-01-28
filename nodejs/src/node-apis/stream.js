import { pipeline } from "stream/promises";
import fs from "fs";
import zlib from "zlib";
import path from "path";

async function run() {
  await pipeline(
    fs.createReadStream(path.join(process.cwd(), "./src/node-apis/fs.js")),
    zlib.createGzip(),
    fs.createWriteStream(path.join(process.cwd(), "./src/node-apis/fs.zip"))
  );
  console.log("Pipeline succeeded.");
}

run().catch(console.error);

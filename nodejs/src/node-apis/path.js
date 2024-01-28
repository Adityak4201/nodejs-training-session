import path from "path";

const __dirname = path.resolve();

console.log(__dirname);

const __filename = path.resolve(__dirname, "src", "node-apis", "path.js");
console.log(__filename);

const parsed = path.parse(__filename);
console.log(parsed);

const joined = path.join(__dirname, "src", "node-apis", "path.js");
console.log(joined);

const normalized = path.normalize(joined);
console.log(normalized);

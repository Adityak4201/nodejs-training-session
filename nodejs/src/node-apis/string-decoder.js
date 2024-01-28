import { StringDecoder } from "string_decoder";
const decoder = new StringDecoder("utf8");

const str = Buffer.from([48, 65, "6c", "6c", "6f", 20, 57, "6f", 72, "6c", 64]);

console.log(decoder.write(str));

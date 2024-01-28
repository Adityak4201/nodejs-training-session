const str = "Hello World";

const buffer = Buffer.from(str, "utf8").toString("hex");

console.log(buffer);

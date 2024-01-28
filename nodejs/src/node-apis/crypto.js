import crypto from "crypto";
import fs from "fs";

crypto.generateKeyPair(
  "rsa",
  {
    modulusLength: 4096, // options
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "top secret",
    },
  },
  (err, publicKey, privateKey) => {
    // Handle errors and use the generated key pair.
    console.log(publicKey, privateKey);
  }
);

const privateKey = crypto.createPrivateKey(fs.readFileSync("private.pem"));

crypto.privateEncrypt(
  { privateKey: fs.readFileSync("private.pem"), passphrase: "top secret" },
  Buffer.from("Hello World!"),
  (err, encrypted) => {
    // Handle errors and use the encrypted data.
    console.log(encrypted);
  }
);

import { generateKeyPairSync } from "crypto";

const rsaKeys = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem"
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem"
    // cipher: "aes-256-cbc",
    // passphrase: "top secret"
  }
});

export function getPrivateKey(): string {
  return rsaKeys.privateKey;
}

export function getPublicKey(): string {
  return rsaKeys.publicKey;
}

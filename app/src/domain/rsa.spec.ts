import { getPrivateKey, getPublicKey } from "./rsa";
import {
  privateEncrypt,
  publicDecrypt,
  publicEncrypt,
  privateDecrypt
} from "crypto";

test("rsa 検証", () => {
  const privateKey = getPrivateKey();
  const publicKey = getPublicKey();

  const message = "test message 1";

  const encryptWithPrivate = privateEncrypt(privateKey, Buffer.from(message));
  const DecryptWithPublic = publicDecrypt(publicKey, encryptWithPrivate);
  expect(DecryptWithPublic.toString()).toBe(message);

  const encryptWithPublic = publicEncrypt(publicKey, Buffer.from(message));
  const DecryptWithPrivate = privateDecrypt(privateKey, encryptWithPublic);
  expect(DecryptWithPrivate.toString()).toBe(message);
});

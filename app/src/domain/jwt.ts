import { getPrivateKey, getPublicKey } from "./rsa";
import { sign, verify } from "jsonwebtoken";

export function makeJWT(payload: object): string {
  const privateKey = getPrivateKey();
  return sign(payload, privateKey, {
    algorithm: "RS256"
  });
}

export function verifyJWT(jwt: string): boolean {
  const publicKey = getPublicKey();
  try {
    verify(jwt, publicKey, {
      algorithms: ["RS256"]
    });
  } catch (e) {
    return false;
  }
  return true;
}
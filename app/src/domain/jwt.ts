import { getPrivateKey } from "./rsa";
import { sign } from "jsonwebtoken";

export function makeJWT(payload: object): string {
  const privateKey = getPrivateKey();
  return sign(payload, privateKey, {
    algorithm: "RS256"
  });
}

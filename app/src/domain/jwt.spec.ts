import { makeJWT } from "./jwt";
import { verify } from "jsonwebtoken";
import { getPublicKey } from "./rsa";

test("sign in", () => {
  const jwt = makeJWT({ name: "hoge" });
  const publicKey = getPublicKey();
  expect(
    verify(jwt, publicKey, {
      algorithms: ["RS256"]
    })
  ).toBeTruthy();
});

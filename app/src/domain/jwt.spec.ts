import { makeJWT, verifyJWT } from "./jwt";
import { getPublicKey } from "./rsa";

test("sign in", () => {
  const jwt = makeJWT({ name: "hoge" });
  const publicKey = getPublicKey();
  expect(
    verifyJWT(jwt)
  ).toBeTruthy();
});

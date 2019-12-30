import { HttpRequest } from "../framework/handler/HttpRequest";
import { HttpResponse } from "../framework/handler/HttpResponse";
import { getPublicKey } from "../domain/rsa";

export function getKey(req: HttpRequest): HttpResponse {
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: getPublicKey() })
  };
}

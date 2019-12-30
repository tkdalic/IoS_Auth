import { requestHandler } from "./handler";
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";
import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";

const handler = (req: HttpRequest): HttpResponse => ({
  status: 200,
  headers: { "Content-Type": "application/json" },
  body: '{"hoge": "huga"}'
});

test("handler test", () => {
  const req = new IncomingMessage(new Socket());
  const res = new ServerResponse(req);
  requestHandler(handler)(req, res);
  expect(res).toBeTruthy();
});

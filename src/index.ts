import { createServer } from "http";
import { requestHandler } from "./framework/handler/handler";
import { HttpRequest } from "./framework/handler/HttpRequest";
import { HttpResponse } from "./framework/handler/HttpResponse";

const handler = (req: HttpRequest): HttpResponse => ({
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: '{"hoge": "huga"}'
  });

export const app = createServer(requestHandler(handler)).listen(8080);

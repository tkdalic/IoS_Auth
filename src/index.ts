import { createServer } from "http";
import { requestHandler } from "./Handler/handler";
import { HttpRequest } from "./Handler/HttpRequest";
import { HttpResponse } from "./Handler/HttpResponse";

const handler = (req: HttpRequest): HttpResponse => ({
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: '{"hoge": "huga"}'
  });

export const app = createServer(requestHandler(handler)).listen(8080);

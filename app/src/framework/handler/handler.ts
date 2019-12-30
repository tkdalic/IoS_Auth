import { IncomingMessage, ServerResponse } from "http";
import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";

function makeHttpRequest(req: IncomingMessage, chunk: string): HttpRequest {
  const request: HttpRequest = {
    method: req.method || "GET",
    url: req.url || "",
    headers: req.headers
  };

  if (chunk && (request.method === "POST" || request.method === "PUT")) {
    request.body = "";
    request.body += chunk;

    if (
      request.headers &&
      request.headers["content-type"] === "application/json"
    ) {
      request.body = JSON.parse(request.body);
    }
  }

  return request;
}

function sendResponse(res: ServerResponse, response: HttpResponse): void {
  res.writeHead(response.status, response.headers);
  res.write(response.body);
  res.end();
}

export function requestHandler(
  handler: (req: HttpRequest) => HttpResponse
): (req: IncomingMessage, res: ServerResponse) => void {
  let request: HttpRequest, response: HttpResponse;
  return (req, res): void => {
    req
      .on("data", chunk => {
        request = makeHttpRequest(req, chunk);

        response = handler(request);
      })
      .on("end", () => sendResponse(res, response));
  };
}

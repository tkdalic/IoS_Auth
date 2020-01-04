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
  handler: (req: HttpRequest) => Promise<HttpResponse>
): (req: IncomingMessage, res: ServerResponse) => void {
  let data = '';
  return (req, res): void => {
    req
      .on("data", chunk => {
        data = '';
        data += chunk;
      })
      .on("end", () => {
        const request = makeHttpRequest(req, data);

        handler(request).then(response => sendResponse(res, response));
  });
};
}

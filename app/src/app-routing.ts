import { HttpRequest } from "./framework/handler/HttpRequest";
import { HttpResponse } from "./framework/handler/HttpResponse";
import { getKey } from "./controllers/getKey";
import { generateJWT } from "./controllers/generateJWT";

const notFoundResponse = {
  status: 404,
  headers: { "Content-Type": "text/plain" },
  body: 'not found'
};

function getRouting(req: HttpRequest): HttpResponse {
  switch (req.url) {
    case "/key":
      return getKey(req);
  }
  return notFoundResponse;
}

function postRouting(req: HttpRequest): HttpResponse {
  switch (req.url) {
    case "/jwt":
      return generateJWT(req);
  }
  return notFoundResponse;
}

export function routing(req: HttpRequest): HttpResponse {
  switch (req.method) {
    case "GET":
      return getRouting(req);
    case "POST":
      return postRouting(req);
  }
  return notFoundResponse;
}

import { HttpRequest } from "./framework/handler/HttpRequest";
import { HttpResponse } from "./framework/handler/HttpResponse";
import { getKey } from "./controllers/getKey";
import { signUp } from "./controllers/signUp";
import { signIn } from "./controllers/signIn";

const notFoundResponse = {
  status: 404,
  headers: { "Content-Type": "text/plain" },
  body: 'not found'
};

async function getRouting(req: HttpRequest): Promise<HttpResponse> {
  switch (req.url) {
    case "/key":
      return getKey(req);
  }
  return notFoundResponse;
}

async function postRouting(req: HttpRequest): Promise<HttpResponse> {
  switch (req.url) {
    case "/signin":
      return signIn(req);
    case "/signup":
      return signUp(req);
  }
  return notFoundResponse;
}

export async function routing(req: HttpRequest): Promise<HttpResponse> {
  switch (req.method) {
    case "GET":
      return getRouting(req);
    case "POST":
      return postRouting(req);
  }
  return notFoundResponse;
}

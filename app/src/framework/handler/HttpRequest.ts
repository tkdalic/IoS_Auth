import { IncomingHttpHeaders } from "http";

export interface HttpRequest {
  method: string;
  url: string;
  headers: IncomingHttpHeaders;
  body?: string | object;
}

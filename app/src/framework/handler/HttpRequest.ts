import { IncomingHttpHeaders } from "http";

export interface HttpRequest {
  method: string;
  url: string;
  headers: IncomingHttpHeaders;
  query?: object;
  body?: string | object;
}

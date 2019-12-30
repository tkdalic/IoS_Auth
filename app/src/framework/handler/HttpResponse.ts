import { OutgoingHttpHeaders } from "http";

export interface HttpResponse {
  status: number;
  headers: OutgoingHttpHeaders;
  body: string;
}

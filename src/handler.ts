import { IncomingMessage, ServerResponse } from "http";

export function requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('hello world');
    res.end();
}
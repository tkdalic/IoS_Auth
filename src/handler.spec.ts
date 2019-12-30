import { requestHandler } from "./handler"
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";

test('handler test', () => {
    const req = new IncomingMessage(new Socket());
    const res = new ServerResponse(req);
    requestHandler(req, res);
    expect(res).toBeTruthy();
})
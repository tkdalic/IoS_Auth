import { createServer } from "http";
import { requestHandler } from "./Handler/handler";

export const app = createServer(requestHandler({})).listen(8080);

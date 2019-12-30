import { createServer } from "http";
import { requestHandler } from "./framework/handler/handler";
import { routing } from "./app-routing";

export const app = createServer(requestHandler(routing)).listen(8080);

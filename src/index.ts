import { createServer } from "http";
import { requestHandler } from './handler';


export const app = createServer(requestHandler).listen(8080);
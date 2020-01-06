
import { HttpRequest } from "../framework/handler/HttpRequest";
import { HttpResponse } from "../framework/handler/HttpResponse";
import { getAccount } from "../domain/account";
import { makeJWT, verifyJWT } from "../domain/jwt";
import { verify } from "../domain/passwordHash";

interface VerifyRequestBody {
    jwt: string;
}

function validateBody(query: any): query is VerifyRequestBody {
    if (typeof query.jwt !== 'string') {
        return false;
    }
    return true;
}

export async function verifyToken(req: HttpRequest): Promise<HttpResponse> {
    if (!validateBody(req.query)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'bad request' })
        };
    }
    if (!verifyJWT(req.query.jwt)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'JWT is incorrect' })
        };
    }

    return {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    };
}



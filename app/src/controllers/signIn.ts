import { HttpRequest } from "../framework/handler/HttpRequest";
import { HttpResponse } from "../framework/handler/HttpResponse";
import { getAccount } from "../domain/account";
import { makeJWT } from "../domain/jwt";
import { verify } from "../domain/passwordHash";

interface SignInRequestBody {
    id: string;
    password: string;
}

function validateBody(body: any): body is SignInRequestBody {
    if (typeof body.id !== 'string') {
        return false;
    }
    if (typeof body.password !== 'string') {
        return false;
    }
    if (body.id.length <= 6 || body.id.length > 32) {
        return false;
    }
    if (body.password.length <= 8 || body.password.length > 255) {
        return false;
    }
    return true;
}

export async function signIn(req: HttpRequest): Promise<HttpResponse> {
    if (!validateBody(req.body)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'bad request' })
        };
    }
    const passwordHash = await getAccount(req.body.id);
    if (!passwordHash || !verify(req.body.password, passwordHash)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'password is not correct' })
        };
    }
    return {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 'jwt': makeJWT({ 'id': req.body.id }) })
    };
}



import { HttpRequest } from "../framework/handler/HttpRequest";
import { HttpResponse } from "../framework/handler/HttpResponse";
import { getAccount, setAccount } from "../domain/account";
import { makeJWT } from "../domain/jwt";

interface GenerateJWTRequestBody {
    id: string;
    password: string;
}

function validateBody(body: any): body is GenerateJWTRequestBody {
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

export async function signUp(req: HttpRequest): Promise<HttpResponse> {
    if (!validateBody(req.body)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'bad request' })
        };
    }
    if (await getAccount(req.body.id)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'duplicate id' })
        };
    }
    await setAccount(req.body.id, req.body.password);
    return {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({'jwt': makeJWT({ 'id': req.body.id })})
    };
}



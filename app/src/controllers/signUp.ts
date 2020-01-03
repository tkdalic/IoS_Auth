import { HttpRequest } from "../framework/handler/HttpRequest";
import { HttpResponse } from "../framework/handler/HttpResponse";

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

export function signUp(req: HttpRequest): HttpResponse {
    if (!validateBody(req.body)) {
        return {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: 'bad request' })
        };
    }
    return {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: 'test' })
    };
}



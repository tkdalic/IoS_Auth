import { randomBytes, scryptSync } from 'crypto';

const hash_len = 512;

export function hash(password: string): string {
    const salt_buf = randomBytes(16)
    const result_buf = scryptSync(password, salt_buf, hash_len)
    return [salt_buf.toString("base64"), hash_len, result_buf.toString("base64")].join()
}

export function verify(password: string, hash: string): boolean {
    const parts = hash.split(",")
    const salt_buf = Buffer.from(parts[0], "base64");
    const len = +parts[1];
    const result_b64 = parts[2];
    return result_b64 === scryptSync(password, salt_buf, len).toString("base64");
}
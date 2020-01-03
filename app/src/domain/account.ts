import { Redis } from "../framework/kvs/redis";

const redis = new Redis({
    host: 'localhost',
    port: 6379,
});

export function getAccount(key: string): Promise<string> {
    return redis.get(key);
}

export async function setAccount(key: string, value: string): Promise<boolean> {
    if (await redis.get(key)) {
        await redis.set(key, value);
    }

    return await redis.get(key) === value;
}
import { Redis } from "../framework/kvs/redis";

const redis = new Redis({
    host: 'redis',
    port: 6379,
});

export function getAccount(key: string): Promise<string> {
    return redis.get(key);
}

export function setAccount(key: string, value: string): Promise<void> {
    return redis.set(key, value);
}
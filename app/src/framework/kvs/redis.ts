import { KVS } from './kvs';
import { createClient, ClientOpts, RedisClient } from 'redis';
import { promisify } from 'util';

export class Redis implements KVS {
    private redis: RedisClient;
    constructor(option: ClientOpts) {
        this.redis = createClient(option);
    }

    get(key: string): Promise<string> {
        return promisify(this.redis.get).bind(this.redis)(key);
    }

    async set(key: string, value: string | number): Promise<void> {
        await promisify(this.redis.set).bind(this.redis)(key, value.toString());
        return;
    }
}
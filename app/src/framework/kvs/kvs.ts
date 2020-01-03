export interface KVS {
    get: (key: string) => Promise<string>;
    set: (key: string, value: string | number) => Promise<void>;
}
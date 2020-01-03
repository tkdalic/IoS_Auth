import { getAccount, setAccount } from "./account";

test('redis test', async () => {
    await setAccount('hoge', 'fuga');
    expect(getAccount('hoge')).resolves.toBe('fuga');
});
import { getAccount, setAccount } from "./account";

test('redis test', () => {
    setAccount('hoge', 'fuga');
    expect(getAccount('hoge')).resolves.toBe('fuga');
});
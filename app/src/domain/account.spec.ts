import { getAccount, setAccount } from "./account";

test('redis test', () => {
    expect(setAccount('hoge', 'fuga')).resolves.toBeTruthy();
    expect(setAccount('hoge', 'hoge')).resolves.toBeFalsy();
    expect(getAccount('hoge')).resolves.toBe('fuga');
});
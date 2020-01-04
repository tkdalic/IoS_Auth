import { hash, verify } from './passwordHash';
test('password hash test', () => {
    const testPassword = 'testPassword';
    const testHash = hash(testPassword);
    expect(verify(testPassword, testHash)).toBeTruthy();
    expect(verify('not testPassword', testHash)).toBeFalsy();
});
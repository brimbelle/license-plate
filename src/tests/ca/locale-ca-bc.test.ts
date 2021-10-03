import LicensePlate from "../../index";

LicensePlate.setLocale("CA-CB");

test('example', () => expect(true).toBe(true))

test('12345 should return true', () => expect(new LicensePlate('12345').isValid()).toBe(true))
test('123456 should return true', () => expect(new LicensePlate('123456').isValid()).toBe(true))
test('ABC123 should return true', () => expect(new LicensePlate('ABC123').isValid()).toBe(true))
test('123ABC should return true', () => expect(new LicensePlate('123ABC').isValid()).toBe(true))
test('AB123C should return true', () => expect(new LicensePlate('AB123C').isValid()).toBe(true))
test('1234AB should return true', () => expect(new LicensePlate('1234AB').isValid()).toBe(true))
test('AB1234 should return true', () => expect(new LicensePlate('AB1234').isValid()).toBe(true))

// test(' should return true', () => expect(new LicensePlate('').isValid()).toBe(true))

// test(' should return false', () => expect(new LicensePlate('').isValid()).toBe(false))

test('12345 should return 12345', () => expect(new LicensePlate('12345').format()).toBe('12345'));
test('123456 should return 123-456', () => expect(new LicensePlate('123456').format()).toBe('123-456'));
test('ABC123 should return ABC 123', () => expect(new LicensePlate('ABC123').format()).toBe('ABC 123'));
test('123ABC should return 123 ABC', () => expect(new LicensePlate('123ABC').format()).toBe('123 ABC'));
test('AB123C should return AB1 23C', () => expect(new LicensePlate('AB123C').format()).toBe('AB1 23C'));
test('1234AB should return 1234 AB', () => expect(new LicensePlate('1234AB').format()).toBe('1234 AB'));
test('AB1234 should return AB 1234', () => expect(new LicensePlate('AB1234').format()).toBe('AB 1234'));
// test(' should return ', () => expect(new LicensePlate('').format().toBe(''));

import LicensePlate from "../class/LicensePlate";

LicensePlate.setLocale("FR");

test('w-123-aa should return true', () => expect(new LicensePlate('w-123-aa').isValid()).toBe(true));
test('ww-123-aa should return true', () => expect(new LicensePlate('ww-123-aa').isValid()).toBe(true));
test('aa 123 aa should return true', () => expect(new LicensePlate('aa 123 aa').isValid()).toBe(true));
test('aa-123-aa should return true', () => expect(new LicensePlate('aa-123-aa').isValid()).toBe(true));
test('1234 AB 68 should return true', () => expect(new LicensePlate('1234 AB 68').isValid()).toBe(true));
test('123 AB 68 should return true', () => expect(new LicensePlate('123 AB 68').isValid()).toBe(true));
test('12 AB 68 should return true', () => expect(new LicensePlate('12 AB 68').isValid()).toBe(true));
test('1 AB 68 should return true', () => expect(new LicensePlate('1 AB 68').isValid()).toBe(true));
test('1234 AB 974 should return true', () => expect(new LicensePlate('1234 AB 974').isValid()).toBe(true));
test('123 AB 974 should return true', () => expect(new LicensePlate('123 AB 974').isValid()).toBe(true));
test('12 AB 974 should return true', () => expect(new LicensePlate('12 AB 974').isValid()).toBe(true));
test('1 AB 974 should return true', () => expect(new LicensePlate('1 AB 974').isValid()).toBe(true));
test('1234 ABC 68 should return true', () => expect(new LicensePlate('1234 ABC 68').isValid()).toBe(true));
test('123 ABC 68 should return true', () => expect(new LicensePlate('123 ABC 68').isValid()).toBe(true));
test('12 ABC 68 should return true', () => expect(new LicensePlate('12 ABC 68').isValid()).toBe(true));
test('1 ABC 68 should return true', () => expect(new LicensePlate('1 ABC 68').isValid()).toBe(true));

test('ai-123-aa should return false', () => expect(new LicensePlate('ai-123-aa').isValid()).toBe(false));
test('au-123-aa should return false', () => expect(new LicensePlate('au-123-aa').isValid()).toBe(false));
test('ao-123-aa should return false', () => expect(new LicensePlate('ao-123-aa').isValid()).toBe(false));
test('1234 IBC 68 should return false', () => expect(new LicensePlate('1234 IBC 68').isValid()).toBe(false));
test('123 AUC 68 should return false', () => expect(new LicensePlate('123 AUC 68').isValid()).toBe(false));
test('12 AOC 68 should return false', () => expect(new LicensePlate('12 AOC 68').isValid()).toBe(false));
test('1 IOU 68 should return false', () => expect(new LicensePlate('1 IOU 68').isValid()).toBe(false));
test('1234 IB 68 should return false', () => expect(new LicensePlate('1234 IB 68').isValid()).toBe(false));
test('123 AU 68 should return false', () => expect(new LicensePlate('123 AU 68').isValid()).toBe(false));
test('12 AO 68 should return false', () => expect(new LicensePlate('12 AO 68').isValid()).toBe(false));

test('1ABC68 should return 1 ABC 68', () => expect(new LicensePlate('1ABC68').format()).toBe('1 ABC 68'));
test('AB123CD should return AB-123-CD', () => expect(new LicensePlate('AB123CD').format()).toBe('AB-123-CD'));

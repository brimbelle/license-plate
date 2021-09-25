import {formatLicensePlate, isValidLicensePlate} from "../index";

test('w-123-aa should return true', () => expect(isValidLicensePlate('w-123-aa', "FR")).toBe(true));
test('ww-123-aa should return true', () => expect(isValidLicensePlate('ww-123-aa', "FR")).toBe(true));
test('aa 123 aa should return true', () => expect(isValidLicensePlate('aa 123 aa', "FR")).toBe(true));
test('aa-123-aa should return true', () => expect(isValidLicensePlate('aa-123-aa', "FR")).toBe(true));
test('1234 AB 68 should return true', () => expect(isValidLicensePlate('1234 AB 68', "FR")).toBe(true));
test('123 AB 68 should return true', () => expect(isValidLicensePlate('123 AB 68', "FR")).toBe(true));
test('12 AB 68 should return true', () => expect(isValidLicensePlate('12 AB 68', "FR")).toBe(true));
test('1 AB 68 should return true', () => expect(isValidLicensePlate('1 AB 68', "FR")).toBe(true));
test('1234 AB 974 should return true', () => expect(isValidLicensePlate('1234 AB 974', "FR")).toBe(true));
test('123 AB 974 should return true', () => expect(isValidLicensePlate('123 AB 974', "FR")).toBe(true));
test('12 AB 974 should return true', () => expect(isValidLicensePlate('12 AB 974', "FR")).toBe(true));
test('1 AB 974 should return true', () => expect(isValidLicensePlate('1 AB 974', "FR")).toBe(true));
test('1234 ABC 68 should return true', () => expect(isValidLicensePlate('1234 ABC 68', "FR")).toBe(true));
test('123 ABC 68 should return true', () => expect(isValidLicensePlate('123 ABC 68', "FR")).toBe(true));
test('12 ABC 68 should return true', () => expect(isValidLicensePlate('12 ABC 68', "FR")).toBe(true));
test('1 ABC 68 should return true', () => expect(isValidLicensePlate('1 ABC 68', "FR")).toBe(true));

test('1ABC68 should return 1 ABC 68', () => expect(formatLicensePlate('1ABC68', "FR")).toBe('1 ABC 68'));
test('AB123CD should return AB-123-CD', () => expect(formatLicensePlate('AB123CD', "FR")).toBe('AB-123-CD'));

test('ai-123-aa should return false', () => expect(isValidLicensePlate('ai-123-aa', "FR")).toBe(false));
test('au-123-aa should return false', () => expect(isValidLicensePlate('au-123-aa', "FR")).toBe(false));
test('ao-123-aa should return false', () => expect(isValidLicensePlate('ao-123-aa', "FR")).toBe(false));
test('1234 IBC 68 should return false', () => expect(isValidLicensePlate('1234 IBC 68', "FR")).toBe(false));
test('123 AUC 68 should return false', () => expect(isValidLicensePlate('123 AUC 68', "FR")).toBe(false));
test('12 AOC 68 should return false', () => expect(isValidLicensePlate('12 AOC 68', "FR")).toBe(false));
test('1 IOU 68 should return false', () => expect(isValidLicensePlate('1 IOU 68', "FR")).toBe(false));
test('1 ABC 68 should return false', () => expect(isValidLicensePlate('1 ABC 68', "FR", true)).toBe(false));

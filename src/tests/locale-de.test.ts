import LicensePlate from '../index';

LicensePlate.setLocale('DE');

test('example', () => expect(true).toBe(true));

test('0-1 should return true', () => expect(new LicensePlate('0-1').isValid()).toBe(true));
test('1-1 should return true', () => expect(new LicensePlate('1-1').isValid()).toBe(true));
test('Y-123-12 should return true', () => expect(new LicensePlate('Y-123-12').isValid()).toBe(true));
test('Y-123-123 should return true', () => expect(new LicensePlate('Y-123-123').isValid()).toBe(true));
test('X-123-12 should return true', () => expect(new LicensePlate('X-123-12').isValid()).toBe(true));
test('X-123-123 should return true', () => expect(new LicensePlate('X-123-123').isValid()).toBe(true));
test('BD- should return true', () => expect(new LicensePlate('').isValid()).toBe(true));
test(' should return true', () => expect(new LicensePlate('').isValid()).toBe(true));
// test(' should return true', () => expect(new LicensePlate('').isValid()).toBe(true));

test('Y-121-1 should return false', () => expect(new LicensePlate('Y-121-1').isValid()).toBe(false));
test('X-121-1 should return false', () => expect(new LicensePlate('X-121-1').isValid()).toBe(false));
// test(' should return false', () => expect(new LicensePlate('').isValid()).toBe(false));

// test(' should return ', () => expect(new LicensePlate('').format().toBe(''));

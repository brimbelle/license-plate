import LicensePlate from "../class/LicensePlate";

LicensePlate.setLocale("CH");

test('M123456 should return true', () => expect(new LicensePlate('M123456').isValid()).toBe(true))
test('AG12345 should return true', () => expect(new LicensePlate('AG12345').isValid()).toBe(true))
test('AI1234 should return true', () => expect(new LicensePlate('AI1234').isValid()).toBe(true))
test('AR123 should return true', () => expect(new LicensePlate('AR123').isValid()).toBe(true))
test('BE12 should return true', () => expect(new LicensePlate('BE12').isValid()).toBe(true))
test('BL1 should return true', () => expect(new LicensePlate('BL1').isValid()).toBe(true))
test('BS123456 should return true', () => expect(new LicensePlate('BS123456').isValid()).toBe(true))
test('FR123456 should return true', () => expect(new LicensePlate('FR123456').isValid()).toBe(true))
test('GE123456 should return true', () => expect(new LicensePlate('GE123456').isValid()).toBe(true))
test('GL123456 should return true', () => expect(new LicensePlate('GL123456').isValid()).toBe(true))
test('GR123456 should return true', () => expect(new LicensePlate('GR123456').isValid()).toBe(true))
test('JU123456 should return true', () => expect(new LicensePlate('JU123456').isValid()).toBe(true))
test('LU123456 should return true', () => expect(new LicensePlate('LU123456').isValid()).toBe(true))
test('NE123456 should return true', () => expect(new LicensePlate('NE123456').isValid()).toBe(true))
test('NW123456 should return true', () => expect(new LicensePlate('NW123456').isValid()).toBe(true))
test('OW123456 should return true', () => expect(new LicensePlate('OW123456').isValid()).toBe(true))
test('SG123456 should return true', () => expect(new LicensePlate('SG123456').isValid()).toBe(true))
test('SH123456 should return true', () => expect(new LicensePlate('SH123456').isValid()).toBe(true))
test('SO123456 should return true', () => expect(new LicensePlate('SO123456').isValid()).toBe(true))
test('SZ123456 should return true', () => expect(new LicensePlate('SZ123456').isValid()).toBe(true))
test('TG123456 should return true', () => expect(new LicensePlate('TG123456').isValid()).toBe(true))
test('TI123456 should return true', () => expect(new LicensePlate('TI123456').isValid()).toBe(true))
test('UR123456 should return true', () => expect(new LicensePlate('UR123456').isValid()).toBe(true))
test('VD123456 should return true', () => expect(new LicensePlate('VD123456').isValid()).toBe(true))
test('VS123456 should return true', () => expect(new LicensePlate('VS123456').isValid()).toBe(true))
test('ZG123456 should return true', () => expect(new LicensePlate('ZG123456').isValid()).toBe(true))
test('ZH123456 should return true', () => expect(new LicensePlate('ZH123456').isValid()).toBe(true))

test('TP13456 should return false', () => expect(new LicensePlate('TP13456').isValid()).toBe(false))
test('URAZ should return false', () => expect(new LicensePlate('URAZ').isValid()).toBe(false))
test('VD1234567 should return false', () => expect(new LicensePlate('VD1234567').isValid()).toBe(false))
test('VSQ123 should return false', () => expect(new LicensePlate('VSQ123').isValid()).toBe(false))
test('VG12 should return false', () => expect(new LicensePlate('VG12').isValid()).toBe(false))
test('ZJ1 should return false', () => expect(new LicensePlate('ZJ1').isValid()).toBe(false))

test('UR123456 should return ', () => expect(new LicensePlate('UR123456').format()).toBe('UR 123456'));
test('UR12345 should return ', () => expect(new LicensePlate('UR12345').format()).toBe('UR 12345'));
test('UR1234 should return ', () => expect(new LicensePlate('UR1234').format()).toBe('UR 1234'));
test('UR123 should return ', () => expect(new LicensePlate('UR123').format()).toBe('UR 123'));
test('UR12 should return ', () => expect(new LicensePlate('UR12').format()).toBe('UR 12'));
test('UR1 should return ', () => expect(new LicensePlate('UR1').format()).toBe('UR 1'));

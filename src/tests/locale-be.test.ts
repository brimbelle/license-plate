import {isValidLicensePlate} from "../index";

// FR Test

test(' should return true', () => expect(isValidLicensePlate('', "BE")).toBe(true));

test(' should return false', () => expect(isValidLicensePlate('', "BE")).toBe(false));

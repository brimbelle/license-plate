import {CountryCode, LocaleItem} from "./utils/types";
import {getLocale} from "./locale";
import {clearSpecialChar} from "./utils/parser";

export function isValidLicensePlate(licensePlate: string, countryCode: CountryCode, isCustomPlate?: boolean): boolean {
    const locale = getLocale(countryCode);

    const clearedLicensePlate = clearSpecialChar(licensePlate);

    if (isCustomPlate && locale.custom?.regex) {
        return !!licensePlate.trim().match(locale.custom.regex);
    } else if (isCustomPlate) {
        return false;
    }

    return locale.common.some(({regex}: LocaleItem) => !!clearedLicensePlate.match(regex));
}

export function formatLicensePlate(licensePlate: string, countryCode: CountryCode, isCustomPlate?: boolean): string {
    const locale = getLocale(countryCode);

    if (isCustomPlate && locale.custom && isValidLicensePlate(licensePlate, countryCode, true)) {
        return locale.custom.format(licensePlate.match(locale.custom.regex))
    } else if (isCustomPlate) {
        throw new Error('Invalid License Plate');
    }

    const clearedLicensePlate = clearSpecialChar(licensePlate);

    const localItem = locale.common.find(({regex}: LocaleItem) => !!clearedLicensePlate.match(regex));

    if (!localItem) {
        throw new Error('Invalid License Plate');
    }

    return localItem.format(clearedLicensePlate.match(localItem.regex));
}

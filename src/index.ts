import {CountryCode, LocaleItem} from "./utils/types";
import {getLocale} from "./locale";
import {clearSpecialChar} from "./utils/parser";

function isValidLicensePlate(licensePlate: string, countryCode: CountryCode): boolean {
    const locale = getLocale(countryCode);

    const clearedLicensePlate = clearSpecialChar(licensePlate);

    return locale.some(({regex}: LocaleItem) => !!clearedLicensePlate.match(regex));
}

export function formatLicensePlate(licensePlate: string, countryCode: CountryCode): string {
    const locale = getLocale(countryCode);
    const clearedLicensePlate = clearSpecialChar(licensePlate);

    const localItem = locale.find(({regex}: LocaleItem) => !!clearedLicensePlate.match(regex));

    if (!localItem) {
        throw new Error('Invalid License Plate');
    }

    return localItem.format(clearedLicensePlate.match(localItem.regex));
}

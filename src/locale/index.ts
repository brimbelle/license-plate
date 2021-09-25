import {CountryCode, Locale} from "../utils/types";
import localeDictionary from './localeDictionary';

export function getLocale(countryCode: CountryCode): Locale | any {
    const locale = localeDictionary[countryCode.toLowerCase()];

    if (!locale) {
        throw new Error('Unknown Country Code');
    }

    return locale;
}

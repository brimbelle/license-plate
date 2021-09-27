import {Locale, LocaleCode} from "../utils/types";
import localeDictionary from './localeDictionary';

export function getLocale(locale: LocaleCode): Locale {
    const localeData = localeDictionary[locale.toLowerCase()]

    if (localeData) {
        return localeData;
    }

    return {
        common: [],
    };
}

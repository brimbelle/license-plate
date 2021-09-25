export type CountryCode = 'FR' | 'BE' | 'CH' | 'CA';

export type Matches = Array<string>;

export interface LocaleItem {
    regex: RegExp,
    format(matches: Matches): string;
}

export interface Locale {
    common: Array<LocaleItem>;
    custom?: LocaleItem;
}

export interface LocaleDictionary {
 [key: string]: Locale;
}

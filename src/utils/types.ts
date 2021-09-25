export type CountryCode = 'FR' | 'BE' | 'CH' | 'CA';

export type Matches = Array<string>;

export interface LocaleItem {
    regex: RegExp,
    format(matches: Matches): string;
}

export type Locale = Array<LocaleItem>;

export interface LocaleDictionary {
 [key: string]: Locale;
}

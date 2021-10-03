export type LocaleCode = 'FR' | 'BE' | 'CH' | 'DE';

export type Matches = Array<string>;

export interface LocaleItem {
    regex: RegExp,
    format(matches: RegExpMatchArray | null): string;
}

export interface Locale {
    common: Array<LocaleItem>;
    custom?: LocaleItem;
}

export interface LocaleDictionary {
 [key: string]: Locale;
}

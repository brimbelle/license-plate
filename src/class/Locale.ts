import {LocaleCode, Locale as LocalInterface} from "../utils/types";
import {getLocale} from "../locale";

class Locale {
  private _locale = 'FR';
  private _localeData: LocalInterface = getLocale('FR');

  constructor(locale: LocaleCode) {
    this._locale = locale;
    this._localeData = getLocale(locale);
  }

  public getLocaleData(): LocalInterface {
    return this._localeData;
  }
}

export default Locale;

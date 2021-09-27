import Locale from "./Locale";
import {LocaleCode, LocaleItem} from "../utils/types";
import {clearSpecialChar} from "../utils/parser";

class LicensePlate {
    private static _locale: Locale = new Locale('FR');

    private _licensePlate: string = '';
    private _clearLicensePlate: string = '';
    private _isCustom: boolean = false;
    private _isValid = false;
    private _format = '';

    constructor(licensePlate: string, isCustom?: boolean) {
        this._licensePlate = licensePlate.trim();
        this._clearLicensePlate = clearSpecialChar(licensePlate.trim());

        if (typeof isCustom === "boolean" && isCustom) {
            this._isCustom = isCustom;
        }

        this.validateLicensePlate();
        this.formatLicensePlate();
    }

    public static setLocale(locale: LocaleCode): void {
        LicensePlate._locale = new Locale(locale);
    }

    private validateLicensePlate(): void {
        const locale = LicensePlate._locale.getLocaleData();

        if (this._isCustom && locale.custom?.regex) {
            this._isValid = !!this._licensePlate.match(locale.custom.regex);
            return;
        } else if (this._isCustom) {
            this._isValid = false;
            return;
        }

        this._isValid = locale.common.some(({regex}: LocaleItem) => !!this._clearLicensePlate.match(regex));
    }

    private formatLicensePlate(): void | string {
        const locale = LicensePlate._locale.getLocaleData();

        if (this._isCustom && locale.custom && this._isValid) {
            this._format = locale.custom.format(this._licensePlate.match(locale.custom.regex))
            return;
        } else if (this._isCustom ) {
            return this.invalidFormatError();
        }

        const localeItem = locale.common.find(({regex}: LocaleItem) => !!this._clearLicensePlate.match(regex));

        if (!localeItem) {
            return this.invalidFormatError();
        }

        this._format = localeItem.format(this._clearLicensePlate.match(localeItem.regex));
    }

    public isValid() {
        return this._isValid;
    }

    public format() {
        return this._format;
    }

    private invalidFormatError(): string {
        return 'Invalid Format';
    }
}

export default LicensePlate;

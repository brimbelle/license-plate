import {Locale, Matches} from "../../utils/types";

export default<Locale> {
    common: [
        {
            regex: /^(CD)([0-9]{4})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}`.toUpperCase();
            }
        },
        {
            regex: /^(CD)([A-Z]{1,2})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^(CD)([0-9]{3})([A-Z])$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^([APE])([0-9]{1,3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}`.toUpperCase();
            }
        },
        {
            regex: /^([VYZGMOQT])([A-Z]{3})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^(SA|SB|SP|SU)([A-Z]{2})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}${matches[2]} ${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^(WA|WM|WQ|WS)([A-Z]{3})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^(XA|XM|XQ|XS|XB)([0-9]{2})([A-Z]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^([0-9]{1})([A-Z]{3})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
            }
        },
        {
            regex: /^([A-Z]{3})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}`.toUpperCase();
            }
        },
        {
            regex: /^([0-9]{3})([A-Z]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}`.toUpperCase();
            }
        },
        {
            regex: /^([0-9]{6})$/i,
            format(matches: Matches): string {
                return `${matches[1]}`.toUpperCase();
            }
        },
        {
            regex: /^([0-9])([0-9]{6})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}`.toUpperCase();
            }
        },
    ],
    custom: {
        regex: /^([0-9A-Z-]{1,9})$/i,
        format(matches: Matches): string {
            return matches[1].toUpperCase();
        }
    },
}

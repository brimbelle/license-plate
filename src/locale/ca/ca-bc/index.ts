import {Locale, Matches} from "../../../utils/types";

export default<Locale> {
    common: [
        {
            regex: /^([0-9]{5})$/i,
            format(matches: Matches): string {
                return matches[1];
            }
        },
        {
            regex: /^([0-9]{3})([0-9]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]}-${matches[2]}`;
            }
        },
        {
            regex: /^([A-Z]{3})([0-9]{3,4})$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]}`;
            }
        },
        {
            regex: /^([0-9]{3})([A-Z]{3})$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]}`;
            }
        },
        {
            regex: /^([A-Z]{2})([0-9])([0-9]{2})([A-Z])$/i,
            format(matches: Matches): string {
                return `${matches[1]}${matches[2]} ${matches[3]}${matches[4]}`;
            }
        },
        {
            regex: /^([0-9]{4})([A-Z]{2})$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]}`;
            }
        },
        {
            regex: /^([A-Z]{2})([0-9]{4})$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]}`;
            }
        },
    ],
    /*custom: {
        regex: /()/i,
        format(matches: Matches): string {
            console.log(matches);
            return '';
        }
    },*/
}

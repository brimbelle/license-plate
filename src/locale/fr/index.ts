import {Locale, Matches} from "../../utils/types";

export default<Locale> [
    {
        regex: /^([A-Z]{2})([0-9]{3})([A-Z]{2})$/i,
        format(matches: Matches): string {
            return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
        }
    },
    {
        regex: /^([0-9]{1,4})([A-Z]{2,3})([0-9]{2,3})$/i,
        format(matches: Matches): string {
            return `${matches[1]} ${matches[2]} ${matches[3]}`.toUpperCase();
        }
    },
]

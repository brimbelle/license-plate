import {Locale, Matches} from "../../utils/types";

export default<Locale> [
    {
        regex: /^([ABCDEFGHJKLMNPQRSTVWXYZ]{2})([0-9]{3})([ABCDEFGHJKLMNPQRSTVWXYZ]{2})$/i,
        format(matches: Matches): string {
            return `${matches[1]}-${matches[2]}-${matches[3]}`.toUpperCase();
        }
    },
]

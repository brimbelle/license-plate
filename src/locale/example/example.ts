import {Locale, Matches} from "../../utils/types";

export default<Locale> [
    {
        regex: /()/i,
        format(matches: Matches): string {
            console.log(matches);
            return '';
        }
    },
]

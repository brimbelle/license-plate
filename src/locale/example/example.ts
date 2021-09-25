import {Locale, Matches} from "../../utils/types";

export default<Locale> {
    common: [
        {
            regex: /()/i,
            format(matches: Matches): string {
                console.log(matches);
                return '';
            }
        },
    ],
    custom: {
        regex: /()/i,
        format(matches: Matches): string {
            console.log(matches);
            return '';
        }
    },
}

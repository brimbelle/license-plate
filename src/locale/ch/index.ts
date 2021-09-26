import {Locale, Matches} from "../../utils/types";

export default<Locale> {
    common: [
        {
            regex: /^(M|AG|AI|AR|BE|BL|BS|FR|GE|GL|GR|JU|LU|NE|NW|OW|SG|SH|SO|SZ|TG|TI|UR|VD|VS|ZG|ZH)([0-9]{1,6})$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]}`.toUpperCase();
            }
        },
        /*{
            regex: /^(CD|CC|AT)(AG|AI|AR|BE|BL|BS|FR|GE|GL|GR|JU|LU|NE|NW|OW|SG|SH|SO|SZ|TG|TI|UR|VD|VS|ZG|ZH)([0-9]{1,3})([0-9]{1,3})$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]} ${matches[3]} ${matches[4]}`.toUpperCase();
            }
        },*/
    ],
}

import { Locale, Matches } from '../../utils/types';

export default<Locale> {
    common: [
        {
            regex: /^(ABDFHKMSXY)([A-Z]{1,2})([0-9]{1,4}[HE]?)$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]} ${matches[3]}`.toUpperCase();
            },
        },
        {
            regex: /^(AA|AB|AC|AD|AH|AE|AK|AL|AM|AN|AÖ|AP|AR|AS|AT|AU|AW|AZ|BA|BB|BC|BD|BE|BF|BG|BH|BI|BL|BM|BN|BO|BÖ|BP|BR|BS|BT|BU|BW|BZ|||||||||||||||||||||||||||DB|HH|IN|NL|SH|)([A-Z]{1,2})([0-9]{1,4}[HE]?)$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]} ${matches[3]}`.toUpperCase();
            },
        },
        {
            regex: /^(ABG|AIB|AIC|ALF|ALS|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASD|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BBL|BCH|BED|BEI|BEL|BER|BGD|BID|BID|BID|BID|BIW|BKS|BLB|BLK|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRI|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BUR|BÜS|BÜZ|BWL|BYL|BZA||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||BWL|BYL|HEL|LSA|LSN|MVL|NRW|RPL|RWL|SAL|THL|WOB)([A-Z]{1,2})([0-9]{1,4}[HE]?)$/i,
            format(matches: Matches): string {
                return `${matches[1]} ${matches[2]} ${matches[3]}`.toUpperCase();
            },
        },
    ],
    custom: {
        regex: /()/i,
        format(matches: Matches): string {
            console.log(matches);
            return '';
        },
    },
};

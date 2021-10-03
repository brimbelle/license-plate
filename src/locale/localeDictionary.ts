import {LocaleDictionary} from "../utils/types";
import fr from "./fr";
import be from "./be";
import ch from "./ch";
import ca from "./ca";

const localeDictionary: LocaleDictionary = {
    fr,
    be,
    ch,
    ...ca,
}

export default localeDictionary;

// ? Local repository
import { Div } from "./Boxes/Div.js";
import { Link } from "./Buttons/Link.js";
import { Button } from "./Buttons/Button.js";
import { Form } from "./Forms/Form.js";
import { Input } from "./Forms/Input.js";
import { Ul } from "./List/Ul.js";
import { Table } from "./Table/Table.js";
import { TBody } from "./Table/TBody.js";
import { Td } from "./Table/Td.js";
import { Th } from "./Table/Th.js";
import { THead } from "./Table/THead.js";
import { Tr } from "./Table/Tr.js";
import { Span } from "./Texts/Span.js";
import { Icon } from "./Visuals/Icon.js";

/**
 * * HTMLCreator creates multiple HTMLElement.
 * @export
 * @class HTMLCreator
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class HTMLCreator{
    constructor(tag = 'DIV', properties = {}){
        switch (tag.toUpperCase()) {
            default:
                return new Div(properties);
                break;
        }
    }
}
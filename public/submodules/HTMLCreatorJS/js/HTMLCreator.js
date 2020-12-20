// ? Local repository
import { Div } from "./Boxes/Div.js";
import { Figure } from "./Boxes/Figure.js";
import { Header } from "./Boxes/Header.js";
import { Button } from "./Buttons/Button.js";
import { Link } from "./Buttons/Link.js";
import { Form } from "./Forms/Form.js";
import { Input } from "./Forms/Input.js";
import { Label } from "./Forms/Label.js";
import { Item } from "./List/Item.js";
import { List } from "./List/List.js";
import { Table } from "./Table/Table.js";
import { Span } from "./Texts/Span.js";
import { Title } from "./Texts/Title.js";
import { Icon } from "./Visuals/Icon.js";
import { Image } from "./Visuals/Image.js";

/**
 * * HTMLCreator creates multiple HTMLElement.
 * @export
 * @class HTMLCreator
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class HTMLCreator{
    /**
     * * Creates an instance of HTMLCreator.
     * @param {String} [tag] HTML Element node name.
     * @param {Object} [data] HTML Elemenet data.
     * @memberof HTMLCreator
     */
    constructor(tag = 'DIV', data = {}){
        switch (tag.toUpperCase()) {
            case 'FIGURE':
                return new Figure((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('image') ? data.image : {}));
            case 'HEADER':
                return new Header((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('title') ? data.title : {}));
            case 'BUTTON':
                return new Button((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('states') ? data.states : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'A':
                return new Link((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('states') ? data.states : {}), (data.hasOwnProperty('callback') ? data.callback : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'FORM':
                return new Form((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('inputs') ? data.inputs : []));
            case 'UL':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'ul';
                }
                return new List((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'OL':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'ol';
                }
                return new List((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('items') ? data.items : []));
            case 'INPUT':
                return new Input((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('states') ? data.states : {}));
            case 'LABEL':
                return new Label((data.hasOwnProperty('properties') ? data.properties : {}), data.input);
            case 'TABLE':
                return new Table((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('cells') ? data.cells : []), (data.hasOwnProperty('data') ? data.data : []));
            case 'SPAN':
                return new Span((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H1':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'h1';
                }
                return new Title((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H2':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'h2';
                }
                return new Title((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H3':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'h3';
                }
                return new Title((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H4':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'h4';
                }
                return new Title((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H5':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'h5';
                }
                return new Title((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'H6':
                if (data.hasOwnProperty('properties')) {
                    data.properties.type = 'h6';
                }
                return new Title((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
            case 'ICON':
                return new Icon((data.hasOwnProperty('properties') ? data.properties : {}));
            case 'IMG':
                return new Image((data.hasOwnProperty('properties') ? data.properties : {}));
            default:
                return new Div((data.hasOwnProperty('properties') ? data.properties : {}), (data.hasOwnProperty('innerHTML') ? data.innerHTML : false));
        }
    }
}
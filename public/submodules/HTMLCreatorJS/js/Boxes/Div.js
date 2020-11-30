/**
 * * Div creates an excellent <div>.
 * @export
 * @class Div
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Div{
    /**
     * * Creates an instance of Div.
     * @param {Object} [properties] Div properties:
     * @param {String} [properties.id] Div ID.
     * @param {String[]} [properties.classes] Div class names.
     * @param {HTMLElement} [innerHTML] Div inner HTML Element.
     * @memberof Div
     */
    constructor(properties = {
        id: 'div-1',
        classes: [],
    }, innerHTML = false){
        this.setProperties(properties);
        this.createHTML(innerHTML);
    }

    /**
     * * Set the Div properties.
     * @param {Object} [properties] Div properties:
     * @param {String} [properties.id] Div ID.
     * @param {String[]} [properties.classes] Div class names.
     * @memberof Div
     */
    setProperties(properties = {
        id: 'div-1',
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setUrlProperty(properties);
        this.setNameProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Div properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Div
     */
    getProperties(name = ''){
        if (name && name != '') {
            return this.properties[name];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} name Property name.
     * @returns {Boolean}
     * @memberof Div
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Div ID.
     * @param {Object} [properties] Div properties:
     * @param {String} [properties.id] Div ID.
     * @memberof Div
     */
    setIdProperty(properties = {
        id: 'div-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'div-1';
        }
    }

    /**
     * * Returns the Div ID.
     * @returns {String}
     * @memberof Div
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Div class names.
     * @param {Object} [properties] Div properties:
     * @param {String} [properties.classes] Div class names.
     * @memberof Div
     */
    setClassesProperty(properties = {
        classes: [],
    }){
        if (properties.hasOwnProperty('classes')) {
            this.properties.classes = properties.classes;
        } else {
            this.properties.classes = [];
        }
    }

    /**
     * * Returns the Div class names.
     * @returns {Array}
     * @memberof Div
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <div> HTML Element.
     * @returns {HTMLElement}
     * @memberof Div
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <div> HTML Element.
     * @param {HTMLElement} [innerHTML] Div inner HTML Element.
     * @memberof Div
     */
    createHTML(innerHTML = false){
        this.html = document.createElement('div');
        if (innerHTML) {
            this.html.appendChild(innerHTML);
        }
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Div
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Div
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }
}
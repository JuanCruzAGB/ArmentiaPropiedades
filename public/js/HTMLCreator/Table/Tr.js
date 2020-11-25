/**
 * * Tr creates an excellent <tr>.
 * @export
 * @class Tr
 */
export class Tr{
    /**
     * * Creates an instance of Tr.
     * @param {Object} [properties] Tr properties:
     * @param {String} [properties.id] Tr ID.
     * @param {String[]} [properties.classes] Tr class names.
     * @memberof Tr
     */
    constructor(properties = {
        id: 'tr-1',
        classes: [],
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Tr properties.
     * @param {Object} [properties] Tr properties:
     * @param {String} [properties.id] Tr ID.
     * @param {String[]} [properties.classes] Tr class names.
     * @memberof Tr
     */
    setProperties(properties = {
        id: 'tr-1',
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Tr properties or an specific property.
     * @returns {Object|*}
     * @memberof Tr
     */
    getProperties(property = ''){
        if (property && property != '') {
            return this.properties[property];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} [property] Property name.
     * @returns {Boolean}
     * @memberof Tr
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Tr ID.
     * @param {Object} [properties] Tr properties:
     * @param {String} [properties.id] Tr ID.
     * @memberof Tr
     */
    setIdProperty(properties = {
        id: 'tr-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'tr-1';
        }
    }

    /**
     * * Returns the Tr ID.
     * @returns {String} The Tr ID.
     * @memberof Tr
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Tr class names.
     * @param {Object} [properties] Tr properties:
     * @param {String[]} [properties.classes] Tr class names.
     * @memberof Tr
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
     * * Returns the Tr class names.
     * @returns {String[]}
     * @memberof Tr
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <tr>.
     * @returns {HTMLElement}
     * @memberof Tr
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <tr>.
     * @memberof Tr
     */
    createHTML(){
        this.html = document.createElement('tr');
        this.html.id = this.getIdProperty();
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }

    /**
     * * Append the Tr cell.
     * @param {Th|Td} cell A Td or Th.
     * @memberof Tr
     */
    appendCell(cell){
        this.html.appendChild(cell.getHTML());
    }
}
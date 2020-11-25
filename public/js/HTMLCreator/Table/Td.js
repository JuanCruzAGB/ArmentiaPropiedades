/**
 * * Td creates an excellent <td>.
 * @export
 * @class Td
 */
export class Td{
    /**
     * * Creates an instance of Td.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.id] Td ID.
     * @param {String} [properties.name] Td name.
     * @param {String} [properties.innerHTML] Td inner HTML.
     * @param {String[]} [properties.classes] Td class names.
     * @param {*} [data] Td innerHTML data.
     * @memberof Td
     */
    constructor(properties = {
        id: 'td-1',
        name: 'Table cell 1',
        innerHTML: undefined,
        classes: [],
    }, data){
        this.setProperties(properties);
        this.setData(data);
        this.createHTML();
    }

    /**
     * * Set the Td properties.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.id] Td ID.
     * @param {String} [properties.name] Td name.
     * @param {String} [properties.innerHTML] Td inner HTML.
     * @param {String[]} [properties.classes] Td class names.
     * @memberof Td
     */
    setProperties(properties = {
        id: 'td-1',
        name: 'Table cell 1',
        innerHTML: undefined,
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setNameProperty(properties);
        this.setInnerHTMLProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Td properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Td
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
     * @memberof Td
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Td ID.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.id] Td ID.
     * @memberof Td
     */
    setIdProperty(properties = {
        id: 'td-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'td-1';
        }
    }

    /**
     * * Returns the Td ID.
     * @returns {String}
     * @memberof Td
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Td name.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.name] Td name.
     * @memberof Td
     */
    setNameProperty(properties = {
        name: 'Table cell 1',
    }){
        if (properties.hasOwnProperty('name')) {
            this.properties.name = properties.name;
        } else {
            this.properties.name = 'Table cell 1';
        }
    }

    /**
     * * Returns the Td name.
     * @returns {String}
     * @memberof Td
     */
    getNameProperty(){
        return this.properties.name;
    }

    /**
     * * Set the Td inner HTML.
     * @param {Object} [properties] Td properties:
     * @param {String} [properties.innerHTML] Td inner HTML.
     * @memberof Td
     */
    setInnerHTMLProperty(properties = {
        innerHTML: undefined,
    }){
        if (properties.hasOwnProperty('innerHTML')) {
            this.properties.innerHTML = properties.innerHTML;
        } else {
            this.properties.innerHTML = undefined;
        }
    }

    /**
     * * Returns the Td inner HTML.
     * @returns {String}
     * @memberof Td
     */
    getInnerHTMLProperty(){
        return this.properties.innerHTML;
    }

    /**
     * * Set the Td class names.
     * @param {Object} [properties] Td properties:
     * @param {String[]} [properties.classes] Td class names.
     * @memberof Td
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
     * * Returns the Td class names.
     * @returns {Array}
     * @memberof Td
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Td data.
     * @param {Object} data Td data.
     * @memberof Td
     */
    setData(data = undefined){
        this.data = data;
    }

    /**
     * * Returns the Td data.
     * @returns {*}
     * @memberof Td
     */
    getData(){
        return this.data;
    }

    /**
     * * Returns the <td>.
     * @returns {HTMLElement}
     * @memberof Td
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <td>.
     * @memberof Td
     */
    createHTML(){
        this.html = document.createElement('td');
        this.html.title = this.getNameProperty();
        this.html.classList.add(this.getIdProperty());
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        this.append();
    }

    /**
     * * Append the Td inner HTML.
     * @memberof Td
     */
    append(){
        this.html.innerHTML = '';
        if (this.getData()) {
            this.html.appendChild(this.getData());
        }
    }

    /**
     * * Change the Td data.
     * @param {*} data Td data.
     * @memberof Td
     */
    changeData(data = undefined){
        this.setData(data);
        this.append();
    }
}
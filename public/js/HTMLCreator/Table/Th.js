/**
 * * Th creates an excellent <th>.
 * @export
 * @class Th
 */
export class Th{
    /**
     * * Creates an instance of Th.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.id] Th ID.
     * @param {String} [properties.innerHTML] Th inner HTML.
     * @param {String[]} [properties.classes] Th class names.
     * @param {*} [data] Th data.
     * @memberof Th
     */
    constructor(properties = {
        id: 'th-1',
        innerHTML: undefined,
        classes: [],
    }, data = 'Table cell header 1'){
        this.setProperties(properties);
        this.setData(data);
        this.createHTML();
    }

    /**
     * * Set the Th properties.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.id] Th ID.
     * @param {String} [properties.innerHTML] Th inner HTML.
     * @param {String[]} [properties.classes] Th class names.
     * @memberof Th
     */
    setProperties(properties = {
        id: 'th-1',
        innerHTML: undefined,
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setInnerHTMLProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Th properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}.
     * @memberof Th
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
     * @memberof Th
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Th ID.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.id] Th ID.
     * @memberof Th
     */
    setIdProperty(properties = {
        id: 'th-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'th-1';
        }
    }

    /**
     * * Returns the Th ID.
     * @returns {String}
     * @memberof Th
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Th inner HTML.
     * @param {Object} [properties] Th properties:
     * @param {String} [properties.innerHTML] Th inner HTML.
     * @memberof Th
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
     * * Returns the Th inner HTML.
     * @returns {String}
     * @memberof Th
     */
    getInnerHTMLProperty(){
        return this.properties.innerHTML;
    }

    /**
     * * Set the Th class names.
     * @param {Object} [properties] Th properties:
     * @param {String[]} [properties.classes] Th class names.
     * @memberof Th
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
     * * Returns the Th class names.
     * @returns {String[]}
     * @memberof Th
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Th data.
     * @param {*} [data] Th data.
     * @memberof Th
     */
    setData(data = undefined){
        this.data = data;
    }

    /**
     * * Returns the Th data.
     * @returns {*}
     * @memberof Th
     */
    getData(){
        return this.data;
    }

    /**
     * * Returns the <th>.
     * @returns {HTMLElement}
     * @memberof Th
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <th>.
     * @memberof Th
     */
    createHTML(){
        this.html = document.createElement('th');
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        this.append();
    }

    /**
     * * Append the Th inner HTML.
     * @memberof Th
     */
    append(){
        this.html.innerHTML = '';
        if (this.getData()) {
            this.html.innerHTML = this.getData();
        }
    }

    /**
     * * Change the Th data.
     * @param {*} [data] Th data.
     * @memberof Th
     */
    changeData(data = undefined){
        this.setData(data);
        this.append();
    }
}
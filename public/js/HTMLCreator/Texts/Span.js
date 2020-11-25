/**
 * * Span creates an excellent <span>.
 * @export
 * @class Span
 */
export class Span{
    /**
     * * Creates an instance of Span.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.id] Span ID.
     * @param {String} [properties.innerHTML] Span inner HTML.
     * @param {String[]} [properties.classes] Span class names.
     * @memberof Span
     */
    constructor(properties = {
        id: 'span-1',
        innerHTML: 'Hi i\'m an span!',
        classes: [],
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Span properties.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.id] Span ID.
     * @param {String} [properties.innerHTML] Span inner HTML.
     * @param {String[]} [properties.classes] Span class names.
     * @memberof Span
     */
    setProperties(properties = {
        id: 'span-1',
        innerHTML: 'Hi i\'m an span!',
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Span properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Span
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
     * @memberof Span
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Span ID.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.id] Span ID.
     * @memberof Span
     */
    setIdProperty(properties = {
        id: 'span-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'span-1';
        }
    }

    /**
     * * Returns the Span ID.
     * @returns {String}
     * @memberof Span
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Span inner HTML.
     * @param {Object} [properties] Span properties:
     * @param {String} [properties.innerHTML] Span inner HTML.
     * @memberof Span
     */
    setInnerHTMLProperty(properties = {
        innerHTML: 'Hi i\'m an span!',
    }){
        if (properties.hasOwnProperty('innerHTML')) {
            this.properties.innerHTML = properties.innerHTML;
        } else {
            this.properties.innerHTML = 'Hi i\'m an span!';
        }
    }

    /**
     * * Returns the Span inner HTML.
     * @returns {String}
     * @memberof Span
     */
    getInnerHTMLProperty(){
        return this.properties.innerHTML;
    }

    /**
     * * Set the Span class names.
     * @param {Object} [properties] Span properties:
     * @param {String[]} properties.classes Span class names.
     * @memberof Span
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
     * * Returns the Span class names.
     * @returns {Array}
     * @memberof Span
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <span> HTML Element.
     * @returns {HTMLElement}
     * @memberof Span
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <span> HTML Element.
     * @memberof Span
     */
    createHTML(){
        this.html = document.createElement('i');
        this.html.id = this.getIdProperty();
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        this.html.innerHTML = this.getInnerHTMLProperty();
    }
}
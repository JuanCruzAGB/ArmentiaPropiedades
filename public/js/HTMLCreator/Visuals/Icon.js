/**
 * * Icon creates an excellent <icon>.
 * @export
 * @class Icon
 */
export class Icon{
    /**
     * * Creates an instance of Icon.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.id] Icon ID.
     * @param {String[]} [properties.classes] Icon class names.
     * @memberof Icon
     */
    constructor(properties = {
        id: 'icon-1',
        classes: [],
    }){
        this.setProperties(properties);
        this.createHTML();
    }

    /**
     * * Set the Icon properties.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.id] Icon ID.
     * @param {String[]} [properties.classes] Icon class names.
     * @memberof Icon
     */
    setProperties(properties = {
        id: 'icon-1',
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Icon properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Icon
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
     * @param {String} property Property name.
     * @returns {Boolean}
     * @memberof Icon
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Icon ID.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.id] Icon ID.
     * @memberof Icon
     */
    setIdProperty(properties = {
        id: 'icon-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'icon-1';
        }
    }

    /**
     * * Returns the Icon ID.
     * @returns {String}
     * @memberof Icon
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Icon class names.
     * @param {Object} [properties] Icon properties:
     * @param {String} [properties.classes] Icon class names.
     * @memberof Icon
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
     * * Returns the Icon class names.
     * @returns {Array}
     * @memberof Icon
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Returns the <icon> HTML Element.
     * @returns {HTMLElement}
     * @memberof Icon
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <icon> HTML Element.
     * @memberof Icon
     */
    createHTML(){
        this.html = document.createElement('i');
        this.html.id = this.getIdProperty();
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
    }
}
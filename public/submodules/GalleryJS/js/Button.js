/**
 * * Button controls the Gallery Buttons.
 * @export
 * @class Gallery
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Button{
    /**
     * * Creates an instance of Button.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.id] Button ID.
     * @param {String} [properties.source] Button Image source.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.selected] Button selected status.
     * @param {HTMLElement} html Button HTML Element.
     * @param {Gallery} gallery Button Gallery parent.
     * @memberof Button
     */
    constructor(properties = {
        id: 'button-1',
        source: undefined,
    }, states = {
        selected: false,
    }, html, gallery){
        this.setProperties(properties);
        this.setStates(states);
        this.setHTML(html, gallery);
    }

    /**
     * * Set the Button properties.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.id] Button ID.
     * @param {String} [properties.source] Button Image source.
     * @memberof Button
     */
    setProperties(properties = {
        id: 'button-1',
        source: undefined,
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setSourceProperty(properties);
    }

    /**
     * * Returns the Button properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Button
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
     * @memberof Button
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} name Property name.
     * @param {*} value Property value.
     * @memberof Button
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the Button ID.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.id] Button ID.
     * @memberof Button
     */
    setIdProperty(properties = {
        id: 'button-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'button-1';
        }
    }

    /**
     * * Returns the Button ID.
     * @returns {String}
     * @memberof Button
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Button Image source.
     * @param {Object} [properties] Button properties:
     * @param {String} [properties.source] Button Image source.
     * @memberof Button
     */
    setSourceProperty(properties = {
        source: undefined,
    }){
        if (properties.hasOwnProperty('source')) {
            this.properties.source = properties.source;
        } else {
            this.properties.source = undefined;
        }
    }

    /**
     * * Returns the Button Image source.
     * @returns {String}
     * @memberof Button
     */
    getSourceProperty(){
        return this.properties.source;
    }

    /**
     * * Set the Button states.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.selected] Button selected status.
     * @memberof Button
     */
    setStates(states = {
        selected: false,
    }){
        this.states = {};
        this.setSelectedStatus(states);
    }

    /**
     * * Returns the Button states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof Button
     */
    getStates(property = ''){
        if (property && property != '') {
            return this.states[property];
        } else {
            return this.states;
        }
    }

    /**
     * * Check if there is a status.
     * @param {String} name Status name.
     * @returns {Boolean}
     * @memberof Button
     */
    hasStates(name = ''){
        if (this.states.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a status value.
     * @param {String} name Status name.
     * @param {*} value Status value.
     * @memberof Button
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            case 'selected':
                if (this.getStates('selected')) {
                    this.html.classList.add('selected');
                } else {
                    this.html.classList.remove('selected');
                }
                break;
        }
    }

    /**
     * * Set the Button selected status.
     * @param {Object} [states] Button states:
     * @param {Boolean} [states.selected] Button selected status.
     * @memberof Button
     */
    setSelectedStatus(states = {
        selected: false,
    }){
        if (states.hasOwnProperty('selected')) {
            this.states.selected = states.selected;
        } else {
            this.states.selected = false;
        }
    }

    /**
     * * Returns the Button selected status.
     * @returns {String}
     * @memberof Button
     */
    getSelectedStatus(){
        return this.states.selected;
    }

    /**
     * * Set the Button HTML Element.
     * @param {HTMLElement} html Button HTML Element.
     * @param {Gallery} gallery Button Gallery parent.
     * @memberof Button
     */
    setHTML(html, gallery){
        let instance = this;
        this.html = html;
        this.html.addEventListener('click', function(e){
            e.preventDefault();
            gallery.select(instance.getProperties('id'));
        });
    }

    /**
     * * Returns the Button HTML Element.
     * @returns {HTMLElement}
     * @memberof Button
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Unselect the Button.
     * @memberof Button
     */
    unselect(){
        this.changeStatus('selected', false);
    }

    /**
     * * Select the Button.
     * @memberof Button
     */
    select(){
        this.changeStatus('selected', true);
    }

    /**
     * * Get all the Gallery Buttons.
     * @static
     * @param {Gallery} gallery Button Gallery parent.
     * @returns {Button[]}
     * @memberof Button
     */
    static getDomHTML(gallery){
        let buttons = [];
        let htmls = document.querySelectorAll(`#${ gallery.getProperties('id') }.gallery .gallery-button`);
        let key = 0;
        for (const html of htmls) {
            let properties = Button.generateProperties(html);
            let states = Button.generateStates(html);
            properties.id = `button-${ key }`;
            buttons.push(new this(properties, states, html, gallery));
            key++;
        }
        return buttons;
    }

    /**
     * * Returns the Button properties genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Button HTML Element
     * @returns {Object}
     * @memberof Button
     */
    static generateProperties(html){
        let properties = {};
        if (html.children.length) {
            for (const child of html.children) {
                if (child.nodeName == 'IMG' && child.classList.contains('gallery-image')) {
                    properties.source = child.src;
                }
            }
        }
        return properties;
    }

    /**
     * * Returns the Button states genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Button HTML Element
     * @returns {Object}
     * @memberof Button
     */
    static generateStates(html){
        let states = {
            selected: html.classList.contains('selected'),
        };
        return states;
    }
}
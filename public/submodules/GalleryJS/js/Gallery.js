// ? Local repository
import { Button } from "./Button.js";
import { Image } from "./Image.js";

/**
 * * Gallery makes an excellent gallery of images.
 * @export
 * @class Gallery
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Gallery{
    /**
     * * Creates an instance of Gallery.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.id] Gallery ID.
     * @param {String} [properties.selected] Image selected.
     * @param {Object} [states] Gallery states:
     * @param {String} [states.mode] Gallery status mode.
     * @memberof Gallery
     */
    constructor(properties = {
        id: 'gallery-1',
        selected: 0,
    }, states = {}){
        this.setProperties(properties);
        this.setStates(states);
        this.setButtons();
        this.setImage();
    }

    /**
     * * Set the Gallery properties.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.id] Gallery ID.
     * @param {String} [properties.selected] Image selected.
     * @memberof Gallery
     */
    setProperties(properties = {
        id: 'gallery-1',
        selected: 0,
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setSelectedProperty(properties);
    }

    /**
     * * Returns the Gallery properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Gallery
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
     * @memberof Gallery
     */
    hasProperty(property = ''){
        if (this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} property Property name.
     * @param {*} value Property value.
     * @memberof Gallery
     */
    changeProperty(property = '', value = ''){
        if (this.hasProperty(property)) {
            this.properties[property] = value;
        }
        switch (property) {
            case 'selected':
                this.getImage().changeProperty('source', this.getButtons(value).getProperties('source'));
                break;
        }
    }

    /**
     * * Set the Gallery ID.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.id] Gallery ID.
     * @memberof Gallery
     */
    setIdProperty(properties = {
        id: 'gallery-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'gallery-1';
        }
    }

    /**
     * * Returns the Gallery ID.
     * @returns {String}
     * @memberof Gallery
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Gallery Image selected position.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.selected] Image selected.
     * @memberof Gallery
     */
    setSelectedProperty(properties = {
        selected: 0,
    }){
        if (properties.hasOwnProperty('selected')) {
            this.properties.selected = properties.selected;
        } else {
            this.properties.selected = 0;
        }
    }

    /**
     * * Returns the Gallery Image selected position.
     * @returns {String}
     * @memberof Gallery
     */
    getSelectedProperty(){
        return this.properties.selected;
    }

    /**
     * * Set the Gallery class names.
     * @param {Object} [properties] Properties:
     * @param {String} [properties.classes] Gallery class names.
     * @memberof Gallery
     */
    setClassesProperty(properties = {
        classes: [],
    }){
        if (properties.hasOwnProperty('classes')) {
            this.properties.classes = properties.classes;
            this.properties.classes.push('gallery');
        } else {
            this.properties.classes = ['gallery'];
        }
    }

    /**
     * * Returns the Gallery class names.
     * @returns {Array}
     * @memberof Gallery
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Gallery states.
     * @param {Object} [states] Gallery states:
     * @memberof Gallery
     */
    setStates(states = {}){
        this.states = {};
    }

    /**
     * * Returns the Link states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof Gallery
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
     * @memberof Gallery
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
     * @memberof Input
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the Gallery HTML Element.
     * @memberof Gallery
     */
    setHTML(){
        this.html = document.querySelector(`#${ this.getProperties('id') }.gallery`);
    }

    /**
     * * Returns the Gallery HTML Element.
     * @returns {HTMLElement}
     * @memberof Gallery
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Set the Gallery Buttons.
     * @memberof Gallery
     */
    setButtons(){
        this.buttons = Button.getDomHTML(this);
    }

    /**
     * * Returns the Gallery Buttons.
     * @param {Number} [index] Button position.
     * @returns {Button[]}
     * @memberof Gallery
     */
    getButtons(index = false){
        if (index !== false) {
            return this.buttons[index];
        } else {
            return this.buttons;
        }
    }

    /**
     * * Set the Gallery Image.
     * @memberof Gallery
     */
    setImage(){
        this.image = Image.getDomHTML(this);
    }

    /**
     * * Returns the Gallery Image.
     * @returns {Image}
     * @memberof Gallery
     */
    getImage(){
        return this.image;
    }

    /**
     * * Select a new Image.
     * @param {String} id Gallery Button ID.
     * @memberof Gallery
     */
    select(id){
        let key = 0;
        for (const btn of this.getButtons()) {
            btn.unselect();
            if (btn.getProperties('id') == id) {
                this.changeProperty('selected', key);
                btn.select();
            }
            key++;
        }
    }

    /**
     * * Gallery Buttons callback.
     * @static
     * @param {*} params Parameters from the Button clicked.
     * @memberof Gallery
     */
    static click(params){
        params.gallery.changeProperty('selected', params.key);
    }
}
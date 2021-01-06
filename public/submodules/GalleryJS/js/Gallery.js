// ? GalleryJS repository
import { Button } from "./Button.js";
import { Image } from "./Image.js";

/**
 * * Gallery makes an excellent gallery of files.
 * @export
 * @class Gallery
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Gallery{
    /**
     * * Creates an instance of Gallery.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.id] Gallery ID.
     * @param {Object} [states] Gallery states:
     * @param {String} [states.selected] Gallery Image selected status.
     * @param {String} [states.mode] Gallery status mode.
     * @param {Object} [callback] Gallery selected callback.
     * @param {Function} [callback.function] Gallery selected callback function.
     * @param {Object} [callback.params] Gallery selected callback params.
     * @memberof Gallery
     */
    constructor(properties = {
        id: 'gallery-1',
    }, states = {
        selected: 0,
    }, callback = {
        function: function(){ /* console.log('clicked') */ },
        params: {
            //
        },
    }){
        this.setProperties(properties);
        this.setStates(states);
        this.setCallback(callback);
        this.setButtons();
        this.setImage();
    }

    /**
     * * Set the Gallery properties.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.id] Gallery ID.
     * @memberof Gallery
     */
    setProperties(properties = {
        id: 'gallery-1',
    }){
        this.properties = {};
        this.setIDProperty(properties);
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
            default:
                break;
        }
    }

    /**
     * * Set the Gallery ID.
     * @param {Object} [properties] Gallery properties:
     * @param {String} [properties.id] Gallery ID.
     * @memberof Gallery
     */
    setIDProperty(properties = {
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
    getIDProperty(){
        return this.properties.id;
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
     * @param {String} [states.selected] Gallery Image selected status.
     * @memberof Gallery
     */
    setStates(states = {
        selected: 0,
    }){
        this.states = {};
        this.setSelectedStatus(states);
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
     * @param {String} status Status name.
     * @param {*} value Status value.
     * @memberof Gallery
     */
    changeStatus(status = '', value = ''){
        if (this.hasStates(status)) {
            this.states[status] = value;
        }
        switch (status) {
            case 'selected':
                this.getImage().changeProperty('source', this.getButtons(value).getProperties('source'));
                break;
        }
    }

    /**
     * * Set the Gallery Image selected status.
     * @param {Object} [states] Gallery states:
     * @param {String} [states.selected] Gallery Image selected status.
     * @memberof Gallery
     */
    setSelectedStatus(states = {
        selected: 0,
    }){
        if (states.hasOwnProperty('selected')) {
            this.states.selected = states.selected;
        } else {
            this.states.selected = 0;
        }
    }

    /**
     * * Returns the Gallery Image selected status.
     * @returns {String}
     * @memberof Gallery
     */
    getSelectedStatus(){
        return this.states.selected;
    }

    /**
     * * Set the Gallery selected callback.
     * @param {Object} [callback] Gallery selected callback.
     * @param {Function} [callback.function] Gallery selected callback function.
     * @param {Object} [callback.params] Gallery selected callback params.
     * @memberof Gallery
     */
    setCallback(callback = {
        function: function(){ /* console.log('clicked') */ },
        params: {
            //
        },
    }){
        this.callback = {
            function: (callback.hasOwnProperty('function')) ? callback.function : function(){ /* console.log('clicked') */ },
            params: (callback.hasOwnProperty('params')) ? callback.params : {},
        };
    }

    /**
     * * Returns the Gallery selected callback.
     * @returns {Object}
     * @memberof Gallery
     */
    getCallback(){
        return this.callback;
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
     * * Reloads the Gallery Buttons.
     * @memberof Gallery
     */
    reloadButton(){
        this.buttons = Button.getDomHTML(this);
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
     * @param {String} [id] Gallery Button ID.
     * @memberof Gallery
     */
    select(id = undefined){
        if (id != undefined) {
            let key = 0;
            for (const btn of this.getButtons()) {
                btn.unselect();
                if (btn.getProperties('id') == id) {
                    this.changeStatus('selected', key);
                    btn.select();
                }
                key++;
            }
        } else {
            this.unselect();
        }
        let params = this.getCallback().params;
        params.gallery = this;
        this.getCallback().function(params);
    }

    /**
     * * Unselect the Image.
     * @memberof Gallery
     */
    unselect(){
        this.image.changeProperty('source', undefined)
    }

    /**
     * * Gallery Buttons callback.
     * @static
     * @param {*} params Parameters from the Button clicked.
     * @memberof Gallery
     */
    static click(params){
        params.gallery.changeStatus('selected', params.key);
    }
}
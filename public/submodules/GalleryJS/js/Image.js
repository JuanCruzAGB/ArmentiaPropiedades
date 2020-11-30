/**
 * * Image controls the Gallery selected Image.
 * @export
 * @class Gallery
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Image{
    /**
     * * Creates an instance of Image.
     * @param {Object} [properties] Image properties:
     * @param {String} [properties.id] Image ID.
     * @param {String} [properties.source] Image Image source.
     * @param {Object} [states] Image states:
     * @param {Boolean} [states.selected] Image selected status.
     * @param {HTMLElement} html Image HTML Element.
     * @memberof Image
     */
    constructor(properties = {
        id: 'image-1',
        source: undefined,
    }, html){
        this.setProperties(properties);
        this.setHTML(html);
    }

    /**
     * * Set the Image properties.
     * @param {Object} [properties] Image properties:
     * @param {String} [properties.id] Image ID.
     * @param {String} [properties.source] Image Image source.
     * @memberof Image
     */
    setProperties(properties = {
        id: 'image-1',
        source: undefined,
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setSourceProperty(properties);
    }

    /**
     * * Returns the Image properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof Image
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
     * @memberof Image
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
     * @memberof Image
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'source':
                this.html.src = this.getProperties('source');
                break;
        }
    }

    /**
     * * Set the Image ID.
     * @param {Object} [properties] Image properties:
     * @param {String} [properties.id] Image ID.
     * @memberof Image
     */
    setIdProperty(properties = {
        id: 'image-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'image-1';
        }
    }

    /**
     * * Returns the Image ID.
     * @returns {String}
     * @memberof Image
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Image Image source.
     * @param {Object} [properties] Image properties:
     * @param {String} [properties.source] Image Image source.
     * @memberof Image
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
     * * Returns the Image Image source.
     * @returns {String}
     * @memberof Image
     */
    getSourceProperty(){
        return this.properties.source;
    }

    /**
     * * Set the Image HTML Element.
     * @param {HTMLElement} html Image HTML Element.
     * @memberof Image
     */
    setHTML(html){
        this.html = html;
        this.html.addEventListener('click', function(e){
            e.preventDefault();
            console.log('clicked');
        });
    }

    /**
     * * Returns the Image HTML Element.
     * @returns {HTMLElement}
     * @memberof Image
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Get all the Gallery Images.
     * @static
     * @param {Gallery} gallery Button Gallery parent.
     * @returns {Image}
     * @memberof Image
     */
    static getDomHTML(gallery){
        let html = document.querySelector(`#${ gallery.getProperties('id') }.gallery .selected:not(.gallery-button) .gallery-image`);
        let properties = Image.generateProperties(html);
        properties.id = `image-selected`;
        let image = new this(properties, html);
        return image;
    }

    /**
     * * Returns the Image properties genereted from a HTML Element.
     * @static
     * @param {HTMLElement} html Image HTML Element
     * @returns {Object}
     * @memberof Image
     */
    static generateProperties(html){
        let properties = {
            source: html.src,
        };
        return properties;
    }
}
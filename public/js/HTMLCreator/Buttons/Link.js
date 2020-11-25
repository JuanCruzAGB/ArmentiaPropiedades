// ? Local repository
import { Icon } from "../Visuals/Icon.js";
import { Span } from "../Texts/Span.js";

/**
 * * Link creates an excellet <a>.
 * @export
 * @class Link
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Link{
    /**
     * * Creates an instance of Link.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @param {String} [properties.href] Link href.
     * @param {String} [properties.title] Link title.
     * @param {Object} [properties.innerHTML] Link inner HTML:
     * @param {String[]} [properties.innerHTML.icon] Link Inner HTML icon.
     * @param {String} [properties.innerHTML.text] Link Inner HTML text.
     * @param {String[]} [properties.classes] Link class names.
     * @param {Object} [status] Link status:
     * @param {Boolean} [status.prevenDefault] Link click event prevent default.
     * @param {Object} [callback] Link click callback.
     * @param {Function} [callback.function] Link click callback function.
     * @param {Object} [callback.params] Link click callback params.
     * @memberof Link
     */
    constructor(properties = {
        id: 'link-1',
        href: '#',
        title: false,
        innerHTML: {
            icon: ['fas', 'fa-angle-right'],
            text: 'Click me!',
        },
        classes: [],
    }, status = {
        preventDefault: false,
    }, callback = {
        function: function(){ /* console.log('clicked') */ },
        params: {
            //
        },
    }){
        this.setProperties(properties);
        this.setStatus(status);
        this.setCallback(callback);
        this.createHTML();
    }

    /**
     * * Set the Link properties.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @param {String} [properties.href] Link href.
     * @param {String} [properties.title] Link title.
     * @param {Object} [properties.innerHTML] Link inner HTML:
     * @param {String[]} [properties.innerHTML.icon] Link Inner HTML icon.
     * @param {String} [properties.innerHTML.text] Link Inner HTML text.
     * @param {String[]} [properties.classes] Link class names.
     * @memberof Link
     */
    setProperties(properties = {
        id: 'link-1',
        href: '#',
        title: false,
        innerHTML: {
            icon: ['fas', 'fa-angle-right'],
            text: 'Click me!',
        },
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setHrefProperty(properties);
        this.setTitleProperty(properties);
        this.setInnerHTMLProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Link properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Link
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
     * @memberof Link
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Link ID.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.id] Link ID.
     * @memberof Link
     */
    setIdProperty(properties = {
        id: 'link-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'link-1';
        }
    }

    /**
     * * Returns the Link ID.
     * @returns {String}
     * @memberof Link
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Link href.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.href] Link href.
     * @memberof Link
     */
    setHrefProperty(properties = {
        href: '#',
    }){
        if (properties.hasOwnProperty('href')) {
            this.properties.href = properties.href;
        } else {
            this.properties.href = '#';
        }
    }

    /**
     * * Returns the Link href.
     * @returns {String}
     * @memberof Link
     */
    getHrefProperty(){
        return this.properties.href;
    }

    /**
     * * Set the Link title.
     * @param {Object} [properties] Link properties:
     * @param {String} [properties.title] Link title.
     * @memberof Link
     */
    setTitleProperty(properties = {
        title: false,
    }){
        if (properties.hasOwnProperty('title')) {
            this.properties.title = properties.title;
        }
    }

    /**
     * * Returns the Link title.
     * @returns {String}
     * @memberof Link
     */
    getTitleProperty(){
        return this.properties.title;
    }

    /**
     * * Set the Link innerHTML.
     * @param {Object} [properties] Link properties:
     * @param {Object} [properties.innerHTML] Link inner HTML:
     * @param {String[]} [properties.innerHTML.icon] Link Inner HTML icon.
     * @param {String} [properties.innerHTML.text] Link Inner HTML text.
     * @memberof Link
     */
    setInnerHTMLProperty(properties = {
        innerHTML: {
            icon: ['fas', 'fa-angle-right'],
            text: 'Click me!',
        },
    }){
        this.properties.innerHTML = {};
        if (properties.hasOwnProperty('innerHTML')) {
            if (properties.innerHTML.hasOwnProperty('icon')) {
                this.properties.innerHTML.icon = new Icon({id: `${ this.getIdProperty() }-icon-1`, classes: properties.innerHTML.icon});
            }
            if (properties.innerHTML.hasOwnProperty('text')) {
                this.properties.innerHTML.text = new Span({id: `${ this.getIdProperty() }-text-1`, innerHTML: properties.innerHTML.text});
            }
        } else {
            this.properties.innerHTML.icon = new Icon({id: `${ this.getIdProperty() }-icon-1`, classes: ['fas', 'fa-angle-right']});
            this.properties.innerHTML.text = new Span({id: `${ this.getIdProperty() }-text-1`, innerHTML: 'Click me!'});
        }
    }

    /**
     * * Returns the Link innerHTML.
     * @returns {String}
     * @memberof Link
     */
    getInnerHTMLProperty(){
        return this.properties.innerHTML;
    }

    /**
     * * Set the Link class names.
     * @param {Object} [properties] Link properties:
     * @param {String[]} [properties.classes] Link class names.
     * @memberof Link
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
     * * Returns the Link class names.
     * @returns {Array}
     * @memberof Link
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Link status.
     * @param {Object} [status] Link status:
     * @param {Boolean} [status.prevenDefault] Link click event prevent default.
     * @memberof Link
     */
    setStatus(status = {
        preventDefault: false,
    }){
        this.status = {};
        this.setPreventDefaultStatus(status);
    }

    /**
     * * Returns the Link status or an specific status.
     * @param {String} [property] Status name.
     * @returns {Object|*}
     * @memberof Link
     */
    getStatus(property = ''){
        if (property && property != '') {
            return this.status[property];
        } else {
            return this.status;
        }
    }

    /**
     * * Set the Link click prevent default status.
     * @param {Object} [status] Link status:
     * @param {Boolean} [status.prevenDefault] Link click event prevent default.
     * @memberof Link
     */
    setPreventDefaultStatus(status = {
        preventDefault: false,
    }){
        if (status.hasOwnProperty('preventDefault')) {
            this.status.preventDefault = status.preventDefault;
        } else {
            this.status.prevenDefault = false;
        }
    }

    /**
     * * Returns the Link click prevent default status.
     * @returns {Boolean}
     * @memberof Link
     */
    getPreventDefaultStatus(){
        return this.status.preventDefault;
    }

    /**
     * * Set the Link click callback.
     * @param {Object} [callback] Link click callback.
     * @param {Function} [callback.function] Link click callback function.
     * @param {Object} [callback.params] Link click callback params.
     * @memberof Link
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
     * * Returns the Link click callback.
     * @returns {Object}
     * @memberof Link
     */
    getCallback(){
        return this.callback;
    }

    /**
     * * Returns the <a> HTML Element.
     * @returns {HTMLElement}
     * @memberof Link
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <a> HTML Element.
     * @memberof Link
     */
    createHTML(){
        let instance = this;
        this.html = document.createElement('a');
        this.html.id = this.getIdProperty();
        this.html.href = this.getHrefProperty();
        if (this.hasProperty('title')) {
            this.html.title = this.getTitleProperty();
        }
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        let innerHTMLs = this.getInnerHTMLProperty();
        for (const key in innerHTMLs) {
            const html = innerHTMLs[key];
            this.html.appendChild(html.getHTML());
        }
        this.html.addEventListener('click', function(e){
            if (instance.getPreventDefaultStatus()) {
                e.preventDefault();
            }
            let params = instance.getCallback().params;
            params.link = instance;
            instance.getCallback().function(params);
        });
    }
}
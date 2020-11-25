// ? Local repository
import { Input } from "./Input.js";

/**
 * * Form creates an excellent <form>.
 * @export
 * @class Form
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Form{
    /**
     * * Creates an instance of Form.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.id] Form ID.
     * @param {String} [properties.action] Form action.
     * @param {String} [properties.method] Form method.
     * @param {String} [properties.enctype] Form enctype.
     * @param {String[]} [properties.classes] Form class names.
     * @param {Object[]} [inputs] Form Inputs.
     * @memberof Form
     */
    constructor(properties = {
        id: 'form-1',
        action: '#',
        method: 'post',
        enctype: 'application/x-www-form-urlencoded',
        classes: [],
    }, inputs = []){
        this.setProperties(properties);
        this.setInputs(inputs);
        this.createHTML();
    }

    /**
     * * Set the Form properties.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.id] Form ID.
     * @param {String} [properties.action] Form action.
     * @param {String} [properties.method] Form method.
     * @param {String} [properties.enctype] Form enctype.
     * @param {String[]} [properties.classes] Form class names.
     * @memberof Form
     */
    setProperties(properties = {
        id: 'form-1',
        action: '#',
        method: 'post',
        enctype: 'application/x-www-form-urlencoded',
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setActionProperty(properties);
        this.setMethodProperty(properties);
        this.setEnctypeProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Form properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Form
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
     * @memberof Form
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Form ID.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.id] Form ID.
     * @memberof Form
     */
    setIdProperty(properties = {
        id: 'form-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'form-1';
        }
    }

    /**
     * * Returns the Form ID.
     * @returns {String}
     * @memberof Form
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Form action.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.action] Form action.
     * @memberof Form
     */
    setActionProperty(properties = {
        action: '#',
    }){
        if (properties.hasOwnProperty('action')) {
            this.properties.action = properties.action;
        } else {
            this.properties.action = '#';
        }
    }

    /**
     * * Returns the Form action.
     * @returns {String}
     * @memberof Form
     */
    getActionProperty(){
        return this.properties.action;
    }

    /**
     * * Set the Form method.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.method] Form method.
     * @memberof Form
     */
    setMethodProperty(properties = {
        method: 'post',
    }){
        if (properties.hasOwnProperty('method')) {
            this.properties.method = properties.method;
        } else {
            this.properties.method = 'post';
        }
    }

    /**
     * * Returns the Form method.
     * @returns {String}
     * @memberof Form
     */
    getMethodProperty(){
        return this.properties.method;
    }

    /**
     * * Set the Form enctype.
     * @param {Object} [properties] Form properties:
     * @param {String} [properties.enctype] Form enctype.
     * @memberof Form
     */
    setEnctypeProperty(properties = {
        enctype: 'application/x-www-form-urlencoded',
    }){
        if (properties.hasOwnProperty('enctype')) {
            this.properties.enctype = properties.enctype;
        } else {
            this.properties.enctype = 'application/x-www-form-urlencoded';
        }
    }

    /**
     * * Returns the Form enctype.
     * @returns {String}
     * @memberof Form
     */
    getEnctypeProperty(){
        return this.properties.enctype;
    }

    /**
     * * Set the Form class names.
     * @param {Object} [properties] Form properties:
     * @param {String[]} [properties.classes] Form class names.
     * @memberof Form
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
     * * Returns the Form class names.
     * @returns {Array}
     * @memberof Form
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Form Inputs.
     * @param {Object[]} [inputs] Form Inputs.
     * @memberof Form
     */
    setInputs(inputs = []){
        this.inputs = [];
        if (inputs.length) {
            for (const input of inputs) {
                if (input.hasOwnProperty('states')) {
                    this.inputs.push(new Input(input.properties, input.states));
                } else {
                    this.inputs.push(new Input(input.properties));
                }
            }
        }
    }

    /**
     * * Returns the Form Inputs.
     * @returns {Input[]}
     * @memberof Form
     */
    getInputs(){
        return this.inputs;
    }

    /**
     * * Returns the <input> HTML Element.
     * @returns {HTMLElement}
     * @memberof Form
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <input> HTML Element.
     * @memberof Form
     */
    createHTML(){
        this.html = document.createElement('form');
        this.html.id = this.getIdProperty();
        this.html.action = this.getActionProperty();
        this.html.method = this.getMethodProperty();
        this.html.enctype = this.getEnctypeProperty();
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        for (const input of this.getInputs()) {
            this.html.appendChild(input.getHTML());
        }
    }
}
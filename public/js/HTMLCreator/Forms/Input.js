/**
 * * Input creates an excellent <input>.
 * @export
 * @class Input
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Input{
    /**
     * * Creates an instance of Input.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.id] Input ID.
     * @param {String} [properties.name] Input name.
     * @param {String} [properties.type] Input type.
     * @param {String} [properties.defaultValue] Input default value.
     * @param {String} [properties.placeholder] Input placeholder text.
     * @param {String[]} [properties.classes] Input class names.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.disabled] Input disabled state.
     * @param {Boolean} [states.checked] Input checked state.
     * @memberof Input
     */
    constructor(properties = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        classes: [],
    }, states = {
        disabled: false,
        checked: false,
    }){
        this.setProperties(properties);
        this.setStates(states);
        this.createHTML();
    }

    /**
     * * Set the Input properties.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.id] Input ID.
     * @param {String} [properties.name] Input name.
     * @param {String} [properties.type] Input type.
     * @param {String} [properties.defaultValue] Input default value.
     * @param {String} [properties.placeholder] Input placeholder text.
     * @param {String[]} [properties.classes] Input class names.
     * @memberof Input
     */
    setProperties(properties = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        classes: [],
    }){
        this.properties = {};
        this.setIdProperty(properties);
        this.setNameProperty(properties);
        this.setTypeProperty(properties);
        this.setDefaultValueProperty(properties);
        this.setPlaceholderProperty(properties);
        this.setClassesProperty(properties);
    }

    /**
     * * Returns the Input properties or an specific property.
     * @param {String} [property] Property name.
     * @returns {Object|*}
     * @memberof Input
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
     * @memberof Input
     */
    hasProperty(property = ''){
        if (property && property != '' && this.properties.hasOwnProperty(property)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Set the Input ID.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.id] Input ID.
     * @memberof Input
     */
    setIdProperty(properties = {
        id: 'input-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'input-1';
        }
    }

    /**
     * * Returns the Input ID.
     * @returns {String}
     * @memberof Input
     */
    getIdProperty(){
        return this.properties.id;
    }

    /**
     * * Set the Input name.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.name] Input name.
     * @memberof Input
     */
    setNameProperty(properties = {
        name: 'input-1',
    }){
        if (properties.hasOwnProperty('name')) {
            this.properties.name = properties.name;
        } else {
            this.properties.name = 'input-1';
        }
    }

    /**
     * * Returns the Input name.
     * @returns {String}
     * @memberof Input
     */
    getNameProperty(){
        return this.properties.name;
    }

    /**
     * * Set the Input type.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.type] Input type.
     * @memberof Input
     */
    setTypeProperty(properties = {
        type: 'text',
    }){
        if (properties.hasOwnProperty('type')) {
            this.properties.type = properties.type;
        } else {
            this.properties.type = 'text';
        }
    }

    /**
     * * Returns the Input type.
     * @returns {String}
     * @memberof Input
     */
    getTypeProperty(){
        return this.properties.type;
    }

    /**
     * * Set the Input default value.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.defaultValue] Input default value.
     * @memberof Input
     */
    setDefaultValueProperty(properties = {
        defaultValue: '',
    }){
        if (properties.hasOwnProperty('defaultValue')) {
            this.properties.defaultValue = properties.defaultValue;
        } else {
            this.properties.defaultValue = '';
        }
    }

    /**
     * * Returns the Input default value.
     * @returns {String}
     * @memberof Input
     */
    getDefaultValueProperty(){
        return this.properties.defaultValue;
    }

    /**
     * * Set the Input placeholder text.
     * @param {Object} [properties] Input properties:
     * @param {String} [properties.placeholder] Input placeholder text.
     * @memberof Input
     */
    setPlaceholderProperty(properties = {
        placeholder: '',
    }){
        if (properties.hasOwnProperty('placeholder')) {
            this.properties.placeholder = properties.placeholder;
        } else {
            this.properties.placeholder = 'input-1';
        }
    }

    /**
     * * Returns the Input placeholder text.
     * @returns {String}
     * @memberof Input
     */
    getPlaceholderProperty(){
        return this.properties.placeholder;
    }

    /**
     * * Set the Input class names.
     * @param {Object} [properties] Input properties:
     * @param {String[]} [properties.classes] Input class names.
     * @memberof Input
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
     * * Returns the Input class names.
     * @returns {Array}
     * @memberof Input
     */
    getClassesProperty(){
        return this.properties.classes;
    }

    /**
     * * Set the Input states.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.disabled] Input disabled state.
     * @param {Boolean} [states.checked] Input checked state.
     * @memberof Input
     */
    setStates(states = {
        disabled: false,
        checked: false,
    }){
        this.states = {};
        this.setDisabledState(states);
        this.setCheckedState(states);
    }

    /**
     * * Returns the Input states or an specific state.
     * @param {String} [state] State name.
     * @returns {Object|*}
     * @memberof Input
     */
    getStates(state = ''){
        if (state && state != '') {
            return this.states[state];
        } else {
            return this.states;
        }
    }

    /**
     * * Set the Input disabled state.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.disabled] Input disabled state.
     * @memberof Input
     */
    setDisabledState(states = {
        disabled: false,
    }){
        if (states.hasOwnProperty('disabled')) {
            this.states.disabled = states.disabled;
        } else {
            this.states.disabled = false;
        }
    }

    /**
     * * Returns the Input disabled state.
     * @returns {Boolean}
     * @memberof Input
     */
    getDisabledState(){
        return this.states.disabled;
    }

    /**
     * * Set the Input checked state.
     * @param {Object} [states] Input states:
     * @param {Boolean} [states.checked] Input checked state.
     * @memberof Input
     */
    setCheckedState(states = {
        checked: false,
    }){
        if (states.hasOwnProperty('checked')) {
            this.states.checked = states.checked;
        } else {
            this.states.checked = false;
        }
    }

    /**
     * * Returns the Input checked state.
     * @returns {Boolean}
     * @memberof Input
     */
    getCheckedState(){
        return this.states.checked;
    }

    /**
     * * Returns the <input> HTML Element.
     * @returns {HTMLElement}
     * @memberof Input
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates the <input> HTML Element.
     * @memberof Input
     */
    createHTML(){
        this.html = document.createElement('input');
        this.html.id = this.getIdProperty();
        this.html.name = this.getNameProperty();
        this.html.type = this.getTypeProperty();
        this.html.value = this.getDefaultValueProperty();
        this.html.placeholder = this.getPlaceholderProperty();
        for (const className of this.getClassesProperty()) {
            this.html.classList.add(className);
        }
        if (this.getDisabledState()) {
            this.html.disabled = true;
        }
        if (this.getCheckedState()) {
            this.html.checked = true;
        }
    }
}
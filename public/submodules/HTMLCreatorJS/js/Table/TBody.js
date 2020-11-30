/**
 * * TBody creates an excellent <tbody>.
 * @export
 * @class TBody
 */
export class TBody{
    /**
     * * Creates an instance of TBody.
     * @param {Object} [properties] TBody properties.
     * @memberof TBody
     */
    constructor(properties = {}){
        this.createHTML();
    }

    /**
     * * Set the TBody <tr>.
     * @param {Tr} tr TBody Tr.
     * @memberof TBody
     */
    setTr(tr){
        if (!this.trs) {
            this.trs = [];
        }
        this.trs.push(tr);
        this.appendChild(tr.getHTML());
    }

    /**
     * * Returns the TBody <tr>.
     * @returns {Tr[]}
     * @memberof Table
     */
    getTr(){
        return this.trs;
    }

    /**
     * * Returns the <tbody>.
     * @returns {HTMLElement}
     * @memberof TBody
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Creates a <tbody>.
     * @memberof TBody
     */
    createHTML(){
        this.html = document.createElement('tbody');
    }

    /**
     * * Append an HTML Element.
     * @param {HTMLElement} html New child.
     * @memberof Div
     */
    appendChild(html){
        this.html.appendChild(html);
    }

    /**
     * * Insert an HTML Element before another.
     * @param {HTMLElement} newHTML New child.
     * @param {HTMLElement} oldHTML New child.
     * @memberof Div
     */
    insertBefore(newHTML, oldHTML){
        this.html.insertBefore(newHTML, oldHTML);
    }

    /**
     * * Remove a <tr>.
     * @param {Tr} tr A Tr.
     * @memberof TBody
     */
    removeTr(tr){
        this.html.removeChild(tr.getHTML());
    }
}
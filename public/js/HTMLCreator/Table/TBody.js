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
        this.appendTr(tr);
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
     * * Append a <tr>.
     * @param {Tr} tr A Tr.
     * @param {String} [position] Tr position to append.
     * @memberof TBody
     */
    appendTr(tr, position = 'after'){
        switch (position) {
            case 'before':
                this.html.insertBefore(tr.getHTML(), this.html.children[0]);
                break;
            default:
                this.html.appendChild(tr.getHTML());
                break;
        }
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
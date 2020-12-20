// ? External repositories
import { URLServiceProvider as URL } from "../../submodules/ProvidersJS/URLServiceProvider.js";
import { Table } from "../../submodules/HTMLCreatorJS/js/Table/Table.js";
import { Input } from "../../submodules/HTMLCreatorJS/js/Forms/Input.js";
import { Form } from "../../submodules/HTMLCreatorJS/js/Forms/Form.js";
import { Link } from "../../submodules/HTMLCreatorJS/js/Buttons/Link.js";
import { Icon } from "../../submodules/HTMLCreatorJS/js/Visuals/Icon.js";
import { HTMLCreator as HTMLCreatorJS } from "../../submodules/HTMLCreatorJS/js/HTMLCreator.js";

// ? Local repositories
import { loadImages, removeImages, confirmImage, cancelImage, deleteImage, showTrashBtn, hideTrashBtn } from "../gallery.js";

for (const key in categories) {
    const category = categories[key];

    let idCategorySpan = document.createElement('span');
    idCategorySpan.innerHTML = category.id_category;
    category.id_category = {
        text: category.id_category,
        html: idCategorySpan,
    };

    let form = createForm({
        id: `categorias-update-form-${ key }`,
        from: 'categoria',
        key: key,
        action: `/categoria/${ category.slug }/actualizar`,
        method: 'PUT',
        classes: [],
        inputs: [{
            properties: {
                id: `categoria-name-${ key }`,
                name: `name`,
                type: 'text',
                defaultValue: category.name,
                placeholder: `Nombre`,
                classes: ['form-input', 'p-2'],
            }, states: {
                disabled: true,
    }}]});
    category.name = {
        text: category.name,
        form: form,
        html: form.getHTML(),
    };
    
    let updatedAtSpan = document.createElement('span');
    updatedAtSpan.innerHTML = parseDate(category.updated_at);
    category.updated_at = {
        text: category.updated_at,
        html: updatedAtSpan,
    };

    let updateBtn = createUpdateBtn({from: 'categorias', key: key, object: category});
    let deleteBtn = createDeleteBtn({from: 'categorias', key: key, object: category});
    let confirmForm = createForm({
        id: `categorias-confirm-form-${ key }`,
        from: 'categoria',
        key: key,
        action: `/categoria/${ category.slug }/borrar`,
        method: 'DELETE',
        classes: ['confirm-form', 'd-none'],
        inputs: [{
            properties: {
                id: `categoria-message-${ key }`,
                name: `message`,
                type: 'text',
                classes: ['form-input', 'p-2'],
                placeholder: 'BORRAR',
    }}]});
    let confirmBtn = createConfirmBtn({from: 'categorias', key: key, object: category});
    let cancelBtn = createCancelBtn({from: 'categorias', key: key, object: category});
    let divCategory = document.createElement('div');
    divCategory.appendChild(updateBtn.getHTML());
    divCategory.appendChild(deleteBtn.getHTML());
    divCategory.appendChild(confirmForm.getHTML());
    divCategory.appendChild(confirmBtn.getHTML());
    divCategory.appendChild(cancelBtn.getHTML());
    category.actions = {
        html: divCategory,
    };
}

for (const key in properties) {
    const property = properties[key];
    
    let idPropertySpan = document.createElement('span');
    idPropertySpan.innerHTML = property.id_property;
    property.id_property = {
        text: property.id_property,
        html: idPropertySpan,
    }
    
    let nameSpan = document.createElement('span');
    nameSpan.innerHTML = property.name;
    property.name = {
        text: property.name,
        html: nameSpan,
    }

    let categoryNameSpan = document.createElement('span');
    categoryNameSpan.innerHTML = property.category.name;
    property.category.name = {
        text: property.category.name,
        html: categoryNameSpan,
    }

    let locationNameSpan = document.createElement('span');
    locationNameSpan.innerHTML = property.location.name;
    property.location.name = {
        text: property.location.name,
        html: locationNameSpan,
    }

    let updatedAtSpan = document.createElement('span');
    updatedAtSpan.innerHTML = parseDate(property.updated_at);
    property.updated_at = {
        text: property.updated_at,
        html: updatedAtSpan,
    }

    let seeMoreBtn = createSeeMoreBtn({from: 'propiedades', object: property});
    let deleteBtn = createDeleteBtn({from: 'propiedades', key: key, object: property});
    let confirmForm = createForm({
        id: `propiedades-confirm-form-${ key }`,
        from: 'propiedad',
        key: key,
        action: `/propiedad/${ property.slug }/borrar`,
        method: 'DELETE',
        classes: ['confirm-form', 'd-none'],
        inputs: [{
            properties: {
                id: `propiedad-message-${ key }`,
                name: `message`,
                type: 'text',
                classes: ['form-input', 'p-2'],
                placeholder: 'BORRAR',
    }}]});
    let confirmBtn = createConfirmBtn({from: 'propiedades', key: key, object: property});
    let cancelBtn = createCancelBtn({from: 'propiedades', key: key, object: property});
    let divProperty = document.createElement('div');
    divProperty.appendChild(seeMoreBtn.getHTML());
    divProperty.appendChild(deleteBtn.getHTML());
    divProperty.appendChild(confirmForm.getHTML());
    divProperty.appendChild(confirmBtn.getHTML());
    divProperty.appendChild(cancelBtn.getHTML());
    property.actions = {
        html: divProperty,
    };
}

for (const key in locations) {
    const location = locations[key];

    let idLocationSpan = document.createElement('span');
    idLocationSpan.innerHTML = location.id_location;
    location.id_location = {
        text: location.id_location,
        html: idLocationSpan,
    }
    
    let updatedAtSpan = document.createElement('span');
    updatedAtSpan.innerHTML = parseDate(location.updated_at);
    location.updated_at = {
        text: location.updated_at,
        html: updatedAtSpan,
    }
    
    let form = createForm({
        id: `ubicaciones-update-form-${ key }`,
        from: 'ubicacion',
        key: key,
        action: `/ubicacion/${ location.slug }/actualizar`,
        method: 'PUT',
        classes: [],
        inputs: [{
            properties: {
                id: `ubicacion-name-${ key }`,
                name: `name`,
                type: 'text',
                defaultValue: location.name,
                placeholder: `Nombre`,
                classes: ['form-input', 'p-2'],
            }, states: {
                disabled: true,
    }}]});
    location.name = {
        text: location.name,
        form: form,
        html: form.getHTML(),
    };

    let favForm = createForm({
        id: `ubicaciones-fav-form-${ key }`,
        from: 'ubicacion',
        key: key,
        action: `/ubicacion/${ location.slug }/favorito`,
        method: 'PUT',
        classes: ['fav-form', 'd-none'],
        inputs: []});
    let favBtn = createFavBtn({from: 'ubicaciones', key: key, object: location});
    let updateBtn = createUpdateBtn({from: 'ubicaciones', key: key, object: location});
    let deleteBtn = createDeleteBtn({from: 'ubicaciones', key: key, object: location});
    let confirmForm = createForm({
        id: `ubicaciones-confirm-form-${ key }`,
        from: 'ubicacion',
        key: key,
        action: `/ubicacion/${ location.slug }/borrar`,
        method: 'DELETE',
        classes: ['confirm-form', 'd-none'],
        inputs: [{
            properties: {
                id: `ubicacion-message-${ key }`,
                name: `message`,
                type: 'text',
                classes: ['form-input', 'p-2'],
                placeholder: 'BORRAR',
    }}]});
    let confirmBtn = createConfirmBtn({from: 'ubicaciones', key: key, object: location});
    let cancelBtn = createCancelBtn({from: 'ubicaciones', key: key, object: location});
    let divLocation = document.createElement('div');
    divLocation.appendChild(favForm.getHTML());
    divLocation.appendChild(favBtn.getHTML());
    divLocation.appendChild(updateBtn.getHTML());
    divLocation.appendChild(deleteBtn.getHTML());
    divLocation.appendChild(confirmForm.getHTML());
    divLocation.appendChild(confirmBtn.getHTML());
    divLocation.appendChild(cancelBtn.getHTML());
    location.actions = {
        html: divLocation,
    };
}

let tables = {
    categorias: {
        table: undefined,
        cells: [{
            id: 'category-cell-1', type: 'td', name: '', innerHTML: 'id_category:html', tdClasses: ['td-id_category'],
        }, {
            id: 'category-cell-2', type: 'td', name: 'Nombre', innerHTML: 'name:html', tdClasses: ['td-name'],
        }, {
            id: 'category-cell-3', type: 'td', name: 'Última vez actualizado', innerHTML: 'updated_at:html', tdClasses: ['td-updated_at'],
        }, {
            id: 'category-cell-4', type: 'td', name: '', innerHTML: 'actions:html', tdClasses: ['actions', 'px-0'],
        }],
        data: categories,
    }, propiedades: {
        table: undefined,
        cells: [{
            id: 'property-cell-1', type: 'td', name: '', innerHTML: 'id_property:html', tdClasses: ['td-id_property'],
        }, {
            id: 'property-cell-2', type: 'td', name: 'Nombre', innerHTML: 'name:html', tdClasses: ['td-name'],
        }, {
            id: 'property-cell-3', type: 'td', name: 'Categoría', innerHTML: 'category:name:html', tdClasses: ['td-id_category'],
        }, {
            id: 'property-cell-4', type: 'td', name: 'Ubicación', innerHTML: 'location:name:html', tdClasses: ['td-id_location'],
        }, {
            id: 'property-cell-5', type: 'td', name: 'Última vez actualizada', innerHTML: 'updated_at:html', tdClasses: ['td-updated_at'],
        }, {
            id: 'property-cell-6', type: 'td', name: '', innerHTML: 'actions:html', tdClasses: ['actions', 'px-0'],
        }],
        data: properties,
    }, ubicaciones: {
        table: undefined,
        cells: [{
            id: 'location-cell-1', type: 'td', name: '', innerHTML: 'id_location:html', tdClasses: ['td-id_location'],
        }, {
            id: 'location-cell-2', type: 'td', name: 'Nombre', innerHTML: 'name:html', tdClasses: ['td-name'],
        }, {
            id: 'location-cell-3', type: 'td', name: 'Última vez actualizada', innerHTML: 'updated_at:html', tdClasses: ['td-updated_at'],
        }, {
            id: 'location-cell-4', type: 'td', name: '', innerHTML: 'actions:html', tdClasses: ['actions', 'px-0'],
        }],
        data: locations,
}, };

/**
 * * Just the update function callback.
 */
function updateFunctionCallback(params) {
    enableUpdate(params.from, params.key);
}

/**
 * * Just the delete function callback.
 */
function deleteFunctionCallback(params) {
    enableDelete(params.from, params.key);
}

/**
 * * Just the "see more" function callback.
 */
function seeMoreFunctionCallback(params) {
    changeView(params.from, 'details-data', params.object);
}

/**
 * * Just the fav function callback.
 */
function favFunctionCallback(params) {
    if (params.link.getHTML().children[0].classList.contains('fas')) {
        params.link.getHTML().children[0].classList.add('far');
        params.link.getHTML().children[0].classList.remove('fas');
    } else if (params.link.getHTML().children[0].classList.contains('far')) {
        params.link.getHTML().children[0].classList.add('fas');
        params.link.getHTML().children[0].classList.remove('far');
    }
    sendForm(document.querySelector(`#${ params.from } #tr-${ params.key } .actions form#${ params.from }-fav-form-${ params.key }`));
}

/**
 * * Just the confirm function callback.
 */
function confirmFunctionCallback(params) {
    let tr = document.querySelector(`#${ params.from } #tr-${ params.key }`);
    if (tr.classList.contains('deleting')) {
        sendForm(document.querySelector(`#${ params.from } #tr-${ params.key } .actions form#${ params.from }-confirm-form-${ params.key }`));
    } else {
        sendForm(document.querySelector(`#${ params.from } #tr-${ params.key } form`));
    }
}

/**
 * * Just the cancel function callback.
 */
function cancelFunctionCallback(params) {
    if (document.querySelector(`#${ params.from } tbody tr#tr-${ params.key }`).classList.contains('updating')) {
        disableUpdate(params.from, params.key);
    } else if (document.querySelector(`#${ params.from } tbody tr#tr-${ params.key }`).classList.contains('deleting')) {
        disableDelete(params.from, params.key);
    } else if (document.querySelector(`#${ params.from } tbody tr#tr-${ params.key }`).classList.contains('adding')) {
        disableAdd(params.from, params.key);
    }
}

/**
 * * Creates the object Form.
 * @param {Object} params
 * @returns
 */
function createForm(params){
    params.inputs.push({
        properties: {
            id: `${ params.from }-token-${ params.key }`,
            name: `_token`,
            type: 'hidden',
            defaultValue: document.querySelector('meta[name=csrf_token]').content,
            placeholder: `_token`,
            classes: [],
        }, states: {
            //
    }});
    params.inputs.push({
        properties: {
            id: `${ params.from }-method-${ params.key }`,
            name: `_method`,
            type: 'hidden',
            defaultValue: params.method,
            placeholder: `_method`,
            classes: [],
        }, states: {
            //
    }});
    return new HTMLCreatorJS('form', {
        properties: {
            id: params.id,
            action: params.action,
            method: 'POST',
            classes: params.classes,
        }, inputs: params.inputs,
    });
}

/**
 * * Creates an update button.
 * @param {Object} properties Button properties:
 * @param {String} properties.from Who executes the function.
 * @param {String} properties.key
 * @param {Object} properties.object Object to get data.
 * @returns
 */
function createUpdateBtn(properties = {
    from: '',
    key: '',
    object: undefined,
}){
    return new HTMLCreatorJS('a', {
        properties: {
            id: `${ properties.from }-${ properties.key }-button`,
            title: 'Actualizar',
            href: `#${ properties.from }?name=${ properties.object.slug }&updating`,
            classes: ['update-button', 'btn', 'btn-uno-transparent', 'btn-icon', 'mr-md-1'],
        }, states: { }, callback: {
            function: updateFunctionCallback,
            params: properties,
        }, innerHTML: new HTMLCreatorJS('icon', {
            properties: {
                classes: ['icon', 'fas', 'fa-pen'],
        }}).getHTML()
    });
}

/**
 * * Creates a delete button.
 * @param {Object} properties Button properties:
 * @param {String} properties.from Who executes the function.
 * @param {String} properties.key
 * @param {Object} properties.object Object to get data.
 * @returns
 */
function createDeleteBtn(properties = {
    from: '',
    key: '',
    object: undefined,
}){
    return new HTMLCreatorJS('a', {
        properties: {
            id: `${ properties.from }-${ properties.key }-button`,
            title: 'Borrar',
            href: `#${ properties.from }?name=${ properties.object.slug }&deleting`,
            classes: ['delete-button', 'btn', 'btn-uno-transparent', 'btn-icon', 'mr-md-1'],
        }, states: { }, callback: {
            function: deleteFunctionCallback,
            params: properties,
        }, innerHTML: new HTMLCreatorJS('icon', {
            properties: {
                classes: ['icon', 'fas', 'fa-trash'],
        }}).getHTML()
    });
}

/**
 * * Creates a "see more" button.
 * @param {Object} properties Button properties:
 * @param {String} properties.from Who executes the function.
 * @param {String} properties.key
 * @param {Object} properties.object Object to get data.
 * @returns
 */
function createSeeMoreBtn(properties = {
    from: '',
    key: '',
    object: undefined,
}){
    return new HTMLCreatorJS('a', {
        properties: {
            id: `${ properties.from }-${ properties.key }-button`,
            href: `#propiedades?name=${ properties.object.slug }`,
            title: 'Ver más',
            classes: ['see-button', 'btn', 'btn-uno-transparent', 'btn-icon', 'mr-md-1'],
        }, states: { }, callback: {
            function: seeMoreFunctionCallback,
            params: properties,
        }, innerHTML: new HTMLCreatorJS('icon', {
            properties: {
                classes: ['icon', 'fas', 'fa-eye'],
        }}).getHTML()
    });
}

/**
 * * Creates a fav button.
 * @param {Object} properties Button properties:
 * @param {String} properties.from Who executes the function.
 * @param {String} properties.key
 * @param {Object} properties.object Object to get data.
 * @returns
 */
function createFavBtn(properties = {
    from: '',
    key: '',
    object: undefined,
}){
    return new HTMLCreatorJS('a', {
        properties: {
            id: `${ properties.from }-${ properties.key }-button`,
            title: 'Agregar a favorito',
            href: `#${ properties.from }`,
            classes: ['fav-button', 'btn', 'btn-uno-transparent', 'btn-icon', 'mr-md-1'],
        }, states: { }, callback: {
            function: favFunctionCallback,
            params: properties,
        }, innerHTML: new HTMLCreatorJS('icon', {
            properties: {
                classes: ['icon', ((properties.object.favorite) ? 'fas' : 'far'), 'fa-star'],
            }}).getHTML()
    });
}

/**
 * * Creates a confirm button.
 * @param {Object} properties Button properties:
 * @param {String} properties.from Who executes the function.
 * @param {String} properties.key
 * @param {Object} properties.object Object to get data.
 * @returns
 */
function createConfirmBtn(properties = {
    from: '',
    key: '',
    object: undefined,
}){
    return new HTMLCreatorJS('a', {
            properties: {
            id: `${ properties.from }-${ properties.key }-button`,
            title: 'Confirmar',
            classes: ['confirm-button', 'btn', 'btn-uno-transparent', 'btn-icon', 'mr-md-1', 'd-none'],
        }, states: {
            preventDefault: true,
        }, callback: {
            function: confirmFunctionCallback,
            params: properties,
        }, innerHTML: new HTMLCreatorJS('icon', {
            properties: {
                classes: ['icon', 'fas', 'fa-check'],
        }}).getHTML()
    });
}

/**
 * * Creates a cancel button.
 * @param {Object} properties Button properties:
 * @param {String} properties.from Who executes the function.
 * @param {String} properties.key
 * @param {Object} properties.object Object to get data.
 * @returns
 */
function createCancelBtn(properties = {
    from: '',
    key: '',
    object: undefined,
}){
    return new HTMLCreatorJS('a', {
        properties: {
            id: `${ properties.from }-${ properties.key }-button`,
            title: 'Cancelar',
            href: `#${ properties.from }`,
            classes: ['cancel-button', 'btn', 'btn-uno-transparent', 'btn-icon', 'mr-md-1', 'd-none'],
        }, states: { }, callback: {
            function: cancelFunctionCallback,
            params: properties,
        }, innerHTML: new HTMLCreatorJS('icon', {
            properties: {
                classes: ['icon', 'fas', 'fa-times'],
        }}).getHTML()
    });
}

/**
 * * Send a form.
 * @param {HTMLElement} form
 */
function sendForm(form){
    form.submit();
}

/**
 * * Open the current view details.
 * @param {String} from The current view.
 * @param {String} viewName The view to show.
 * @param {Object} object Element to get the data.
 */
function changeView(from, viewName, object = undefined) {
    let views = document.querySelector(`#${ from }`).children;
    let viewSelected = views[0];
    for (const view of views) {
        view.classList.add('hidden');
        if (view.classList.contains(viewName)) {
            viewSelected = view;
        }
    }
    viewSelected.classList.remove('hidden');
    switch (viewName) {
        case 'table-data':
            showAddButton();
            break;
        case 'details-data':
            hideAddButton();
            removeImages();
            changeDetailsData(from, object);
            break;
    }
}

/**
 * * Enable the add from a section.
 */
function enableAdd(){
    let from = URL.findHashParameter(),
        form, input, confirmBtn, cancelBtn;
    switch (from) {
        case 'propiedades':
            hideTrashBtn(document.querySelector('.gallery .selected:not(.gallery-button) .buttons'));
            document.querySelector('.details-data .cancel-data').href = `#propiedades`;
            changeView('propiedades', 'details-data');
            let inputs = document.querySelectorAll('.details-data textarea, .details-data select, .property .gallery .images button');
            for (const input of inputs) {
                input.disabled = false;
            }
            document.querySelector(`#${ from } .details-data`).classList.add('adding');
            showConfirmBtns(document.querySelector(`#${ from } .details-data .floating-menu.right`));
            break;
        case 'ubicaciones':
            form = createForm({
                id: `ubicaciones-add-form-${ params.key }`,
                from: 'ubicacion',
                key: tables.ubicaciones.table.getData().length + 1,
                action: '/ubicacion/crear',
                method: 'POST',
                classes: [],
                inputs: [{
                    properties: {
                        id: `ubicacion-name-${ tables.ubicaciones.table.getData().length + 1 }`,
                        name: `name`,
                        type: 'text',
                        defaultValue: '',
                        placeholder: `Nombre`,
                        classes: ['form-input', 'p-2'],
                    }, states: {
                        //
            }}]});
            let divLocation = document.createElement('div');
            confirmBtn = createConfirmBtn({from: 'ubicaciones', key: tables.ubicaciones.table.getData().length});
            cancelBtn = createCancelBtn({from: 'ubicaciones', key: tables.ubicaciones.table.getData().length});
            divLocation.appendChild(confirmBtn.getHTML());
            divLocation.appendChild(cancelBtn.getHTML());
            tables.ubicaciones.table.addData([{
                id_category: {
                    text: tables.ubicaciones.table.getData().length,
                    html: document.createElement('span'),
                }, name: {
                    text: '',
                    form: form,
                    html: form.getHTML(),
                }, updated_at: {
                    text: '',
                    html: document.createElement('span'),
                }, actions: {
                    html: divLocation,
            } }]);
            tables.ubicaciones.table.addTr(tables.ubicaciones.table.getData().length - 1, [], 'before');
            document.querySelector(`#ubicaciones tbody tr#tr-${ tables.ubicaciones.table.getData().length - 1 }`).classList.add('adding');
            showConfirmBtns(divLocation);
            hideAddButton();
            break;
        default:
            form = createForm({
                id: `categorias-add-form-${ params.key }`,
                from: 'categoria',
                key: tables.categorias.table.getData().length + 1,
                action: '/categoria/crear',
                method: 'POST',
                classes: [],
                inputs: [{
                    properties: {
                        id: `ubicacion-name-${ tables.categorias.table.getData().length + 1 }`,
                        name: `name`,
                        type: 'text',
                        defaultValue: '',
                        placeholder: `Nombre`,
                        classes: ['form-input', 'p-2'],
                    }, states: {
                        //
            }}]});
            let divCategory = document.createElement('div');
            confirmBtn = createConfirmBtn({from: 'categorias', key: tables.categorias.table.getData().length});
            cancelBtn = createCancelBtn({from: 'categorias', key: tables.categorias.table.getData().length});
            divCategory.appendChild(confirmBtn.getHTML());
            divCategory.appendChild(cancelBtn.getHTML());
            tables.categorias.table.addData([{
                id_category: {
                    text: tables.categorias.table.getData().length,
                    html: document.createElement('span'),
                }, name: {
                    text: '',
                    form: form,
                    html: form.getHTML(),
                }, updated_at: {
                    text: '',
                    html: document.createElement('span'),
                }, actions: {
                    html: divCategory,
            } }]);
            tables.categorias.table.addTr(tables.categorias.table.getData().length - 1, [], 'before');
            document.querySelector(`#categorias tbody tr#tr-${ tables.categorias.table.getData().length - 1 }`).classList.add('adding');
            showConfirmBtns(divCategory);
            hideAddButton();
            break;
    }
}

/**
 * * Disable the add from a section.
 * @param {String} from What section to set add mode.
 * @param {String} key
 */
function disableAdd(from, key){
    switch (from) {
        case 'propiedades':
            hideTrashBtn(document.querySelector('.gallery .selected:not(.gallery-button) .buttons'));
            let inputs = document.querySelectorAll('.details-data textarea, .details-data select, .property .gallery .images button');
            for (const input of inputs) {
                input.disabled = true;
            }
            document.querySelector(`#${ from } .details-data`).classList.remove('adding');
            hideConfirmBtns(document.querySelector(`#${ from } .details-data .floating-menu.right`));
            changeView('propiedades', 'table-data');
            break;
        case 'ubicaciones':
            tables.ubicaciones.table.removeTr(`tr-${ key }`);
            tables.ubicaciones.table.removeData(key);
            showAddButton();
            break;
        default:
            tables.categorias.table.removeTr(`tr-${ key }`);
            tables.categorias.table.removeData(key);
            showAddButton();
            break;
    }
}

/**
 * * Enable the update from a section.
 * @param {String} from What section to set update mode.
 * @param {String} key
 */
function enableUpdate(from, key){
    switch (from) {
        case 'propiedades':
            showTrashBtn(document.querySelector('.gallery .selected:not(.gallery-button) .buttons'));
            document.querySelector('.details-data .cancel-data').href = `#${ window.location.href.split('#')[1].split('&')[0] }`;
            let inputs = document.querySelectorAll('.details-data textarea, .details-data select, .property .gallery .images button');
            for (const input of inputs) {
                input.disabled = false;
            }
            document.querySelector(`#${ from } .details-data`).classList.add('updating');
            showConfirmBtns(document.querySelector(`#${ from } .details-data .floating-menu.right`));
            break;
        case 'ubicaciones':
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.add('updating');
            document.querySelector(`#${ from } tbody tr#tr-${ key } [name=name]`).disabled = false;
            showConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
        default:
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.add('updating');
            document.querySelector(`#${ from } tbody tr#tr-${ key } [name=name]`).disabled = false;
            showConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
    }
}

/**
 * * Disable the update from a section.
 * @param {String} from What section to set update mode.
 * @param {String} key
 */
function disableUpdate(from, key){
    let input;
    switch (from) {
        case 'propiedades':
            hideTrashBtn(document.querySelector('.gallery .selected:not(.gallery-button) .buttons'));
            let inputs = document.querySelectorAll('.details-data textarea, .details-data select, .property .gallery .images button');
            for (const input of inputs) {
                input.disabled = true;
                switch (input.nodeName) {
                    case 'TEXTAREA':
                        input.innerHTML = input.dataset.defaultValue;
                        input.value = input.dataset.defaultValue;
                        break;
                    case 'SELECT':
                        for (const option of input.options) {
                            option.selected = false;
                            if (option.value == input.dataset.defaultValue) {
                                option.selected = true;
                            }
                        }
                        break;
                    default:
                        input.value = input.dataset.defaultValue;
                        break;
                }
            }
            document.querySelector(`#${ from } .details-data`).classList.remove('updating');
            hideConfirmBtns(document.querySelector(`#${ from } .details-data .floating-menu.right`));
            break;
        case 'ubicaciones':
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.remove('updating');
            input = document.querySelector(`#${ from } tbody tr#tr-${ key } [name=name]`);
            input.disabled = true;
            input.value = locations[key].name.form.getInputs()[0].getDefaultValueProperty();
            hideConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
        default:
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.remove('updating');
            input = document.querySelector(`#${ from } tbody tr#tr-${ key } [name=name]`);
            input.disabled = true;
            input.value = categories[key].name.form.getInputs()[0].getDefaultValueProperty();
            hideConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
    }
}

/**
 * * Enable the delete from a section.
 * @param {String} from What section to set delete mode.
 * @param {String} key
 */
function enableDelete(from, key){
    switch (from) {
        case 'propiedades':
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.add('deleting');
            showConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            showConfirmForm(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
        case 'ubicaciones':
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.add('deleting');
            showConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            showConfirmForm(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
        default:
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.add('deleting');
            showConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            showConfirmForm(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
    }
}

/**
 * * Disable the delete from a section.
 * @param {String} from What section to set delete mode.
 * @param {String} key
 */
function disableDelete(from, key){
    switch (from) {
        case 'propiedades':
            document.querySelector(`#${ from } #tr-${ key } .actions [name=message]`).value = '';
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.remove('deleting');
            hideConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            hideConfirmForm(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
        case 'ubicaciones':
            document.querySelector(`#${ from } #tr-${ key } .actions [name=message]`).value = '';
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.remove('deleting');
            hideConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            hideConfirmForm(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            break;
        default:
            document.querySelector(`#${ from } #tr-${ key } .actions [name=message]`).value = '';
            document.querySelector(`#${ from } tbody tr#tr-${ key }`).classList.remove('deleting');
            hideConfirmBtns(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`));
            hideConfirmForm(document.querySelector(`#${ from } tbody tr#tr-${ key } td:last-child div`))
            break;
    }
}

/**
 * * Show the confirm & cancel buttons from a <tr>.
 * @param {HTMLElement} html HTML Element to get buttons.
 */
function showConfirmBtns(html){
    for (const btn of html.children) {
        if (btn.nodeName == 'A') {
            if (btn.classList.contains('confirm-button') || btn.classList.contains('cancel-button') || btn.classList.contains('confirm-data') || btn.classList.contains('cancel-data')) {
                btn.classList.remove('d-none');
            } else {
                btn.classList.add('d-none');
            }
        }
    }
}

/**
 * * Hide the confirm & cancel buttons from a <tr>.
 * @param {HTMLElement} html HTML Element to get buttons.
 */
function hideConfirmBtns(html){
    for (const btn of html.children) {
        if (btn.nodeName == 'A') {
            if (btn.classList.contains('confirm-button') || btn.classList.contains('cancel-button') || btn.classList.contains('confirm-data') || btn.classList.contains('cancel-data')) {
                btn.classList.add('d-none');
            } else {
                btn.classList.remove('d-none');
            }
        }
    }
}

/**
 * * Show the confirm form from a <tr>.
 * @param {HTMLElement} html HTML Element form.
 */
function showConfirmForm(html){
    for (const btn of html.children) {
        if (btn.nodeName == 'FORM') {
            if (btn.classList.contains('confirm-form')) {
                btn.classList.remove('d-none');
            } else {
                btn.classList.add('d-none');
            }
        }
    }
}

/**
 * * Hide the confirm form from a <tr>.
 * @param {HTMLElement} html HTML Element form.
 */
function hideConfirmForm(html){
    for (const btn of html.children) {
        if (btn.nodeName == 'FORM') {
            if (btn.classList.contains('confirm-form')) {
                btn.classList.add('d-none');
            } else {
                btn.classList.remove('d-none');
            }
        }
    }
}

/**
 * * Show the add button
 */
function showAddButton(){
    document.querySelector('.add-data').classList.remove('d-none');
}

/**
 * * Hide the add button
 */
function hideAddButton(){
    document.querySelector('.add-data').classList.add('d-none');
}

/**
 * * Change the details data.
 * @param {String} from Who is the details to change.
 * @param {Object} object Data to get from.
 */
function changeDetailsData(from, originalObject = false) {
    switch (from) {
        case 'propiedades':
            let inputs = [], mode = 'edit', object = originalObject;
            if (!originalObject) {
                object = properties[0];
                mode = 'add';
            } else {
                document.querySelector('.details-data .edit-data').href = `#propiedades?name=${ object.slug }&updating`;
            }
            for (const index in object) {
                let value = object[index];
                if (mode == 'add') {
                    value = '';
                }
                let input;
                if (input = document.querySelector(`#${ from } .details-data [name=${ index }]`)) {
                    switch (input.nodeName) {
                        case 'TEXTAREA':
                            if (index == input.name) {
                                if (typeof value == 'object') {
                                    input.innerHTML = value.text;
                                    input.value = value.text;
                                } else {
                                    input.innerHTML = value;
                                    input.value = value;
                                }
                                input.dataset.defaultValue = input.innerHTML;
                            }
                            autosize(input);
                            break;
                        case 'SELECT':
                            if (index == input.name) {
                                for (const option of input.options) {
                                    if (option.value == value) {
                                        option.selected = true;
                                    }
                                }
                                input.dataset.defaultValue = input.selectedIndex;
                            }
                            break;
                        default:
                            if (index == input.name) {
                                if (typeof value == 'object') {
                                    input.value = value.text;
                                } else {
                                    input.value = value;
                                }
                                input.dataset.defaultValue = input.value;
                            }
                            break;
                    }
                    inputs.push(input);
                }
            }
            loadImages(((originalObject) ? object.images : []));
            break;
    }
}

/**
 * * Generate the date correctly.
 * @param {String} dateToParse Date to correct.
 * @returns {String}
 */
function parseDate(dateToParse){
    let daysOfTheMonths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    let date = dateToParse.split('T')[0],
        time = dateToParse.split('T')[1].split('.')[0];
    let years, months, days;
    if(/-/.exec(date)){
        years = parseInt(date.split('-')[0]);
        months = parseInt(date.split('-')[1]);
        days = parseInt(date.split('-')[2]);
    }else if(/\//.exec(date)){
        years = parseInt(date.split('/')[0]);
        months = parseInt(date.split('/')[1]);
        days = parseInt(date.split('/')[2]);
    }
    let hours = parseInt(time.split(':')[0]),
        minutes = parseInt(time.split(':')[1]),
        seconds = parseInt(time.split(':')[2]);
    let length;
    if(length = parseInt(seconds / 60)){
        seconds = seconds - (60 * length);
        for (let i=1; i <= length; i++) { 
            minutes++;
        }
    }
    if(seconds < 10){
        seconds = `0${ seconds }`;
    }
    if(length = parseInt(minutes / 60)){
        minutes = minutes - (60 * length);
        for (let i=1; i <= length; i++) { 
            hours++;
        }
    }
    if(minutes < 10){
        minutes = `0${ minutes }`;
    }
    if(length = parseInt(hours / 24)){
        hours = hours - (24 * length);
        for (let i=1; i <= length; i++) { 
            days++;
        }
    }
    if(hours < 10){
        hours = `0${ hours }`;
    }
    if(length = parseInt(months / 12)){
        months = months - (12 * length);
        for (let i=1; i <= length; i++) { 
            years++;
        }
    }
    if(length = parseInt(days / daysOfTheMonths[months])){
        days = days - (daysOfTheMonths[months] * length);
        for (let i=1; i <= length; i++) { 
            months++;
        }
    }
    if(days < 10){
        days = `0${ days }`;
    }
    if(length = parseInt(months / 12)){
        months = months - (12 * length);
        for (let i=1; i <= length; i++) { 
            years++;
        }
    }
    if(months < 10){
        months = `0${ months }`;
    }

    return `${ years }-${ months }-${ days } ${ hours }:${ minutes }:${ seconds }`;
}

document.addEventListener('DOMContentLoaded', function(e){
    for (const html of document.querySelectorAll('table')) {
        let element = tables[html.id.split('-table').shift()];
        element.table = new Table({
            id: html.id,
            trClasses: {
                thead: ['background', 'background-uno', 'color-tres'],
                tbody: [],
            },
        }, element.cells, element.data);
    }

    changeView('categorias', 'table-data');
    changeView('propiedades', 'table-data');
    changeView('ubicaciones', 'table-data');
    switch (URL.findHashParameter()) {
        case 'propiedades':
            if (URL.findGetParameter('name')) {
                let slug = URL.findGetParameter('name'),
                    key = 0, propertySelected;
                for (const property of properties) {
                    if (property.slug == slug) {
                        if (!URL.findGetParameter('deleting')) {
                            changeView('propiedades', 'details-data', property);
                        }
                        propertySelected = property;
                        key = property.id_property.text - 1;
                    }
                }
                if (URL.findGetParameter('updating')) {
                    enableUpdate('propiedades');
                } else if (URL.findGetParameter('deleting')) {
                    enableDelete('propiedades', key, propertySelected);
                }
            } else if (URL.findGetParameter('adding')) {
                enableAdd('propiedades');
            }
            break;
        case 'ubicaciones':
            if (URL.findGetParameter('name')) {
                let slug = URL.findGetParameter('name'),
                    key = 0, locationSelected;
                for (const location of locations) {
                    if (location.slug == slug) {
                        locationSelected = location;
                        key = location.id_location.text - 1;
                    }
                }
                if (URL.findGetParameter('updating')) {
                    enableUpdate('ubicaciones', key, locationSelected);
                } else if (URL.findGetParameter('deleting')) {
                    enableDelete('ubicaciones', key, locationSelected);
                }
            } else if (URL.findGetParameter('adding')) {
                enableAdd('ubicaciones');
            }
            break;
        default:
            if (URL.findGetParameter('name')) {
                let slug = URL.findGetParameter('name');
                for (const property of properties) {
                    if (property.slug == slug) {
                        changeView('propiedades', 'details-data', property);
                    }
                }
                if (URL.findGetParameter('updating')) {
                    enableUpdate('categorias');
                } else if (URL.findGetParameter('deleting')) {
                    enableDelete('categorias');
                }
            } else if (URL.findGetParameter('adding')) {
                enableAdd('categorias');
            }
            break;
    }

    document.querySelector('.add-data').addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = `#${ window.location.href.split('#')[1] }?adding`;
        if (!this.dataset.int) {
            this.dataset.int = 1;
        } else {
            this.dataset.int++;
        }
        enableAdd(this.dataset.int);
    });

    document.querySelector('.return-data').addEventListener('click', function(e){
        if (URL.findGetParameter().hasOwnProperty('adding')) {
            disableAdd('propiedades');
        } else {
            disableUpdate('propiedades');
        }
        changeView('propiedades', 'table-data');
    });

    document.querySelector('.details-data .edit-data').addEventListener('click', function(e){
        enableUpdate('propiedades');
    });

    document.querySelector('.details-data .cancel-data').addEventListener('click', function(e){
        if (document.querySelector('.details-data').classList.contains('updating')) {
            disableUpdate('propiedades');
        } else if (document.querySelector('.details-data').classList.contains('adding')) {
            disableAdd('propiedades');
        }
    });

    document.querySelector('.confirm-image').addEventListener('click', function(e){
        e.preventDefault();
        confirmImage();
    });

    document.querySelector('.cancel-image').addEventListener('click', function(e){
        e.preventDefault();
        cancelImage();
    });

    document.querySelector('.delete-image').addEventListener('click', function(e){
        e.preventDefault();
        deleteImage();
    });
});
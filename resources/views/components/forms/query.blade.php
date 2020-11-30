<form action="#">
    <div class="row px-xl-5">
        <input type="hidden" name="id_property" value="{{ $property->id_property }}">
        <div class="input-group col-12 mb-3 p-0">
            <label for="name" class="input-name Work-Sans"><span class="first-letter">N</span>ombre y <span class="first-letter">A</span>pellido</label>
            <input class="input-field" type="text" name="name" id="name">
        </div>
        <div class="input-group col-12 mb-3 p-0" title="El COrreo es obligatorio">
            <label for="email" class="input-name Work-Sans"><span class="first-letter">C</span>orreo <span class="asterisk color-uno">*</span></label>
            <input class="input-field" type="text" name="email" id="email">
        </div>
        <div class="input-group col-12 mb-3 p-0" title="El Teléfono es obligatorio">
            <label for="phone" class="input-name Work-Sans"><span class="first-letter">T</span>eléfono <span class="asterisk color-uno">*</span></label>
            <input class="input-field" type="text" name="phone" id="phone">
        </div>
        <div class="input-group col-12 mb-3 p-0" title="La Consulta es obligatoria">
            <label for="message" class="input-name Work-Sans"><span class="first-letter">C</span>onsulta <span class="asterisk color-uno">*</span></label>
            <textarea class="input-field" name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div class="text-right col-12 mb-3 p-0">
            <button type="submit" class="btn btn-uno mx-0">Enviar</button>
        </div>
    </div>
</form>
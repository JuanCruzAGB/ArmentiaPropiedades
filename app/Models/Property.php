<?php
    namespace App\Models;

    use App\Models\Category;
    use App\Models\File;
    use App\Models\Location;
    use Cviebrock\EloquentSluggable\Sluggable;
    use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
    use Illuminate\Database\Eloquent\Model;
    use Storage;

    class Property extends Model{
        use Sluggable, SluggableScopeHelpers;

        /** @var string - The table name. */
        protected $table = 'properties';
        
        /** @var string - The PK name. */
        protected $primaryKey = 'id_property';

        /**
         * * The attributes that are mass assignable.
         * @var array
         */
        protected $fillable = [
            'name', 'description', 'folder', 'id_category', 'id_location', 'slug',
        ];
        
        /**
         * * Get the Category who match with the foreign key.
         * @return [type]
         */
        public function category(){
            return $this->belongsTo(Category::class, 'id_category', 'id_category');
        }
        
        /**
         * * Get the Location who match with the foreign key.
         * @return [type]
         */
        public function location(){
            return $this->belongsTo(Location::class, 'id_location', 'id_location');
        }
        
        /**
         * * Get the files from the folder.
         * @return [type]
         */
        public function files(){
            return $this->files = File::getAll("property/$this->folder");
        }
        
        /** @var array - Validation messages and rules. */
        public static $validation = [
            'adding' => [
                'rules' => [
                    'name' => 'required',
                    'description' => 'required',
                    'id_category' => 'required',
                    'id_location' => 'required',
                    'files' => 'required',
                    'files.*' => 'mimetypes:image/jpeg,image/png',
                ], 'messages' => [
                    'es' => [
                        'name.required' => 'El Nombre es obligatorio.',
                        'description.required' => 'La Descripción es obligatoria.',
                        'id_category.required' => 'La Categoría es obligatoria.',
                        'id_location.required' => 'La Ubicación es obligatoria.',
                        'files.required' => 'Al menos una imagen es obligatoria.',
                        'files.*.mimetypes' => 'Las imágenes tienen que ser formato JPEG/JPG o PNG.',
            ],],], 'updating' => [
                'rules' => [
                    'name' => 'required',
                    'description' => 'required',
                    'id_category' => 'required',
                    'id_location' => 'required',
                    'files' => 'nullable',
                    'files.*' => 'mimetypes:image/jpeg,image/png',
                ], 'messages' => [
                    'es' => [
                        'name.required' => 'El Nombre es obligatorio.',
                        'description.required' => 'La Descripción es obligatoria.',
                        'id_category.required' => 'La Categoría es obligatoria.',
                        'id_location.required' => 'La Ubicación es obligatoria.',
                        'files.*.mimetypes' => 'Las imágenes tienen que ser formato JPEG/JPG o PNG.',
            ],],], 'deleting' => [
                'rules' => [
                    'message' => 'required|regex:/^BORRAR$/',
                ], 'messages' => [
                    'es' => [
                        'message.required' => 'El Mensaje de confirmación es obligatorio.',
                        'message.regex' => 'El Mensaje no es correcto.',
            ],]]
        ];
        
        /**
         * * The Sluggable configuration for the Model.
         * @return array
         */
        public function sluggable(){
            return [
                'slug' => [
                    'source'	=> 'name',
                    'onUpdate'	=> true,
                ]
            ];
        }

        /**
         * * Returns the Properties by the Location foreign key.
         * @static
         * @param null|string $id_location Location primary key.
         * @return [Property[]]
         */
        public static function getByLocation($id_location = null){
            if ($id_location) {
                return Property::where('id_location', '=', $id_location)->get();
            } else {
                return [];
            }
        }
    }
<?php
    namespace App\Models;

    use Cviebrock\EloquentSluggable\Sluggable;
    use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
    use Illuminate\Database\Eloquent\Model;

    class Category extends Model{
        use Sluggable, SluggableScopeHelpers;

        /** @var string - The table name. */
        protected $table = 'categories';
        
        /** @var string - The PK name. */
        protected $primaryKey = 'id_category';

        /**
         * * The attributes that are mass assignable.
         * @var array
         */
        protected $fillable = [
            'name', 'id_parent', 'slug',
        ];
        
        /** @var array - Validation messages and rules. */
        public static $validation = [
            'create' => [
                'rules' => [
                    //
                ], 'messages' => [
                    'en' => [
                        //
                    ], 'es' => [
                        //
                    ],
                ],
                //
            ], 'edit' => [
                //
            ], 'delete' => [
                //
            ],
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
    }
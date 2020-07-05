<?php
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Location extends Model{
        use Sluggable, SluggableScopeHelpers;

        /** @var string - The table name. */
        protected $table = 'locations';
        
        /** @var string - The PK name. */
        protected $primaryKey = 'id_location';

        /**
         * * The attributes that are mass assignable.
         * @var array
         */
        protected $fillable = [
            'name', 'slug',
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
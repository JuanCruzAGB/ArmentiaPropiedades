<?php
    use App\Models\Property;
    use Illuminate\Database\Seeder;

    class PropertySeeder extends Seeder{
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run(){
            $properties = Property::get();
            if ( count( $properties ) ) {
                foreach ($properties as $property) {
                    # code...
                }
            } else {
                Property::create( [
                    'name' => 'Propiedad 1',
                    'description' => 'Lorem impsum',
                    'folder' => 1,
                    'id_category' => 1,
                    'id_location' => 1,
                    'slug' => 'propiedad-1',
                ] );
                Property::create( [
                    'name' => 'Propiedad 2',
                    'description' => 'Lorem impsum',
                    'folder' => 2,
                    'id_category' => 1,
                    'id_location' => 2,
                    'slug' => 'propiedad-2',
                ] );
                Property::create( [
                    'name' => 'Propiedad 3',
                    'description' => 'Lorem impsum',
                    'folder' => 3,
                    'id_category' => 1,
                    'id_location' => 3,
                    'slug' => 'propiedad-3',
                ] );
                Property::create( [
                    'name' => 'Propiedad 4',
                    'description' => 'Lorem impsum',
                    'folder' => 4,
                    'id_category' => 1,
                    'id_location' => 1,
                    'slug' => 'propiedad-4',
                ] );
            }
        }
    }
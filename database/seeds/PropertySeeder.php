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
                Property::create( [
                    'name' => 'Propiedad 5',
                    'description' => 'Lorem impsum',
                    'folder' => 5,
                    'id_category' => 2,
                    'id_location' => 2,
                    'slug' => 'propiedad-5',
                ] );
                Property::create( [
                    'name' => 'Propiedad 6',
                    'description' => 'Lorem impsum',
                    'folder' => 6,
                    'id_category' => 2,
                    'id_location' => 3,
                    'slug' => 'propiedad-6',
                ] );
                Property::create( [
                    'name' => 'Propiedad 7',
                    'description' => 'Lorem impsum',
                    'folder' => 7,
                    'id_category' => 2,
                    'id_location' => 1,
                    'slug' => 'propiedad-7',
                ] );
                Property::create( [
                    'name' => 'Propiedad 8',
                    'description' => 'Lorem impsum',
                    'folder' => 8,
                    'id_category' => 2,
                    'id_location' => 2,
                    'slug' => 'propiedad-8',
                ] );
                Property::create( [
                    'name' => 'Propiedad 9',
                    'description' => 'Lorem impsum',
                    'folder' => 9,
                    'id_category' => 3,
                    'id_location' => 3,
                    'slug' => 'propiedad-9',
                ] );
                Property::create( [
                    'name' => 'Propiedad 10',
                    'description' => 'Lorem impsum',
                    'folder' => 10,
                    'id_category' => 3,
                    'id_location' => 1,
                    'slug' => 'propiedad-10',
                ] );
                Property::create( [
                    'name' => 'Propiedad 11',
                    'description' => 'Lorem impsum',
                    'folder' => 11,
                    'id_category' => 3,
                    'id_location' => 2,
                    'slug' => 'propiedad-11',
                ] );
                Property::create( [
                    'name' => 'Propiedad 12',
                    'description' => 'Lorem impsum',
                    'folder' => 12,
                    'id_category' => 3,
                    'id_location' => 3,
                    'slug' => 'propiedad-12',
                ] );
            }
        }
    }
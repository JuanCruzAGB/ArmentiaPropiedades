<?php
    use App\Models\Location;
    use Illuminate\Database\Seeder;

    class LocationSeeder extends Seeder{
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run(){
            $locations = Location::get();
            if ( count( $locations ) ) {
                foreach ($locations as $location) {
                    //
                }
            } else {
                Location::create( [
                    'name' => 'Mar del Plata',
                    'slug' => 'mar-del-plata',
                    'favorite' => true,
                ] );
                Location::create( [
                    'name' => 'Necochea',
                    'slug' => 'necochea',
                    'favorite' => true,
                ] );
                Location::create( [
                    'name' => 'San Cayetano',
                    'slug' => 'san-cayetano',
                    'favorite' => true,
                ] );
                Location::create( [
                    'name' => 'Buenos Aires',
                    'slug' => 'buenos-aires',
                ] );
            }
        }
    }
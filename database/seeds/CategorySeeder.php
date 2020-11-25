<?php
    use App\Models\Category;
    use Illuminate\Database\Seeder;

    class CategorySeeder extends Seeder{
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run(){
            $categories = Category::get();
            if ( count( $categories ) ) {
                foreach ($categories as $category) {
                    # code...
                }
            } else {
                Category::create( [
                    'name' => 'Casa',
                    'slug' => 'casa',
                ] );
                Category::create( [
                    'name' => 'Departamento',
                    'slug' => 'departamento',
                ] );
                Category::create( [
                    'name' => 'Terreno',
                    'slug' => 'terreno',
                ] );
            }
        }
    }
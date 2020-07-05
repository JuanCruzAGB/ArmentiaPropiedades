<?php
    namespace App\Http\Controllers;

    use Models\Category;
    use Models\Location;
    use Models\Property;
    use Illuminate\Http\Request;

    class PropertyController extends Controller{
        /** @var string - The Controller language. */
        protected $lang = 'es';

        /**
         * * Control the list page of Properties.
         * @return [*]
         */
        public function list(){
            return view('property.list', [
                // ? Return variables.
            ]);
        }

        /**
         * * Control the detail page of Property.
         * @param mixed $slug - The Property slug.
         * @return [*]
         */
        public function info($slug){
            return view('property.info', [
                // ? Return variables.
            ]);
        }
    }
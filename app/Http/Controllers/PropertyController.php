<?php
    namespace App\Http\Controllers;

    use App\Models\Category;
    use App\Models\Location;
    use App\Models\Property;
    use Illuminate\Http\Request;

    class PropertyController extends Controller{
        /** @var string The Controller language. */
        protected $lang = 'es';

        /**
         * * Control the list page of Properties.
         * @return [*]
         */
        public function list(){
            $categories = Category::all();
            $locations = Location::all();
            $properties = Property::all();

            return view('property.list', [
                'categories' => $categories,
                'locations' => $locations,
                'properties' => $properties,
            ]);
        }

        /**
         * * Control the detail page of Property.
         * @param mixed $slug The Property slug.
         * @return [*]
         */
        public function info($slug){
            $property = Property::findBySlug($slug);

            return view('property.info', [
                'property' => $property,
            ]);
        }
    }
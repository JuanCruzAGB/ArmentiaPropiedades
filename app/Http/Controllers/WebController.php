<?php
    namespace App\Http\Controllers;

    use App\Models\Category;
    use App\Models\Location;
    use App\Models\Property;
    use Illuminate\Http\Request;

    class WebController extends Controller{
        /** @var string - The Controller language. */
        protected $lang = 'es';

        /**
         * * Control the web in maintenance.
         * @return [*]
         */
        public function comingSoon(){
            return view('web.coming_soon', [
                // ? Return variables.
            ]);
        }

        /**
         * * Control the home page.
         * @return [*]
         */
        public function home(){
            $locations = Location::getFavorites();
            $favorites = collect([]);
            foreach (Location::getFavorites() as $location) {
                $object = (object)[
                    'location' => $location,
                    'properties' => Property::getByLocation($location->id_location),
                ];
                $favorites->push($object);
            }

            return view('web.home', [
                'favorites' => $favorites,
            ]);
        }

        /**
         * * Control the panel page.
         * @return [*]
         */
        public function panel(){
            $categories = Category::all();
            $locations = Location::all();
            $properties = Property::all();

            foreach ($properties as $property) {
                $property->category;
                $property->location;
                $property->images();
            }

            return view('web.panel', [
                'categories' => $categories,
                'locations' => $locations,
                'properties' => $properties,
            ]);
        }

        /**
         * * Control the "thank you" page.
         * @return [*]
         */
        public function thankYou(){
            return view('web.thank_you');
        }
    }
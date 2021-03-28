<?php
    namespace App\Http\Controllers;

    use App\Models\Location;
    use App\Models\Mail;
    use App\Models\Property;
    use Carbon\Carbon;
    use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
    use Illuminate\Foundation\Bus\DispatchesJobs;
    use Illuminate\Foundation\Validation\ValidatesRequests;
    use Illuminate\Routing\Controller as BaseController;

    class Controller extends BaseController{
        use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

        /**
         * * Create the a date format text.
         * @param $lang - The date lang.
         * @param $obj - The object.
         */
        public function createDate($lang, $obj){
            Carbon::setLocale($lang);
            $date = new Carbon($obj->updated_at);
            $date = $date->diffForHumans();
            return $date;
        }

        /**
         * * Control the index page.
         * @return [*]
         */
        public function index () {
            $locations = Location::getFavorites();
            $favorites = collect([]);
            
            foreach (Location::getFavorites() as $location) {
                $properties = Property::getByLocation($location->id_location);
    
                foreach ($properties as $property) {
                    $property->files();
                }
                
                $object = (object)[
                    'location' => $location,
                    'properties' => $properties,
                ];
                $favorites->push($object);
            }

            return view('web.home', [
                'favorites' => $favorites,
                'validation' => (object) [
                    'rules' => Mail::$validation['contact']['rules'],
                    'messages' => Mail::$validation['contact']['messages']['es'],
                ],
            ]);
        }
    }
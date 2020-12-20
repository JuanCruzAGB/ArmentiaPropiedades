<?php
    namespace App\Http\Controllers;

    use App\Models\Location;
    use Cviebrock\EloquentSluggable\Services\SlugService;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Validator;

    class LocationController extends Controller{
        /**
         * * Control the Location creation.
         * @param Request $request
         * @return [*]
         */
        public function doCreate(Request $request){
            $input = (object) $request->all();
            
            $validator = Validator::make($request->all(), Location::$validation['create']['rules'], Location::$validation['create']['messages']['es']);
            if ($validator->fails()) {
                return redirect("/panel#ubicaciones?adding")->withErrors($validator)->withInput();
            }
            
            $input->slug = SlugService::createSlug(Location::class, 'slug', $input->name);
            $location = Location::create((array) $input);
            
            return redirect("/panel#ubicaciones")->with('status', [
                'code' => 200,
                'message' => "Ubicación: \"$location->name\" creada correctamente.",
            ]);
        }

        /**
         * * Control the Location updating.
         * @param Request $request
         * @param string $slug Location slug.
         * @return [*]
         */
        public function doUpdate(Request $request, $slug){
            $input = (object) $request->all();
            $location = Location::where('slug', '=', $slug)->get()[0];
            
            $validator = Validator::make($request->all(), Location::$validation['update']['rules'], Location::$validation['update']['messages']['es']);
            if ($validator->fails()) {
                return redirect("/panel#ubicaciones?name=$slug&updating")->withErrors($validator)->withInput();
            }
            
            if ($input->name != $location->name) {
                $input->slug = SlugService::createSlug(Location::class, 'slug', $input->name);
            } else {
                $input->slug = $location->slug;
            }

            $location->update((array) $input);
            
            return redirect("/panel#ubicaciones")->with('status', [
                'code' => 200,
                'message' => "Ubicación: \"$location->name\" actualizada correctamente.",
            ]);
        }

        /**
         * * Control the Location deletion.
         * @param Request $request
         * @param string $slug Location slug.
         * @return [*]
         */
        public function doDelete(Request $request, $slug){
            $input = (object) $request->all();
            $location = Location::where('slug', '=', $slug)->get()[0];

            $location->delete();
            
            return redirect("/panel#ubicaciones")->with('status', [
                'code' => 200,
                'message' => "Ubicación eliminada correctamente.",
            ]);
        }

        /**
         * * Control the Location deletion.
         * @param Request $request
         * @param string $slug Location slug.
         * @return [*]
         */
        public function doFav(Request $request, $slug){
            $input = (object) $request->all();
            $location = Location::where('slug', '=', $slug)->get()[0];

            $location->update(['favorite' => !$location->favorite]);
            
            return redirect("/panel#ubicaciones")->with('status', [
                'code' => 200,
                'message' => (($location->favorite) ? "$location->name se agrego de favoritos" : "$location->name se quito de favoritos"),
            ]);
        }
    }
<?php
    namespace App\Http\Controllers;

    use App\Models\Category;
    use App\Models\Location;
    use App\Models\Property;
    use Cviebrock\EloquentSluggable\Services\SlugService;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\File;
    use Illuminate\Support\Facades\Validator;
    use Intervention\Image\ImageManagerStatic as Image;
    use Storage;

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

            foreach ($properties as $property) {
                $property->images();
            }

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
            $property->category;
            $property->location;
            $property->images();

            return view('property.info', [
                'property' => $property,
            ]);
        }

        /**
         * * Control the Property creation.
         * @param Request $request
         * @return [*]
         */
        public function doCreate(Request $request){
            $input = (object) $request->all();
            
            $validator = Validator::make($request->all(), Property::$validation['create']['rules'], Property::$validation['create']['messages']['es']);
            if ($validator->fails()) {
                return redirect("/panel#propiedades?adding")->withErrors($validator)->withInput();
            }
            
            $input->slug = SlugService::createSlug(Property::class, 'slug', $input->name);
            $property = Property::create((array) $input);
            $property->update(['folder' => $property->id_property]);

            if ($request->hasFile('files')) {
                foreach ($request->file('files') as $file) {
                    $filepath = $file->hashName("properties/$property->folder");
                    
                    switch($request->archivo->extension()){
                        default:
                            $file = Image::make($file)
                                    ->resize(500, 400, function($constrait){
                                        $constrait->aspectRatio();
                                        $constrait->upsize();
                                    });
                            break;
                    }
    
                    Storage::put($filepath, (string) $file->encode());
                }
            }
            
            return redirect("/panel#propiedades")->with('status', [
                'code' => 200,
                'message' => "Propiedad: \"$property->name\" creada correctamente.",
            ]);
        }

        /**
         * * Control the Property updating.
         * @param Request $request
         * @param string $slug Property slug.
         * @return [*]
         */
        public function doUpdate(Request $request, $slug){
            $input = (object) $request->all();
            $property = Property::where('slug', '=', $slug)->get()[0];
            
            $validator = Validator::make($request->all(), Property::$validation['update']['rules'], Property::$validation['update']['messages']['es']);
            if ($validator->fails()) {
                return redirect("/panel#propiedades?name=$slug&updating")->withErrors($validator)->withInput();
            }
            
            if ($input->name != $property->name) {
                $input->slug = SlugService::createSlug(Property::class, 'slug', $input->name);
            } else {
                $input->slug = $property->slug;
            }

            if ($request->hasFile('files')) {
                foreach ($request->file('files') as $file) {
                    $filepath = $file->hashName("properties/$property->folder");
                    
                    switch($request->archivo->extension()){
                        default:
                            $file = Image::make($file)
                                    ->resize(500, 400, function($constrait){
                                        $constrait->aspectRatio();
                                        $constrait->upsize();
                                    });
                            break;
                    }
    
                    Storage::put($filepath, (string) $file->encode());
                }
            }

            $property->update((array) $input);
            
            return redirect("/panel#propiedades")->with('status', [
                'code' => 200,
                'message' => "Propiedad: \"$property->name\" actualizada correctamente.",
            ]);
        }

        /**
         * * Control the Property deletion.
         * @param Request $request
         * @param string $slug Property slug.
         * @return [*]
         */
        public function doDelete(Request $request, $slug){
            $input = (object) $request->all();
            $property = Property::where('slug', '=', $slug)->get()[0];

            $property->delete();
            
            return redirect("/panel#propiedades")->with('status', [
                'code' => 200,
                'message' => "Propiedad eliminada correctamente.",
            ]);
        }
    }
<?php
    namespace App\Http\Controllers;

    use App\Models\Category;
    use Illuminate\Http\Request;

    class CategoryController extends Controller{
        /**
         * * Control the Category creation.
         * @param Request $request
         * @return [*]
         */
        public function doCreate(Request $request){
            $input = (object) $request->all();
            
            $validator = Validator::make($request->all(), Category::$validation['create']['rules'], Category::$validation['create']['messages']['es']);
            if ($validator->fails()) {
                return redirect("/panel#categorias?adding")->withErrors($validator)->withInput();
            }
            
            $input->slug = SlugService::createSlug(Category::class, 'slug', $input->name);
            $category = Category::create((array) $input);
            
            return redirect("/panel#categorias")->with('status', [
                'code' => 200,
                'message' => "Categoría: \"$category->name\" creada correctamente.",
            ]);
        }

        /**
         * * Control the Category updating.
         * @param Request $request
         * @param string $slug Category slug.
         * @return [*]
         */
        public function doUpdate(Request $request, $slug){
            $input = (object) $request->all();
            $category = Category::where('slug', '=', $slug)->get()[0];
            
            $validator = Validator::make($request->all(), Category::$validation['update']['rules'], Category::$validation['update']['messages']['es']);
            if ($validator->fails()) {
                return redirect("/panel#categorias?name=$slug&updating")->withErrors($validator)->withInput();
            }
            
            if ($input->name != $category->name) {
                $input->slug = SlugService::createSlug(Category::class, 'slug', $input->name);
            } else {
                $input->slug = $category->slug;
            }

            $category->update((array) $input);
            
            return redirect("/panel#categorias")->with('status', [
                'code' => 200,
                'message' => "Categoría: \"$category->name\" actualizada correctamente.",
            ]);
        }

        /**
         * * Control the Category deletion.
         * @param Request $request
         * @param string $slug Category slug.
         * @return [*]
         */
        public function doDelete(Request $request, $slug){
            $input = (object) $request->all();
            $category = Category::where('slug', '=', $slug)->get()[0];

            $category->delete();
            
            return redirect("/panel#categorias")->with('status', [
                'code' => 200,
                'message' => "Categoría eliminada correctamente.",
            ]);
        }
    }
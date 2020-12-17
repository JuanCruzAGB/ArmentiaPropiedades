<?php
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Storage;

    class Image extends Model{        
        /**
         * * Get all the images from a route
         * @param string $route
         * @return [string[]]
         */
        static public function getAll($route){
            return Storage::disk('public')->allFiles($route);
        }
    }
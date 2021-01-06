<?php
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use Storage;

    class File extends Model{        
        /**
         * * Get all the files from a route
         * @param string $route
         * @return [string[]]
         */
        static public function getAll($route){
            return Storage::disk('public')->allFiles($route);
        }
    }
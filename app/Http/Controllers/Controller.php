<?php
    namespace App\Http\Controllers;

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
    }
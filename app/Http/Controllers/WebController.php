<?php
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;

    class WebController extends Controller{
        /**
         * * Control the web in maintenance.
         * @return [*]
         */
        public function proximamente(){
            return view('web.proximamente', [
                // ? Return variables.
            ]);
        }

        /**
         * * Control the home page.
         * @return [*]
         */
        public function inicio(){
            return view('web.inicio', [
                // ? Return variables.
            ]);
        }
    }
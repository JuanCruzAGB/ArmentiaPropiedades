<?php
    namespace App\Http\Controllers;

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
            return view('web.home', [
                // ? Return variables.
            ]);
        }

        /**
         * * Control the panel page.
         * @return [*]
         */
        public function panel(){
            return view('web.panel.index', [
                // ? Return variables.
            ]);
        }

        /**
         * * Control the contact page.
         * @return [*]
         */
        public function contact(){
            return view('web.contact', [
                // ? Return variables.
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
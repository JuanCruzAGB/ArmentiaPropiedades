<?php
    namespace App\Http\Controllers;

    use App\Mail\Contact;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Mail;
    use Illuminate\Support\Facades\Validator;

    class MailController extends Controller{
        /** @var string The Controller language. */
        protected $lang = 'es';

        /**
         * * Send a Contact Mail.
         * @param Request $request The request form.
         */
        public function contact(Request $request){
            dd($request->all());
        }

        /**
         * * Send a Query Mail.
         * @param Request $request The request form.
         */
        public function query(Request $request){
            dd($request->all());
        }
    }
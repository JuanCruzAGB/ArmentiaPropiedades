<?php
    namespace App\Http\Controllers;

    use Auth;
    use Illuminate\Http\Request;

    class AuthController extends Controller{
        /**
         * * Control the "log in" page.
         * @return [type]
         */
        function showLogIn(){
            return view('auth.login', [
                // ? Return variables.
            ]);
        }

        /**
         * * Executes the "log in".
         * @return [type]
         */
        function doLogIn(){
            //
        }

        /**
         * * Executes the "log out".
         * @return [type]
         */
        function doLogOut(){
            //
        }
    }
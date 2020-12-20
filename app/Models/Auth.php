<?php
    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Auth extends Model{
        /** @var array Validation messages and rules. */
        public static $validation = [
            'login' => [
                'rules' => [
                    'email' => 'required',
                    'password' => 'required|min:4',
                ], 'messages' => [
                    'es' => [
                        'email.required' => 'El Correo es obligatorio.',
                        'password.required' => 'La Contraseña es obligatoria.',
                        'password.min' => 'La Contraseña no puede tener menos de :min caracteres.',
                    ],
                ],
            ],
        ];
    }
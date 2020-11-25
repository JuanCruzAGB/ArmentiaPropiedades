<?php
    use Illuminate\Support\Facades\Route;
    
// * WebController - Controls the web in general.
    Route::get('/', 'WebController@comingSoon')->name('web.coming_soon');
    Route::get('/inicio', 'WebController@home')->name('web.home');
    Route::get('/proximamente', 'WebController@comingSoon')->name('web.coming_soon');
    Route::get('/dashboard', 'WebController@dashboard')->name('web.dashboard');
    Route::get('/panel', 'WebController@panel')->name('web.panel');
    Route::get('/contacto', 'WebController@contact')->name('web.contact');
    Route::get('/gracias', 'WebController@thankYou')->name('web.thank_you');
    
// * AuthController - Controls the authentication.
    Route::get('/iniciar-sesion', 'AuthController@showLogIn')->name('auth.showLogIn');
    Route::post('/login', 'AuthController@doLogIn')->name('auth.doLogIn');
    Route::delete('/cerrar-sesion', 'AuthController@doLogOut')->name('auth.doLogOut');
    
// * MailController - Controls the sending mails.
    Route::post('/contactar', 'MailController@contact')->name('mail.contact');

// * PropertyController - Controls the Property.
    Route::get('/propiedades', 'PropertyController@list')->name('property.list');
    Route::get('/propiedad/{slug}/detalles', 'PropertyController@info')->name('property.info');
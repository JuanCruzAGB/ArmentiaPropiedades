<?php
    use Illuminate\Support\Facades\Route;
    
// * WebController - Controls the web in general.
    Route::get('/', 'WebController@comingSoon')->name('web.coming_soon');
    Route::get('/inicio', 'WebController@home')->name('web.home');
    Route::get('/proximamente', 'WebController@comingSoon')->name('web.coming_soon');
    Route::get('/dashboard', 'WebController@dashboard')->name('web.dashboard');
    Route::get('/panel', 'WebController@panel')->name('web.panel');
    Route::get('/gracias', 'WebController@thankYou')->name('web.thank_you');
    
// * AuthController - Controls the authentication.
    Route::get('/iniciar-sesion', 'AuthController@showLogIn')->name('auth.showLogIn');
    Route::post('/login', 'AuthController@doLogIn')->name('auth.doLogIn');
    Route::delete('/cerrar-sesion', 'AuthController@doLogOut')->name('auth.doLogOut');
    
// * MailController - Controls the sending mails.
    Route::post('/contactar', 'MailController@contact')->name('mail.contact');
    Route::post('/consultar', 'MailController@query')->name('mail.query');

// * PropertyController - Controls the Property.
    Route::get('/propiedades', 'PropertyController@list')->name('property.list');
    Route::get('/propiedad/{slug}/detalles', 'PropertyController@info')->name('property.info');
    Route::post('/propiedad/crear', 'PropertyController@doCreate')->name('property.doCreate');
    Route::put('/propiedad/{slug}/actualizar', 'PropertyController@doUpdate')->name('property.doUpdate');
    Route::delete('/propiedad/{slug}/borrar', 'PropertyController@doDelete')->name('property.doDelete');
    
// * CategoryController - Controls the Category.
    Route::post('/categoria/crear', 'CategoryController@doCreate')->name('category.doCreate');
    Route::put('/categoria/{slug}/actualizar', 'CategoryController@doUpdate')->name('category.doUpdate');
    Route::delete('/categoria/{slug}/borrar', 'CategoryController@doDelete')->name('category.doDelete');
    
// * LocationController - Controls the Location.
    Route::post('/ubicacion/crear', 'LocationController@doCreate')->name('location.doCreate');
    Route::put('/ubicacion/{slug}/actualizar', 'LocationController@doUpdate')->name('location.doUpdate');
    Route::delete('/ubicacion/{slug}/borrar', 'LocationController@doDelete')->name('location.doDelete');
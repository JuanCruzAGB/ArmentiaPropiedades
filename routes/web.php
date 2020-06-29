<?php
    use Illuminate\Support\Facades\Route;
    
// * WebController - Controls the web in general.
    Route::get('/', 'WebController@proximamente')->name('web.proximamente');
    
    Route::get('/inicio', 'WebController@inicio')->name('web.inicio');

    Route::get('/proximamente', 'WebController@proximamente')->name('web.proximamente');
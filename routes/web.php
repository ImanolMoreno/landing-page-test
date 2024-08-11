<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/services', function () {
    return view('Services.services');
})->middleware('auth');

Route::get('/nosotros', function () {
    return view('Ours.nosotros');
});

Route::get('/comunidad', function () {
    return view('Comunity.comunidad');
});

Route::get('/servicios', function () {
    return view('Services.servicios');
});



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

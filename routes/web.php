<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('index');
// });

Route::get('/{any}', function () {
    return view('index'); // atau nama view blade kamu
})->where('any', '.*');

// Route::get('/{any}', function () {
//     return view('index');
// })->where('any', '^(?!api|login).*$');

// Route::get('/post', function (Request $request) {
//     dd($request);
// });

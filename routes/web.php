<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// === ADMIN PANEL ===
Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function () {
    Route::name('admin.')->group(function () {
        Route::get('/', function () {
            dd('asd');
            // return view('admin.dashboard');
        })->name('index');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

// === AUTH ===
require __DIR__.'/auth.php';

// === FRONTEND CUSTOMER (Vue.js SPA) ===
Route::get('/{any}', function () {
    return view('index'); // load Vue app
})->where('any', '^(?!admin).*');


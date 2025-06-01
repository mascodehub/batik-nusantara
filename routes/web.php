<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// === ADMIN PANEL ===
Route::middleware(['auth:admin', 'role:admin'])->prefix('admin')->group(function () {
    Route::name('admin.')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('index');

        Route::get('/products', [ProductController::class, 'index'])->name('products');

        Route::get('/orders', [OrderController::class, 'index'])->name('orders');

        Route::get('/customers', [CustomerController::class, 'index'])->name('customers');

        Route::get('/reports', [ReportController::class, 'index'])->name('reports');

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


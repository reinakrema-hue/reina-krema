<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProduitController;

Route::get('/test', function () {
    return response()->json([
        'message' => 'API REINA KREMA fonctionne'
    ]);
});

Route::get('/produits', [ProduitController::class, 'index']);
Route::post('/produits', [ProduitController::class, 'store']);
Route::get('/produits/{id}', [ProduitController::class, 'show']);
Route::put('/produits/{id}', [ProduitController::class, 'update']);
Route::delete('/produits/{id}', [ProduitController::class, 'destroy']);
use App\Http\Controllers\ReservationController;

Route::get('/reservations', [ReservationController::class, 'index']);
Route::post('/reservations', [ReservationController::class, 'store']);
Route::get('/reservations/{reservation}', [ReservationController::class, 'show']);
Route::put('/reservations/{reservation}', [ReservationController::class, 'update']);
Route::delete('/reservations/{reservation}', [ReservationController::class, 'destroy']);
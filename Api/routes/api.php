<?php

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::post('/sessions', [UserController::class, 'login']);
    Route::post('/register', [UserController::class, 'store']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::apiResource('/task', TaskController::class);
        Route::post('/logout', [UserController::class, 'logout']);
        Route::get('/me', [UserController::class, 'show']);
        Route::put('/update', [UserController::class, 'update']);
        Route::put('/update/password', [UserController::class, 'updatePassword']);
    });
});

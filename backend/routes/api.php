<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/*
|--------------------------------------------------------------------------
| Teste de conexão com o banco de dados
|--------------------------------------------------------------------------
*/
Route::get('/test-db-connection', function () {
    try {
        $connection = app('db')->connection();
        $connection->getPdo();
        return 'Conexão ao banco de dados bem-sucedida.';
    } catch (\Exception $e) {
        return 'Erro na conexão ao banco de dados: ' . $e->getMessage();
    }
});
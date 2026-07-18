<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{       
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    return Produit::all();
}

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request)
{
    $validated = $request->validate([
        'nom' => 'required|string|max:255',
        'slug' => 'required|string|max:255|unique:produits',
        'description' => 'required|string',
        'prix' => 'required|numeric',
        'stock' => 'required|integer',
        'image' => 'nullable|string',
        'est_disponible' => 'required|boolean',
    ]);

    $produit = Produit::create($validated);

    return response()->json([
        'message' => 'Produit créé avec succès',
        'produit' => $produit
    ], 201);
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
{
    $produit = Produit::findOrFail($id);

    return response()->json($produit);
}

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, string $id)
{
    $produit = Produit::findOrFail($id);

    $validated = $request->validate([
        'nom' => 'required|string|max:255',
        'slug' => 'required|string|max:255|unique:produits,slug,' . $id,
        'description' => 'required|string',
        'prix' => 'required|numeric',
        'stock' => 'required|integer',
        'image' => 'nullable|string',
        'est_disponible' => 'required|boolean',
    ]);

    $produit->update($validated);

    return response()->json([
        'message' => 'Produit mis à jour avec succès',
        'produit' => $produit
    ]);
}

    /**
     * Remove the specified resource from storage.
     */
   public function destroy(string $id)
{
    $produit = Produit::findOrFail($id);

    $produit->delete();

    return response()->json([
        'message' => 'Produit supprimé avec succès'
    ]);
}
}
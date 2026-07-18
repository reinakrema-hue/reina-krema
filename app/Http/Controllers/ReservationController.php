<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Afficher toutes les réservations
     */
    public function index()
    {
        return Reservation::all();
    }

    /**
     * Enregistrer une réservation
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'telephone' => 'required|string|max:20',
            'service' => 'required|string|max:255',
            'date_rendez_vous' => 'required|date',
            'heure_rendez_vous' => 'required',
            'commentaire' => 'nullable|string',
        ]);

        $reservation = Reservation::create($validated);

        return response()->json([
            'message' => 'Réservation enregistrée avec succès',
            'reservation' => $reservation
        ], 201);
    }

    /**
     * Afficher une réservation
     */
    public function show(Reservation $reservation)
    {
        return $reservation;
    }

    /**
     * Modifier une réservation
     */
    public function update(Request $request, Reservation $reservation)
    {
        $reservation->update($request->all());

        return response()->json([
            'message' => 'Réservation mise à jour avec succès',
            'reservation' => $reservation
        ]);
    }

    /**
     * Supprimer une réservation
     */
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();

        return response()->json([
            'message' => 'Réservation supprimée avec succès'
        ]);
    }
}
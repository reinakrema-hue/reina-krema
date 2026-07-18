<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'nom',
        'telephone',
        'service',
        'date_rendez_vous',
        'heure_rendez_vous',
        'commentaire',
    ];
}
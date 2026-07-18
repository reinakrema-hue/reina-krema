<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    protected $fillable = [
        'nom',
        'slug',
        'description',
        'prix',
        'stock',
        'image',
        'est_disponible',
    ];
}
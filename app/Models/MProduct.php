<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MProduct extends Model
{
    use HasFactory;

    protected $table = 'm_product'; // pastikan sesuai

    protected $fillable = [
        'name',
        'description',
        'type',
        'price_min',
        'price_max',
        'po_estimation',
        'unit',
        'stock',
        'is_customizable',
    ];

}

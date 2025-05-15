<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UsersAdmin;
use Illuminate\Support\Facades\Hash;

class UsersAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UsersAdmin::create([
            'name' => 'Super Admin',
            'email' => 'admin@batikshop.test',
            'password' => Hash::make('admin123'), // Gunakan password kuat di produksi
        ]);
    }
}

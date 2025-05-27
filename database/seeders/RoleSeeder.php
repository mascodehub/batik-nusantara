<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use App\Models\UserAdmin;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'admin']);
        Permission::create(['name' => 'admin', 'guard_name' => 'admin']);
        // $userRole = Role::firstOrCreate(['name' => 'customer']);

        $admin = UserAdmin::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'),
            ]
        );


        $admin->assignRole('admin');
    }
}


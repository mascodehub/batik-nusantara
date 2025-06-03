<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = $this->faker->randomElement(['ready_made', 'raw_material']);

        $priceMin = $this->faker->numberBetween(50000, 150000);
        $priceMax = $priceMin + $this->faker->numberBetween(10000, 50000);

        return [
            'uuid' => Str::uuid(),
            'name' => $type === 'ready_made'
                ? 'Batik ' . $this->faker->word()
                : 'Kain Batik ' . $this->faker->word(),
            'description' => $this->faker->paragraph(),
            'type' => $type,
            'price_min' => $priceMin,
            'price_max' => $priceMax,
            'po_estimation' => $this->faker->randomElement(['2-3 minggu', '4-6 minggu', '1 bulan']),
            'unit' => $type === 'raw_material'
                ? $this->faker->randomElement(['meter', 'potong'])
                : 'pcs',
            'stock' => $type === 'ready_made' ? $this->faker->numberBetween(10, 100) : null,
            'is_customizable' => $this->faker->boolean(30), // 30% kemungkinan bisa custom
        ];
    }
}

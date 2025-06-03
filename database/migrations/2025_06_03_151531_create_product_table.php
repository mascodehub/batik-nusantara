<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('m_product', function (Blueprint $table) {
            $table->uuid();
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('type', ['ready_made', 'raw_material']);
            $table->decimal('price_min', 12, 2)->nullable();
            $table->decimal('price_max', 12, 2)->nullable();
            $table->string('po_estimation')->nullable();
            $table->enum('unit', ['pcs', 'meter', 'potong'])->default('pcs');
            $table->unsignedInteger('stock')->nullable();
            $table->boolean('is_customizable')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('m_product');
    }
};

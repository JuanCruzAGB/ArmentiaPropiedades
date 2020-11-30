<?php
    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class CreatePropertiesTable extends Migration{
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up(){
            Schema::create('properties', function (Blueprint $table) {
                $table->bigIncrements('id_property');
                $table->string('name');
                $table->text('description');
                $table->string('folder')->nullable();
                $table->unsignedInteger('id_category');
                $table->unsignedInteger('id_location');
                $table->string('slug');
                $table->timestamps();
            });
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down(){
            Schema::dropIfExists('properties');
        }
    }
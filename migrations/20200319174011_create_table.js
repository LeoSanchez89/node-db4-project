exports.up = function(knex) {
	return knex.schema
		.createTable("recipes", tbl => {
			tbl.increments();
			tbl
				.string("name", 255)
				.notNullable()
				.unique();
		})

		.createTable("ingredients", tbl => {
			tbl.increments();
			tbl
				.string("name", 255)
				.notNullable()
				.unique();
		})

		.createTable("steps", tbl => {
			tbl.increments();
			tbl
				.integer("recipe_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("cascade")
				.onUpdate("cascade");
			tbl
				.integer("step_number")
				.unsigned()
				.notNullable();
			tbl.string("instructions", 255).notNullable();
		})

		.createTable("recipe_ingredients", tbl => {
			tbl.primary(["recipes_id", "ingredients_id"]);
			tbl
				.integer("recipes_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("cascade")
				.onUpdate("cascade");
			tbl
				.integer("ingredients_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("ingredients")
				.onDelete("cascade")
				.onUpdate("cascade");
            tbl.float("ingredient_quantity")
                .notNullable();
		});
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

exports.seed = async function (knex) {
  
	const recIngData = [
		{ recipes_id: 1, ingredients_id: 1, ingredient_quantity: 1 },
		{ recipes_id: 1, ingredients_id: 2, ingredient_quantity: .5 },
		{ recipes_id: 1, ingredients_id: 3, ingredient_quantity: 1.5 },
  
    { recipes_id: 2, ingredients_id: 4, ingredient_quantity: 2 },
		{ recipes_id: 2, ingredients_id: 5, ingredient_quantity: 3 },
		{ recipes_id: 2, ingredients_id: 6, ingredient_quantity: 3 },
    
    { recipes_id: 3, ingredients_id: 7, ingredient_quantity: 1 },
		{ recipes_id: 3, ingredients_id: 8, ingredient_quantity: 1 },
		{ recipes_id: 3, ingredients_id: 9, ingredient_quantity: .5 },
		{ recipes_id: 3, ingredients_id: 2, ingredient_quantity: 1 },
		{ recipes_id: 3, ingredients_id: 3, ingredient_quantity: .5 }
	];

	await knex("recipe_ingredients").truncate();

	return knex("recipe_ingredients").insert(recIngData);
};

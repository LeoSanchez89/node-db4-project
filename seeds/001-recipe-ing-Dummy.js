exports.seed = async function (knex) {
  
	const recIngData = [
		{ recipe_id: 1, ingredients_id: 1, ingredients_quantity: 1 },
		{ recipe_id: 1, ingredients_id: 2, ingredients_quantity: .5 },
		{ recipe_id: 1, ingredients_id: 3, ingredients_quantity: 1.5 },
  
    { recipe_id: 2, ingredients_id: 4, ingredients_quantity: 2 },
		{ recipe_id: 2, ingredients_id: 5, ingredients_quantity: 3 },
		{ recipe_id: 2, ingredients_id: 6, ingredients_quantity: 3 },
    
    { recipe_id: 3, ingredients_id: 7, ingredients_quantity: 1 },
		{ recipe_id: 3, ingredients_id: 8, ingredients_quantity: 1 },
		{ recipe_id: 3, ingredients_id: 9, ingredients_quantity: .5 },
		{ recipe_id: 3, ingredients_id: 2, ingredients_quantity: 1 },
		{ recipe_id: 3, ingredients_id: 3, ingredients_quantity: .5 }
	];

	await knex("recipe_ingredients").truncate();

	return knex("recipe_ingredients").insert(recIngData);
};

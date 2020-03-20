exports.seed = async function(knex) {
	const ingredientsData = [
		{ name: "Pre-Made Pizza Dough" },
		{ name: "Jar of Tomato Sauce" },
		{ name: "Cup of Grated Cheese" },
		{ name: "Slice of Bread" },
		{ name: "Tablespoon of Peanut Butter" },
		{ name: "Tablespoon of Jelly" },
		{ name: "Box of Pasta" },
		{ name: "Pound of Ground Beef" },
		{ name: "Onion" }
	];

	await knex("ingredients").truncate();

	return knex("ingredients").insert(ingredientsData);
};

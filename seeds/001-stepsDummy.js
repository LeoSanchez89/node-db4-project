exports.seed = async function(knex) {
	const stepsData = [
		{
			recipe_id: 1,
			step_number: 1,
			instructions: "Roll out dough into large circle"
		},
		{
			recipe_id: 1,
			step_number: 2,
			instructions: "Apply tomato sauce and cheese evenly throughout"
		},
		{
			recipe_id: 1,
			step_number: 3,
			instructions:
				"Bake at 400 degrees for 25 minutes or until crust is golden brown "
		},
		{ recipe_id: 1, step_number: 4, instructions: "Enjoy!" },

		{
			recipe_id: 2,
			step_number: 1,
			instructions: "Toast bread to desired doneness"
		},
		{
			recipe_id: 2,
			step_number: 2,
			instructions: "Spread peanut butter onto one slice of bread"
		},
		{
			recipe_id: 2,
			step_number: 3,
			instructions: "Spread jelly onto the other slice of bread"
		},
		{
			recipe_id: 2,
			step_number: 4,
			instructions: "Bring the slices of bread together and enjoy!"
		},

		{
			recipe_id: 3,
			step_number: 1,
			instructions: "Dice onion and sautee for 3 mins"
		},
		{
			recipe_id: 3,
			step_number: 2,
			instructions: "Add ground beef to pan and cook until brown"
		},
		{
			recipe_id: 3,
			step_number: 3,
			instructions: "Cook pasta as per instructions on package"
		},
		{
			recipe_id: 3,
			step_number: 4,
			instructions: "Add sauce to your beef and simmer on low heat for 6 mins"
		},
		{
			recipe_id: 3,
			step_number: 5,
			instructions: "Strain pasta and combine with sauce"
		},
		{ recipe_id: 3, step_number: 6, instructions: "Top with cheese as desired" }
	];

	await knex("steps").truncate();

	return knex("steps").insert(stepsData);
};

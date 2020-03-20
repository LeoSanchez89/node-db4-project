
exports.seed = async function (knex) {
 
  const recipeData = [
		
    { name: "Pizza" },
    { name: "PB&J Sandwich" },
    { name: "Spaghetti Bolognese" }
		
  ];
  
  await knex('recipes').truncate();
  
  return knex('recipes').insert(recipeData);

};

exports.seed = async function (knex) {
 
  const recipeData = [
		
    { colName: "rowValue1" },
    { colName: "rowValue2" },
    { colName: "rowValue3" }
		
  ];
  
  await knex('recipes').truncate();
  
  return knex('recipes').insert(recipeData);

};
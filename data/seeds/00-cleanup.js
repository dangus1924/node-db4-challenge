
exports.seed = async function(knex) {
  await knex('instruction').truncate()
  await knex('recipe_ingredient').truncate()
  await knex('recipes').truncate()  
  await knex('ingredients').truncate()
  
};

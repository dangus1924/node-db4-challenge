
exports.seed = async function(knex) {
  await knex('recipe-ingredients').truncate()
  await knex('instruction').truncate()
  await knex('ingredients').truncate()
  await knex('recipes').truncate()
};

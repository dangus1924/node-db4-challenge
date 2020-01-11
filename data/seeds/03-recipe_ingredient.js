exports.seed = async (knex) => {
  await knex("recipes").insert([   
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: '30 cups  ',
  },
  {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: '5 gallon',
  },
  {
      recipe_id: 1,
      ingredient_id: 7,
      quantity: '30 fresh lemons',
  },
  {
      recipe_id: 2,
      ingredient_id: 1,
      quantity: 'two table spoon',
  },
  {
    recipe_id: 2,
    ingredient_id: 2,
    quantity: '3 cup  ',
},
{
    recipe_id: 2,
    ingredient_id: 3,
    quantity: '3oz of fresh mint leaves',
},
{
    recipe_id: 3,
    ingredient_id: 2,
    quantity: '3 cups ',
},
{
    recipe_id: 3,
    ingredient_id: 4,
    quantity: '2 cups',
},
{
  recipe_id: 3,
  ingredient_id: 5,
  quantity: '2 tablespoon',
},
{
  recipe_id: 3,
  ingredient_id: 6,
  quantity: '1 stick',
},
  ])
}

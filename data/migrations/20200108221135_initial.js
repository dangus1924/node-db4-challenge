
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
    table.increments('id').notNullable();
    table.string('name').notNullable();        
})
  await knex.schema.createTable('ingredients', (table) => {
    table.increments('id').notNullable();
    table.string('name').notNullable();    
  })

  await knex.schema.createTable('recipe_ingredient', (table) => {
    table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.integer('ingredients_id')   
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.float('quantity').notNullable();
    table.primary(['recipe_id', 'ingredients_id' ])
  })
  await knex.schema.createTable('instruction', (table) => {
    table.integer('recipe_instruction_id')
        .notNullable()
        .references('recipe_id')
        .inTable('recipe_ingredients')
        .unsigned()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.integer('step');
    table.string('directions');    
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('instruction')
  await knex.schema.dropTableIfExists('recipe_ingredient')
  await knex.schema.dropTableIfExists('recipes')
  await knex.schema.dropTableIfExists('ingredients')
    
     
};


exports.up = async function(knex) {
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
    table.primary(['recipe_id', 'ingredients_id' ])
  })
  await knex.schema.createTable('instruction', (table) => {
    table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.string('steps');
    table.string('directions');    
  })
  await knex.schema.createTable('ingredients', (table) => {
    table.increments('id').notNullable();
    table.string('name').notNullable();
    table.float('quantity').notNullable();
})
  await knex.schema.createTable('recipes', (table) => {
    table.increments('id').notNullable();
    table.string('name').notNullable();        
})  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('instruction')
    await knex.schema.dropTableIfExists('recipe_ingredient') 
};

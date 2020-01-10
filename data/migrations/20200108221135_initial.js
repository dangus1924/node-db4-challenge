
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
      table.increment('id').notNullable();
      table.string('name').notNullable();        
  })  
  await knex.schema.createTable('ingredients', (table) => {
      table.increment('id').notNullable();
      table.string('name').notNullable();
      table.string('quantity').notNullable();
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
};

exports.down = async function(knex) {
  
};

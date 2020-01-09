
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
      table.increment('id')
      table.string('name')
      table.string('instruction')
      table.string('difficult_id')
  })
  await knex.schema.createTable('difficult_Level', (table) => {
      table.increment('id')
      table.string('name')      
  })
  await knex.schema.createTable('ingredients' (table) => {
      table.increment('id')
  })
};

exports.down = async function(knex) {
  
};

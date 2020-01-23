exports.seed = async (knex) => {
  await knex("recipes").insert([   
    { name: "Lemonade", },
    { name: "Mint Tea", },
    { name: "White Rice", },
  ])
}

exports.seed = async (knex) => {
  await knex("recipes").insert([   
    { name: "Sugar",},
    { name: "Water",  },
    { name: "Mint Leaves",  },
    { name: "jasmine Rice",  },
    { name: "Salt",  },
    { name: "Butter",  },
    { name: "Lemon",  },
  ])
}

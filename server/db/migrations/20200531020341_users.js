exports.up = async (knex) => {
  knex.schema
    .createTable("users", table => {
      table.increments();
      table.text("username",20).notNullable().unique()
      table.text("password", 20).notNullable()
    })
    .createTable("favorites", table => {
      table.increments(); //auto incrmenting ids
      table.integer("userId").references("id").inTable("users");
      table.integer("storyId").references("id").inTable("stories");
    })
    
};

exports.down = async(knex) => {
  return knex.schema.dropTableIfExists("favorites").dropTable("users");
};

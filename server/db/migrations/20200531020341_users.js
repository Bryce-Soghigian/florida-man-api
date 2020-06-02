exports.up = function (knex) {
  knex.schema
    .createTable("users", table => {
      table.increments();
      table.text("email", 20).unique();
      table.text("password", 128);
    })
    .createTable("favorites", table => {
      table.increments(); //auto incrmenting ids
      table.integer("userId").references("id").inTable("users");
      table.integer("storyId").references("id").inTable("stories");
    });
};

exports.down = function (knex) {
  return knex.dropTableIfExists("favorites").dropTableIfExists("users");
};

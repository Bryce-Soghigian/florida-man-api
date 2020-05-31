exports.up = function(knex) {
  knex.schema.createTable("users",(table) => {
      table.increments();
      table.text("email",20).unique()
      table.text("password",128)


  })
};

exports.down = function(knex) {
  return knex.dropTableIfExists("users")
};

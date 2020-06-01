exports.up = function (knex) {
  return knex.schema.createTable("stories", table => {
    table.increments();
    table.text("storyTitle"); //Title of the story
    table.text("storyContent"); //This is the body of the story
    table.text("storySource"); //Where we got the florida man data
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stories");
};

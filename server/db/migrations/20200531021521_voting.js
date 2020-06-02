exports.up = function (knex) {
  knex.schema.createTable("voting", table => {
    table.increments();
    table.integer("userId").references("id").inTable("users"); //voter id
    table.integer("voteTotal"); //total votes on a post
    table.integer("storyId").references("id").inTable("stories"); //id of the story you are voting on
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("voting");
};

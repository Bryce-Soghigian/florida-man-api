const router = require("express").Router();
const knex = require("../../config/knex-config");
//Post a favorite story with user id and storyid
router.post("/", (req, res) => {
  const postObject = {
    userId: req.body.userId,
    storyId: req.body.storyId,
  };

  knex("favorites")
    .insert(postObject)
    .returning("*")
    .then(favoritedStory => {
      res.status(201).json(favoritedStory);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

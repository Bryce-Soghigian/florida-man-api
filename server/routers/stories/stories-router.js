const router = require("express").Router();
const knex = require("../../config/knex-config");

/**
 * Gets a list of all the stories
 */
router.get("/", (req, res) => {
  knex
    .select("*")
    .from("stories")
    .returning("*")
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
/**
 *  Post a new story
 */
router.post("/", (req, res) => {
  const postObject = {
    storyTitle: req.body.storyTitle,
    storyContent: req.body.storyContent,
    storySource: req.body.storySource,
  };
  knex("stories")
    .insert(postObject)
    .returning("*")
    .then(story => {
      res.status(201).json(story);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

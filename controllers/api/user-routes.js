const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
  // access our User model and run .findAll() method
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET to get one user
// get user by id 
// include users posts and comments 


// POST route to create a new user 
// start session for user after sign-up 

// POST route to login
// find a user by id, then validate, start session for that user

// POST route to logout
// if user is logged in, destroy session and send status().end() 

// PUT route 
// DELETE route 

module.exports = router;
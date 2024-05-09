const express = require("express");
const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");
const ReviewController = require('../controllers/ReviewController');

const router = express.Router();
//UserController routes
router.post("/add_user", UserController.createUser);
router.post("/login_route", UserController.Auth);
router.patch("/logout_user", UserController.Logout);
//PostController routes
router.post("/add_post", PostController.addPost);
router.get('/get_posts',PostController.getPosts);
//ReviewController routes
router.get('/get_all_reviews', ReviewController.getAll);
module.exports = router;

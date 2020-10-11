const config = require("../config");
const { Router } = require("express");

const router = Router();

// Initialize Controller
import blogsController from "../controllers/blogsController";

// Get All
router.get("/blogs", blogsController.list);

// Get One
router.get("/blogs/:id", blogsController.show);

// Create
router.post("/blogs", config.isAuthenticated, blogsController.create);

// Update
router.put("/blogs/:id", config.isAuthenticated, blogsController.update);

// Delete
router.delete("/blogs/:id", config.isAuthenticated, blogsController.remove);

module.exports = router;

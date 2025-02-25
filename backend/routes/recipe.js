const express = require("express");
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require("../controller/recipe");
const router = express.Router();

// Get all recipes
router.get("/", getRecipes);

// Get a single recipe by ID
router.get("/:id", getRecipe);

// Add a new recipe
router.post("/", addRecipe);

// Edit a recipe by ID
router.put("/:id", editRecipe);  // Corrected route for PUT

// Delete a recipe by ID
router.delete("/:id", deleteRecipe);  // Corrected route for DELETE

module.exports = router;

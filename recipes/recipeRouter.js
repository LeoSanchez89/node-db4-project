const express = require("express");

const Recipes = require("./recipeModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ error: "error", err })
        })
});

router.get("/:id/shoppingList", (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(shop => {
            res.json(shop);
        })
        .catch(err => {
            res.status(500).json({ error: "error", err })
        })
});

router.get("/:id/instructions", (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(inst => {
            res.json(inst);
        })
        .catch(err => {
            res.status(500).json({ error: "error", err })
        })
});
module.exports = router;
/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let recipes = [
  {
    id: 1,
    title: "Test Recipe",
    ingredients: [
      { id: 1, name: "Flour", quantity: "2 cups" },
      { id: 2, name: "Sugar", quantity: "1 cup" },
      { id: 3, name: "Eggs", quantity: "3" },
    ],
    instructions: "Mix all ingredients and bake for 30 minutes.",
  },
];

// Get all recipes
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

// Get a single recipe
app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === Number(req.params.id));
  if (!recipe) return res.status(404).json({ error: "Not found" });
  res.json(recipe);
});

// Create a new recipe
app.post("/api/recipes", (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const newRecipe = {
    id: recipes.length ? recipes[recipes.length - 1].id + 1 : 1,
    title,
    ingredients,
    instructions,
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Update a recipe
app.put("/api/recipes/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = recipes.findIndex((r) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  recipes[idx] = { ...recipes[idx], ...req.body };
  res.json(recipes[idx]);
});

// Delete a recipe
app.delete("/api/recipes/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = recipes.findIndex((r) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const deleted = recipes.splice(idx, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Recipe server running at http://localhost:${PORT}`);
});

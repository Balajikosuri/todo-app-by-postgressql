const express = require("express");
const pool = require("../db/database");
const router = express.Router();

const todoController = require("../controller/todoController");
// get all todos
router.get("/", todoController.getAll);

// get todo by id
router.get("/:id", todoController.getById);

// add todo
router.post("/add-todo",todoController.create );

// update a todo
router.put("/update-todo/:id", todoController.updateById);

// delete Todo
router.delete("/delete-todo/:id", todoController.deleteById);

module.exports = router;

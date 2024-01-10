const pool = require("../db/database");
const todoController = {
  getAll: async (req, res) => {
    try {
      const { rows } = await pool.query("select * from todos");
      res.json({ data: rows });
    } catch (error) {
      res.json({ message: error });
    }
  },

  getById: async (req, res) => {
    try {
      const { rows } = await pool.query("select * from todos where id = $1", [
        req.params.id,
      ]);

      if (rows[0]) {
        return res.json({ data: rows });
      }
      res.status(404).json({ message: "not found" });
    } catch (error) {
      res.json({ message: error });
    }
  },

  create: async (req, res) => {
    try {
      const { description, completed = false } = req.body;

      const sql =
        "INSERT INTO todos(description, completed) VALUES($1, $2) RETURNING *";

      const { rows } = await pool.query(sql, [description, completed]);

      // res.json({ msg: "OK", data: rows[0] });
      res.json({ message: "your Todo added successfully!" });
    } catch (error) {
      res.json({ message: error });
    }
  },

  updateById: async (req, res) => {
    try {
      const { description, completed } = req.body;

      const sql =
        "UPDATE todos set description = $1, completed = $2 where id = $3 RETURNING *";

      const { rows } = await pool.query(sql, [
        description,
        completed,
        req.params.id,
      ]);

      res.json({ message: "Your todo updated successfully!" });
    } catch (error) {
      res.json({ message: error });
    }
  },

  deleteById: async (req, res) => {
    try {
      const sql = "DELETE FROM todos where id = $1 RETURNING *";

      const { rows } = await pool.query(sql, [req.params.id]);

      if (rows[0]) {
        return res.json({ message: "Todo Deleted !" });
      }

      return res.status(404).json({ message: "not found" });
    } catch (error) {
      res.json({ message: error });
    }
  },
};

module.exports = todoController;

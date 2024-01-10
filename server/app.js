const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();

const port = process.env.PORT;
const todoRouter = require("./routes/todoRouter");

app.use(express.json());
app.use(cors())

app.use("/todos", todoRouter);

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}/`)
);

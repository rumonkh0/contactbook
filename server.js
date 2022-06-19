const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

//Routes files
const users = require('./routes/users');

//Body parser
app.use(express.json({ extended: false }));

//Mount routers
app.use('/api/v1/user', users);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

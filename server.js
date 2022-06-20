const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');

const app = express();
connectDB();

//Routes files
const auth = require('./routes/auth');
const contact = require('./routes/contacts')

//Body parser
app.use(express.json());


// Cookie parser
app.use(cookieParser());

//Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1', contact);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

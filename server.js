const express = require("express");
const path = require('path');
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

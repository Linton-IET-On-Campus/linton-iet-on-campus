  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}))
app.use(express.json());
app.use(cookieParser("secretcode"))

app.post("/login", (req, res) => {
  console.log(req.body);
})


app.post("/user", (req, res) => {
  console.log(req.body);
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const committeesRouter = require('./routes/committees');
app.use('/committees', committeesRouter);

const adminRouter = require('./routes/admins')
app.use('/admins', adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
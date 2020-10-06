  
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

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
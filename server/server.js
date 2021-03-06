  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');
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

const uri = process.env.MONGODB_URI;
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

const shsRouter = require('./routes/shs')
app.use('/student-helps-student', shsRouter);

const internRouter = require('./routes/intern')
app.use('/intern-job-opportunity', internRouter);

const memoryRouter = require('./routes/memory')
app.use('/memory-wall', memoryRouter);

const blogRouter = require('./routes/blog')
app.use('/blog', blogRouter);

const contactRouter = require('./routes/contact')
app.use('/contacts', contactRouter);

const productRouter = require('./routes/product')
app.use('/products', productRouter);

if (process.env.NODE_ENV == 'production') {
  
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
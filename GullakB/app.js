const express = require('express');
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
// const morgan = require('morgan');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const transactionRouter = require('./routes/transactionRoutes');
const authRouter = require('./routes/authRoutes');
dbConnect();

// app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/transaction', transactionRouter);
app.use('/api/user', authRouter);


app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`); 
  });
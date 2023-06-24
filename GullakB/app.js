const express = require('express');
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
// const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const transactionRouter = require('./routes/transactionRoutes');
dbConnect();

// app.use(morgan('dev'));

app.use('/api/transaction', transactionRouter);


app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`); 
  });
const Transaction = require("../models/transactionModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

// create a Transaction
const createTransaction = asyncHandler(async (req, res) => {
    res.send('first');
});

// get a Transaction
const getaTransaction = asyncHandler(async (req, res) => {
    console.log('first ');
});

// get a Transaction
const getAllTransaction = asyncHandler(async (req, res) => {
    console.log('first ');
});

// get a Transaction
const updateTransaction = asyncHandler(async (req, res) => {
    console.log('first ');
});

// get a Transaction
const deleteTransaction = asyncHandler(async (req, res) => {
    console.log('first ');
});

module.exports = { createTransaction, getaTransaction, getAllTransaction, updateTransaction, deleteTransaction };
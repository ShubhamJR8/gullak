const Transaction = require("../models/transactionModel");
const asyncHandler = require("express-async-handler");


// create a Transaction
const createTransaction = asyncHandler(async (req, res) => {
    try {
        const newTransaction = await Transaction.create(req.body)
        res.json(newTransaction)
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error creating transaction:', error);
        throw error;
    }
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
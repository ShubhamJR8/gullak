const express = require("express");
const { createTransaction, getaTransaction, getAllTransaction, updateTransaction, deleteTransaction } = require("../controllers/transaction.controller");
const router = express.Router()


router.post('/', createTransaction);
router.get('/:id', getaTransaction);
router.get('/', getAllTransaction);
// router.put('/:id', updateTransaction);
// router.delete('/:id', deleteTransaction);
// router.get('/api/users/:userId/transactions', getAllTransaction); will be in user routes


module.exports = router;
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    amount: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['add', 'redeem'],
      required: true
    }
  },
  {
    timestamps: true
});
  
  module.exports = mongoose.model('Transaction', transactionSchema);
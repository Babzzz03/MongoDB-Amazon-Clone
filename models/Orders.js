const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      //   required: [true],
    },
    products: {
      type: Array,
      //   required: [true],
    },
    username: {
      type: String,
      //   required: [true],
    },
    address: {
      type: Object,
      //   required: [true],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: [true]
    },
  },
  { timestamps: true }
);


module.exports= mongoose.model('orders2', OrderSchema)
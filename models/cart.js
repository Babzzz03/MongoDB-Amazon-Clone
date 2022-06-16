const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema(
  {
   
    id: {
      type: Number,
      //  required: [true],
    },
    title: {
      type: String,
      //  required: [true],
    },
    price: {
      type: Number,
      //  required: [true],
    },
    image: {
      type: String,
      //   required: [true],
    },
    rating: {
      type: Number,
      //   required: [true],
    },

   
  },
  { timestamps: true }
);



module.exports = mongoose.model("Cart", CartSchema);

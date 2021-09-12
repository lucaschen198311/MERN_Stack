const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    products: [
        {
          product: { type: Object, required: true },
          quantity: { type: Number, required: true }
        }
    ]
}, { timestamps: true }
)

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
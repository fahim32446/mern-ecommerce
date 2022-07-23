import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userName: { type: String },
    userId: { type: String, required: true },
    products: [
        {
            title: { type: String },
            productId: { type: String },
            quantity: { type: Number, default: 1 }
        }
    ],

    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
},
    { timestamps: true }
)

export default mongoose.model('Order', OrderSchema)
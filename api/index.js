import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.js'
import userAuth from './routes/auth.js'
import productRoutes from './routes/product.js'
import cartRoutes from './routes/cart.js'
import orderRoutes from './routes/order.js'
import stripeRoute  from './routes/stripe.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log(err)
    });
;


app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', userAuth);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use("/api/checkout", stripeRoute);



app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on ${PORT}`);
});
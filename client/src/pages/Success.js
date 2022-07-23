import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../reqMethods";


const Success = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const [orderId, setOrderId] = useState(null);

  console.log(cart);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userName: currentUser.username,
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            title: item.title,
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (e) {
        console.log(e);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}

      <hr style={{ margin: "10px 0px" }} />

      userId:{currentUser._id}

      <hr style={{ margin: "10px 0px" }} />
      Your Ordered Product are:
      <hr style={{ margin: "10px 0px" }} />
      {cart.products.map((product) => (
        <div>
          product name: {product.title}<br />
          product quantity: {product.quantity}<br />
          Total price: {product.price}<br />
          <hr style={{ margin: "10px 0px" }} />
        </div>
      ))}





      <Link to='../'>
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
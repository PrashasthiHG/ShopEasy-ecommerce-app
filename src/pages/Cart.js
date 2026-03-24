import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity,decreaseQuantity } from "../redux/cartSlice";
import "./Cart.css";

function Cart() {

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty</p>
      ) : (
        <div className="cart-items">

          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>

              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div className="quantity-control">

                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>

                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>

            </div>

          ))}

          <h2 className="total">
            Total: ₹{totalPrice}
          </h2>

        </div>
      )}

    </div>
  );
}

export default Cart;
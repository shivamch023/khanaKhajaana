import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);


  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p className="title-name">{item.name}</p>
                  <p className="remove">₹{item.price}</p>
                  <p className="remove">{cartItems[item._id]}</p>
                  <p className="remove">₹{item.price * cartItems[item._id]}</p>
                  <motion.p whileTap={{ scale: 0.9 }} className="removex" onClick={()=>removeFromCart(item._id)}>
                    x
                  </motion.p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>sub total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delevery fee</p>
              <p>₹{getTotalCartAmount()===0?0:40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+40}</b>
            </div>
          </div>
          <motion.button whileTap={{scale:0.9}}  onClick={()=>navigate('/order')}>Proceed To Checkout</motion.button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promo-code-input">
               <input type="text" placeholder="Promo code" name="" id="" />
               <motion.button whileTap={{scale:0.9}}>Submit</motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

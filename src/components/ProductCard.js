import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishlistSlice";
import {toast} from "react-toastify";

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInWishlist = wishlistItems.some(
    (item => item.id === product.id)
  );
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <div className="product-click" onClick={() => navigate(`/product/${product.id}`)}>
        <img src={product.image} alt={product.name} onClick={() => navigate(`/product/${product.id}`)} />

        <h3 onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h3>
      </div>
      <p className="price">₹{product.price}</p>

      <button className="add-btn" onClick={() =>{
        dispatch(addToCart(product));
       toast.success("Added to cart 🛒");
      }}>
        Add to Cart
      </button>
      <button
        className="wishlist-btn"
        onClick={(e) => {
          // e.stopPropagation(); // prevent navigation
          // console.log("clicked wishlist");
          dispatch(toggleWishlist(product));
          toast.info("Update wishlist ❤️");
        }}
      >
        {isInWishlist ? "❤️" : "🤍"}
      </button>

    </div>
  );
}

export default ProductCard;
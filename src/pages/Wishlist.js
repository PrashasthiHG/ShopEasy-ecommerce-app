import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const items = useSelector((state) => state.wishlist.items);

  return (
    <div>
      <h2>My Wishlist ❤️</h2>

      {items.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="product-list">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
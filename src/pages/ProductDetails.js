import React from "react";
import { useParams } from "react-router-dom";
import "./productdetails.css";
function ProductDetails({ products }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="details-page">

      <img src={product.image} alt={product.name} />

      <div>
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>{product.description}</p>

        <button>Add to Cart</button>
      </div>

    </div>
  );
}

export default ProductDetails;
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <nav className="navbar">

            <h2 onClick={() => navigate("/")} className="logo">
                ShopEasy
            </h2>

            <div className="nav-buttons">

                <button onClick={() => navigate("/")}>
                    Home
                </button>

                <button onClick={() => navigate("/cart")}>
                    Cart ({cartItems.length})
                </button>
                <button onClick={() => navigate("/wishlist")}>
                    Wishlist ❤️
                </button>

            </div>

        </nav>
    );
}

export default Navbar;
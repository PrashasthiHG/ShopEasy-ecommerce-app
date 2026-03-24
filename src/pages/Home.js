
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  // ✅ Filter + Search combined
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>

      {/* 🔍 Search Bar FULL WIDTH */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🔹 Main Layout */}
      <div className="home">

        {/* Sidebar */}
        <div className="sidebar">
          <h3>Filters</h3>

          <p>Category</p>
          <ul>
            <li onClick={() => setSelectedCategory("All")}>All</li>
            <li onClick={() => setSelectedCategory("Electronics")}>Electronics</li>
            <li onClick={() => setSelectedCategory("Fashion")}>Fashion</li>
            <li onClick={() => setSelectedCategory("Accessories")}>Accessories</li>
          </ul>
          {user && (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {/* Products */}
        <div className="product-section">
          <div className="product-list">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
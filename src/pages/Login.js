import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // your firebase config file
import "./auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const[error,setError]=useState("");


    const navigate = useNavigate(); // ✅ MUST be inside component

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);

            navigate("/"); // ✅ redirect to home
        } catch (error) {
           setError("Invalid email or password");
        }
        setLoading(false);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back 👋</h2>
                <p className="subtitle">Login to continue</p>
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error-text">{error}</p>}
                <button onClick={handleLogin}>{loading ? "Logging in..." : "Login"}</button>

                <p className="switch-text">
                    Don't have an account?{" "}
                    <span onClick={() => navigate("/signup")}>Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
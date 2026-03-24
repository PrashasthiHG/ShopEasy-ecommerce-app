import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./auth.css";

const Signup = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // signup function
  const handleSignup = async () => {
     setLoading(true);
    try {
       
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User created:", userCredential.user);

      navigate("/login"); // redirect to login after signup
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Create an account</h2>
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
                <button onClick={handleSignup}>{loading ? "Logging in..." : "Login"}Signup</button>

                <p className="switch-text">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>login</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
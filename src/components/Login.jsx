import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail, // Import sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebaseconfig";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Track forgot password state
  const navigate = useNavigate();

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home page after login
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider(); // Create Google provider
      await signInWithPopup(auth, provider); // Sign in with Google
      navigate("/"); // Redirect to home page after login
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle forgot password
  const handleForgotPassword = async () => {
    setError("");
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email); // Send password reset email
      setError("Password reset email sent. Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Please log in to continue.
        </p>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {isForgotPassword ? (
          // Forgot password form
          <div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={handleForgotPassword}
            >
              Send Reset Link
            </button>
            <button
              className="w-full mt-4 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
              onClick={() => setIsForgotPassword(false)} // Go back to login form
            >
              Back to Login
            </button>
          </div>
        ) : (
          // Login form
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-gray-500 hover:underline"
                onClick={() => setIsForgotPassword(true)} // Switch to forgot password form
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Log In
            </button>
          </form>
        )}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-400"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="w-5 h-5 mr-3"
          />
          Login with Google
        </button>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
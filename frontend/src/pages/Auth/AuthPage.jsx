import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useStore } from "../../store/AppContext";

// Added name and confirmPassword to handle the registration fields
const emptyData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("page") !== "register";

  const { Api, storeTokenInLS, isLoggedIn } = useStore();
  const navigate = useNavigate();

  const [user, setUser] = useState(emptyData);
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      toast.info("You are already logged in");
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  // Handle toggling between Login and Register
  const toggleAuthMode = (e) => {
    e.preventDefault();
    setSearchParams({ page: isLogin ? "register" : "login" });
    setShowPassword(false);
    setUser(emptyData); // Clear the form when switching modes
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Unified Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation for registration
    if (!isLogin && user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Determine endpoint based on current mode
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    // Format payload (don't send confirmPassword to the backend)
    const payload = isLogin
      ? { email: user.email, password: user.password }
      : { username: user.username, email: user.email, password: user.password };

    try {
      const response = await fetch(`${Api}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success(isLogin ? "Login Successful" : "Registration Successful");
        setUser(emptyData);
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails || res_data.message || "Authentication failed",
        );
      }
    } catch (error) {
      console.error("Auth Error: ", error);
      toast.error("A network error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      {/* Brand Logo Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center mb-6">
        <Link to="/" className="flex items-center gap-2 cursor-pointer mb-6">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-blue-400 font-bold text-3xl tracking-wide">
            Brand
          </span>
        </Link>
        <h2 className="text-center text-2xl font-semibold text-gray-900 leading-tight">
          {isLogin ? "Sign in to your account" : "Create an account"}
        </h2>
      </div>

      {/* Auth Card */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-200 rounded-lg sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name Input - Only visible on Register */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  required
                  placeholder="Type your name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                />
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password - Only visible on Register */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Type password again"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                />
              </div>
            )}

            {/* Main Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors mt-2"
              >
                {isLogin ? "Log in" : "Register now"}
              </button>
            </div>
          </form>
        </div>

        {/* Toggle between Login and Register */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={toggleAuthMode}
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
          >
            {isLogin ? "Register now" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

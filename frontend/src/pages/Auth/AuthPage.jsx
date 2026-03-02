import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, Eye, EyeOff } from 'lucide-react';

const AuthPage = () => {
  // Read the URL parameters (e.g., ?page=register)
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Determine if we are on the login view. Defaults to login if no param is present.
  const isLogin = searchParams.get('page') !== 'register';

  // Local state for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Helper to switch modes by updating the URL parameter
  const toggleAuthMode = (e) => {
    e.preventDefault();
    setSearchParams({ page: isLogin ? 'register' : 'login' });
    setShowPassword(false); // Reset password visibility on toggle
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      
      {/* Brand Logo Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center mb-6">
        <Link to="/" className="flex items-center gap-2 cursor-pointer mb-6">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-blue-400 font-bold text-3xl tracking-wide">Brand</span>
        </Link>
        <h2 className="text-center text-2xl font-semibold text-gray-900 leading-tight">
          {isLogin ? 'Sign in to your account' : 'Create an account'}
        </h2>
      </div>

      {/* Auth Card */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-200 rounded-lg sm:px-10">
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name Input - Only visible on Register */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
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
                  required
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
                  required
                  placeholder="Type password again"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                />
              </div>
            )}

            {/* Action Row: Checkboxes and Forgot Password */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                  {isLogin ? 'Remember me' : 'I agree to the Terms'}
                </label>
              </div>

              {isLogin && (
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>

            {/* Main Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors mt-2"
              >
                {isLogin ? 'Log in' : 'Register now'}
              </button>
            </div>
          </form>

          {/* Social Logins Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button className="w-full flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  {/* Generic Google "G" representation */}
                  <span className="font-bold text-lg leading-none mr-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">G</span>
                  Google
                </button>
              </div>
              <div>
                <button className="w-full flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  {/* Generic Facebook "f" representation */}
                  <span className="font-bold text-lg leading-none mr-2 text-blue-600">f</span>
                  Facebook
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Toggle between Login and Register */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={toggleAuthMode}
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
          >
            {isLogin ? 'Register now' : 'Log in'}
          </button>
        </p>

      </div>
    </div>
  );
};

export default AuthPage;
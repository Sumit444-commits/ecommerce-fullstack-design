import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  User, 
  MessageSquare, 
  Heart, 
  ShoppingCart, 
  Menu, 
  ChevronDown,
  X,
  UserKey,
  LogOut
} from 'lucide-react';
import { useStore } from '../../store/AppContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  // --- Search State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('All category');

  const { isLoggedIn } = useStore();
  const navigate = useNavigate();

  // List of categories (matches your sidebar)
  const categories = [
    'All category', 'Clothing', 'Electronics', 'Wearables', 'Accessories', 
    'Home interiors', 'Tools, equipments', 'Sports and outdoor', 
    'Animal and pets', 'Computer and tech', 'Automobiles'
  ];

  // --- Handlers ---
  const handleLogout = () => {
    console.log("Logging out...");
    setIsProfileDropdownOpen(false);
    navigate("/logout");
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Build the query parameters
    const queryParams = new URLSearchParams();
    if (searchTerm.trim()) {
      queryParams.append('q', searchTerm.trim());
    }
    if (searchCategory !== 'All category') {
      queryParams.append('category', searchCategory);
    }

    // Navigate to the products page with the applied filters
    navigate(`/products?${queryParams.toString()}`);
    setIsMobileMenuOpen(false); // Close mobile menu if searching from mobile
  };

  return (
    <header className="w-full bg-white font-sans text-gray-800 border-b border-gray-200 relative z-50">
      
      {/* --- Top Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-blue-400 font-bold text-2xl tracking-wide">Brand</span>
        </Link>

        {/* Desktop Search Bar (Wrapped in a form for "Enter" key support) */}
        <form 
          onSubmit={handleSearch}
          className="hidden lg:flex flex-1 max-w-3xl border-2 border-blue-500 rounded-md overflow-hidden bg-white"
        >
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search" 
            className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
          />
          
          {/* Functional Category Dropdown */}
          <div className="border-l border-gray-300 flex items-center relative bg-white hover:bg-gray-50 transition-colors">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-transparent text-sm text-gray-700 outline-none cursor-pointer h-full z-10"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 pointer-events-none z-0" />
          </div>
          
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-2 font-medium">
            Search
          </button>
        </form>

        {/* Desktop User Actions */}
        <div className="hidden lg:flex items-center gap-6 text-gray-500 shrink-0">
          {/* Dynamic Login / Profile Section */}
          {isLoggedIn ? (
            <div className='relative'>
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className={`flex flex-col items-center gap-1 transition-colors ${isProfileDropdownOpen ? 'text-blue-600' : 'hover:text-gray-800'}`}
              >
                <User className="w-5 h-5" />
                <span className="text-xs font-medium">Profile</span>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-40 flex flex-col">
                  <Link to="/profile" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 text-left">
                    My Account
                  </Link>
                  <Link to="/orders" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 text-left">
                    Order History
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => navigate("/auth?page=login")} 
              className="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <UserKey className="w-5 h-5" />
              <span className="text-xs font-medium">Login</span>
            </button>
          )}

          <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs font-medium">Message</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs font-medium">Orders</span>
          </button>
          <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs font-medium">My cart</span>
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex lg:hidden items-center gap-5 text-gray-500">
          <Link to="/cart" className="hover:text-gray-800 transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:text-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <hr className="hidden lg:block border-gray-200" />

      {/* --- Bottom Section (Desktop Navigation) --- */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 py-3 items-center justify-between">
        <nav className="flex items-center gap-6">
          <button className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
            <Menu className="w-5 h-5" />
            All category
          </button>
          <Link to="/products" className="font-medium hover:text-blue-500 transition-colors">Hot offers</Link>
          <Link to="/products" className="font-medium hover:text-blue-500 transition-colors">Gift boxes</Link>
          <Link to="/products" className="font-medium hover:text-blue-500 transition-colors">Projects</Link>
          <Link to="/products" className="font-medium hover:text-blue-500 transition-colors">Menu item</Link>
          <button className="flex items-center gap-1 font-medium hover:text-blue-500 transition-colors">
            Help
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </nav>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 font-medium hover:text-blue-500 transition-colors">
            English, USD
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
            Ship to
            <img src="/images/flags/AU.svg" alt="AU" className='items-center w-6'/>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4 absolute w-full shadow-md z-40">
          
          {/* Functional Mobile Search */}
          <form onSubmit={handleSearch} className="flex w-full border border-gray-300 rounded-md overflow-hidden bg-white">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search" 
              className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 font-medium">
              <Search className="w-5 h-5" />
            </button>
          </form>

          <nav className="flex flex-col gap-3 mt-2 border-b border-gray-100 pb-4">
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 hover:text-blue-500">Hot offers</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 hover:text-blue-500">Gift boxes</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 hover:text-blue-500">Projects</Link>
            <button className="flex justify-between font-medium text-gray-700 hover:text-blue-500 text-left">
              Help
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </nav>

          {/* Dynamic Mobile User Actions */}
          <div className="flex justify-between items-center pt-2 text-gray-600">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="flex flex-col items-center gap-1 text-red-500 hover:text-red-700">
                <LogOut className="w-5 h-5" />
                <span className="text-xs">Logout</span>
              </button>
            ) : (
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/auth?page=login");
                }} 
                className="flex flex-col items-center gap-1 hover:text-blue-500"
              >
                <UserKey className="w-5 h-5" />
                <span className="text-xs">Login</span>
              </button>
            )}

            <button className="flex flex-col items-center gap-1 hover:text-blue-500">
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs">Message</span>
            </button>
            <button className="flex flex-col items-center gap-1 hover:text-blue-500">
              <Heart className="w-5 h-5" />
              <span className="text-xs">Orders</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
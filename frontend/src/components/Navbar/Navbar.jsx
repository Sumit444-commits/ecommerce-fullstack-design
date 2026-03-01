// import React from 'react';
// import { 
//   ShoppingBag, 
//   Search, 
//   User, 
//   MessageSquare, 
//   Heart, 
//   ShoppingCart, 
//   Menu, 
//   ChevronDown 
// } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white font-sans text-gray-800">
//       {/* --- Top Section --- */}
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-8">
        
//         {/* Logo */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           <div className="bg-blue-500 p-1.5 rounded-lg">
//             <ShoppingBag className="w-6 h-6 text-white" />
//           </div>
//           <span className="text-blue-400 font-bold text-2xl tracking-wide">Brand</span>
//         </div>

//         {/* Search Bar */}
//         <div className="flex flex-1 max-w-3xl border-2 border-blue-500 rounded-md overflow-hidden bg-white">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
//           />
//           <div className="border-l border-gray-300 flex items-center px-3 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
//             <span className="text-sm text-gray-700">All category</span>
//             <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-2 font-medium">
//             Search
//           </button>
//         </div>

//         {/* User Actions */}
//         <div className="flex items-center gap-6 text-gray-500">
//           <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
//             <User className="w-5 h-5" />
//             <span className="text-xs font-medium">Profile</span>
//           </button>
//           <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
//             <MessageSquare className="w-5 h-5" />
//             <span className="text-xs font-medium">Message</span>
//           </button>
//           <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
//             <Heart className="w-5 h-5" />
//             <span className="text-xs font-medium">Orders</span>
//           </button>
//           <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
//             <ShoppingCart className="w-5 h-5" />
//             <span className="text-xs font-medium">My cart</span>
//           </button>
//         </div>
//       </div>

//       <hr className="border-gray-200" />

//       {/* --- Bottom Section --- */}
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Left Navigation Links */}
//         <nav className="flex items-center gap-6">
//           <button className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
//             <Menu className="w-5 h-5" />
//             All category
//           </button>
//           <a href="#" className="font-medium hover:text-blue-500 transition-colors">Hot offers</a>
//           <a href="#" className="font-medium hover:text-blue-500 transition-colors">Gift boxes</a>
//           <a href="#" className="font-medium hover:text-blue-500 transition-colors">Projects</a>
//           <a href="#" className="font-medium hover:text-blue-500 transition-colors">Menu item</a>
//           <button className="flex items-center gap-1 font-medium hover:text-blue-500 transition-colors">
//             Help
//             <ChevronDown className="w-4 h-4 text-gray-400" />
//           </button>
//         </nav>

//         {/* Right Settings */}
//         <div className="flex items-center gap-6">
//           <button className="flex items-center gap-1 font-medium hover:text-blue-500 transition-colors">
//             English, USD
//             <ChevronDown className="w-4 h-4 text-gray-400" />
//           </button>
//           <button className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
//             Ship to
//             {/* <span className="text-lg leading-none" role="img" aria-label="Germany">🇩🇪</span> */}
//             <img src="/images/flags/AU.svg" alt="AU"  className='items-center w-6'/>
//             <ChevronDown className="w-4 h-4 text-gray-400" />
//           </button>
//         </div>
//       </div>
      
//       <hr className="border-gray-200" />
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  User, 
  MessageSquare, 
  Heart, 
  ShoppingCart, 
  Menu, 
  ChevronDown,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white font-sans text-gray-800 border-b border-gray-200">
      
      {/* --- Top Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Logo (Routes to Home) */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-blue-400 font-bold text-2xl tracking-wide">Brand</span>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-3xl border-2 border-blue-500 rounded-md overflow-hidden bg-white">
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
          />
          <div className="border-l border-gray-300 flex items-center px-3 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">All category</span>
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-2 font-medium">
            Search
          </button>
        </div>

        {/* Desktop User Actions */}
        <div className="hidden lg:flex items-center gap-6 text-gray-500 shrink-0">
          <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profile</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs font-medium">Message</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs font-medium">Orders</span>
          </button>
          {/* Cart Link (Routes to Cart) */}
          <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-gray-800 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs font-medium">My cart</span>
          </Link>
        </div>

        {/* Mobile Header Actions (Visible only on smaller screens) */}
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

      {/* Divider between top and bottom sections (Desktop Only) */}
      <hr className="hidden lg:block border-gray-200" />

      {/* --- Bottom Section (Desktop Navigation) --- */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 py-3 items-center justify-between">
        
        {/* Left Navigation Links */}
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

        {/* Right Settings */}
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
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          
          {/* Mobile Search */}
          <div className="flex w-full border border-gray-300 rounded-md overflow-hidden bg-white">
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="bg-blue-500 text-white px-4 py-2 font-medium">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-3 mt-2 border-b border-gray-100 pb-4">
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 hover:text-blue-500">Hot offers</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 hover:text-blue-500">Gift boxes</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-gray-700 hover:text-blue-500">Projects</Link>
            <button className="flex justify-between font-medium text-gray-700 hover:text-blue-500 text-left">
              Help
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </nav>

          {/* Mobile User Actions */}
          <div className="flex justify-between items-center pt-2 text-gray-600">
            <button className="flex flex-col items-center gap-1 hover:text-blue-500">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
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
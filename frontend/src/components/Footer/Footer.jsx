import React from 'react';
import { 
  ShoppingBag, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ChevronUp,
  Apple,
  Play
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans bg-white pt-12">
      {/* --- Main Footer Content --- */}
      <div className="max-w-7xl mx-auto px-4 pb-12 flex flex-col lg:flex-row justify-between gap-10">
        
        {/* 1. Brand & Info */}
        <div className="w-full lg:w-1/4 pr-4">
          <div className="flex items-center gap-2 mb-4 cursor-pointer">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-400 font-bold text-2xl tracking-wide">Brand</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Best information about the company gies here but now lorem ipsum is
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <Icon className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Links Grid */}
        <div className="w-full lg:w-2/4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-800 mb-1">About</h3>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">About Us</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Find store</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Categories</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Blogs</a>
          </div>

          {/* Partnership */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-800 mb-1">Partnership</h3>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">About Us</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Find store</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Categories</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Blogs</a>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-800 mb-1">Information</h3>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Help Center</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Money Refund</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Shipping</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Contact us</a>
          </div>

          {/* For users */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-800 mb-1">For users</h3>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Login</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Register</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">Settings</a>
            <a href="#" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">My Orders</a>
          </div>
        </div>

        {/* 3. App Store Links */}
        <div className="w-full lg:w-1/4 flex flex-col gap-3">
          <h3 className="font-semibold text-gray-800 mb-1">Get app</h3>
          
          {/* App Store Button Replica */}
          <button className="bg-[#1c1c1c] text-white rounded-lg flex items-center px-3 py-1.5 w-[140px] hover:bg-black transition-colors">
            <Apple className="w-6 h-6 mr-2" fill="currentColor" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-tight text-gray-300">Download on the</span>
              <span className="text-sm font-semibold leading-tight">App Store</span>
            </div>
          </button>

          {/* Google Play Button Replica */}
          <button className="bg-[#1c1c1c] text-white rounded-lg flex items-center px-3 py-1.5 w-[140px] hover:bg-black transition-colors">
            <Play className="w-5 h-5 mr-2" fill="currentColor" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-tight text-gray-300">GET IT ON</span>
              <span className="text-sm font-semibold leading-tight">Google Play</span>
            </div>
          </button>
        </div>

      </div>

      {/* --- Sub-Footer (Copyright & Language) --- */}
      <div className="bg-gray-100 w-full py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-gray-600 text-sm font-medium">
          <p>© 2023 Ecommerce.</p>
          
          <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
            {/* <span role="img" aria-label="United States" className="text-lg leading-none">🇺🇸</span> */}
           <img src="/images/flags/AU.svg" alt="AU"  className='items-center w-6'/>
            English
            <ChevronUp className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="w-full bg-[#f3f4f6] py-12 font-sans border-t border-gray-200">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center text-center">
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Subscribe on our newsletter
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        
        <form className="flex flex-col sm:flex-row w-full gap-2">
          {/* Email Input Wrapper */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-md text-sm transition-colors shadow-sm"
          >
            Subscribe
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Newsletter;
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex justify-end items-center gap-4 mt-6 font-sans">
      <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white cursor-pointer shadow-sm">
        <option>Show 10</option>
        <option>Show 20</option>
        <option>Show 50</option>
      </select>

      <div className="flex bg-white border border-gray-300 rounded-md overflow-hidden text-sm shadow-sm">
        <button className="px-3 py-1.5 border-r border-gray-300 hover:bg-gray-50 text-gray-600 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="px-4 py-1.5 border-r border-gray-300 bg-gray-100 text-gray-800 font-medium cursor-default">1</button>
        <button className="px-4 py-1.5 border-r border-gray-300 hover:bg-gray-50 text-gray-600">2</button>
        <button className="px-4 py-1.5 border-r border-gray-300 hover:bg-gray-50 text-gray-600">3</button>
        <button className="px-3 py-1.5 hover:bg-gray-50 text-gray-600 flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
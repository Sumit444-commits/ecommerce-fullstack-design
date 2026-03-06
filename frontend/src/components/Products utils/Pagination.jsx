// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Pagination = () => {
//   return (
//     <div className="flex justify-end items-center gap-4 mt-6 font-sans">
//       <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white cursor-pointer shadow-sm">
//         <option>Show 10</option>
//         <option>Show 20</option>
//         <option>Show 50</option>
//       </select>

//       <div className="flex bg-white border border-gray-300 rounded-md overflow-hidden text-sm shadow-sm">
//         <button className="px-3 py-1.5 border-r border-gray-300 hover:bg-gray-50 text-gray-600 flex items-center justify-center">
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         <button className="px-4 py-1.5 border-r border-gray-300 bg-gray-100 text-gray-800 font-medium cursor-default">1</button>
//         <button className="px-4 py-1.5 border-r border-gray-300 hover:bg-gray-50 text-gray-600">2</button>
//         <button className="px-4 py-1.5 border-r border-gray-300 hover:bg-gray-50 text-gray-600">3</button>
//         <button className="px-3 py-1.5 hover:bg-gray-50 text-gray-600 flex items-center justify-center">
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;


import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange, 
  itemsPerPage = 10, 
  onItemsPerPageChange 
}) => {
  
  // Dynamically calculate which page numbers to show
  const getVisiblePages = () => {
    const delta = 2; 
    let pages = [];
    
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      pages.push(i);
    }

    if (currentPage - delta > 2) pages.unshift('...');
    if (currentPage + delta < totalPages - 1) pages.push('...');

    pages.unshift(1);
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex justify-end items-center gap-4 mt-6 font-sans">
      
      {/* Items Per Page Dropdown */}
      <select 
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange && onItemsPerPageChange(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white cursor-pointer shadow-sm"
      >
        <option value={10}>Show 10</option>
        <option value={20}>Show 20</option>
        <option value={50}>Show 50</option>
      </select>

      {/* Pagination Controls */}
      <div className="flex bg-white border border-gray-300 rounded-md overflow-hidden text-sm shadow-sm">
        
        {/* Previous Button */}
        <button 
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 border-r border-gray-300 flex items-center justify-center transition-colors
            ${currentPage === 1 
              ? 'bg-gray-50 text-gray-300 cursor-not-allowed' 
              : 'hover:bg-gray-50 text-gray-600 cursor-pointer'}`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Numbers */}
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange && onPageChange(page)}
            disabled={page === '...'}
            className={`px-4 py-1.5 border-r border-gray-300 transition-colors
              ${page === currentPage 
                ? 'bg-gray-100 text-gray-800 font-medium cursor-default'
                : page === '...'
                ? 'bg-white text-gray-400 cursor-default'
                : 'bg-white hover:bg-gray-50 text-gray-600 cursor-pointer'
              }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button 
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 flex items-center justify-center transition-colors
            ${currentPage === totalPages 
              ? 'bg-gray-50 text-gray-300 cursor-not-allowed' 
              : 'hover:bg-gray-50 text-gray-600 cursor-pointer'}`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};

export default Pagination;
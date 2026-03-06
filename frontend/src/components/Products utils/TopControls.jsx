// import React from 'react';
// import { Grid, List, X } from 'lucide-react';

// const TopControls = ({ viewMode = 'list', setViewMode, activeFilters = ['Samsung', 'Apple', 'Poco', 'Metallic'] }) => {
//   return (
//     <div className="w-full font-sans mb-4 flex flex-col gap-3">
//       {/* Main Bar */}
//       <div className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div className="text-gray-800 text-sm">
//           12,911 items in <span className="font-semibold">Mobile accessory</span>
//         </div>
        
//         <div className="flex items-center gap-4">
//           <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
//             <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
//             Verified only
//           </label>
          
//           <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white">
//             <option>Featured</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//           </select>

//           <div className="flex border border-gray-300 rounded-md overflow-hidden">
//             <button 
//               onClick={() => setViewMode('grid')}
//               className={`p-1.5 transition-colors border-r border-gray-300 flex items-center justify-center ${viewMode === 'grid' ? 'bg-gray-100 text-gray-800 cursor-default' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
//             >
//               <Grid className="w-4 h-4" />
//             </button>
//             <button 
//               onClick={() => setViewMode('list')}
//               className={`p-1.5 transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-gray-100 text-gray-800 cursor-default' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
//             >
//               <List className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Active Filter Tags (Shown mostly in Grid View based on your designs, but good to have) */}
//       {activeFilters.length > 0 && (
//         <div className="flex flex-wrap items-center gap-2">
//           {activeFilters.map((filter, index) => (
//             <div key={index} className="flex items-center gap-1 bg-white border border-gray-300 rounded px-2 py-1 text-sm text-gray-600">
//               {filter}
//               <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-gray-600" />
//             </div>
//           ))}
//           <button className="text-blue-600 text-sm ml-2 hover:underline">
//             Clear all filter
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopControls;


import React from 'react';
import { Grid, List, X } from 'lucide-react';

const TopControls = ({ 
  viewMode = 'list', 
  setViewMode, 
  activeFilters = [], 
  totalItems = 0, // Added to show dynamic count
  onClearFilter,  // Added to handle individual tag removal
  onClearAll      // Added to handle "Clear all filters"
}) => {
  return (
    <div className="w-full font-sans mb-4 flex flex-col gap-3">
      {/* Main Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Dynamic Item Count */}
        <div className="text-gray-800 text-sm">
          <span className="font-semibold">{totalItems}</span> items found
        </div>
        
        <div className="flex items-center gap-4 flex-wrap">
          <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
            Verified only
          </label>
          
          <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          {/* Grid / List Toggles */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 transition-colors border-r border-gray-300 flex items-center justify-center ${viewMode === 'grid' ? 'bg-gray-100 text-gray-800 cursor-default' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-gray-100 text-gray-800 cursor-default' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Tags */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((filter, index) => (
            <div key={index} className="flex items-center gap-1 bg-white border border-gray-300 rounded px-2 py-1 text-sm text-gray-600 transition-colors hover:border-gray-400">
              {filter}
              <X 
                className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" 
                onClick={() => onClearFilter && onClearFilter(filter)}
              />
            </div>
          ))}
          <button 
            onClick={onClearAll}
            className="text-blue-600 text-sm ml-2 hover:underline focus:outline-none"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default TopControls;
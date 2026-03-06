


import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Star } from 'lucide-react';

// --- Reusable Collapsible Section Wrapper ---
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-200 py-4 font-sans">
      <div 
        className="flex justify-between items-center mb-3 cursor-pointer text-gray-800 font-semibold select-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <button className="p-1 rounded-md group-hover:bg-gray-100 transition-colors">
          {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

// --- Main Sidebar Component (Controlled by PageWrapper) ---
const Sidebar = ({ filters, setFilters }) => {
  
  // Local state ONLY for price inputs while typing, before hitting "Apply"
  const [localPrice, setLocalPrice] = useState({ min: '', max: '' });

  // Mock Data Lists
  const categoriesList = ['All', 'Clothing', 'Electronics', 'Wearables', 'Accessories', 'Home interiors', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Computer and tech', 'Automobiles'];
  const brandsList = ['Generic', 'TechSound', 'WearTech', 'UrbanPack', 'NordicHome', 'BuildMax', 'TrailBlaze', 'PetComfort', 'DriveSafe', 'VisionX', 'Samsung', 'Apple'];
  const featuresList = ['Metallic', 'Plastic cover', '8GB Ram', 'Waterproof', 'Wireless'];
  const conditionsList = ['Any', 'Brand new', 'Refurbished', 'Old items'];

  // --- Handlers that directly update PageWrapper's state ---
  const handleArrayToggle = (key, item) => {
    setFilters(prev => {
      const currentArray = prev[key];
      const newArray = currentArray.includes(item) 
        ? currentArray.filter(i => i !== item) 
        : [...currentArray, item];
      return { ...prev, [key]: newArray };
    });
  };

  const handleApplyPrice = () => {
    setFilters(prev => ({ ...prev, price: localPrice }));
  };

  const renderStars = (filledCount) => (
    <div className="flex text-[#FF9017]">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className="w-4 h-4" 
          fill={i < filledCount ? "currentColor" : "none"} 
          color={i < filledCount ? "currentColor" : "#D1D5DB"} 
        />
      ))}
    </div>
  );

  return (
    <aside className="w-full lg:w-[240px] shrink-0 pr-4">
      
      {/* 1. Category */}
      <FilterSection title="Category" defaultOpen={true}>
        <ul className="text-sm text-gray-600 space-y-3">
          {categoriesList.map((cat) => (
            <li 
              key={cat}
              onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
              className={`cursor-pointer transition-colors ${filters.category === cat ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* 2. Brands */}
      <FilterSection title="Brands" defaultOpen={true}>
        <div className="space-y-3 text-sm text-gray-600 flex flex-col">
          {brandsList.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer w-max hover:text-gray-900 transition-colors">
              <input 
                type="checkbox" 
                checked={filters.brands.includes(brand)}
                onChange={() => handleArrayToggle('brands', brand)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
              />
              {brand}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 3. Features */}
      <FilterSection title="Features" defaultOpen={true}>
        <div className="space-y-3 text-sm text-gray-600 flex flex-col">
          {featuresList.map((feature) => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer w-max hover:text-gray-900 transition-colors">
              <input 
                type="checkbox" 
                checked={filters.features.includes(feature)}
                onChange={() => handleArrayToggle('features', feature)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
              />
              {feature}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 4. Price Range */}
      <FilterSection title="Price range" defaultOpen={true}>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Min</label>
            <input 
              type="number" 
              value={localPrice.min}
              onChange={(e) => setLocalPrice({ ...localPrice, min: e.target.value })}
              placeholder="0" 
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm outline-none focus:border-blue-500 transition-colors" 
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Max</label>
            <input 
              type="number" 
              value={localPrice.max}
              onChange={(e) => setLocalPrice({ ...localPrice, max: e.target.value })}
              placeholder="99999" 
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm outline-none focus:border-blue-500 transition-colors" 
            />
          </div>
        </div>
        <button 
          onClick={handleApplyPrice}
          className="w-full bg-white border border-gray-300 text-blue-600 font-medium py-1.5 rounded-md text-sm hover:bg-gray-50 transition-colors shadow-sm active:bg-gray-100"
        >
          Apply
        </button>
      </FilterSection>

      {/* 5. Condition */}
      <FilterSection title="Condition" defaultOpen={true}>
        <div className="space-y-3 text-sm text-gray-600 flex flex-col">
          {conditionsList.map((cond) => (
            <label key={cond} className="flex items-center gap-2 cursor-pointer w-max hover:text-gray-900 transition-colors">
              <input 
                type="radio" 
                name="condition"
                value={cond}
                checked={filters.condition === cond}
                onChange={(e) => setFilters(prev => ({ ...prev, condition: e.target.value }))}
                className="border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
              />
              {cond}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 6. Ratings */}
      <FilterSection title="Ratings" defaultOpen={true}>
        <div className="space-y-3 flex flex-col">
          {[5, 4, 3, 2].map((stars) => (
            <label key={stars} className="flex items-center gap-2 cursor-pointer w-max">
              <input 
                type="checkbox" 
                checked={filters.ratings.includes(stars)}
                onChange={() => handleArrayToggle('ratings', stars)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
              />
              {renderStars(stars)}
            </label>
          ))}
        </div>
      </FilterSection>

    </aside>
  );
};

export default Sidebar;

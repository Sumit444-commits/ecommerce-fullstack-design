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
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
      {/* Simple CSS transition for smooth opening/closing isn't perfectly supported by raw Tailwind without plugins, so we toggle display */}
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

// --- Main Sidebar Component ---
const Sidebar = ({ onFilterChange }) => {
  // --- State Management ---
  const [selectedBrands, setSelectedBrands] = useState(['Samsung']); // Example default
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [condition, setCondition] = useState('Any');
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Mock Data Lists
  const brandsList = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
  const featuresList = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
  const conditionsList = ['Any', 'Refurbished', 'Brand new', 'Old items'];

  // --- Handlers ---
  const handleCheckboxChange = (item, stateList, setStateFunc) => {
    if (stateList.includes(item)) {
      setStateFunc(stateList.filter(i => i !== item));
    } else {
      setStateFunc([...stateList, item]);
    }
  };

  const handlePriceChange = (e, type) => {
    setPriceRange({ ...priceRange, [type]: e.target.value });
  };

  const handleApplyPrice = () => {
    console.log("Applied Price:", priceRange);
    triggerFilterUpdate();
  };

  // Whenever a filter (other than price text typing) changes, you might want to alert the parent component
  const triggerFilterUpdate = () => {
    if (onFilterChange) {
      onFilterChange({
        brands: selectedBrands,
        features: selectedFeatures,
        price: priceRange,
        condition,
        ratings: selectedRatings
      });
    }
  };

  // Helper for rendering stars
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
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Mobile accessory</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Electronics</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Smartphones</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Modern tech</li>
          <li className="text-blue-600 cursor-pointer mt-1 hover:underline">See all</li>
        </ul>
      </FilterSection>

      {/* 2. Brands */}
      <FilterSection title="Brands" defaultOpen={true}>
        <div className="space-y-3 text-sm text-gray-600 flex flex-col">
          {brandsList.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer w-max hover:text-gray-900 transition-colors">
              <input 
                type="checkbox" 
                checked={selectedBrands.includes(brand)}
                onChange={() => {
                  handleCheckboxChange(brand, selectedBrands, setSelectedBrands);
                  triggerFilterUpdate();
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
              />
              {brand}
            </label>
          ))}
          <button className="text-blue-600 cursor-pointer mt-2 text-left hover:underline w-max">See all</button>
        </div>
      </FilterSection>

      {/* 3. Features */}
      <FilterSection title="Features" defaultOpen={true}>
        <div className="space-y-3 text-sm text-gray-600 flex flex-col">
          {featuresList.map((feature) => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer w-max hover:text-gray-900 transition-colors">
              <input 
                type="checkbox" 
                checked={selectedFeatures.includes(feature)}
                onChange={() => {
                  handleCheckboxChange(feature, selectedFeatures, setSelectedFeatures);
                  triggerFilterUpdate();
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" 
              />
              {feature}
            </label>
          ))}
          <button className="text-blue-600 cursor-pointer mt-2 text-left hover:underline w-max">See all</button>
        </div>
      </FilterSection>

      {/* 4. Price Range */}
      <FilterSection title="Price range" defaultOpen={true}>
        {/* Visual Slider */}
        <div className="py-2 mb-4">
          <div className="h-1 w-full bg-gray-200 rounded relative">
            <div className="absolute left-[20%] right-[30%] h-1 bg-blue-500 rounded"></div>
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
        </div>
        
        {/* Min/Max Inputs */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Min</label>
            <input 
              type="number" 
              value={priceRange.min}
              onChange={(e) => handlePriceChange(e, 'min')}
              placeholder="0" 
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm outline-none focus:border-blue-500 transition-colors" 
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Max</label>
            <input 
              type="number" 
              value={priceRange.max}
              onChange={(e) => handlePriceChange(e, 'max')}
              placeholder="999999" 
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
                checked={condition === cond}
                onChange={(e) => {
                  setCondition(e.target.value);
                  triggerFilterUpdate();
                }}
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
                checked={selectedRatings.includes(stars)}
                onChange={() => {
                  handleCheckboxChange(stars, selectedRatings, setSelectedRatings);
                  triggerFilterUpdate();
                }}
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
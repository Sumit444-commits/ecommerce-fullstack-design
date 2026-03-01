import React from 'react';

const DealsAndOffers = () => {
  const deals = [
    { name: 'Smart watches', discount: '-25%', img: '/images/tech/5.svg' },
    { name: 'Laptops', discount: '-15%', img: '/images/tech/6.svg' },
    { name: 'GoPro cameras', discount: '-40%', img: '/images/tech/7.svg' },
    { name: 'Headphones', discount: '-25%', img: '/images/tech/8.svg' },
    { name: 'Canon cameras', discount: '-25%', img: '/images/tech/9.svg' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row mb-6  px-4 sm:px-0">
      
      {/* Timer Section */}
      <div className="p-6 md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Deals and offers</h3>
        <p className="text-gray-500 mb-4">Hygiene equipments</p>
        
        <div className="flex gap-1.5">
          <div className="bg-[#606060] text-white rounded p-2 flex flex-col items-center justify-center w-[45px]">
            <span className="font-bold text-lg leading-none">04</span>
            <span className="text-[10px]">Days</span>
          </div>
          <div className="bg-[#606060] text-white rounded p-2 flex flex-col items-center justify-center w-[45px]">
            <span className="font-bold text-lg leading-none">13</span>
            <span className="text-[10px]">Hour</span>
          </div>
          <div className="bg-[#606060] text-white rounded p-2 flex flex-col items-center justify-center w-[45px]">
            <span className="font-bold text-lg leading-none">34</span>
            <span className="text-[10px]">Min</span>
          </div>
          <div className="bg-[#606060] text-white rounded p-2 flex flex-col items-center justify-center w-[45px]">
            <span className="font-bold text-lg leading-none">56</span>
            <span className="text-[10px]">Sec</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 flex overflow-x-auto divide-x divide-gray-200">
        {deals.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 min-w-[160px] flex-1 hover:bg-gray-50 transition-colors cursor-pointer">
            {/* Replace with actual image */}
            <div className="w-24 h-24 mb-4 bg-gray-100 flex items-center justify-center">
              <img src={item.img} alt={item.name} className="object-contain w-full h-full mix-blend-multiply" />
            </div>
            <p className="text-gray-800 text-sm mb-2 text-center">{item.name}</p>
            <span className="bg-[#ffe3e3] text-[#eb001b] font-medium text-sm px-3 py-1 rounded-full">
              {item.discount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsAndOffers;
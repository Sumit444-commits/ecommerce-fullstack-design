import React from 'react';

const HomeAndOutdoor = ({products , bg_img}) => {
 

  return (
    <div className="w-full max-w-7xl mx-auto font-sans bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row mb-6  px-4 sm:px-0">
      
      {/* Side Banner */}
      <div className="bg-[#f3ead8] p-6 md:w-[280px] shrink-0 relative overflow-hidden flex flex-col items-start justify-start"
       style={{
            backgroundImage: `url(${bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
      >
        {/* Add your background image here using inline styles or an absolute img tag */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 w-2/3">Home and outdoor</h3>
          <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition-colors text-sm">
            Source now
          </button>
        </div>
      </div>

      {/* 4x2 Grid */}
      <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 bg-gray-200 gap-[1px]">
        {products.map((item, index) => (
          <div key={index} className="bg-white p-4 flex flex-col justify-between h-[130px] relative hover:shadow-inner transition-shadow cursor-pointer">
            <div>
              <h4 className="text-gray-800 text-sm font-medium">{item.name}</h4>
              <p className="text-gray-400 text-xs mt-1">From<br/>{item.price}</p>
            </div>
            {/* Bottom right image */}
            <div className="absolute bottom-2 right-2 w-16 h-16 flex items-end justify-end">
               <img src={item.img} alt={item.name} className="object-contain max-h-full max-w-full mix-blend-multiply" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAndOutdoor;
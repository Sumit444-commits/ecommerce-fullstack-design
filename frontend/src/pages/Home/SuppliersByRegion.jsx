import React from 'react';

const SuppliersByRegion = () => {
  const regions = [
    { name: 'Arabic Emirates', domain: 'shopname.ae', flag: '/images/flags/AE.svg' },
    { name: 'Australia', domain: 'shopname.ae', flag: '/images/flags/AU.svg' },
    { name: 'United States', domain: 'shopname.ae', flag: '/images/flags/CN.svg' },
    { name: 'Russia', domain: 'shopname.ru', flag: '/images/flags/DE.svg' },
    { name: 'Italy', domain: 'shopname.it', flag: '/images/flags/DK.svg' },
    { name: 'Denmark', domain: 'denmark.com.dk', flag: '/images/flags/FR.svg' },
    { name: 'France', domain: 'shopname.com.fr', flag: '/images/flags/GB.svg' },
    { name: 'Arabic Emirates', domain: 'shopname.ae', flag: '/images/flags/IT.svg' },
    { name: 'China', domain: 'shopname.ae', flag: '/images/flags/RU.svg' },
    { name: 'Great Britain', domain: 'shopname.co.uk', flag: '/images/flags/US.svg' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans mb-12 px-4 sm:px-0">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 ">
        Suppliers by region
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2 ">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center gap-3 cursor-pointer group">
            <img src={region.flag} className="text-2xl leading-none" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                {region.name}
              </span>
              <span className="text-xs text-gray-500">
                {region.domain}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;
import React from 'react';
import { Search, Package, Send, ShieldCheck } from 'lucide-react';

const ExtraServices = () => {
  const services = [
    {
      title: 'Source from Industry Hubs',
      icon: Search,
      img: '/images/extras/1.png',
    },
    {
      title: 'Customize Your Products',
      icon: Package,
      img: '/images/extras/2.png',
    },
    {
      title: 'Fast, reliable shipping by ocean or air',
      icon: Send,
      img: '/images/extras/3.png',
    },
    {
      title: 'Product monitoring and inspection',
      icon: ShieldCheck,
      img: '/images/extras/4.png',
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto font-sans mb-8 px-4 sm:px-0">
      <h3 className="text-xl font-semibold text-gray-900 mb-5">
        Our extra services
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Top Image Half */}
              <div className="h-28 bg-gray-800 relative">
                {/* Replace src with actual image */}
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              
              {/* Bottom Text Half & Overlapping Icon */}
              <div className="p-4 relative bg-white flex-1 flex flex-col">
                {/* Circular Icon */}
                <div className="absolute right-4 -top-6 w-12 h-12 bg-[#d1e7ff] text-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                
                <h4 className="text-gray-900 font-medium text-sm pr-8 leading-snug">
                  {service.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtraServices;
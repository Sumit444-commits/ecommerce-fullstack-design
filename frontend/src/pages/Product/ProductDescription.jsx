import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ProductDescription = ({ product }) => {
  const [activeTab, setActiveTab] = useState('Description');

  // Mock data for the right sidebar (Can also be fetched later!)
  const recommendedProducts = [
    { title: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', img: '/images/cloth/2.svg' },
    { title: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', img: '/images/cloth/3.svg' },
    { title: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', img: '/images/cloth/4.svg' },
    { title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', img: '/images/cloth/5.svg' },
    { title: 'New Summer Men\'s castrol T-Shirts', price: '$7.00 - $99.50', img: '/images/cloth/6.svg' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-4 font-sans text-gray-800">
      <div className="flex flex-col lg:flex-row gap-5">
        
        {/* --- Left Column: Tabs & Content --- */}
        <div className="flex-1 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          
          <div className="flex items-center gap-6 px-4 border-b border-gray-200 overflow-x-auto">
            {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3.5 px-1 font-medium text-sm transition-colors relative whitespace-nowrap ${
                  activeTab === tab 
                    ? 'text-blue-600' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'Description' && (
              <div className="animate-fadeIn">
                
                {/* Dynamic Long Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {product?.longDescription || product?.shortDescription || "No description provided."}
                </p>

                {/* Dynamic Specifications Table */}
                {product?.specifications && product.specifications.length > 0 && (
                  <div className="w-full lg:w-2/3 border border-gray-200 rounded-sm overflow-hidden mb-6 text-sm">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {product.specifications.map((spec, idx) => (
                          <tr key={idx} className="border-b border-gray-200 last:border-0">
                            <td className="bg-[#eff2f4] text-gray-600 py-2.5 px-4 w-1/3 border-r border-gray-200">
                              {spec.key}
                            </td>
                            <td className="py-2.5 px-4 text-gray-800">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Dynamic Features List */}
                {product?.features && product.features.length > 0 && (
                  <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-gray-400 shrink-0" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {activeTab === 'Reviews' && <div className="text-gray-500 text-sm">Customer reviews will appear here.</div>}
            {activeTab === 'Shipping' && <div className="text-gray-500 text-sm">Shipping information will appear here.</div>}
            {activeTab === 'About seller' && <div className="text-gray-500 text-sm">Seller information will appear here.</div>}
          </div>
        </div>

        {/* --- Right Column: "You may like" Sidebar --- */}
        <div className="w-full lg:w-[280px] shrink-0 bg-white border border-gray-200 rounded-lg p-4 h-fit shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">You may like</h3>
          
          <div className="flex flex-col gap-4">
            {recommendedProducts.map((rec, index) => (
              <div key={index} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 shrink-0 border border-gray-200 rounded-md bg-white p-1 flex items-center justify-center transition-colors group-hover:border-gray-300">
                  <img 
                    src={rec.img} 
                    alt={rec.title} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <h4 className="text-sm text-gray-800 leading-snug line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {rec.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {rec.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDescription;
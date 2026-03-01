import React from 'react';
import { Lock, MessageSquare, Truck } from 'lucide-react';

const TrustFeatures = () => {
  const features = [
    {
      icon: Lock,
      title: 'Secure payment',
      desc: 'Have you ever finally just'
    },
    {
      icon: MessageSquare,
      title: 'Customer support',
      desc: 'Have you ever finally just'
    },
    {
      icon: Truck,
      title: 'Free delivery',
      desc: 'Have you ever finally just'
    }
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 mt-8 font-sans">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 leading-tight mb-0.5">
                {feature.title}
              </span>
              <span className="text-sm text-gray-400 leading-tight">
                {feature.desc}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrustFeatures;
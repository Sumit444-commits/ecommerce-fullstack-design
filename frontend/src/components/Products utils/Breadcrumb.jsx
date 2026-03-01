import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items = ['Home', 'Clothings', "Men's wear", 'Summer clothing'] }) => {
  return (
    <div className="flex items-center text-sm text-gray-500 py-4 font-sans">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={index === items.length - 1 ? "text-gray-400" : "cursor-pointer hover:text-blue-600"}>
            {item}
          </span>
          {index < items.length - 1 && <ChevronRight className="w-4 h-4 mx-2" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
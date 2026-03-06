// import React from 'react';
// import { ChevronRight } from 'lucide-react';

// const Breadcrumb = ({ items = ['Home', 'Clothings', "Men's wear", 'Summer clothing'] }) => {
//   return (
//     <div className="flex items-center text-sm text-gray-500 py-4 font-sans">
//       {items.map((item, index) => (
//         <React.Fragment key={index}>
//           <span className={index === items.length - 1 ? "text-gray-400" : "cursor-pointer hover:text-blue-600"}>
//             {item}
//           </span>
//           {index < items.length - 1 && <ChevronRight className="w-4 h-4 mx-2" />}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Breadcrumb;


import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = ['Home', 'Clothings', "Men's wear", 'Summer clothing'] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center text-sm text-gray-500 py-4 font-sans">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="text-gray-400 cursor-default">
                {item}
              </span>
            ) : (
              <Link to="#" className="cursor-pointer hover:text-blue-600 transition-colors">
                {item}
              </Link>
            )}
            
            {!isLast && <ChevronRight className="w-4 h-4 mx-2 shrink-0 text-gray-400" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
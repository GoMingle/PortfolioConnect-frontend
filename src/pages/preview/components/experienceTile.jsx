import React, { useState } from 'react';

const ExperienceTile = ({ companyName, responsibility, roleOne, roleTwo, roleThree }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="group flex flex-col items-center group bg-gray-900 rounded-[15px] shadow-2xl p-5 ml-56 mr-56 hover:bg-white cursor-pointer" onClick={toggleExpansion}>
        <h3 className="font-semibold text-lg text-left text-teal-500">{companyName}</h3>
        {isExpanded && (
          <div className="mt-2 text-white font-light">
            <p className="text-center">{responsibility}</p>
            <ul className="text-sm text-center text-white">
              <li>{roleOne}</li>
              <li>{roleTwo}</li>
              <li>{roleThree}</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default ExperienceTile;
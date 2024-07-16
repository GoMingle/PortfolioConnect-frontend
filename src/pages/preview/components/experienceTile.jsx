import React, { useState } from 'react';

const ExperienceTile = ({ companyName, responsibility, role, startDate, endDate}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="group flex flex-col items-center group bg-teal-500 rounded-[15px] shadow-2xl p-12 overflow-hidden ml-56 mr-56 hover:bg-white cursor-pointer" onClick={toggleExpansion}>
        <span className='flex flex-col-3'>
          <h3 className="font-semibold text-lg text-left text-black">{companyName}</h3>
        <p className="text-lg text-black font-semibold ml-2">{role}</p>
        <p className="text-lg text-black font-semibold ml-2" >{startDate}</p>
        <p className="text-lg text-black font-semibold ml-2">{endDate}</p>
        </span>
        
        {isExpanded && (
          <div className="mt-2 text-black font-normal">
            <p className="text-center">{responsibility}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ExperienceTile;
const Card = ({ role, company, duration, description, color }) => {
    return (
      <div className="flex items-start p-4 bg-gray-100 rounded-lg shadow-md mb-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{role}</h2>
          <h3 className="text-md font-medium text-gray-600">{company} {duration}</h3>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
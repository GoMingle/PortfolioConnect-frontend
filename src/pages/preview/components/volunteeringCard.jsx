import { HandHeartIcon } from 'lucide-react';

const VolunteeringCard = ({ organization, description, responsibility, startDate, endDate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto">
      <div className="flex justify-center">
        <div className="bg-green-100 p-4 rounded-full">
          <HandHeartIcon size={32} className="text-teal-500" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-semibold text-lg text-center">{organization}</h4>
        <p className="text-center text-gray-900">{responsibility}</p>
        <p className="text-center text-gray-900">{description}</p>
        <div className="flex justify-center gap-2 text-sm mt-2">
          <p className="font-light">{startDate}</p>
          <p className="font-light">{endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteeringCard;

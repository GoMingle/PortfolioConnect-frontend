import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../../constants";
import {  Blend, Dot, Edit, MapPin, TrashIcon } from "lucide-react";



const Educations = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-teal-500 h-full ">
      <PagesLayout 
      headerText="Educations"
      buttonText="Add New Education"
      onClick={() => navigate("/dashboard/educations/add-education")}
      
      
    >
      <div className="grid grid-cols-1 gap-6  ">
        {K.EDUCATIONS.map(({ Schoolname, program, qualification, location, startDate, endDate }, index) => (
          <div key={index} className="h-full mt-3 pl-4 shadow-2xl rounded-xl flex flex-col text-gray-900 bg-white">
             <div className="ml-auto flex gap-x-2 mr-6  ">
              <span>
                <Edit className="text-gray-900 size-4 mt-5" />
              </span>
              <span>
                <TrashIcon className="text-gray-900 size-4 mt-5" />
                 </span>
            </div> 
            <span className="font-bold text-lg text-gray-800 ml-4">{Schoolname}</span>
            <span className="mt-2  flex font-medium"><Dot className="text-teal-400 size-7"/>{program}</span>
            <span className="mt-2 flex font-medium "><Dot  className="text-teal-400 size-7"/>{qualification}</span>
            <div className="flex flex-row gap-40 mt-10 ml-10  mb-5">
            <span className="mt-2  flex"><MapPin className="text-teal-400 size-4"/>{location}</span>
            <span className="mt-2 italic flex"><Blend className="text-teal-400 size-4"/>{startDate}-{endDate}</span>
            
            </div>
           

          </div>
           

        )

        )}
        

      </div>

    </PagesLayout>
    </div>

  )
}

export default Educations;
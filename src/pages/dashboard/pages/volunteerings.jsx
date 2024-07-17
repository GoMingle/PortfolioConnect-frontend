import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout"
import K from "../../../constants";
import { Blend, Edit, TrashIcon } from "lucide-react";


const Volunteerings = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="Volunteerings" buttonText="Add New Volunteering" onClick={() => navigate("/dashboard/volunteerings/add-volunteering")}>

      <div className="grid grid-cols-1 gap-6  " >
          {K.VOLUNTEERINGS.map(({ organization, description, skills, responsibility, startDate, endDate }, index) => (
            <div key={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-5">
              <div className="ml-auto flex gap-x-2 ">
                <span><Edit className="text-gray-900 size-4"/></span>
                <span><TrashIcon className="text-gray-900 size-4"/></span>
              </div>

              <span className="font-bold font-sans text-lg text-gray-900 ">{organization}</span>
              <span className="text-gray-800">{description}</span>
              <span className=" text-gray-800 ">{skills}</span>
              <span className="text-gray-800 ">{responsibility}</span>
                <span className="italic mt-5 flex"><Blend className="text-teal-400 size-4"/>{startDate}-{endDate}</span>
            
            </div>
          )

          )}
        </div>

      </PagesLayout>
    </div>
  )
}

export default Volunteerings
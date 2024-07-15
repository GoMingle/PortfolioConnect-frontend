import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout"
import K from "../../../constants";
import { Blend, Edit, TrashIcon } from "lucide-react";


const Volunteerings = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 h-full">
      <PagesLayout headerText="Volunteerings" buttonText="Add New Volunteering" onClick={() => navigate("/dashboard/volunteerings/add-volunteering")}>

      <div className="grid grid-cols-1 gap-6 text-gray-300 " >
          {K.VOLUNTEERINGS.map(({ organization, description, skills, responsibility, startDate, endDate }, index) => (
            <div key={index} className=" bg-gray-800  shadow-md rounded-xl flex flex-col p-5">
              <div className="ml-auto flex gap-x-2 ">
                <span><Edit className="text-teal-400 size-4"/></span>
                <span><TrashIcon className="text-teal-400 size-4"/></span>
              </div>

              <span className="font-bold font-sans text-lg text-teal-500 ">{organization}</span>
              <span className="">{description}</span>
              <span className="font-thin ">{skills}</span>
              <span className="font-thin ">{responsibility}</span>
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
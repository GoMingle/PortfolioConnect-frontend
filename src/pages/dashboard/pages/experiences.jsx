import { useNavigate } from "react-router-dom";
import K from "../../../constants";
import PagesLayout from "../layout/pagesLayout";
import { Blend, Dot, Edit, MapPin, TrashIcon } from "lucide-react";

const Experiences = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="Experiences" buttonText="Add New Experience" onClick={() => navigate("/dashboard/experiences/add-experience")}>
        <div className="grid grid-cols-1 gap-6 text-gray-900 " >
          {K.EXPERIENCES.map(({ name, role, responsibility, location, startDate, endDate }, index) => (
            <div key={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-5">
              <div className="ml-auto flex gap-x-2 ">
                <span ><Edit className="text-gray-900 size-4" /></span>
                <span><TrashIcon className="text-gray-900 size-4" /></span>
              </div>

              <span className="font-bold font-sans text-lg text-gray-900 ">{name}</span>
              <span className="font-semibold">{role}</span>
              <span className="flex  "><Dot className="text-teal-400 size-7" />{responsibility}</span>

              <div className="flex flex-row gap-40 mt-10 ml-10 ">
                <span className="mt-2 flex"> <MapPin className="text-teal-400 size-4 flex " />{location}</span>
                <span className="italic mt-2 flex"><Blend className="text-teal-400 size-4 flex" />{startDate}-{endDate}</span>
              </div>
            </div>
          )

          )}
        </div>
      </PagesLayout>
    </div>
  )
}

export default Experiences
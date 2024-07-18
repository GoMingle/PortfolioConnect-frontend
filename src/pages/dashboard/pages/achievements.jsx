import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout"
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";



const Achievements = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="ACHIEVEMENTS"
        buttonText="Add New Achievement"
        onClick={() => navigate("/dashboard/achievements/add-achievement")} >

        <div className="grid grid-cols-1 gap-6 text-gray-900">
          {K.ACHIEVEMENTS.map(({ award, image, description, date, nameOfInstitution }, index) => (
            <div k={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-8">
              <div className="ml-auto flex gap-x-2 ">
                <span ><Edit className="text-gray-900 size-4"/></span>
                <span><TrashIcon className="text-gray-900 size-4"/></span>
              </div>

              <span className="font-bold font-sans text-lg text-gray-900 ">{award}</span>
              <img src={image} alt="image" />
              <span className="flex font-thin mt-3 ">{description}</span>

              <div className="flex flex-row gap-20 mt-10 ml-2 ">
                <span className="mt-2 italic font-semibold ">{date}</span>
                <span className=" mt-2 flex font-semibold">{nameOfInstitution}</span>
              </div>

            </div>


          )
          )}
        </div>

      </PagesLayout>
    </div>
  )
}

export default Achievements

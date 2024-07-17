import { useNavigate } from "react-router-dom"
import K from "../../../constants"
import PagesLayout from "../layout/pagesLayout";
import { Edit, TrashIcon } from "lucide-react";


const Socials = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout
        headerText="Socials"
        buttonText="Add New Social"
        onClick={() => navigate("/dashboard/socials/add-social")}
      >

        <div  className="grid grid-cols-4 gap-6 ">
          {K.SOCIALS.map(( {name, url, icon} ,index) => (
          <div key={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-5">
          <div className="ml-auto flex gap-x-2 ">
            <span ><Edit className="text-gray-900 size-4"/></span>
            <span><TrashIcon className="text-gray-900 size-4"/></span>
          </div>
          <span className="font-bold font-sans text-lg text-gray-900">{name}</span>
          <span className="text-gray-800">{url}</span>
          <span className="text-gray-800">{icon}</span>
        </div>

            
          ))}
        </div>

      </PagesLayout>

    </div>
  )
}

export default Socials
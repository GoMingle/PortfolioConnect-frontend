import { Edit, TrashIcon } from "lucide-react";
import PagesLayout from "../layout/pagesLayout";
import K from "../../../constants";
import { useNavigate } from "react-router-dom";



const Skills = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => navigate("/dashboard/skills/add-skill")}>
        <div className="grid grid-cols-4 gap-6 " > 
          { K.SKILLS.map(({name, levelOfProficiency}, index) => (
                <div key={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-5">
                  <div className="ml-auto flex gap-x-2 ">
                    <span ><Edit className="text-gray-900 size-4"/></span>
                    <span><TrashIcon className="text-gray-900 size-4"/></span>
                  </div>
                  <span className="font-bold font-sans text-lg text-gray-800">{name}</span>
                  <span className="text-gray-800">{levelOfProficiency}</span>
                </div>
          )

          )}
        </div>
      </PagesLayout>
    </div>
  )
}

export default Skills
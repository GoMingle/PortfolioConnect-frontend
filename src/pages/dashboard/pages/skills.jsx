import { Edit, TrashIcon } from "lucide-react";
import PagesLayout from "../layout/pagesLayout";
import K from "../../../constants";
import { useNavigate } from "react-router-dom";



const Skills = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 h-full">
      <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => navigate("/dashboard/skills/add-skill")}>
        <div className="grid grid-cols-4 gap-6 " > 
          { K.SKILLS.map(({name, levelOfProficiency}, index) => (
                <div key={index} className=" bg-gray-800  shadow-md rounded-xl flex flex-col p-5">
                  <div className="ml-auto flex gap-x-2 ">
                    <span ><Edit className="text-teal-400 size-4"/></span>
                    <span><TrashIcon className="text-teal-400 size-4"/></span>
                  </div>
                  <span className="font-bold font-sans text-lg text-teal-500">{name}</span>
                  <span className="text-gray-300">{levelOfProficiency}</span>
                </div>
          )

          )}
        </div>
      </PagesLayout>
    </div>
  )
}

export default Skills
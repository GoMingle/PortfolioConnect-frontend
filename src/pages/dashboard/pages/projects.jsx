import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { Edit, TrashIcon } from "lucide-react";
import K from "../../../constants";


const Projects = () => {
  const navigate = useNavigate()
  return (
    <div>
      <PagesLayout headerText="PROJECTS"
        buttonText="Add New Achievement"
        onClick={() => navigate("/dashboard/projects/add-project")} >

          <div>
           {K.PROJECTS.map(({projectName,image, description, contributors, nameOfInstitution, startDate, endDate, link }, index) => (
             <div k={index} className="h-full pt-6 pl-4 shadow-2xl rounded-xl flex flex-col text-gray-300 bg-gray-800">
             <div className="ml-auto flex gap-x-2 ">
               <span ><Edit className="text-teal-400 size-4"/></span>
               <span><TrashIcon className="text-teal-400 size-4"/></span>
             </div>

             <span className="font-bold font-sans text-lg text-teal-500 ">{projectName}</span>
             <img src={image} alt="image" />
             <span className="flex font-thin ">{description}</span>
             <span className="flex font-thin ">{contributors}</span>
             <span className="flex font-thin ">{nameOfInstitution}</span>
             <span className="flex font-thin ">{startDate}</span>
             <span className="flex font-thin ">{endDate}</span>
             <span className="flex font-thin ">{link}</span>

             

           </div>

           )

           )} 
          </div>

      </PagesLayout>
    </div>
  )
}

export default Projects
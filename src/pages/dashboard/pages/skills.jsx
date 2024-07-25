import { Edit, TrashIcon } from "lucide-react";
import PagesLayout from "../layout/pagesLayout";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiDeleteSkill, apiGetSkills } from "../../../services/skills";
import PageLoader from "../../../components/pageLoader";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import { noData } from "../../../assets";



const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchSkills = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.Skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleDelete = async(_id) =>{
    try {
      const res = await apiDeleteSkill(_id);
      console.log(res.data)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchSkills()
  }, [])
  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="SKILLS" buttonText="Add New Skill" onClick={() => navigate("/dashboard/skills/add-skill")}>
        {
          isLoading ? <PageLoader /> :
            <div>
              {
                skills.length == 0 ? <div className="flex flex-col items-center gap-y-3 justify-center">
                <img src={noData} alt="no data" className="w-56" />
                <p className="font-semibold"> No skill added yet</p>
              </div> : 
                
                <div className="grid grid-cols-4 gap-6 " >
                  {skills.map(({ name, levelOfProficiency, id }, index) => (
                    <div key={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-5">
                      <div className="ml-auto flex gap-x-2 ">
                        <button>
                        <Edit className="text-gray-900 size-4" />
                        </button>
                          
                        <button onClick={() => handleDelete(id)}>
                        {
                          isDeleting? <Loader/> : <TrashIcon className="text-gray-900 size-4" />
                        }
                        </button>
                      </div>
                      <span className="font-bold font-sans text-lg text-gray-800">{name}</span>
                      <span className="text-gray-800">{levelOfProficiency}</span>
                    </div>
                  )

                  )}
                </div>
              }
            </div>
        }
      </PagesLayout>
    </div>
  )
}

export default Skills
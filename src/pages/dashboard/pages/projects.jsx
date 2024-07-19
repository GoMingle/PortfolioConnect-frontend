import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { Blend, Edit, TrashIcon } from "lucide-react";
import K from "../../../constants";
import { useEffect, useState } from "react";
import { apiDeleteProject, apiGetProjects } from "../../../services/project";
import PageLoader from "../../../components/pageLoader";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { noData } from "../../../assets";


const Projects = () => {

  const navigate = useNavigate();
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetProjects();
      console.log(res.data);
      setProjects(res.data.project);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteProject(_id);
      console.log(res.data)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])






  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="PROJECTS"
        buttonText="Add New Achievement"
        onClick={() => navigate("/dashboard/projects/add-project")} >

        {
          isLoading ? <PageLoader /> :
            <div>
              {
                projects.length == 0 ?  <div className="flex flex-col items-center gap-y-3 justify-center">
                <img src={noData} alt="no data" className="w-56" />
                <p> No Project added yet</p>
              </div> : <div className="grid grid-cols-3 gap-6 text-gray-900 ">

                  {projects.map(({ projectName, image, description, contributors, nameOfInstitution, startDate, endDate, link, id }, index) => (
                    <div k={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-8 relative">
                      <div className="ml-auto flex gap-x-2   absolute right-10 bottom-1 mb-4 ">

                        <button>
                          <Edit className="text-gray-900 size-4" />
                        </button>
                        <button onClick={() => handleDelete(id)}>
                          {
                            isDeleting ? <Loader /> : <TrashIcon className="text-gray-900 size-4" />
                          }
                        </button>
                      </div>

                      <span className="font-bold font-sans text-lg text-gray-900 ">{projectName}</span>
                      <img src={image} alt="image" className="size-48 w-64 shadow-lg rounded-md mt-5" />
                      <span className="flex  mt-3 ">{description}</span>
                      <div className="flex gap-10 mt-5 ml-8">
                        <span className="flex font-thin ">{contributors}</span>
                        <span className="flex font-thin ">{nameOfInstitution}</span>
                      </div>
                      <span className="italic mt-4 flex"><Blend className="text-teal-400 size-4 flex" />{startDate}-{endDate}</span>
                      <span className="flex mt-5 text-blue-600 hover: underline ">{link}</span>



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

export default Projects
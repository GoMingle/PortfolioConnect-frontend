import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout"
import { Edit, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteAchievement, apiGetAchievements } from "../../../services/achievements";
import PageLoader from "../../../components/pageLoader";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { noData } from "../../../assets";



const Achievements = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchAchievements = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetAchievements();
      console.log(res.data);
      setAchievements(res.data.achievement);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteAchievement(_id);
      console.log(res.data)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchAchievements()
  }, [])









  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="ACHIEVEMENTS"
        buttonText="Add New Achievement"
        onClick={() => navigate("/dashboard/achievements/add-achievement")} >

        {
          isLoading ? <PageLoader /> :
            <div>
              {
                achievements.length == 0 ? <div className="flex flex-col items-center gap-y-3 justify-center">
                  <img src={noData} alt="no data" className="w-56" />
                  <p className="font-semibold"> No Achievement added yet</p>
                </div> : <div className="grid grid-cols-3 gap-6 text-gray-900">
                  {achievements.map(({ award, image, description, date, nameOfInstitution, id }, index) => (
                    <div k={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-8 relative">
                      <div className="ml-auto flex gap-x-2  mb-4 absolute right-10 bottom-4">

                        <button>
                          <Edit className="text-gray-900 size-4" />
                        </button>

                        <button onClick={() => handleDelete(id)}>
                          {
                            isDeleting ? <Loader /> : <TrashIcon className="text-gray-900 size-4" />
                          }
                        </button>
                      </div>

                      <span className="font-bold font-sans text-lg text-gray-900 ">{award}</span>
                      <img src={image} alt="image" className="size-48 w-64 shadow-lg rounded-md mt-5" />
                      <span className="flex  mt-3 ">{description}</span>

                      <div className="flex flex-row gap-20 mt-10 ml-2 ">
                        <span className="mb-20 italic font-semibold ">{date}</span>
                        <span className=" mb-20 flex font-semibold">{nameOfInstitution}</span>
                      </div>

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

export default Achievements

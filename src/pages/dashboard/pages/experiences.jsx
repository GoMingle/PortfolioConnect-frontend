import { useNavigate } from "react-router-dom";
import K from "../../../constants";
import PagesLayout from "../layout/pagesLayout";
import { Blend, Dot, Edit, MapPin, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteExperience, apiGetExperiences } from "../../../services/experience";
import PageLoader from "../../../components/pageLoader";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { noData } from "../../../assets";

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchExperiences = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetExperiences();
      console.log(res.data);
      setExperiences(res.data.Experience);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteExperience(_id);
      console.log(res.data)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchExperiences()
  }, [])





  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="EXPERIENCES" buttonText="Add New Experience" onClick={() => navigate("/dashboard/experiences/add-experience")}>

        {
          isLoading ? <PageLoader /> :
            <div>
              {
                experiences.length == 0 ?  <div className="flex flex-col items-center gap-y-3 justify-center">
                <img src={noData} alt="no data" className="w-56" />
                <p className="font-semibold"> No Experience added yet</p>
              </div> :
                 <div className="grid grid-cols-1 gap-6 text-gray-900 " >
                {experiences.map(({ name, role, responsibility, location, startDate, endDate, id }, index) => (
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
              }
            </div>
        }
      </PagesLayout>
    </div>
  )
}

export default Experiences
import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout"
import { noData } from "../../../assets";
import { Blend, Edit, TrashIcon } from "lucide-react";
import { useState } from "react";
import { apiDeleteVolunteering, apiGetVolunteering } from "../../../services/volunteering";
import PageLoader from "../../../components/pageLoader";
import Loader from "../../../components/loader";
import { useEffect } from "react";



const Volunteerings = () => {
  const navigate = useNavigate();
  const [volunteerings, setVolunteering] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchVolunteering = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetVolunteering();
      console.log(res.data);
      setVolunteering(res.data.Volunteerings);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteVolunteering(_id);
      console.log(res.data)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchVolunteering()
  }, [])




  return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="VOLUNTEERINGS" buttonText="Add New Volunteering" onClick={() => navigate("/dashboard/volunteerings/add-volunteering")}
      >
        {

          isLoading ? <PageLoader /> :

            <div>
              {
                volunteerings.length == 0 ? <div className="flex flex-col items-center gap-y-3 justify-center">
                  <img src={noData} alt="No Data" className="w-56" />
                  <p className="font-semibold ">No Volunteering added yet</p>
                </div> :

                  <div className="grid grid-cols-1 gap-6  " >

                    {volunteering.map(({ organization, description, skills, responsibility, startDate, endDate }, index) => (
                      <div key={index} className=" bg-white  shadow-md rounded-xl flex flex-col p-5">
                        <div className="ml-auto flex gap-x-2 ">
                          <button>
                            <Edit className="text-gray-900 size-4"/>
                          </button>

                          <button onClick={() => handleDelete(id)}>
                          {
                          isDeleting? <Loader/> : <TrashIcon className="text-gray-900 size-4" />
                          }
                          </button>
                        </div>

                        <span className="font-bold font-sans text-lg text-gray-900 ">{organization}</span>
                        <span className="text-gray-800">{description}</span>
                        <span className=" text-gray-800 ">{skills}</span>
                        <span className="text-gray-800 ">{responsibility}</span>
                        <span className="italic mt-5 flex"><Blend className="text-teal-400 size-4" />{startDate}-{endDate}</span>

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

export default Volunteerings
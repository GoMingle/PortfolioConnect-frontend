import { useNavigate } from "react-router-dom"
import PagesLayout from "../layout/pagesLayout"
import { useEffect } from "react";
import Loader from "../../../components/loader";
import { Blend, Edit, TrashIcon } from "lucide-react";
import PageLoader from "../../../components/pageLoader";
import { apiDeleteVolunteering, apiGetVolunteering } from "../../../services/volunteering";
import { noData } from "../../../assets";
import { useState } from "react";


const Volunteerings = () => {
  const navigate = useNavigate();
  const [volunteerings, setVolunteerings] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchVolunteerings = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetVolunteering();
      console.log(res.data);
      setVolunteerings(res.data.Volunteerings);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleDelete = async(_id) =>{
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
    fetchVolunteerings()
  }, [])




 return (
    <div className="bg-teal-500 h-full">
      <PagesLayout headerText="VOLUNTEERINGS" buttonText="Add New Volunteering" onClick={() => navigate("/dashboard/volunteerings/add-volunteering")}>


     {  
         isLoading ? <PageLoader/> :
      <div>
        {
          Volunteerings.length == 0 ? <div className="flex flex-col items-center gap-y-3 justify-center">
          <img src={noData} alt="no data" className="w-56" />
          <p className="font-semibold"> No Volunteerings added yet</p>
        </div> :

           <div className="grid grid-cols-1 gap-6  " >
           {volunteerings.map(({ organization, description, skills, responsibility, startDate, endDate }, index) => (
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
                 <span className="italic mt-5 flex"><Blend className="text-teal-400 size-4"/>{startDate}-{endDate}</span>
             
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
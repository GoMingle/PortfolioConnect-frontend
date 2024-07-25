import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../../constants";
import {  Blend, Dot, Edit, MapPin, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteEducation, apiGetEducation } from "../../../services/education";
import PageLoader from "../../../components/pageLoader";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { noData } from "../../../assets";



const Educations = () => {

  const navigate = useNavigate();
  const [educations, setEducations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchEducation = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetEducation();
      console.log(res.data);
      setEducations(res.data.education);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async(_id) =>{
    try {
      const res = await apiDeleteEducation(_id);
      console.log(res.data)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])
  



  return (
    <div className="bg-teal-500 h-full ">
      <PagesLayout 
      headerText="EDUCATION"
      buttonText="Add New Education"
      onClick={() => navigate("/dashboard/educations/add-education")}
       >

     {
       isLoading ? <PageLoader/> : 
       <div>
        {
          educations.length == 0 ? <div className="flex flex-col items-center gap-y-3 justify-center">
          <img src={noData} alt="no data" className="w-56" />
          <p className="font-semibold"> No Education added yet</p>
        </div> : 
          <div className="grid grid-cols-1 gap-6  ">
          {educations.map(({ Schoolname, program, qualification, location, startDate, endDate, id }, index) => (
            <div key={index} className="h-full mt-3 pl-4 shadow-2xl rounded-xl flex flex-col text-gray-900 bg-white">
               <div className="ml-auto flex gap-x-2 mr-6  ">
               <button>
               <Edit className="text-gray-900 size-4 mt-5" />
               </button>
                
                <button onClick={() => handleDelete(id)}>
               {
                isDeleting ? <Loader/> :  <TrashIcon className="text-gray-900 size-4 mt-5" />
               }
                </button>
                   
              </div> 
              <span className="font-bold text-lg text-gray-800 ml-4">{Schoolname}</span>
              <span className="mt-2  flex font-medium"><Dot className="text-teal-400 size-7"/>{program}</span>
              <span className="mt-2 flex font-medium "><Dot  className="text-teal-400 size-7"/>{qualification}</span>
              <div className="flex flex-row gap-40 mt-10 ml-10  mb-5">
              <span className="mt-2  flex"><MapPin className="text-teal-400 size-4"/>{location}</span>
              <span className="mt-2 italic flex"><Blend className="text-teal-400 size-4"/>{startDate}-{endDate}</span>
              
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

export default Educations;
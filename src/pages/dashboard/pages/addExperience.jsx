import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddExperience } from "../../../services/experience";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";


const AddExperience = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async(data) => {
    console.log(data)
    setIsSubmitting(true);
    try {
      const res = await apiAddExperience({
        companyName: data.companyName,
        role: data.role,
        responsibility: data.responsibility,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,

      });
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error){
      console.log(error) ;
      toast.error("An error occured")
      
    } finally{
      setIsSubmitting(false)
    }
  };

   

  return (
    <div className="bg-gray-900 h-full">
        <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold text-gray-400 mb-4 mt-8 text-center">Experience</h2>
        
          <div className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                {...register("companyName", {required: "Company Name is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Role
              </label>
              <input
                type="text"
                id="role"
                {...register("role", {required: "Role is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Responsibility
              </label>
              <textarea
                 type="text"
                id="responsibility"
                {...register("responsibility", {required: "Responsibility is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                {...register("location", {required: "Location is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                {...register("startDate", {required: "Start Date is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                {...register("endDate", {required: "End Date is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400 "
              />
            </div>
          </div>
      
       <div className="flex gap-40">
       <div className="mb-4">
          <button
            type="submit"
             className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            {
              isSubmitting? <Loader/> : "Add Experience"
            }
            
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
        
       </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddExperience;
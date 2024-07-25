
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddAchievement } from "../../../services/achievements";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";

const AddAchievement = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[isSubmitting, setIsSubmitting] = useState(false);

   
      
    const onSubmit = async(data) => {
      console.log(data)
      setIsSubmitting(true);
      try {
        const res = await apiAddAchievement({
          award: data.award,
          description: data.description,
          image: data.image,
          date: data.date,
          nameOfInstitution: data.nameOfInstitution,
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
  return(
    <div className="bg-gray-900 h-full">
        <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold text-gray-400 text-center mt-8 mb-4">Achievement</h2>
        
          <div className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Award
              </label>
              <input
                type="text"
                id="award"
                {...register("award", {required: "Award is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                type="text"
                {...register("description", {required: "Description is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image", {required: "Image is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
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
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                {...register("date", {required: "Date is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Name of Institution
              </label>
              <input
                type="text"
                id="institution"
                {...register("institution", {required: "Institution is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
          </div>
      
        <div className="flex gap-28">
        <div className="mb-4">
          <button
            type="submit"
            
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
             {
              isSubmitting? <Loader/> : "Add Achievement"
            }
            
          </button>
        </div>
       
        </div>
      </form>
    </div>
    </div>
  )
  
  
}

export default AddAchievement;
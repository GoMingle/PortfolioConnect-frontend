import { useForm } from "react-hook-form";
import { useState } from "react";
import { apiAddVolunteering } from "../../../services/volunteering";
import Loader from "../../../components/loader";


const AddVolunteering = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[isSubmitting, setIsSubmitting] = useState(false);

   
      
    const onSubmit = async(data) => {
      console.log(data)
      setIsSubmitting(true);
      try {
        const res = await apiAddVolunteering({
          organization: data.organization,
          description: data.description,
          skills: data.skills,
          responsibility: data.responsibility,
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
      <div className="bg-transparent p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold text-gray-400 mb-4 mt-8 text-center">Volunteering</h2>
        
          
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                {...register("organization", {required: "Organization is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Description
              </label>
            
                <input
                type="text"
                id="description"
                {...register("description", {required: "Description is required"})}
                
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
                
                />
            
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                {...register("skills", {required: "Description is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Responsibility
              </label>
              <textarea
                type = "text"
                id="responsibility"
                
                {...register("responsibility", {required: "Responsibility is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                {...register("startDate", {required: "Start Date is required "})}
              
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
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
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
          
        
        <div className="flex gap-32">
        <div className="mb-4">
          <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
          
            {
              isSubmitting? <Loader/> : "Add Volunteering"
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

export default AddVolunteering;
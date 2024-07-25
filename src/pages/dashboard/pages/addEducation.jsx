import { useForm } from "react-hook-form";
import Loader from "../../../components/loader";
import { apiAddEducation } from "../../../services/education";
import { toast } from "react-toastify";
import { useState } from "react";

const AddEducation = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async(data) => {
    console.log(data)
    setIsSubmitting(true);
    try {
      const res = await apiAddEducation({
        schoolName: data.schoolName,
        program: data.program,
        qualification: data.qualification,
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
        <h2 className="text-xl font-bold text-gray-400 text-center mb-4 mt-8">Education</h2>
        
          <div  className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                {...register("schoolName", {required: "Name of School is required"})}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Program
              </label>
              <input
                type="text"
                id="program"
                {...register("program", {required: "Program is required"})}

                
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                {...register("qualification", {required: "Qualification is required"})}
                
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
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                {...register("startDate", {required: "Start Date  is required"})}
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
          </div>
         
        <div className="flex gap-40 ">
        <div className="mb-4 ">
        
          <button
            type="submit"
            
            className=" bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          {
            isSubmitting? <Loader/> : "Add Education"
          }
            
          </button>
          
        </div>
        
        </div>
      </form>
    </div>

    </div>
  )
}

export default AddEducation
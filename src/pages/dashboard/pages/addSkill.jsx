import { useForm } from "react-hook-form";
import { apiAddSkill } from "../../../services/skills";
import { useState } from "react";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";

const AddSkill = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[isSubmitting, setIsSubmitting] = useState(false);

   
      
    const onSubmit = async(data) => {
      console.log(data)
      setIsSubmitting(true);
      try {
        const res = await apiAddSkill({
         name: data.name,
         levelOfProficiency: data.proficiency.toLowerCase(),
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
     <div className="bg-transparent p-6  max-w-lg mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold text-gray-400 text-center mb-4 mt-8">Skill</h2>

          <div className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Skill Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {required: "name is required"})}
              
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Level of Proficiency
              </label>
              <select
                name="level"
                {...register("proficiency", { required: "proficiency is required",})}
                
                
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              >
                <option value="">Select...</option>
                <option value="Beginner">Beginner</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
     
        <div className=" flex gap-56">
        <div className="mb-4">
        <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {
              isSubmitting? <Loader/> : "Add Skill"
            }
            
          </button>
        </div>
   
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddSkill;
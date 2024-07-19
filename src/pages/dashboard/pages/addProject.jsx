import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddProject } from "../../../services/project";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";

const AddProject = () => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[isSubmitting, setIsSubmitting] = useState(false);

   
      
    const onSubmit = async(data) => {
      console.log(data)
      setIsSubmitting(true);
      try {
        const res = await apiAddProject({
          projectName: data.projectName,
          description: data.description,
          contributors: data.contributors,
          nameOfInstitution: data.nameOfInstitution,
          startDate: data.startDate,
          endDate: data.endDate,
          image: data.image,
          link: data.link,

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
          <h2 className="text-xl font-bold text-gray-400 text-center mt-8 mb-4">Project</h2>
          
            <div  className="mb-4">
              <div className="mb-2">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  {...register("projectName", {required: "Project Name is required"})}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  {...register("image", {required: "image is required"})}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
                />
              </div>

              <div className="mb-2">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                type="text"
                  id="description"
                  {...register("description", {required: "Description is required"})}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Contributors
                </label>
                <input
                  type="text"
                  id="contributors"
                  {...register("contributors", {required: "Contributors is required"})}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
                />
              </div>
             
              <div className="mb-2">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Name of Institution
                </label>
                <input
                  type="text"
                  id="nameOfInstitution"
                  {...register("nameOfInstitution", {required: "Name of Institution is required"})}
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
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
                />
              </div>

            <div>
              <label> 
                Link
              </label>
              <input
                  type="text"
                  id="link"
                  {...register("link", {required: "Link is required"})}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
                />
            </div>
            </div>
        
          <div className="flex gap-56">
            <div className="mb-4">
              <button
                type="submit"
                className="bg-transparent border-2 border-teal-400 hover:bg-teal-400  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                {
              isSubmitting? <Loader/> : "Add Project"
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

export default AddProject;
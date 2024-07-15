import { useState } from "react";

const Experiences = () => {

    const [experiences, setExperiences] = useState([{
        companyName: '',
        role: '',
        responsibility: '',
        location: '',
        startDate: '',
        endDate: ''
      }]);
    
      const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newExperiences = [...experiences];
        newExperiences[index][name] = value;
        setExperiences(newExperiences);
      };
    
      const handleAddExperience = () => {
        setExperiences([...experiences, {
          companyName: '',
          role: '',
          responsibility: '',
          location: '',
          startDate: '',
          endDate: ''
        }]);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Experience Data:', experiences);
      };

  return (
    <div className="bg-gray-900 h-full">
        <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-400 mb-4 mt-8 text-center">Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={experience.role}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Responsibility
              </label>
              <textarea
                name="responsibility"
                value={experience.responsibility}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={experience.location}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400 "
              />
            </div>
          </div>
        ))}
       <div className="flex gap-40">
       <div className="mb-4">
          <button
            type="button"
            onClick={handleAddExperience}
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Add Experience
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Save Experience
          </button>
       </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Experiences
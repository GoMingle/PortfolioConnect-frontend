

import { useState } from "react";
const Education = () => {

    const [educations, setEducations] = useState([{
        schoolName: '',
        program: '',
        qualification: '',
        location: '',
        startDate: '',
        endDate: ''
      }]);
    
      const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newEducations = [...educations];
        newEducations[index][name] = value;
        setEducations(newEducations);
      };
    
      const handleAddEducation = () => {
        setEducations([...educations, {
          schoolName: '',
          program: '',
          qualification: '',
          location: '',
          startDate: '',
          endDate: ''
        }]);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Education Data:', educations);
      };
  return (
    <div className="bg-gray-900 h-full">
        <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-400 text-center mb-4 mt-8">Education</h2>
        {educations.map((education, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                School Name
              </label>
              <input
                type="text"
                name="schoolName"
                value={education.schoolName}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Program
              </label>
              <input
                type="text"
                name="program"
                value={education.program}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={education.qualification}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={education.location}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={education.startDate}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={education.endDate}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
          </div>
        ))}
        <div className="flex gap-40 ">
        <div className="mb-4 ">
        
          <button
            type="button"
            onClick={handleAddEducation}
            className=" bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Education
          </button>
          
        </div>
        <div className="flex items-center justify-between mb-4 ">
          <button
            type="submit"
            className=" bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Education
          </button>
        </div>
        </div>
      </form>
    </div>

    </div>
  )
}

export default Education

import { useState } from "react";
const Volunteering = () => {

    const [volunteerings, setVolunteerings] = useState([{
        organization: '',
        description: '',
        skills: '',
        responsibility: '',
        startDate: '',
        endDate: ''
      }]);
    
      const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newVolunteerings = [...volunteerings];
        newVolunteerings[index][name] = value;
        setVolunteerings(newVolunteerings);
      };
    
      const handleAddVolunteering = () => {
        setVolunteerings([...volunteerings, {
          organization: '',
          description: '',
          skills: '',
          responsibility: '',
          startDate: '',
          endDate: ''
        }]);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Volunteering Data:', volunteerings);
      };
    
  return (
    <div className="bg-gray-900 h-full">
      <div className="bg-transparent p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-400 mb-4 mt-8 text-center">Volunteering</h2>
        {volunteerings.map((volunteering, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={volunteering.organization}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={volunteering.description}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={volunteering.skills}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Responsibility
              </label>
              <textarea
                name="responsibility"
                value={volunteering.responsibility}
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
                value={volunteering.startDate}
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
                value={volunteering.endDate}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
          </div>
        ))}
        <div className="flex gap-32">
        <div className="mb-4">
          <button
            type="button"
            onClick={handleAddVolunteering}
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Add Volunteering
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Save Volunteering
          </button>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Volunteering

import { useState } from "react";

const Achievements = () => {

    const [achievements, setAchievements] = useState([{
        award: '',
        description: '',
        image: '',
        location: '',
        date: '',
        institution: ''
      }]);
    
      const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newAchievements = [...achievements];
        newAchievements[index][name] = value;
        setAchievements(newAchievements);
      };
    
      const handleAddAchievement = () => {
        setAchievements([...achievements, {
          award: '',
          description: '',
          image: '',
          location: '',
          date: '',
          institution: ''
        }]);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Achievements Data:', achievements);
      };
  return(
    <div className="bg-gray-900 h-full">
        <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-400 text-center mt-8 mb-4">Achievement</h2>
        {achievements.map((achievement, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Award
              </label>
              <input
                type="text"
                name="award"
                value={achievement.award}
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
                value={achievement.description}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Image
              </label>
              <input
                type="file"
                name="image"
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
                value={achievement.location}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={achievement.date}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Name of Institution
              </label>
              <input
                type="text"
                name="institution"
                value={achievement.institution}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
          </div>
        ))}
        <div className="flex gap-28">
        <div className="mb-4">
          <button
            type="button"
            onClick={handleAddAchievement}
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Add Achievement
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Save Achievement
          </button>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
  
  
}

export default Achievements
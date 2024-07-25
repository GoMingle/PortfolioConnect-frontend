import { useState, useEffect } from "react";

const AddSkill = () => {
  const [skills, setSkills] = useState([{ name: '', level: '' }]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newSkills = [...skills];
    newSkills[index][name] = value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { name: '', level: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Skills Data:', skills);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % skills.length);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + skills.length) % skills.length);
  };

  useEffect(() => {
    const timer = setInterval(nextPage, 3000); // Change page every 3 seconds
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="bg-gray-900 h-full">
      <div className="bg-transparent p-6 max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-400 text-center mb-4 mt-8">Skill</h2>
          {skills.map((skill, index) => (
            index === currentPage && (
              <div key={index} className="mb-4">
                <div className="mb-2">
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={(e) => handleChange(index, e)}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    Level of Proficiency
                  </label>
                  <select
                    name="level"
                    value={skill.level}
                    onChange={(e) => handleChange(index, e)}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-teal-400"
                  >
                    <option value="">Select...</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
            )
          ))}
          <div className="flex justify-between mb-4">
            <button
              type="button"
              onClick={prevPage}
              className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Skill
            </button>
            <button
              type="button"
              onClick={nextPage}
              className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Skills
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;

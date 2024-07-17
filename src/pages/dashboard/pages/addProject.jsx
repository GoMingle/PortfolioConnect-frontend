
import { useState } from "react";
const AddProject = () => {

    const [projects, setProjects] = useState([{
        projectName: '',
        description: '',
        contributors: '',
        skills: '',
        institution: '',
        startDate: '',
        endDate: ''
      }]);
    
      const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newProjects = [...projects];
        newProjects[index][name] = value;
        setProjects(newProjects);
      };
    
      const handleAddProject = () => {
        setProjects([...projects, {
          projectName: '',
          description: '',
          contributors: '',
          skills: '',
          institution: '',
          startDate: '',
          endDate: ''
        }]);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Projects Data:', projects);
      };
    
  return (
    <div className="bg-gray-900 h-full">
        <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-400 text-center mt-8 mb-4">Project</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                value={project.projectName}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Contributors
              </label>
              <input
                type="text"
                name="contributors"
                value={project.contributors}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={project.skills}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Name of Institution
              </label>
              <input
                type="text"
                name="institution"
                value={project.institution}
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
                value={project.startDate}
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
                value={project.endDate}
                onChange={(e) => handleChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:ring  focus:ring-teal-400"
              />
            </div>
          </div>
        ))}
        <div className="flex gap-56">
        <div className="mb-4">
          <button
            type="button"
            onClick={handleAddProject}
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Add Project
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Save Project
          </button>
        </div>
        </div>
      </form>
    </div>

    </div>
  )
}

export default AddProject;
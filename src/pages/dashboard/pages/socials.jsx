import { useState } from "react";

const Socials = () => {

  const [socials, setSocials] = useState({
    github: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSocials({
      ...socials,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Socials Data:', socials);
  };
  return (
    <div className="bg-gray-900 h-full">
      <div className="bg-transparent p-6  max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-gray-400 text-center mt-8 mb-4">Social Links</h2>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            GitHub
          </label>
          <input
            type="url"
            name="github"
            value={socials.github}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            LinkedIn
          </label>
          <input
            type="url"
            name="linkedin"
            value={socials.linkedin}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Twitter
          </label>
          <input
            type="url"
            name="twitter"
            value={socials.twitter}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Instagram
          </label>
          <input
            type="url"
            name="instagram"
            value={socials.instagram}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Facebook
          </label>
          <input
            type="url"
            name="facebook"
            value={socials.facebook}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Socials
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Socials
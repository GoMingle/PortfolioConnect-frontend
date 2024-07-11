import { useState } from "react";
const UserProfile = () => {

  const [profile, setProfile] = useState({
    profilePicture: '',
    name: '',
    location: '',
    maritalStatus: '',
    gender: '',
    bio: '',
    about: '',
    dateOfBirth: '',
    contact: '',
    language: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', profile);
  };



  return (
   <div className="bg-gray-900 h-full">
     <div className="bg-transparent p-6  max-w-lg mx-auto">
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Profile Picture
        </label>
        <input
          type="file"
          name="profilePicture"
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 border-gray-300  "
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={profile.location}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Marital Status
        </label>
        <select
          name="maritalStatus"
          value={profile.maritalStatus}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        >
          <option value="">Select...</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Gender
        </label>
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Bio
        </label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          About
        </label>
        <textarea
          name="about"
          value={profile.about}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={profile.dateOfBirth}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Contact
        </label>
        <input
          type="text"
          name="contact"
          value={profile.contact}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Language
        </label>
        <input
          type="text"
          name="language"
          value={profile.language}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  focus:ring-teal-400"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className=" bg-transparent border-2 border-teal-400 hover:bg-teal-400  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Profile
        </button>
      </div>
    </form>
  </div>

   </div>
  )
}

export default UserProfile
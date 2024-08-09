import { useState } from "react";
import { apiAdduserProfile } from "../../../services/profile";
import Loader from "../../../components/loader";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userProfile, setUserProfile] = useState({})

  const onSubmit = async (data) => {
    console.log(data);
    setUserProfile(data)
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      formData.append("profilePicture", data.profilePicture[0]);
      formData.append("location", data.location);
      formData.append("bio", data.bio);
      formData.append("contact", data.contact);
      formData.append("resume", data.resume[0]);
      formData.append("githubLink", data.githubLink);
      formData.append("linkedIn", data.linkedIn);
      formData.append("twitterLink", data.twitterLink);

      const res = await apiAdduserProfile(formData);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-4 bg-transparent m ">
      <h2 className="text-2xl font-semibold mb-4 mt-7">User Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Profile Picture */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              {...register("profilePicture", {
                required: "Profile Picture is required",
              })}
              className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Location
            </label>
            <input
              type="text"
              id="location"
              {...register("location", { required: "Location is required" })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
              placeholder="City, Country"
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Bio</label>
            <textarea
              type="text"
              id="bio"
              {...register("bio", { required: "Bio is required" })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
              rows="4"
              placeholder="Tell us about yourself..."
            ></textarea>
          </div>

          {/* Contact */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              {...register("contact", { required: "Contact is required" })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
              placeholder="Email or Phone"
            />
          </div>

          {/* Resume */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              {...register("resume", { required: "Resume is required" })}
              className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-white"
            />
          </div>

          {/* GitHub */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              GitHub
            </label>
            <input
              type="url"
              id="githubLink"
              {...register("githubLink", {
                required: "githubLink is required",
              })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
              placeholder="https://github.com/username"
            />
          </div>

          {/* LinkedIn */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedIn"
              {...register("linkedIn", { required: "LinkedIn is required" })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          {/* Twitter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              TwitterLink
            </label>
            <input
              type="url"
              id="twitterLink"
              {...register("twitterLink", {
                required: "TwitterLink is required",
              })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
              placeholder="https://twitter.com/username"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-transparent text-teal-500 rounded-md bg-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
            >
              {isSubmitting ? <Loader /> : "Save Profile"}
            </button>
          </div>
        </form>

        
      </div>
    </div>
  );
};

export default UserProfile;

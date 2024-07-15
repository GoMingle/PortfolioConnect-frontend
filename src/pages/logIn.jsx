import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { apiLogIn } from "../services/auth";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [isSubmitting , setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  console.log(isSubmitting);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async(data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogIn({
        email: data.email,
        password: data.password
      })
      console.log("Response: ", res.data);
      navigate("/dashboard")
      
    } catch (error) {
      console.log(error)
    }
    finally {
      setIsSubmitting(false)
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-gray-900 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="email"
                id="email"

                placeholder=" Enter your Email"

                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                {
                ...register("email", { required: "Email is required" })
                }
              />
              {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" Enter your password"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                {
                  ...register("password", { required: "Password is required" })
                  }
              />
              {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
              <span
                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='mt-3 size-3' />
              </span>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white  rounded-md bg-teal-400"
            >
              {isSubmitting ? "Loading...." : "Login"}
              
            </button>

          </form>
          <p className="text-center text-sm text-gray-600">
            Forgot <a href="/login" className="text-teal-400 hover:underline">Password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogIn
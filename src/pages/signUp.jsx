import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import signUpImage from "../assets/images/signUpImage.png" ;

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-gray-900 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">UserName</label>
              <input
                type="text"
                id="userName"
               
                placeholder="Enter your Username"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                {
                ...register("userName", { required: "Username is required" })
                }
              />
               {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
            </div>

            

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
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
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='mt-5 size-3' />
              </span>
            </div>
            <div className="relative">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="confirm-password"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                {
                ...register("confirmPassword", { required: "Confirm Password is required" })
                }
              />
              {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
              <span
                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className='mt-5 size-3' />
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
          
                className="w-4 h-4 "
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">I agree to the <a href="#" className="text-teal-400 hover:underline">Terms of Service</a></label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-400 rounded-md"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Have already an account? <a href="/login" className="text-teal-400 hover:underline">Login here</a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default SignUp
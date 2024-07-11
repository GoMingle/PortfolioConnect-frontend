
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
  
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Username"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='mt-5 size-3' />
            </span>
          </div>
          <div className="relative">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700"></label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              required
              placeholder="confirm-password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className='mt-5 size-3'   />
            </span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
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
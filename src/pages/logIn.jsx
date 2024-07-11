import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return (
         <div>
         <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Log In</h2>
             <form className="space-y-6">
             <div>
             <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
            <input
                    type="email"
                     id="email"
                     name="email"
                     placeholder="Email"
                     required
                    className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
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
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='mt-3 size-3' />
            </span>
          </div>
                  <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Login
          </button>

                 </form>
                 <p className="text-center text-sm text-gray-600">
          Forgot <a href="/login" className="text-indigo-600 hover:underline">Password?</a>
        </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn
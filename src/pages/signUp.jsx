import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { apiCheckUsernameExists, apiSignUp } from "../services/auth";
import { FallingLines } from "react-loader-spinner";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()
  const [UsernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const userNameWatch = watch ("userName");
  console.log(userNameWatch)

  useEffect(() => {
    if (userNameWatch) {
      checkuserName(userNameWatch);
    }
  }, [userNameWatch]);

  const checkuserName = async (userName) => {
    try {
      const res = await apiCheckUsernameExists(userName)
      console.log(res.data)
      const user = res.data.user;
      if (user){
         setUsernameNotAvailable(true)
      }else{
       setUsernameAvailable(true)
      }
    } catch (error) {
      console.log(error);

    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmedPassword: data.password,
    };
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data);
      setTimeout(() => { navigate("/login") }, 5000);

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setIsSubmitting(false)
    }
  };



  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-gray-900 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Firstname</label>
              <input
                type="text"
                id="firstName"

                placeholder="Enter your Firstname"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                {
                ...register("firstName", { required: "First Name is required" })
                }
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Lastname</label>
              <input
                type="text"
                id="lastName"

                placeholder="Enter your Lastname"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                {
                ...register("lastName", { required: "Lastname is required" })
                }
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Othernames</label>
              <input
                type="text"
                id="otherNames"

                placeholder="Enter your Othernames"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"

                {...register("otherNames")}
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
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
              {
                UsernameAvailable && (<p className="text-green-500">Username Available</p>)
              }
              {
                usernameNotAvailable && (<p className="text-red-500">Username is already taken</p>)
              }
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
                {
                ...register("terms", { required: "Checkbox is required" })
                }
              />
              {errors.terms && (
                <p className="text-red-500">{errors.terms.message}</p>
              )}
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">I agree to the <a href="#" className="text-teal-400 hover:underline">Terms of Service</a></label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-400 rounded-md"
            >
              {isSubmitting ? <FallingLines
                color="#FFFFFF"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              /> : "SignUp"}


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
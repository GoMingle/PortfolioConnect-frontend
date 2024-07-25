import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LogIn from './pages/logIn'
import Landing from './pages/landing'
import SignUp from './pages/signUp'
import Preview from './pages/preview'
import DashboardLayout from './pages/dashboard/layout/dashboardLayout'
import Skills from './pages/dashboard/pages/skills'
// import Achievements from './pages/dashboard/pages/achievements'
import Experiences from './pages/dashboard/pages/experiences'
import Projects from './pages/dashboard/pages/projects'
import UserProfile from './pages/dashboard/pages/userProfile'
import Socials from './pages/dashboard/pages/socials'
import AddEducation from './pages/dashboard/pages/addEducation'
import Educations from './pages/dashboard/pages/educations'
import AddUserProfile from './pages/dashboard/pages/addUserProfile'
import AddSkill from './pages/dashboard/pages/addSkill'
import AddSocial from './pages/dashboard/pages/addSocial'
// import AddAchievement from './pages/dashboard/pages/addAchievement'
import AddExperience from './pages/dashboard/pages/addExperience'
import AddProject from './pages/dashboard/pages/addProject'
import AddVolunteering from './pages/dashboard/pages/addVolunteering'
import Volunteerings from './pages/dashboard/pages/volunteerings'
import Overview from './pages/dashboard/pages/overview'
import { apiGetUserDetails } from "./services/preview";


const router = createBrowserRouter([
  {path:'/', element: <Landing/>},
  {path:'/login', element: <LogIn/>},
   {path: '/dashboard', element: <DashboardLayout/>,
    children: [

      {
        index: true,
        element: <Overview/>,
      },
      {
        path: "userprofile",
        element: <UserProfile/>,
      },
      {
        path: "userProfile/add-userProfile",
        element: <AddUserProfile/>,

      },
      {
        path: "skills",
        element: <Skills/>,
      
      },
      {
        path: "skills/add-skill",
        element: <AddSkill/>

      },
      {
        path : "socials",
        element: <Socials/>,
      },
      {
        path: "socials/add-social",
        element: <AddSocial/>,

      },
      // {
      //   path: "achievements",
      //   element: <Achievements/>,
      // },
      // {
      //   path: "achievements/add-achievement",
      //   element: <AddAchievement/>,

      // },
    
      {
        path: "experiences",
        element: <Experiences/>,
      },
      {
        path: "experiences/add-experience",
        element: <AddExperience/>

      },
      {
        path: "projects",
        element: <Projects/>,
      },
      {
        path: "projects/add-project",
        element: <AddProject/>

      },
      {
        path: "educations",
        element: <Educations/>,
      },
      {
        path: "educations/add-education",
        element: <AddEducation/>

      },
      {
        path: "volunteerings",
        element: <Volunteerings/>,
      },
      {
        path: "volunteerings/add-volunteering",
        element: <AddVolunteering/>,

      },
    ]
   },
  // {path: '/preview', element: <Preview/>},
  {
    path: "preview/:username",
    element: <Preview />,
    loader: async ({ params }) => {
      const username = params.username;
      try {
        const response = await apiGetUserDetails(username);
        const userProfileData = response?.data.user;
        return userProfileData;
      } catch (error) {
        toast.error("An error occured");
        return null;
      }
    },
  },

  {path: '/signup', element: <SignUp/>}

])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

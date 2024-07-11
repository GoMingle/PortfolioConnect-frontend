import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LogIn from './pages/logIn'
import Landing from './pages/landing'
import SignUp from './pages/signUp'
import Preview from './pages/preview'
import DashboardLayout from './pages/dashboard/layout/dashboardLayout'
import Skills from './pages/dashboard/pages/skills'
import Achievements from './pages/dashboard/pages/achievements'
import Experiences from './pages/dashboard/pages/experiences'
import Projects from './pages/dashboard/pages/projects'
import UserProfile from './pages/dashboard/pages/userProfile'
import Socials from './pages/dashboard/pages/socials'
import Education from './pages/dashboard/pages/education'
import Volunteering from './pages/dashboard/pages/volunteering'


const router = createBrowserRouter([
  {path:'/', element: <Landing/>},
  {path:'/login', element: <LogIn/>},
   {path: '/dashboard', element: <DashboardLayout/>,
    children: [
      {
        path: "userprofile",
        element: <UserProfile/>,
      },
      {
        path: "skills",
        element: <Skills/>,
      
      },
      {
        path : "socials",
        element: <Socials/>,
      },
      {
        path: "achievements",
        element: <Achievements/>,
      },
    
      {
        path: "experiences",
        element: <Experiences/>,
      },
      {
        path: "projects",
        element: <Projects/>,
      },
      {
        path: "education",
        element: <Education/>,
      },
      {
        path: "volunteering",
        element: <Volunteering/>
      }
    ]
   },
  {path: '/preview', element: <Preview/>},
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import DashboardLayout from "./pages/dashboard/layout/dashboardLayout";
import Skills from "./pages/dashboard/pages/skills";
import Achievements from "./pages/dashboard/pages/achievements";
import Experiences from "./pages/dashboard/pages/experiences";
import Projects from "./pages/dashboard/pages/projects";
import AddEducation from "./pages/dashboard/pages/addEducation";
import Education from "./pages/dashboard/pages/education";
import AddSkill from "./pages/dashboard/pages/addSkill";
import AddAchievement from "./pages/dashboard/pages/addAchievement";
import AddExperience from "./pages/dashboard/pages/addExperience";
import AddProject from "./pages/dashboard/pages/addProject";
import AddVolunteering from "./pages/dashboard/pages/addVolunteering";
import Volunteerings from "./pages/dashboard/pages/volunteerings";
import Overview from "./pages/dashboard/pages/overview";
import UserProfile from "./pages/dashboard/pages/userProfile";
import { apiGetUserDetails } from "./services/preview";
import { toast } from "react-toastify";
import Landing from "./pages/landing/index.jsx";
import Preview from "./pages/preview/index.jsx";



const router = createBrowserRouter([
  { path: "/", element: <Landing/>    },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <LogIn />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "skills/add-skill",
        element: <AddSkill />,
      },

      {
        path: "achievements",
        element: <Achievements />,
      },
      {
        path: "achievements/add-achievement",
        element: <AddAchievement />,
      },

      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "experiences/add-experience",
        element: <AddExperience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/add-project",
        element: <AddProject />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "education/add-education",
        element: <AddEducation />,
      },
      {
        path: "volunteerings",
        element: <Volunteerings />,
      },
      {
        path: "volunteerings/add-volunteering",
        element: <AddVolunteering />,
      },
    ],


    
  },

  {
    path: "preview/:username",
    element: <Preview/> ,
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

 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

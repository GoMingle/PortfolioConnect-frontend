import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LogIn from './pages/logIn'
import Landing from './pages/landing'
import SignUp from './pages/signUp'
import Dashboard from './pages/dashboard'
import Preview from './pages/preview'


const router = createBrowserRouter([
  {path:'/', element: <Landing/>},
  {path:'/login', element: <LogIn/>},
   {path: '/dashboard', element: <Dashboard/>},
  {path: '/preview', element: <Preview/>},
  {path: '/signUp', element: <SignUp/>}

])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

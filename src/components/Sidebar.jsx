import { AwardIcon,  BadgeCheckIcon,  GraduationCap,  Layers3Icon,  LayoutListIcon,  LogOutIcon, PanelsTopLeftIcon, SquareGanttChart, SquareSplitHorizontalIcon, UserRound } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className=" w-[300px] bg-gray-800 shadow-2xl h-auto">

    <div className="mt-10 ml-5 text-teal-400 font-bold text-xl ">PortfolioConnect</div>

    <Link to = "/dashboard">
   <div className="text-gray-200 flex mt-12 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2  rounded-xl pl-3   ">
        <SquareGanttChart className="size-4  mr-1 mt-1 text-teal-400"/>
        <h1 >OverView</h1>
    </div>
   </Link>

   <Link to = "/dashboard/userprofile">
   <div className="text-gray-200 flex mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2  rounded-xl pl-3   ">
        <UserRound className="size-4  mr-1 mt-1 text-teal-400"/>
        <h1 >User Profile</h1>
    </div>
   </Link>

   <Link to = "/dashboard/educations">
   <div className="text-gray-200 flex  mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2 pl-3 rounded-xl ">
        <GraduationCap className="size-4 mr-1 mt-1 text-teal-400"/>
        <h1>Educations</h1>
    </div>
   </Link>

    <Link to = "/dashboard/skills">
    <div className="text-gray-200  flex mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2 pl-3 rounded-xl ">
        <LayoutListIcon className="size-4 mr-1 mt-1 text-teal-400 "/>
        <h1>Skills</h1>
    </div>
    </Link>

    <Link to = "/dashboard/experiences"> 
    <div className="text-gray-200 flex  mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2 pl-3 rounded-xl ">
        <Layers3Icon className="size-4 mr-1 mt-1 text-teal-400"/>
        <h1>Experiences</h1>
    </div>
    </Link>

    <Link to = "achievements">
    <div className="text-gray-200 flex  mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2  pl-3 rounded-xl ">
    <AwardIcon className="size-4 mr-1 mt-1 text-teal-400"/>
        <h1 className="">Achievements</h1>
        
    </div>
    </Link>

    <Link to = "/dashboard/projects">
    <div className="text-gray-200 flex  mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-40 py-2 pl-3 rounded-xl ">
        <PanelsTopLeftIcon className="size-4 mr-1 mt-1 text-teal-400"/>
        <h1>Projects</h1>
    </div>
    </Link>

    <Link to = "/dashboard/volunteerings">
    <div className="text-gray-200 flex  mt-2 ml-11 font-serif font-semibold hover:border-2 border-teal-400 w-4o py-2 pl-3 rounded-xl ">
        <SquareSplitHorizontalIcon className="size-4 mr-1 mt-1 text-teal-400"/>
        <h1>Volunteering</h1>
    </div>
    </Link>

   <Link to = "/dashboard/socials">
   <div className="text-gray-200 flex mt-2 ml-11 font-serif font-semibold    hover:border-2 border-teal-400  w-40 py-2 pl-3 rounded-xl ">
        <BadgeCheckIcon className="size-4 mr-1 mt-1 text-teal-400"/>
        <h1>Socials</h1>
    </div>
   </Link>

    <div className="mt-[480px]  text-teal-400 hover:text-white font-semibold flex ml-20 mb-10 ">
    <h1>Log Out</h1>
    <LogOutIcon className="size-3"/>
        
    </div>

    </div>
    

    
    
    
    

  )
}

export default Sidebar
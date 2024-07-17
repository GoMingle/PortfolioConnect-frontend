// import { useNavigate } from "react-router-dom"
// import PagesLayout from "../layout/pagesLayout"
// import K from "../../../constants";
// import { Edit, TrashIcon } from "lucide-react";



// const Achievements = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-gray-900 h-full">
//       <PagesLayout headerText="Achievements"
//         buttonText="Add New Achievement"
//         onClick={() => navigate("/dashboard/achievements/add-achievement")} >
//         <div>
//           {K.ACHIEVEMENTS.map(({ award, image, description, date, nameOfInstitution }, index) => (
//             <div k={index} className="h-full pt-6 pl-4 shadow-2xl rounded-xl flex flex-col text-gray-300 bg-gray-800">
//               <div className="ml-auto flex gap-x-2 ">
//                 <span ><Edit className="text-teal-400 size-4"/></span>
//                 <span><TrashIcon className="text-teal-400 size-4"/></span>
//               </div>

//               <span className="font-bold font-sans text-lg text-teal-500 ">{award}</span>
//               <img src={image.img} alt="image" />
//               <span className="flex font-thin ">{description}</span>

//               <div className="flex flex-row gap-40 mt-10 ml-10 ">
//                 <span className="mt-2 flex">{date}</span>
//                 <span className="italic mt-2 flex">{nameOfInstitution}</span>
//               </div>

//             </div>


//           )
//           )}
//         </div>

//       </PagesLayout>
//     </div>
//   )
// }

// export default Achievements

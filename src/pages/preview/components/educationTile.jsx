import { motion } from "framer-motion"
const EducationTile = ({ schoolName,  program, qualification, location, startDate, endDate,}) => {
  return (
    <div>
        <div className="flex flex-col md:flex-row md:items-center mb-8">
      <div className="md:w-1/4 text-center md:text-right pr-8 mb-4 md:mb-0">
        <motion.h3 
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.2 },
             ease: "easeIn",
             // duration: 1
         }}
        className="text-2xl font-bold text-teal-500">{program}</motion.h3>
      </div>
      <div className="relative md:w-3/4 pl-8">
        <div className="absolute left-0 w-4 h-4 bg-gray-300 rounded-full mt-2.5 md:mt-0 md:ml-2 -ml-6"></div>
        <div className="absolute left-0 w-0.5 h-full bg-gray-300 -ml-6"></div>
        <motion.div 
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.2 },
             ease: "easeIn",
             // duration: 1
         }}   
        className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="font-semibold text-xl mb-2">{qualification}</h4>
          <p className="text-gray-600 font-semibold">{schoolName}</p>
          <p className="text-gray-600">{location}</p>
          <span className="flex gap-1">
          <p className="text-gray-600">{startDate}</p>
          <p className="text-gray-600">{endDate}</p>
          </span>
          
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default EducationTile
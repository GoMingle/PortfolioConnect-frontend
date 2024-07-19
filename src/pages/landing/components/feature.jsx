import { motion } from "framer-motion";
import { HeartHandshake, ViewIcon } from "lucide-react";
import K from "../../../constants";

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Feature = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-4 ml-52">
      {K.FEATURE.map((feature, index) => (
        <motion.div
          key={index}
          className="py-6 px-4 flex flex-col items-center text-center hover:bg-gray-900 "
          style={{ backgroundColor: feature.bgColor }}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2, duration: 1 }}
          variants={featureVariants}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative"
            style={{ backgroundColor: feature.iconBg }}
          >
            <div  className="text-[#111827]">
              {feature.Icons}
            </div>
          </div>
          
          <h3 className="text-[16px] font-bold ">{feature.title}</h3>
          <p className="text-[12px] leading-sm">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Feature;

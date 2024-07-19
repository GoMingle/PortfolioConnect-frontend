import { motion } from "framer-motion";
import { LayoutListIcon } from "lucide-react";

const PreviewSkill = ({ name, levelOfProficiency }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col justify-center items-center bg-gradient-to-b from-teal-400 to-teal-700 text-white p-8 rounded-xl w-72 h-96 shadow-2xl transform transition-transform hover:scale-105"
    >
      <LayoutListIcon size={75} className="text-white mb-4" />
      <h2 className="font-semibold text-center text-2xl text-white">{name}</h2>
      <p className="mt-2 text-white text-lg">{levelOfProficiency}</p>
      <div className="mt-4 w-full bg-white bg-opacity-25 rounded-full">
        <div className="h-2 bg-teal-200 rounded-full" style={{ width: getProficiencyWidth(levelOfProficiency) }}></div>
      </div>
    </motion.div>
  );
};

const getProficiencyWidth = (levelOfProficiency) => {
  switch (levelOfProficiency) {
    case 'Beginner':
      return '25%';
    case 'Intermediate':
      return '50%';
    case 'Advanced':
      return '75%';
    case 'Expert':
      return '100%';
    default:
      return '0%';
  }
};
export default PreviewSkill;
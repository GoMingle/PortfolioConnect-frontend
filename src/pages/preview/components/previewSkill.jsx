import { motion } from "framer-motion"
const reactLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const figmaLogo = "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg";
const photoshopLogo = "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg";

const previewSkill = [
  {
    title: 'React Native',
    levelOfProficiency: 'Beginner',
    icon: reactLogo, // React logo
  },
  {
    title: 'Figma',
    levelOfProficiency: 'Intermediate',
    icon: figmaLogo, // Figma logo
  },
  {
    title: 'Photoshop',
    levelOfProficiency: 'Advanced',
    icon: photoshopLogo, // Photoshop logo
  },
];

const PreviewSkill = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-teal-500 text-white py-16 mt-36 overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-6xl font-bold">
            My <span className="text-teal-500">Skills</span>
          </h2>
        </div>
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
        className="flex justify-center gap-8">
          {previewSkill.map((skill, index) => (
            <div key={index} className="bg-slate-200 text-white p-8 rounded-full bg-opacity-15 w-72 h-96 shadow-lg hover:bg-teal-500 ease-linear duration-300 ">
              <div className="flex justify-center mb-4">
                <img src={skill.icon} alt={skill.title} className="h-16 w-16 mt-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
              <p className="mb-4">{skill.levelOfProficiency}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PreviewSkill;
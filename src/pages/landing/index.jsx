import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/heroVideo.mov"
import heroBg from "../../assets/images/heroBg.jpg";
import Feature from "./components/feature";
import VideoBg from "./components/videoBg";

const Landing = () => {
  return (
    <div className="relative w-full h-screen">
     <VideoBg/>
      {/* <img className="object-cover w-full h-full brightness-50" src={heroBg} alt="hero background" /> */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4 mt-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-6xl font-bold">Portfolio Connect </h3>
          <p className="text-lg">Connecting your creativity to opportunities</p>
        </motion.div>
        <motion.button
          className="bg-gray-900 rounded-full py-2 px-4 text-white hover:bg-teal-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Get Started
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full mt-8 flex justify-center"
        >
          <Feature />
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;

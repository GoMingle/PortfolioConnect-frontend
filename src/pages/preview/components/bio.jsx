import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Bio = ({ githubLink, linkedIn, twitterLink, Instagram, firstName, lastName, otherName, email, profilePicture, bio, location, contact }) => {
    return (
        <div className="relative flex shadow-xl ml-20 mr-20 p-8 bg-white">
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 1,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 2 },
                    ease: "easeIn",
                    duration: 1
                }}
                className="rounded-full size-1/4 ml-16 mb-10 mt-16"
                src={profilePicture}
                alt="Profile picture"
            />
            <div className="ml-10 flex flex-col justify-center">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1
                    }} className="text-6xl flex gap-4 text-teal-500 items-center mb-4">

                    <h3>{firstName}</h3>
                    <h3>{lastName}</h3>
                    <h3>{otherName}</h3>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{once: true}}
                  transition={{
                      delay: 0.3,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 0.6 },
                      ease: "easeIn",
                  }}
                className="text-left">
                    <p className="text-md">{bio}</p>
                    <p className="text-md mt-2 font-light flex items-center gap-2"><Mail size={16} />{email}</p>
                    <p className="mt-2 font-thin flex items-center gap-2"><MapPin size={16} />{location}</p>
                    <p className="mt-2 font-light flex items-center gap-2"><Phone size={16} />{contact}</p>
                  <div className="flex gap-4 mt-4">
                    {linkedIn && <a href={linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-gray-800  hover:text-teal-500 duration-300transition ease-in-out dhover:-translate-y-1 hover:scale-125 duration-300" size={22} /></a>}
                    {twitterLink && <a href={twitterLink} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-gray-800 hover:text-teal-500 duration-300transition ease-in-out dhover:-translate-y-1 hover:scale-125 duration-300" size={22} /></a>}
                    {Instagram && <a href={Instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-gray-800  hover:text-teal-500 duration-300transition ease-in-out dhover:-translate-y-1 hover:scale-125 duration-300" size={22} /></a>}
                    {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub className="text-gray-800  hover:text-teal-500 duration-300transition ease-in-out dhover:-translate-y-1 hover:scale-125 duration-300" size={22} /></a>}
                  </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Bio;
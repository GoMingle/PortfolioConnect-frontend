import { AwardIcon, BadgeCheckIcon, Facebook, Github, GraduationCap, Instagram, Layers3Icon, LayoutListIcon, Linkedin, PanelsTopLeftIcon, SquareSplitHorizontalIcon, Twitter, UserRound, FilePlus2, Share2Icon, ViewIcon, BookText, FolderKanban, BriefcaseBusiness, Award, LayoutDashboard} from "lucide-react";
import { blogImage, certifiedImage, ecommerceImage, employeeImage, hackathonImage, researchImage } from "../assets";




export default {

   NAVLINKS: [
      {
        icon: <LayoutDashboard/>,
        text: "Overview",
        link: "/dashboard",
      },
      {
        icon: <BookText />,
        text: "Skills",
        link: "/dashboard/skills",
      },
      {
        icon: <FolderKanban />,
        text: "Projects",
        link: "/dashboard/projects",
      },
      {
        icon: <BriefcaseBusiness />,
        text: "Experiences",
        link: "/dashboard/experiences",
      },
      {
        icon: <Award />,
        text: "Achievements",
        link: "/dashboard/achievements",
      },
      {
         icon: <GraduationCap/>,
         text: "Education",
         link: "/dashboard/education",
      },
      {
         icon: <SquareSplitHorizontalIcon/>,
         text:"Volunteering",
         link: "/dashboard/volunteering",
      },
    ],





   OVERVIEW: [
      
      {
         icon: <GraduationCap />,
         text: "Education",
         id: "education",
      },
      {
         icon: <LayoutListIcon />,
         text: "Skills",
         id: "skills",
      },
      {
         icon: <Layers3Icon />,
         text: "Experiences",
         id: "expereinces",
      },
      {
         icon: <AwardIcon />,
         text: "Achievements",
         id: "achievements",
      },
      {
         icon: <PanelsTopLeftIcon />,
         text: "Projects",
         id: "projects",
      },
      {
         icon: <SquareSplitHorizontalIcon />,
         text: "Volunteering",
         id: "volunteering",
      },
      
   ],
   EDUCATIONS: [
      {
         Schoolname: "Christian Vertical Center School",
         program: "Creche/Primary/JHS",
         qualification: "Basic Education Certificate Examination ",
         location: "Tema Community Six",
         startDate: "Oct 2001",
         endDate: "September 2013",
      },

      {
         Schoolname: "Akwamuman Senior High School",
         program: "General Arts",
         qualification: "West Africa Secondary School Certificate Examination ",
         location: "Eastern Region, Akosombo",
         startDate: "Nov 2013",
         endDate: "Oct 2016",
      },

      {
         Schoolname: "University of Education",
         program: " Information Technology ",
         qualification: "BSc Information Techology ",
         location: "Ashanti Region, Tanoso",
         startDate: "Oct 2017",
         endDate: "Sept 2021",
      },
   ],



   SKILLS: [
      {
         name: "JavaScript",
         levelOfProficiency: "Intermediate",


      },
      {
         name: "CSS",
         levelOfProficiency: "Beginner",

      },
      {
         name: "Typescript",
         levelOfProficiency: "Beginner",

      },
      {
         name: "HTML",
         levelOfProficiency: "Advanced",

      },
      {
         name: "React Native",
         levelOfProficiency: "Beginner",

      },
      {
         name: "Angular",
         levelOfProficiency: "Beginner",

      },
      {
         name: "MongoDB",
         levelOfProficiency: "Intermediate",

      },

   ],

   EXPERIENCES: [
      {
         name: "Hubtel",
         role: "Frontend Developer",
         responsibility: "Led the development of user-friendly web interfaces using React and Tailwind CSS.",
         location: "Accra",
         startDate: "January 2020",
         endDate: "Present",
      },
      {
         name: "DEF Inc.",
         role: "Software Engineer",
         responsibility: "Developed and maintained internal tools and applications using React and Node.js.",
         location: "Accra",
         startDate: "July 2016",
         endDate: "December 2017",
      },
      {
         name: "GHI Solutions",
         role: "Junior Developer",
         responsibility: "Assisted in the development of web applications using React and Tailwind CSS.",
         location: "Accra",
         startDate: "March 2015",
         endDate: "June 2016",
      },
      {
         name: " Intern at ABC Corp",
         role: "Full Stack Developer",
         responsibility: "Developed full-stack web applications using React, Node.js, and MongoDB.",
         location: "Accra",
         startDate: "June 2019",
         endDate: "December 2019",
      },
      {
         name: "ExpressPay",
         role: "Web Developer",
         responsibility: "Designed and developed websites using HTML, CSS, JavaScript, React, and Tailwind CSS.",
         location: "Accra",
         startDate: "January 2018",
         endDate: "May 2019",
      },
   ],

   VOLUNTEERINGS: [
      {
         organization: 'Red Cross',
         description: 'Coordinated volunteer activities and managed volunteer schedules for local community events.',
         responsibility: 'Volunteer Coordinator',
         startDate: 'June 2020',
         endDate: 'Present'
      },
      {
         organization: 'Local Animal Shelter',
         description: 'Provided daily care and companionship for shelter animals and assisted with adoption events.',
         responsibility: 'Animal Care Volunteer',
         startDate: 'January 2019',
         endDate: 'May 2020'
      },
      {
         organization: 'Environmental Cleanup',
         description: 'Led teams in local park cleanups and educated the community on environmental conservation',
         responsibility: 'Team Leader',
         startDate: 'March 2017',
         endDate: 'August 2018'
      },
   ],

    PROJECTS: [
      {
         projectName: 'E-commerce Platform',
         image: ecommerceImage,
         description:  'A full-featured e-commerce platform with user authentication, product management, and payment processing.',
         contributors: "ABC",
         nameOfInstitution: "MEST Africa",
         startDate: "April 2022",
         endDate: "December 2022",
         link: 'https://github.com/yourusername/e-commerce-platform',

      },
      {
         projectName: 'Blog Platform',
         image: blogImage,
         description:   'A blog platform where users can create, edit, and delete posts, and leave comments.',
         contributors: "XYZ",
         nameOfInstitution: "Mastercard Foundation",
         startDate: "June 2020",
         endDate: "March 2021",
         link: 'https://github.com/yourusername/blog-platform',

      }
    ],

    ACHIEVEMENTS:[
      {
         award: 'Top Developer Award',
         image: employeeImage, 
         description:  'Recognized as the top developer in my company for outstanding performance and contributions to key projects.',
         date: 'June 2023',
         nameOfInstitution: 'MEST'

      },
      {
         award: 'Hackathon Winner',
         image: hackathonImage,
         description:   'Led a team to victory in a national hackathon, developing an innovative solution for waste management.',
         date:  'December 2022',
         nameOfInstitution: "MNOP"

      },
      {
         award: 'Certified React Developer',
         image: certifiedImage,
         description:  'Earned the React Developer Certification from a reputable online learning platform.',
         date: 'March 2022',
         nameOfInstitution: 'UVWX'

      },
      {
         award: 'Published Author',
         image: researchImage,
         description:   'Published an article on web development best practices in a well-known tech magazine.',
         date: 'September 2021',
         nameOfInstitution: 'EFGH'

      },
    ],

 
   FEATURE: [
      {
         title: "Create portfolio",
         description: "This allows users to showcase their projects, achievements, and experiences in a visually appealing way.",
         Icons: <FilePlus2 size={24} />,
         iconBg: "#F2F2F2",
      },
      {
         title: "Preview",
         description: "Allows users to review and visualize their portfolio before publishing or sharing it with others.",
         Icons: <ViewIcon size={24} />,
         iconBg: "#F2F2F2",
      },
      {
         title: "Share/connect",
         description: "Enables users to share their portfolio with others and connect with like-minded individuals and potential employers. ",
         Icons: <Share2Icon size={24} />,
         iconBg: "#F2F2F2",
      },
   ]


}

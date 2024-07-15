import { AwardIcon, BadgeCheckIcon, GraduationCap, Layers3Icon, LayoutListIcon, PanelsTopLeftIcon, SquareSplitHorizontalIcon, UserRound } from "lucide-react";

export default{

    OVERVIEW:[

         {
            icon: <UserRound/>,
            text: "UserProfile",
            total: 1,
         },
         {
            icon: <GraduationCap/>,
            text: "Educations",
            total: 3,
         },
         {
            icon: <LayoutListIcon/>,
            text: "Skills",
            total: 7,
         },
         {
            icon: <Layers3Icon/>,
            text: "Experiences",
            total: 5,
         },
         {
            icon: <AwardIcon/>,
            text: "Achievements",
            total: 4,
         },
         {
            icon: <PanelsTopLeftIcon/>,
            text: "Projects",
            total: 2,
         },
         {
            icon: <SquareSplitHorizontalIcon/>,
            text: "Volunteering",
            total: 4,
         },
         {
            icon: <BadgeCheckIcon/>,
            text: "Socials",
            total: 5,
         },
    ],
    EDUCATIONS:[
        {
           name: "Christian Vertical Center School",
           program: "Creche/Primary/JHS",
           qualification: "Basic Education Certificate Examination ",
           location: "Tema Community Six",
           startDate: "Oct 2001",
           endDate: "September 2013",
        },

        {
            name: "Akwamuman Senior High School",
           program: "General Arts",
           qualification: "West Africa Secondary School Certificate Examination ",
           location: "Eastern Region, Akosombo",
           startDate: "Nov 2013",
           endDate: "Oct 2016",
        },

        {
            name: "University of Education",
            program: " Information Technology ",
            qualification: "BSc Information Techology ",
            location: "Ashanti Region, Tanoso",
            startDate: "Oct 2017",
            endDate: "Sept 2021",
        },
    ],

  

    SKILLS:[
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
         skills: 'volunteer',
         responsibility: 'Volunteer Coordinator',
         startDate:  'June 2020',
         endDate:  'Present'
       },
       {
         organization: 'Local Animal Shelter',
         description: 'Provided daily care and companionship for shelter animals and assisted with adoption events.',
         skills: 'volunteer',
         responsibility: 'Animal Care Volunteer',
         startDate:  'January 2019',
         endDate:  'May 2020'
       },
       {
         organization: 'Environmental Cleanup',
         description: 'Led teams in local park cleanups and educated the community on environmental conservation',
         skills: 'volunteer',
         responsibility: 'Team Leader',
         startDate:  'March 2017',
         endDate:  'August 2018'
       },
    ],

    PROJECTS: [
      {
         projectName: 'E-commerce Platform',
         description:  'A full-featured e-commerce platform with user authentication, product management, and payment processing.',
         contributors: "ABC",
         links: 'https://github.com/yourusername/e-commerce-platform',
         
      },
      {
         projectName: 'Blog Platform',
         description:   'A blog platform where users can create, edit, and delete posts, and leave comments.',
         contributors: "XYZ",
         links: 'https://github.com/yourusername/blog-platform',
         
      }
    ]

   
}

import headshot from "../../assets/images/headshot.jpg"
import PreviewSkill from "./components/previewSkill"
import ExperienceTile from "./components/experienceTile"
import Card from "./components/card"
import ProjectsCard from "./components/projectsCard"
import projectOne from "../../assets/images/projectOne.png";
import projectTwo from "../../assets/images/projectTwo.png";
import projectThree from "../../assets/images/projectThree.png";
import projectFour from "../../assets/images/projectFour.png"
import projectFive from "../../assets/images/projectFive.png"
import projectSix from "../../assets/images/projectSix.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



const Preview = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-gray-900 text-transparent inl bg-clip-text mt-6 ml-5">Portfolio <span className="text-gray-900">Connect</span></h1>
      </div>
      <div className="flex items-center mt-16 ml-20 space-x-10 shadow-2xl mr-20">
        <img className="rounded-full size-1/4 ml-10 mb-6" src={headshot} alt="headshot image" />
        <div>
          <h3 className="text-6xl mb-4 text-teal-500 shadow-sm">Agnes Odame</h3>
          <p className="text-md">Junior Web Developer | React | Angular | JavaScript | MySQL | Ionic | Datawrapper |<br /> UI/UX Designer|Adobe Products| ISC2 Candidate| Developed Dagbani App for <br /> students with over 2,000 downloads |</p>
        </div>

      </div>
      <PreviewSkill />

      <div className="mt-12 text-center mb-12">
        <h3 className="text-4xl mb-6">My Experience</h3>
        <div className="flex flex-col gap-[13px] group">
          <ExperienceTile
            companyName="Company X - Los Angeles, CA | Frontend Engineer | 08/2021 - Present"
            responsibility="Manage a team of 3 engineers"
            roleOne="Revamped UI for a customer-facing e-commerce site with 200k+ unique visitors per month"
            roleTwo="Automated image optimization, using Grunt and minified JS and CSS, which reduced page load times by up to 30%"
          />
          <ExperienceTile
            companyName="Company Y - San Francisco, CA | Software Engineer | 06/2019 - 08/2021"
            responsibility="Lead the development of a new internal tool"
            roleOne="Implemented a microservice architecture to improve scalability"
            roleTwo="Conducted code reviews and mentored junior developers"
            roleThree="Collaborated with the product team to define project requirements"
          />
          <ExperienceTile
            companyName="Company Z - New York, NY | Junior Developer | 01/2017 - 06/2019"
            responsibility="Worked on various frontend and backend tasks"
            roleOne="Developed and maintained company website"
            roleTwo="Optimized database queries to improve performance"
            roleThree="Assisted in the deployment of applications"
          />
        </div>
      </div>




  
      <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center shadow-2xl">
        <h3 className="text-center text-4xl font-semibold mb-8">Projects</h3>
        <div className="w-full">
          <Slider {...settings}>
            <div className="p-2">
              <ProjectsCard
                projectName="GoMingle Event Management app"
                img={projectOne}
                description="An app to manage events efficiently."
                contributors="Team A"
                skills="React, Node.js, MongoDB"
                nameOfInstitution="Institution A"
                startDate="2023-01"
                endDate="2023-06"
              />
            </div>
            <div className="p-2">
              <ProjectsCard
                projectName="Another Project"
                img={projectTwo}
                description="A description for another project."
                contributors="Team B"
                skills="Angular, Firebase"
                nameOfInstitution="Institution B"
                startDate="2022-05"
                endDate="2022-12"
              />
            </div>
            <div className="p-2">
              <ProjectsCard
                projectName="Third Project"
                img={projectThree}
                description="Details about the third project."
                contributors="Team C"
                skills="Vue, Laravel"
                nameOfInstitution="Institution C"
                startDate="2021-09"
                endDate="2022-04"
              />
            </div>
            <div className="p-2">
              <ProjectsCard
                projectName="Fourth Project"
                img={projectFour}
                description="Details about the fourth project."
                contributors="Team D"
                skills="Python, Flask"
                nameOfInstitution="Institution D"
                startDate="2020-01"
                endDate="2020-12"
              />
            </div>
            <div className="p-2">
              <ProjectsCard
                projectName="Fifth Project"
                img={projectFive}
                description="Details about the fifth project."
                contributors="Team E"
                skills="Java, Spring"
                nameOfInstitution="Institution E"
                startDate="2019-05"
                endDate="2019-11"
              />
            </div>
            <div className="p-2">
              <ProjectsCard
                projectName="Sixth Project"
                img={projectSix}
                description="Details about the sixth project."
                contributors="Team F"
                skills="Ruby on Rails"
                nameOfInstitution="Institution F"
                startDate="2018-09"
                endDate="2019-04"
              />
              
            </div>
          </Slider>
        </div>
      </div>

      <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
        <Card
          role="Full Stack Developer"
          company=""
          duration="2017-2018"
          description="Tolerably earnestly middleton extremely distrusts she boy now not. Add ad offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."
          color="bg-blue-500"
        />
        <Card
          role="Front End Developer"
          company="at Google Company"
          duration="2017-2018"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
          color="bg-red-500"
        />
      </div>
    </>

  )
}

export default Preview
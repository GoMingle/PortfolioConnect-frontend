import headshot from "../../assets/images/headshot.jpg"
import PreviewSkill from "./components/previewSkill"
import ExperienceTile from "./components/experienceTile"
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
import VolunteeringCard from "./components/volunteeringCard"
import EducationTile from "./components/educationTile"
import Bio from "./components/bio"
import DownloadButton from "./components/downloadButton";

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
        <h1 className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-gray-900 text-transparent bg-clip-text mt-6 ml-5">Portfolio <span className="text-gray-900">Connect</span></h1>
      </div>

      <div className="overflow-hidden">
        <Bio
          profilePicture={headshot}
          userName="@Agnes5"
          firstName="Agnes"
          lastName="Odame"
          otherName=""
          email="agnesodame5@gmail.com"
          bio="Junior Web Developer | React | Angular | JavaScript | MySQL | Ionic | Datawrapper UI/UX Designer|Adobe Products| ISC2 Candidate| Developed Dagbani App for students with over 2,000 downloads"
          location="Greater Accra, Ghana"
          contact="0503627690"
        />
      </div>
      <DownloadButton/>

      <PreviewSkill />

      <div className="text-center mt-40 overflow-hidden">
        <h3 className="text-4xl mb-6">My Experience</h3>
        <div className="flex flex-col gap-[13px] group">
          <ExperienceTile
            companyName="Company Y - San Francisco, CA | "
            role="Software Engineer |"
            startDate="06/2019 - "
            endDate="08/2021"
            responsibility="Manage a team of 3 engineers. Revamped UI for a customer-facing e-commerce site with 200k+ unique visitors per month"
          />
          <ExperienceTile
            companyName="Company Y - San Francisco, CA | "
            role="Software Engineer |"
            startDate="06/2019 - "
            endDate="08/2021"
            responsibility="Manage a team of 3 engineers. Revamped UI for a customer-facing e-commerce site with 200k+ unique visitors per month"
          />
          <ExperienceTile
            companyName="Company Y - San Francisco, CA | "
            role="Software Engineer |"
            startDate="06/2019 - "
            endDate="08/2021"
            responsibility="Manage a team of 3 engineers. Revamped UI for a customer-facing e-commerce site with 200k+ unique visitors per month"
          />
        </div>
      </div>

    <div className="mt-32 bg-gray-50 min-h-screen flex flex-col items-center shadow-2xl overflow-hidden">
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

      <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center overflow-hidden mt-16">
        <h3 className="text-center text-4xl font-semibold pb-14">Volunteering</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <VolunteeringCard
            organization="Volunteer One"
            responsibility="Intern"
            description="A brief description about the volunteer work."
            startDate="20th July, 2024"
            endDate="7th September"
          />
          <VolunteeringCard
            organization="Volunteer Two"
            responsibility="Intern"
            description="A brief description about the volunteer work."
            startDate="20th July, 2024"
            endDate="7th September"
          />
          <VolunteeringCard
            organization="Volunteer Three"
            responsibility="Intern"
            description="A brief description about the volunteer work."
            startDate="20th July, 2024"
            endDate="7th September"
          />
          <VolunteeringCard
            organization="Volunteer Four"
            responsibility="Intern"
            description="A brief description about the volunteer work."
            startDate="20th July, 2024"
            endDate="7th September"
          />
        </div>
      </div>

      <div className="py-12 bg-gray-100 overflow-hidden mt-1">
        <div className="container mx-auto">
          <h3 className="text-center text-4xl font-semibold mb-8">Education</h3>
          <div className="relative">
            <EducationTile
              schoolName="Mest Africa"
              qualification="Certificate"
              program="Web Development"
              location="East Legon"
              startDate="16th July, 2024 -"
              endDate="16th July, 2024"
            />
            <EducationTile
              schoolName="Mest Africa"
              qualification="Certificate"
              program="Web Development"
              location="East Legon"
              startDate="16th July, 2024 -"
              endDate="16th July, 2024"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview

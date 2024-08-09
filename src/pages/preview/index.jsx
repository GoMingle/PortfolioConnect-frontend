import headshot from "../../assets/images/headshot.jpg"
import PreviewSkill from "./components/previewSkill"
import ExperienceTile from "./components/experienceTile"
import ProjectsCard from "./components/projectsCard"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VolunteeringCard from "./components/volunteeringCard"
import EducationTile from "./components/educationTile"
import Bio from "./components/bio"
import AchievementCard from "./components/achievementCard";
import Footer from "../../components/footer";
import { useLoaderData } from "react-router-dom";

const Preview = () => {
  const data = useLoaderData();
  console.log(data);
  const sliderSettings = {
    
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
  return (
  <>
    <div>
      <h1 className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-gray-900 text-transparent bg-clip-text mt-6 ml-5">Portfolio <span className="text-gray-900">Connect</span></h1>
    </div>

    <div className="overflow-hidden">
      {Array.isArray(data?.userProfile) && data.userProfile.map((userProfile, index) => (
        <Bio
          key={index}
          profilePicture={`https://savefiles.org/${userProfile.profilePicture.image}?shareable_link=322`}
          firstName={userProfile.firstName}
          lastName={userProfile.lastName}
          bio={userProfile.bio}
          location={userProfile.location}
          contact={userProfile.contact}
          linkedIn={userProfile.linkedIn}
          twitterLink={userProfile.twitterLink}
          githubLink={userProfile.githubLink}
        />
      ))}
    </div>

    <div className="mt-20 p-24 bg-gradient-to-r from-gray-900 to-teal-500">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-bold text-white">Skills</h2>
      </div>
      <div className="flex flex-row justify-center gap-8">
        {Array.isArray(data?.skills) && data.skills.map((skill, index) => (
          <PreviewSkill 
            key={index}
            name={skill.name} 
            levelOfProficiency={skill.levelOfProficiency} 
          />
        ))}
      </div>
    </div>

    <div className="text-center mt-40">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-[13px] group">
        {Array.isArray(data?.experiences) && data.experiences.map((experience, index) => (
          <ExperienceTile
            key={index}
            companyName={experience.companyName}
            role={experience.role}
            startDate={experience.startDate}
            endDate={experience.endDate}
            responsibility={experience.responsibility}
          />
        ))}
      </div>
    </div>

    <div className="mt-28 bg-gray-50 flex flex-col items-center shadow-sm">
      <div className="mt-36">
        <h2 className="text-4xl font-bold text-gray-900">
          Projects
        </h2>
      </div>
      <div className="w-full">
        <Slider {...sliderSettings}>
          {Array.isArray(data?.project) && data.project.map((project, index) => (
            <div className="p-2" key={index}>
              <ProjectsCard
                projectName={project.projectName}
                image={`https://savefiles.org/${project.image}?shareable_link=322`}
                description={project.description}
                contributors={project.contributors}
                nameOfInstitution={project.nameOfInstitution}
                startDate={project.startDate}
                endDate={project.endDate}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>

    <div className="p-8 bg-gray-50 flex flex-col items-center overflow-hidden mt-16 mb-14">
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-gray-900">
          Volunteering
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.isArray(data?.volunteering) && data.volunteering.map((volunteering, index) => (
          <VolunteeringCard
            key={index}
            organization={volunteering.organization}
            responsibility={volunteering.responsibility}
            description={volunteering.description}
            skills={volunteering.skills}
            startDate={volunteering.startDate}
            endDate={volunteering.endDate}
          />
        ))}
      </div>
    </div>

    <div className="py-12 bg-gray-100 overflow-hidden mt-1">
      <div className="container mx-auto">
        <div className="m-8">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Education
          </h2>
        </div>
        <div className="relative">
          {Array.isArray(data?.education) && data.education.map((education, index) => (
            <EducationTile
              key={index}
              schoolName={education.schoolName}
              qualification={education.qualification}
              program={education.program}
              location={education.location}
              startDate={education.startDate}
              endDate={education.endDate}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="p-8 bg-white min-h-screen flex flex-col items-center overflow-hidden mt-16">
      <h3 className="text-center text-4xl font-semibold pb-14">Achievement</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(data?.achievements) && data.achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            image={`https://savefiles.org/${achievement.image}?shareable_link=322`}
            award={achievement.award}
            nameOfInstitution={achievement.nameOfInstitution}
            description={achievement.description}
            date={achievement.date}
          />
        ))}
      </div>
    </div>

    <Footer />
  </>
  );
}

export default Preview;
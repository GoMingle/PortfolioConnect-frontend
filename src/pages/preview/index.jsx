import headshot from "../../assets/images/headshot.jpg"
import PreviewSkill from "./components/previewSkill"
import ExperienceTile from "./components/experienceTile"
import Card from "./components/card"
import ProjectsCard from "./components/projectsCard"

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

    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <h3 className="text-center text-4xl font-semibold mb-8">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectsCard
          projectName="GoMingle Event Management app"
          img={headshot}
          description="An app to manage events efficiently."
          contributors="Team A"
          skills="React, Node.js, MongoDB"
          nameOfInstitution="Institution A"
          startDate="2023-01"
          endDate="2023-06"
        />
        <ProjectsCard
          projectName="Another Project"
          img={headshot}
          description="A description for another project."
          contributors="Team B"
          skills="Angular, Firebase"
          nameOfInstitution="Institution B"
          startDate="2022-05"
          endDate="2022-12"
        />
        <ProjectsCard
          projectName="Third Project"
          img={headshot}
          description="Details about the third project."
          contributors="Team C"
          skills="Vue, Laravel"
          nameOfInstitution="Institution C"
          startDate="2021-09"
          endDate="2022-04"
        />
      </div>
    </div>
    </>

  )
}

export default Preview
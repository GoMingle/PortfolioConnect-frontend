const ProjectsCard = ({projectName, img, description,  contributors, 
      skills, nameOfInstitution, startDate, endDate, }) => {
  return (
    <div className="justify-center">
        <div className="grid grid-cols-4">
        <img className="size-1/5" src={img}alt="Project image" />
        <div className="flex justify-center">
        <h3>{projectName}</h3>
        <span>
        <p>{description}</p>
        <p>{contributors}</p>
        <p>{skills}</p>
        <p>{nameOfInstitution}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        </span>
        </div>
        </div>
    </div>
  )
}

export default ProjectsCard
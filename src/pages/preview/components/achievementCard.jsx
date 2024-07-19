
const AchievementCard = ({Award, description, image, date, nameOfInstitution}) => {
  return (
  
    <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto">
      <div className="w-72">
        <img src={image} alt="Achievement image"/>
        </div>

        <div className="p-6">
        <h3>{Award}</h3>
        <p>{nameOfInstitution}</p>
        <p>{description}</p>
        <p>{date}</p>
        </div>
    </div>
    
  )
}

export default AchievementCard
const Bio = ({ userName, firstName, lastName, otherName, email, profilePicture, bio, location, contact }) => {
    return (
        <div className="relative flex shadow-2xl ml-20 mr-20 p-8">
            <img className="rounded-full size-1/4 ml-16 mb-10 mt-16" src={profilePicture} alt="Profile picture" />
            <div className="ml-10 flex flex-col justify-center">
            
                <div className="text-6xl flex gap-4 text-teal-500 items-center mb-4">
                    
                    <h3>{firstName}</h3>
                    <h3>{lastName}</h3>
                    <h3>{otherName}</h3>
                </div>
                <h3>{userName}</h3>
                <div className="text-left">
                    <p className="text-md">{bio}</p>
                    <p className="text-md mt-2 font-normal">{email}</p>
                    <p className="mt-2 font-thin">{location}</p>
                    <p className="mt-2 font-light">{contact}</p>
                </div>
            </div>
        </div>

    )
}

export default Bio
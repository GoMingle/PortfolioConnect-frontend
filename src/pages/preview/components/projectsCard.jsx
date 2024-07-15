// src/components/ProjectsCard.js
import React from 'react';

const ProjectsCard = ({
  projectName,
  img,
  description,
  contributors,
  skills,
  nameOfInstitution,
  startDate,
  endDate,
}) => {
  return (
    <div className="relative overflow-hidden group">
      <img className="w-full h-auto" src={img} alt="Project image" />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-semibold">{projectName}</h3>
        <p className="mt-2">{description}</p>
        <p className="mt-1">{contributors}</p>
        <p className="mt-1">{skills}</p>
        <p className="mt-1">{nameOfInstitution}</p>
        <p className="mt-1">{startDate} - {endDate}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;

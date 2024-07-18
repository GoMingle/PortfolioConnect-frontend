import { useEffect, useState } from "react";
import K from "../../../constants";
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";

import { apiGetEducation } from "../../../services/education";
import { apiGetVolunteering } from "../../../services/volunteering";
import { apiGetExperiences } from "../../../services/experience";
 import PageLoader from "../../../components/pageLoader";
import { apiGetProjects } from "../../../services/project";

const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalProjects, totalEducation, totalVolunteering, totalExperiences] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetEducation(),
        apiGetVolunteering(),
        apiGetExperiences(),
      ]);

      console.log("Total skills:", totalSkills);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalEducation.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      };

      console.log(newData);

      setData(newData);

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? <PageLoader /> : <div className="p-10 bg-teal-500 h-full brightness-100 ">
        <div className="grid grid-cols-3 gap-10">
          {K.OVERVIEW.map(({ icon, text, total }, index) => (
            <div key={index} className="h-40 shadow-lg rounded-lg bg-white p-6 flex flex-col justify-between">
              <div className="flex justify-between">
                <span className="text-teal-500">{icon}</span>
                <span className="text-lg font-semibold text-gray-900">{text}</span>
              </div>
              <span className="text-2xl font-bold text-gray-600">{total}</span>
            </div>

          )

          )}
        </div>
      </div>}
    </>
  )
}

export default Overview;
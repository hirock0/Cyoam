import Acheive_section from "../acheive_section/acheive_section";
import Ideas_section from "../ideas_section/ideas_section";
import Service_section from "../popurlar_service_section/service_section";
import PopularProjects from "../projects_section/page";

const Sections = () => {
  return (
    <div className=" ">
      <div className="">
        <Service_section />
        <PopularProjects />
        <Acheive_section />
        <Ideas_section />
      </div>
    </div>
  );
};

export default Sections;

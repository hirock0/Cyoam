import Banner from "@/components/home/banner/banner"
import Service_section from "@/components/home/popurlar_service_section/service_section"
import PopularProjects from "@/components/home/projects_section/page"
const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <Service_section />
      <PopularProjects />
    </div>
  )
}

export default Home

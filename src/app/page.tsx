import Footer from "@/components/footer/footer"
import Acheive_section from "@/components/home/acheive_section/acheive_section"
import Banner from "@/components/home/banner/banner"
import Ideas_section from "@/components/home/ideas_section/ideas_section"
import Service_section from "@/components/home/popurlar_service_section/service_section"
import PopularProjects from "@/components/home/projects_section/page"
import Sections from "@/components/home/sections/sections"
const Home = () => {
  return (
    <div className=" max-w-[1440px]  mx-auto">
      <Banner />
      <Sections />
    </div>
  )
}

export default Home

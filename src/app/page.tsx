import Footer from "@/components/footer/footer"
import Acheive_section from "@/components/home/acheive_section/acheive_section"
import Banner from "@/components/home/banner/banner"
import Ideas_section from "@/components/home/ideas_section/ideas_section"
import Service_section from "@/components/home/popurlar_service_section/service_section"
import PopularProjects from "@/components/home/projects_section/page"
const Home = () => {
  return (
    <div className=" ">
      <Banner />
      {/* <Service_section />
      <PopularProjects /> */}
      {/* <div className=""
        style={{
          backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <Acheive_section />
        <Ideas_section />
        <Footer />
      </div> */}
    </div>
  )
}

export default Home

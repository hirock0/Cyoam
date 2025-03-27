
import Nav from "@/components/nav/nav"
import Image from "next/image"
import { Bebas_Neue } from "next/font/google"
import { LuDot } from "react-icons/lu";
import Style from "./banner.module.css"
import { GoArrowLeft } from "react-icons/go";
const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})
const Banner = () => {
    return (
        <div className={`${Style.banner}`}
            style={{
                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className=" pt-[40px] sticky -top-[40px] z-50">
                <Nav />
            </div>

 
        </div>
    )
}

export default Banner

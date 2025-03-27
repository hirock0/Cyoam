
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
        <div className={`${Style.banner} min-[1024px]:h-[1024px] max-[1024px]:h-[1240px] min-[1440px]:w-[1425px] max-[1440px]:h-[1040px] mx-auto`}
            style={{
                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className=" pt-[40px] max-[1024px]:pt-[0px]">
                <Nav />
            </div>
            <div className="">
                <div className="">
                    <h1 className="text-center text-7xl">Hirock</h1>
                </div>
            </div>

        </div>
    )
}

export default Banner


import { FiArrowUpRight } from "react-icons/fi";
import { Bebas_Neue } from "next/font/google"
import { LuDot } from "react-icons/lu";
const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})

const Ideas_section = () => {
    return (
        <div className=" h-screen bg-amber-200 ">
            {/* <div className=" container mx-auto px-3 flex justify-center items-center">
                <div className=" w-5/6 max-lg:w-full mx-auto my-20 overflow-hidden  text-white"
                    style={{
                        clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                        background: "#0C5DB6"
                    }}>

                    <div className=" p-10 grid grid-cols-2 max-lg:grid-cols-1 gap-5">
                        <div className="  ">
                            <button className=" max-lg:mt-10 max-md:mt-5 cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                                <div className=" ">
                                    <LuDot />
                                </div>
                                <div>
                                    Start With Solutions
                                </div>


                                <div className="">
                                    <LuDot />
                                </div>
                            </button>
                            <p className={`${babas_neue.className} text-6xl mt-5 max-md:text-5xl max-sm:text-4xl`}>
                                Showcase your ideas with a <span className=" text-cyan-300">professional portfolio site</span>
                            </p>
                        </div>
                        <div className="  flex items-end">
                            <div className=" relative bg-white p-5 w-full flex items-center justify-end">
                                <div className="  px-5 h-12 flex items-center justify-center  overflow-hidden bg-blue-500 text-white"
                                   
                                   style={{
                                        clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                                    }}
                                    
                                    >


                                    <p className={` text-nowrap `}>
                                        Explore All Services
                                    </p>


                                </div>

                                <div className=" rotate-450 bottom-0 right-0 absolute w-8 h-8" style={{
                                    clipPath: "polygon(0 0, 100% 100%, 150% 0%)",
                                    background: "#0C5DB6"

                                }}>

                                </div>




                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Ideas_section

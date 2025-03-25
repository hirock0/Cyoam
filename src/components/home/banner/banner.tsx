
import Nav from "@/components/nav/nav"
import Image from "next/image"
import { Bebas_Neue } from "next/font/google"
import { LuDot } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})
const Banner = () => {
    return (
        <div className={``}
            style={{
                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >

            <Nav />

            {/* banner_section_start */}
            <section>
                <div className=" container max-sm:px-3 mx-auto">
                    <div className=" flex gap-5 max-md:flex-col py-10 justify-between">
                        <div className=" w-1/2 max-md:w-full space-y-5 max-md:space-y-3">
                            <div className=" mb-5">
                                <button className=" cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
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
                            </div>
                            <div className={`${babas_neue.className}  text-8xl max-lg:text-7xl max-md:text-center max-sm:text-5xl`}>

                                <span >
                                    Transforming
                                    Businesses
                                </span>
                                <span style={{
                                    color: "#00AEEF"
                                }}>
                                    <br className=" md:hidden"></br>
                                    with
                                    Expertise
                                </span>
                            </div>

                            <p className=" text-xl w-4/6 max-lg:w-full max-md:w-5/6 max-md:text-center max-md:mx-auto">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>

                            <div className=" max-md:flex max-md:justify-center max-md:items-center">
                                <button className=" relative text-white py-4 px-5" style={{
                                    backgroundColor: "#0C5DB6",

                                }}>
                                    Explore All Services
                                    <div className=" bg-white corner_right_explore" style={{ clipPath: "polygon(0 0, 100% 100%, 150% 0%)" }}>

                                    </div>
                                    <div className=" bg-white rotate-180 corner_left_explore" style={{ clipPath: "polygon(0 0, 100% 100%, 150% 0%)" }}>

                                    </div>
                                </button>
                            </div>
                            <div className=" absolute h-52 left-0 flex flex-col gap-3 ">
                                <svg width="181" height="213" viewBox="0 0 181 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M180.645 212.112L-54.519 188.739L128.256 5.53143C138.193 -4.40536 155.217 1.65408 156.606 15.6666L180.645 212.112Z" fill="black" fill-opacity="0.03" />
                                </svg>
                                <svg width="440" height="306" viewBox="0 0 440 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M434.367 80.4613L213.557 301.054C210.041 304.571 205.117 306.32 200.158 305.833L190.275 304.859L-56.8454 280.603C-60.7588 280.225 -64.2574 278.493 -66.8904 275.897C-69.4873 273.264 -71.2185 269.765 -71.5972 265.852L-97.7647 1.02128L-97.6024 0.858979L180.681 28.1806L424.231 52.1118C438.226 53.4824 444.303 70.5246 434.367 80.4613Z" fill="black" fill-opacity="0.03" />
                                </svg>


                            </div>

                            {/* divider_start */}
                            <div className=" my-10 max-md:my-3 w-full h-1" style={{
                                background: "linear-gradient(45deg, #00AEEF, #B0B0B000)"
                            }}></div>
                            {/* divider_end */}

                            <div className="flex  px-2 max-lg:flex-col items-center max-md:py-4"
                                style={{ background: "linear-gradient(45deg, rgba(0, 174, 239, 0.5), rgba(176, 176, 176, 0.2))" }}
                            >
                                <div className="  w-1/2 flex items-end relative">
                                    <div className=" flex items-center gap-3 absolute left-0 z-50 top-2">
                                        <button>
                                            <GoArrowLeft size={20} className="text-blue-500" />
                                        </button>
                                        <button>
                                            <GoArrowLeft size={20} className="text-blue-600 rotate-180" />
                                        </button>
                                    </div>
                                    <Image priority src="https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__" alt="Portrait 1" width={500} height={500} className="w-12 h-12 rounded-full border-cyan-500 border-3" />
                                    <Image priority src="https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FOtG~kfDN6pW1XkRZttKrAey9NbC~YEBmkFoFcryJKwTFmJM~0gdOAcubWD2U1JAEUeL0Z6ca1Apuo9blgHjXz15GkzhePIjO-HD3J4tD77tID7jxfd5~ySZKIhktzxyXcG8WB2r7o7NYgC7IElVzjmyzLkQeHzqZSFTOh7yJq4X5nNf1ri~5a55PZGd0UG--QxscdHvSliIibF79XEr-JcT3HPuKiE09D3dkBh7NBdUe8Hdi~C9bzlFL4inGp2fFjCsCQ3bSkjZh7QBkUCXR1Ek70tQR0tIfm7rYY3L~BGOkDAeKCS6OkSKJKz8LTl1zfqbmr6UJAd7z0nBnuCg1Q__" alt="Portrait 2" width={500} height={500} className=" relative -left-3 w-17 h-17 rounded-full border-cyan-500 border-3" />
                                    <Image priority src="https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FOtG~kfDN6pW1XkRZttKrAey9NbC~YEBmkFoFcryJKwTFmJM~0gdOAcubWD2U1JAEUeL0Z6ca1Apuo9blgHjXz15GkzhePIjO-HD3J4tD77tID7jxfd5~ySZKIhktzxyXcG8WB2r7o7NYgC7IElVzjmyzLkQeHzqZSFTOh7yJq4X5nNf1ri~5a55PZGd0UG--QxscdHvSliIibF79XEr-JcT3HPuKiE09D3dkBh7NBdUe8Hdi~C9bzlFL4inGp2fFjCsCQ3bSkjZh7QBkUCXR1Ek70tQR0tIfm7rYY3L~BGOkDAeKCS6OkSKJKz8LTl1zfqbmr6UJAd7z0nBnuCg1Q__" alt="Portrait 3" width={500} height={500} className="w-28 h-28 relative -left-7 rounded-full border-cyan-500 border-3" />
                                </div>
                                <div className=" h-full py-4 " >
                                    <p className=" text-slate-700 h-full pl-10 max-md:w-5/6 max-md:text-center max-md:mx-auto">
                                        It is a long established fact that a reader will be distracted by the readable conten.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ------------------------------- */}

                        <div className="relative max-md:h-[550px] max-sm:h-auto ">

                            <div className=" w-full h-full overflow-hidden bg-white"
                                style={{
                                    clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                                }}>
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/8688/1d52/655f8f75a9a7704a051d0abc4df36080?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omt7wV0-b0gsRYDcJMrmpS~plPmYJhqijJc4ADhI3EXkat980MPJYYJLuhXNsX7O2JoIWW1oItC~sT011S5y07BtUFERkCZ3ouRt7jDBVngeQLWSYs8Bu210XDiSkGagpw-Q3AYif4or1X6HlutoLPvX7rxUFLujwnZG1EPsrH3EGkd-kWa8V5t-ebhiGzgoFc1xahZdlyhp~JCpUS5kRGZui0UC4022kCVwed-XOi9OvxWrTfDn7Tka3a1K8Vaxuyp-MGWKbArXCChvpuZxVQ5uMv3FDrcxAZviNeNUeILZJomGa9KYqEVc6mp2DcyRdYSAfUQQWcSdkjrxH78xxw__" // Replace with your actual image
                                    alt="Teamwork"
                                    width={500}
                                    height={500}
                                    priority
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <div className=" ">

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner

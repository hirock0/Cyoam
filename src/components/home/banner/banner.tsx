
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

        <div className={`${Style.banner}  md:h-[1010px] max-md:h-[1140px] max-sm:h-[1244px] px-[5.52%] max-sm:px-[2%] mx-auto`}
            style={{
                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >

            <div className=" relative h-full">
                <div className=" absolut z-40 top-0 left-0 right-0 bottom-0">
                    {/* nav_section_start */}
                    <div className=" sticky -top-[40px] max-md:top-0 z-50 pt-[40px] max-md:pt-0 ">
                        <Nav />
                    </div>
                    {/* nav_section_end */}
                    {/* banner_start */}

                    <div className=" px-[2.5%] max-md:px-[3%] max-sm:px-[4%] flex py-[72px] max-sm:py-[32px] ">

                        <div className=" w-1/2 max-md:w-full">
                            <div className="">
                                <button className=" flex items-center text-[1rem] border px-2">
                                    <span><LuDot /></span>
                                    Start With Solutions
                                    <span><LuDot /></span>
                                </button>
                            </div>
                            <h1 className={`${babas_neue.className} text-[6rem] leading-[81px] tracking-[-2px] max-sm:text-[4rem] max-sm:leading-[56px] max-sm:tracking-[-1px] mt-[28px] max-sm:mt-[24px] `}>
                                Transforming
                                Businesses <span className=" text-[#00AEEF]">
                                    with
                                    Expertise
                                </span>
                            </h1>
                            <p className="  text-[1.125rem] leading-[28px] tracking-[0px] my-[33px] max-sm:my-[23px] w-3/4 max-md:w-full ">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>


                            {/* -------------------------------- */}


                            <div className={`${Style.botton_rigth_corner} overflow-hidden md:hidden`}>
                                <Image src={"https://s3-alpha-sig.figma.com/img/8688/1d52/655f8f75a9a7704a051d0abc4df36080?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omt7wV0-b0gsRYDcJMrmpS~plPmYJhqijJc4ADhI3EXkat980MPJYYJLuhXNsX7O2JoIWW1oItC~sT011S5y07BtUFERkCZ3ouRt7jDBVngeQLWSYs8Bu210XDiSkGagpw-Q3AYif4or1X6HlutoLPvX7rxUFLujwnZG1EPsrH3EGkd-kWa8V5t-ebhiGzgoFc1xahZdlyhp~JCpUS5kRGZui0UC4022kCVwed-XOi9OvxWrTfDn7Tka3a1K8Vaxuyp-MGWKbArXCChvpuZxVQ5uMv3FDrcxAZviNeNUeILZJomGa9KYqEVc6mp2DcyRdYSAfUQQWcSdkjrxH78xxw__"}
                                    alt="img"
                                    width={500}
                                    height={500}
                                    priority
                                    className=" max-sm:h-[400px] w-full object-cover grayscale"
                                />
                            </div>

                            <div className=" max-md:hidden">
                                <button className={`explore_btn text-[1rem] tracking-[2%] h-[55px] w-[208px] flex items-center justify-center bg-[#0C5DB6] text-white`}>
                                    Explore All Services
                                </button>
                            </div>
                            {/* ------------------------------------------- */}
                            {/* divider_start */}

                            <div className=" bg-gradient-to-r from-[#00AEEF] to-[#B0B0B000] h-[2px] w-full my-[33px] max-sm:mt-[44px] max-sm:mb-[32px] ">

                            </div>
                            {/* divider_end */}

                            <div className=" flex  items-center h-[96px] max-lg:hidden">
                                {/* three_person_section_start */}
                                <div className="h-full  w-[148px] max-md:hidden  relative">
                                    <div className="flex items-end h-full  absolute ">
                                        <div className=" p-1 bg-[#00AEEF] h-[64px] w-[64px] overflow-hidden rounded-full ">
                                            <Image src={"https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__"}
                                                alt="img-1"
                                                width={500}
                                                height={500}
                                                priority
                                                className="w-full rounded-full h-full object-cover"
                                            />
                                        </div>
                                        <div className=" p-1 relative -left-5 bg-[#00AEEF] h-[64px] w-[64px] rounded-full ">
                                            <Image src={"https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FOtG~kfDN6pW1XkRZttKrAey9NbC~YEBmkFoFcryJKwTFmJM~0gdOAcubWD2U1JAEUeL0Z6ca1Apuo9blgHjXz15GkzhePIjO-HD3J4tD77tID7jxfd5~ySZKIhktzxyXcG8WB2r7o7NYgC7IElVzjmyzLkQeHzqZSFTOh7yJq4X5nNf1ri~5a55PZGd0UG--QxscdHvSliIibF79XEr-JcT3HPuKiE09D3dkBh7NBdUe8Hdi~C9bzlFL4inGp2fFjCsCQ3bSkjZh7QBkUCXR1Ek70tQR0tIfm7rYY3L~BGOkDAeKCS6OkSKJKz8LTl1zfqbmr6UJAd7z0nBnuCg1Q__"}
                                                alt="img-2"
                                                width={500}
                                                height={500}
                                                priority
                                                className="w-full rounded-full h-full object-cover"
                                            />
                                        </div>
                                        <div className=" relative p-1 -left-10 bg-[#00AEEF] h-[96px] w-[96px] rounded-full ">
                                            <Image src={"https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__"}
                                                alt="img-3"
                                                width={500}
                                                height={500}
                                                priority
                                                className="w-full rounded-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                             

                                <div className=" max-md:relative w-3/4 max-md:w-full h-full flex items-center justify-center bg-gradient-to-r max-md:rounded-l-full from-[#00AEEF] to-[#B0B0B000]">

                                    <p className="pl-[60px] pr-[30px] max-md:pl-[120px] max-md:pr-[20px] text-[#6D6D6D] text-[1.125rem] leading-[28px] tracking-[0px]">
                                        It is a long established fact that a reader will be distracted by the readable conten.
                                    </p>

                                </div>
                                

                            </div>

                            {/* max-lg-users_status_start */}
                            <div className=" lg:hidden flex  items-center h-[96px]">

                                <div className=" max-lg:relative w-3/4 max-lg:w-full h-full flex items-center justify-center bg-gradient-to-r max-lg:rounded-l-full from-[#00AEEF] to-[#B0B0B000]">

                                    <div className=" max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:bottom-0  p-1 bg-[#00AEEF] h-[96px] w-[96px] rounded-full ">
                                        <Image src={"https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__"}
                                            alt="img-3"
                                            width={500}
                                            height={500}
                                            priority
                                            className="w-full rounded-full h-full object-cover"
                                        />
                                    </div>

                                    <p className="  pl-[72px] pr-[30px] max-lg:pl-[100px] max-lg:pr-[20px] text-[#6D6D6D] text-[1.125rem] leading-[28px] max-lg:leading-[20px] tracking-[0px] ">
                                        It is a long established fact that a reader will be distracted by the readable conten.
                                    </p>

                                </div>

                            </div>
                            {/* max-lg-users_status_start */}


                            {/* max-md:button_start */}
                            <div className=" md:hidden max-md:my-[32px] ">
                                <button
                                    style={{
                                        clipPath: "polygon(0% 0%, 95% 0%, 100% 38%, 100% 100%, 6% 100%, 0% 71%)"
                                    }}
                                    className={` text-[1rem] w-full tracking-[2%] h-[55px] flex items-center justify-center bg-[#0C5DB6] text-white`}>
                                    Explore All Services
                                </button>
                            </div>
                            {/* max-md:button_end */}


                        </div>
                        {/* ----------------- */}
                        <div className="  w-1/2 max-md:hidden max-md:w-full max-sm:h-1/2">
                            <div className={`${Style.botton_rigth_corner} overflow-hidden`}>


                                <Image src={"https://s3-alpha-sig.figma.com/img/8688/1d52/655f8f75a9a7704a051d0abc4df36080?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omt7wV0-b0gsRYDcJMrmpS~plPmYJhqijJc4ADhI3EXkat980MPJYYJLuhXNsX7O2JoIWW1oItC~sT011S5y07BtUFERkCZ3ouRt7jDBVngeQLWSYs8Bu210XDiSkGagpw-Q3AYif4or1X6HlutoLPvX7rxUFLujwnZG1EPsrH3EGkd-kWa8V5t-ebhiGzgoFc1xahZdlyhp~JCpUS5kRGZui0UC4022kCVwed-XOi9OvxWrTfDn7Tka3a1K8Vaxuyp-MGWKbArXCChvpuZxVQ5uMv3FDrcxAZviNeNUeILZJomGa9KYqEVc6mp2DcyRdYSAfUQQWcSdkjrxH78xxw__"}
                                    alt="img"
                                    width={500}
                                    height={500}
                                    priority
                                    className="h-[666px]  w-full object-cover grayscale"
                                />
                            </div>
                        </div>


                    </div>
                    {/* banner_end */}
                </div>

                {/* vector_section_start */}
                <div className=" max-lg:hidden overflow-hidden h-full z-10 absolute bottom-0 -left-20">
                    <div className=" relative top-[800px] -rotate-[5deg] -left-20 flex items-end flex-col gap-6  " >
                        <svg width="408" height="306" viewBox="0 0 408 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M402.985 80.2199L182.176 300.813C178.659 304.329 173.736 306.079 168.777 305.592L158.894 304.618L-88.2269 280.362C-92.1403 279.983 -95.6389 278.252 -98.2719 275.655C-100.869 273.022 -102.6 269.523 -102.979 265.61L-129.146 0.779821L-128.984 0.617524L149.3 27.9391L392.85 51.8703C406.844 53.2409 412.922 70.2831 402.985 80.2199Z" fill="black" fill-opacity="0.03" />
                        </svg>

                    </div>
                    <div className=" relative top-[250px] -left-40 -rotate-[5deg] flex items-end flex-col gap-6  " >
                        <svg width="250" height="212" viewBox="0 0 150 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M149.264 211.87L-85.9005 188.498L96.8747 5.28997C106.812 -4.64681 123.836 1.41262 125.224 15.4251L149.264 211.87Z" fill="black" fill-opacity="0.03" />
                        </svg>
                    </div>
                </div>
                {/* vector_section_end */}
            </div>
        </div>

    )
}

export default Banner

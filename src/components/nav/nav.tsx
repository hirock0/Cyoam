"use client"
import Image from "next/image"
import Style from "./nav.module.css"
import Link from "next/link"
import { CgMail } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {

    const [searchFlag, setSearchFlag] = useState(false)
    const [media, setMedia] = useState(false)
    const [menuFlag, setMenuFlag] = useState(false)
    const [scrollFlag, setScrolFlag] = useState(false)

    useEffect(() => {
        const handler = () => {
            setMedia(false)
            setSearchFlag(false)
            setMenuFlag(false)
        }
        window.addEventListener("click", handler)
        return () => { window.removeEventListener("click", handler) }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolFlag(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <nav className={``}>

            <div className={`${Style.nav}`}>
                <div className=" h-[120] flex justify-between items-center lg:mx-[96.22px] max-lg:mx-5">
                    <div className={`${Style.nav_left} h-full flex w-full max-lg:w-full bg-[#0C5DB6]`}
                    >

                        {/* logo_svg */}
                        <div className=" h-full  w-fit flex items-center lg:mx-[24px]">
                            <svg className=" lg:h-[40px] lg:w-[208.89px] max-lg:h-[30px] max-lg:w-[150px]" viewBox="0 0 388 74" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M139.88 22.3106H122.63C119.43 22.3106 116.69 23.4706 114.4 25.8006C112.11 28.1206 110.97 30.8806 110.97 34.0806V40.3606C110.97 43.5606 112.11 46.3006 114.4 48.5906C116.69 50.8806 119.43 52.0206 122.63 52.0206H139.88V63.1006H122.63C116.38 63.1006 111.03 60.8706 106.58 56.4206C102.12 51.9606 99.9 46.6106 99.9 40.3706V34.0906C99.9 27.7706 102.13 22.3806 106.58 17.9206C111.04 13.4606 116.39 11.2306 122.63 11.2306H139.88V22.3106Z" />
                                <path d="M159.19 11.9106L174.04 33.5106L188.89 11.9106H202.37L167.29 62.9906H153.81L167.29 43.3406L145.69 11.9206H159.17L159.19 11.9106Z" />
                                <path d="M227.38 11.5706H232.52C239.6 11.5706 245.66 14.1006 250.69 19.1706C255.72 24.2406 258.23 30.3106 258.23 37.4006C258.23 44.4906 255.72 50.5406 250.69 55.5706C245.66 60.6006 239.61 63.1106 232.52 63.1106H227.38C220.3 63.1106 214.24 60.6006 209.21 55.5706C204.18 50.5406 201.67 44.4906 201.67 37.4006C201.67 30.3106 204.18 24.2406 209.21 19.1706C214.24 14.1106 220.29 11.5706 227.38 11.5706ZM232.52 24.2506H227.38C223.8 24.2506 220.73 25.5506 218.18 28.1306C215.63 30.7206 214.35 33.8106 214.35 37.3906C214.35 40.9706 215.62 44.0406 218.18 46.5906C220.73 49.1406 223.8 50.4206 227.38 50.4206H232.52C236.1 50.4206 239.17 49.1506 241.72 46.5906C244.27 44.0406 245.55 40.9706 245.55 37.3906C245.55 33.8106 244.27 30.7206 241.72 28.1306C239.17 25.5406 236.1 24.2506 232.52 24.2506Z" />
                                <path d="M270.54 10.7706H292.48C298.27 10.7706 302.84 12.9406 306.19 17.2806C309.16 21.0106 310.72 25.8506 310.87 31.7906V63.1006H280.82C276.48 63.1006 272.78 61.5806 269.74 58.5306C266.69 55.4806 265.17 51.8106 265.17 47.5006C265.17 43.1906 266.69 39.5206 269.74 36.4706V36.3506C272.79 33.3006 276.48 31.7806 280.82 31.7806H299.67C299.59 28.3506 298.87 25.7606 297.5 24.0106C296.36 22.6406 294.68 21.9506 292.47 21.9506H270.53V10.7506L270.54 10.7706ZM299.79 52.0206V42.8806H280.82C279.6 42.8806 278.53 43.3406 277.62 44.2506C276.7 45.1606 276.25 46.2506 276.25 47.5106C276.25 48.7706 276.71 49.8106 277.62 50.6506C278.53 51.5706 279.6 52.0206 280.82 52.0206H299.79Z" />
                                <path d="M344.35 13.4006C348.08 13.4006 351.4 14.6206 354.29 17.0606C357.11 14.6206 360.38 13.4006 364.12 13.4006H372.46C376.73 13.4006 380.36 14.9106 383.37 17.9106C386.38 20.9206 387.88 24.5606 387.88 28.8206V63.1006H376.8V28.8206C376.8 27.6806 376.36 26.6706 375.49 25.7906C374.61 24.9106 373.61 24.4806 372.46 24.4806H364.12C362.98 24.4806 361.97 24.9206 361.09 25.7906C360.21 26.6706 359.78 27.6706 359.78 28.8206V63.1006H348.7V28.8206C348.7 27.6806 348.28 26.6706 347.44 25.7906C346.6 24.9106 345.57 24.4806 344.35 24.4806H337.72C336.5 24.4806 335.47 24.9206 334.64 25.7906C333.8 26.6706 333.38 27.6706 333.38 28.8206L333.27 63.1006H322.19L322.3 28.8206C322.3 24.5506 323.82 20.9406 326.87 17.9706C329.84 14.9206 333.46 13.4006 337.73 13.4006H344.36H344.35Z" />
                                <path d="M65.05 42.5806L39.64 73.5906L83.54 73.6406C85.93 73.6406 87.24 70.8706 85.73 69.0306L65.05 42.5806Z" />
                                <path d="M83.57 0.230591L30.62 0.250591C29.78 0.250591 28.98 0.630591 28.44 1.28059L27.37 2.58059L0.64 35.1406C0.22 35.6506 0.01 36.2806 0 36.9106C0 37.5406 0.22 38.1606 0.64 38.6806L29.27 73.5806H29.31L59.41 36.9206L85.75 4.85059C87.26 3.00059 85.95 0.230591 83.57 0.230591Z" />
                            </svg>
                        </div>
                        {/* logo_svg */}

                        {/* ------------ */}


                        <div className=" border ">
                            <div className={` border-b h-[39px] max-lg:w-[330px] ${Style.nav_topInfo} flex items-center `}>
                                <div className="lg:px-[24px]">
                                    <div className=" flex gap-[8px] items-center ">
                                        <CgMail className=" w-[16px] h-[16px] text-[#75DBFF]" />
                                        <p className=" text-[14px] text-[#FFFFFF]">
                                            cyoam.cyoam@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" flex gap-[8px] items-center">
                                        <MdWifiCalling3 className=" w-[16px] h-[16px] text-[#75DBFF]" />
                                        <p className=" text-[14px] text-[#FFFFFF]">
                                            +8801799-028445
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:px-[24px]">
                                    <div className=" flex gap-[8px] items-center">
                                        <FiClock className=" w-[16px] h-[16px] text-[#75DBFF]" />
                                        <p className=" text-[14px] text-[#FFFFFF]">
                                            Sut - Thur 9:00 - 17:00, Fri off
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[80px] lg:pl-[24px] bg-green-500">as</div>
                        </div>
                    </div>

                    {/* ----------------------------------------------- */}
                    <div className={`${Style.nav_right} h-full w-[400px] bg-[#00AEEF] `} >asd</div>
                </div>
            </div>

        </nav>
    )
}

export default Nav

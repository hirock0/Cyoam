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
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
    const [infoFlag, setInfoFlag] = useState(false)
    const [quota, setQuota] = useState(false)
    const [menuFlag, setMenuFlag] = useState(false)
    const [scrollFlag, setScrolFlag] = useState(false)
    useEffect(() => {
        const handler = () => {
            setQuota(false)
            setInfoFlag(false)
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
        <nav className={` min-[1440px]:w-[1247px] mx-auto h-[120px] max-[1024px]:h-[100px] max-[991px]:h-[90px] max-[741px]:h-[70px] max-[1440px]:mx-[89px] max-[1400px]:mx-[20px] max-[1300px]:mx-[10px] max-[640px]:mx-[10px] flex  items-center`}>

            <div className={` w-full h-full flex items-center`}>
                {/* left_section_start */}
                <div className={`${Style.nav_left_corner} h-full bg-[#0C5DB6]  w-3/4 flex items-center`}>

                    {/* logo_start */}
                    <div className=" text-white flex items-center w-fit mx-[5%] max-[1024px]:flex max-[1024px]:gap-[10px]">
                        <button className=" hidden max-[1024px]:block cursor-pointer" onClick={(e) => { e.stopPropagation() }}>
                            <RxHamburgerMenu size={30} />
                        </button>

                        <svg className="h-[32px] max-[1400px]:h-[30px] min-[1024px]:hidden" viewBox="0 0 87 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.05 42.94L39.64 73.95L83.54 74C85.93 74 87.24 71.23 85.73 69.39L65.05 42.94Z" fill="white" />
                            <path d="M83.57 0.590027L30.62 0.610027C29.78 0.610027 28.98 0.990027 28.44 1.64003L27.37 2.94003L0.64 35.5C0.22 36.01 0.01 36.64 0 37.27C0 37.9 0.22 38.52 0.64 39.04L29.27 73.94H29.31L59.41 37.28L85.75 5.21003C87.26 3.36003 85.95 0.590027 83.57 0.590027Z" fill="white" />
                        </svg>

                        <svg className=" h-[32px] max-[1024px]:hidden " viewBox="0 0 388 74" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M139.88 22.3106H122.63C119.43 22.3106 116.69 23.4706 114.4 25.8006C112.11 28.1206 110.97 30.8806 110.97 34.0806V40.3606C110.97 43.5606 112.11 46.3006 114.4 48.5906C116.69 50.8806 119.43 52.0206 122.63 52.0206H139.88V63.1006H122.63C116.38 63.1006 111.03 60.8706 106.58 56.4206C102.12 51.9606 99.9 46.6106 99.9 40.3706V34.0906C99.9 27.7706 102.13 22.3806 106.58 17.9206C111.04 13.4606 116.39 11.2306 122.63 11.2306H139.88V22.3106Z" />
                            <path d="M159.19 11.9106L174.04 33.5106L188.89 11.9106H202.37L167.29 62.9906H153.81L167.29 43.3406L145.69 11.9206H159.17L159.19 11.9106Z" />
                            <path d="M227.38 11.5706H232.52C239.6 11.5706 245.66 14.1006 250.69 19.1706C255.72 24.2406 258.23 30.3106 258.23 37.4006C258.23 44.4906 255.72 50.5406 250.69 55.5706C245.66 60.6006 239.61 63.1106 232.52 63.1106H227.38C220.3 63.1106 214.24 60.6006 209.21 55.5706C204.18 50.5406 201.67 44.4906 201.67 37.4006C201.67 30.3106 204.18 24.2406 209.21 19.1706C214.24 14.1106 220.29 11.5706 227.38 11.5706ZM232.52 24.2506H227.38C223.8 24.2506 220.73 25.5506 218.18 28.1306C215.63 30.7206 214.35 33.8106 214.35 37.3906C214.35 40.9706 215.62 44.0406 218.18 46.5906C220.73 49.1406 223.8 50.4206 227.38 50.4206H232.52C236.1 50.4206 239.17 49.1506 241.72 46.5906C244.27 44.0406 245.55 40.9706 245.55 37.3906C245.55 33.8106 244.27 30.7206 241.72 28.1306C239.17 25.5406 236.1 24.2506 232.52 24.2506Z" />
                            <path d="M270.54 10.7706H292.48C298.27 10.7706 302.84 12.9406 306.19 17.2806C309.16 21.0106 310.72 25.8506 310.87 31.7906V63.1006H280.82C276.48 63.1006 272.78 61.5806 269.74 58.5306C266.69 55.4806 265.17 51.8106 265.17 47.5006C265.17 43.1906 266.69 39.5206 269.74 36.4706V36.3506C272.79 33.3006 276.48 31.7806 280.82 31.7806H299.67C299.59 28.3506 298.87 25.7606 297.5 24.0106C296.36 22.6406 294.68 21.9506 292.47 21.9506H270.53V10.7506L270.54 10.7706ZM299.79 52.0206V42.8806H280.82C279.6 42.8806 278.53 43.3406 277.62 44.2506C276.7 45.1606 276.25 46.2506 276.25 47.5106C276.25 48.7706 276.71 49.8106 277.62 50.6506C278.53 51.5706 279.6 52.0206 280.82 52.0206H299.79Z" />
                            <path d="M344.35 13.4006C348.08 13.4006 351.4 14.6206 354.29 17.0606C357.11 14.6206 360.38 13.4006 364.12 13.4006H372.46C376.73 13.4006 380.36 14.9106 383.37 17.9106C386.38 20.9206 387.88 24.5606 387.88 28.8206V63.1006H376.8V28.8206C376.8 27.6806 376.36 26.6706 375.49 25.7906C374.61 24.9106 373.61 24.4806 372.46 24.4806H364.12C362.98 24.4806 361.97 24.9206 361.09 25.7906C360.21 26.6706 359.78 27.6706 359.78 28.8206V63.1006H348.7V28.8206C348.7 27.6806 348.28 26.6706 347.44 25.7906C346.6 24.9106 345.57 24.4806 344.35 24.4806H337.72C336.5 24.4806 335.47 24.9206 334.64 25.7906C333.8 26.6706 333.38 27.6706 333.38 28.8206L333.27 63.1006H322.19L322.3 28.8206C322.3 24.5506 323.82 20.9406 326.87 17.9706C329.84 14.9206 333.46 13.4006 337.73 13.4006H344.36H344.35Z" />
                            <path d="M65.05 42.5806L39.64 73.5906L83.54 73.6406C85.93 73.6406 87.24 70.8706 85.73 69.0306L65.05 42.5806Z" />
                            <path d="M83.57 0.230591L30.62 0.250591C29.78 0.250591 28.98 0.630591 28.44 1.28059L27.37 2.58059L0.64 35.1406C0.22 35.6506 0.01 36.2806 0 36.9106C0 37.5406 0.22 38.1606 0.64 38.6806L29.27 73.5806H29.31L59.41 36.9206L85.75 4.85059C87.26 3.00059 85.95 0.230591 83.57 0.230591Z" />
                        </svg>
                    </div>
                    {/* logo_end*/}
                    {/* mid_section_start */}
                    <div className=" max-[1024px]:hidden  w-full h-full text-white">
                        <div className=" text-[0.875rem] max-[1240px]:text-[0.75rem]  border border-t-0 border-r-0 border-b-0 border-blue-500 flex items-center h-1/3">
                            <div className=" border-0 border-r border-blue-500 h-full flex items-center px-[3.15%]">
                                <div className=" flex gap-[8px] items-center ">
                                    <CgMail className=" w-[16px] h-[16px] text-[#75DBFF]" />
                                    <p className=" ] text-[#FFFFFF]">
                                        cyoam.cyoam@gmail.com
                                    </p>
                                </div>

                            </div>
                            <div className="border-0 border-blue-500 h-full flex items-center border-r px-[3.15%]">

                                <div className=" flex gap-[8px] items-center">
                                    <MdWifiCalling3 className=" w-[16px] h-[16px] text-[#75DBFF]" />
                                    <p className="   text-[#FFFFFF]">
                                        +8801799-028445
                                    </p>
                                </div>
                            </div>
                            <div className="border-0 border-blue-500 border-r h-full flex items-center pl-[3.15%]">
                                <div className=" flex gap-[8px] items-center">
                                    <FiClock className=" w-[16px] h-[16px] text-[#75DBFF]" />
                                    <p className="   text-[#FFFFFF]">
                                        Sut - Thur 9:00 - 17:00, Fri off
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="border border-b-0 border-r-0 border-blue-500 flex items-center h-2/3">
                            <ul onClick={(e) => e.stopPropagation()} className={`px-[3.15%] text-[1rem] flex gap-[32px]`}>
                                <Link href={"/"}>
                                    <li className=" flex items-center">
                                        <span className="">Home</span>
                                        <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                                    </li>
                                </Link>
                                <Link href={"/"}>
                                    <li className=" flex items-center">
                                        <span className=" ">About</span>
                                        <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                                    </li>
                                </Link>
                                <Link href={"/"}>
                                    <li className=" flex items-center">
                                        <span className=" ">Service</span>
                                        <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                                    </li>
                                </Link>
                                <Link href={"/"}>
                                    <li className=" flex items-center">
                                        <span className=" ">Work</span>
                                        <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                                    </li>
                                </Link>
                                <Link href={"/"}>
                                    <li className=" flex items-center">
                                        <span className=" ">Contact</span>
                                        <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    {/* mid_section_end */}

                </div>
                {/* left_section_end */}
                {/* ------------------------ */}
                {/* rigth_section_start */}
                <div className={`${Style.nav_right_corner} h-full bg-[#00AEEF] max-[1024px]:bg-[#0C5DB6] max-[1024px]:flex max-[1024px]:items-center w-1/4`}>

                    <div className=" h-full max-[1024px]:hidden">
                        <div className="flex items-center w-full h-1/3 mt-[1px]">

                            <div className={` flex h-full w-full  text-white`}>

                                <div className="  flex border-b px-5 border-slate-300  items-center ">
                                    <FaFacebookF className=" w-[16px]  h-[16px] " />

                                </div>
                                <div className="  border-x border-b px-5 border-slate-300 flex   items-center">
                                    <FaLinkedinIn className="  w-[16px] h-[16px] " />
                                </div>
                                <div className="  flex border-r px-5 border-b border-slate-300 items-center">
                                    <RiTwitterXFill className=" w-[16px] h-[16px] " />

                                </div>
                                <div className=" flex border-r px-5 border-b border-slate-300 items-center">
                                    <FaInstagram className=" w-[16px] h-[16px] " />

                                </div>

                            </div>
                        </div>
                        {/* -------------------------- */}
                        <div className=" flex items-center px-[15px] h-2/3">
                            <div className={` w-full  `}>
                                <div className=" h-[43px] max-md:full  flex items-center w-full">

                                    <div className=" text-white h-full flex items-center gap-2 pl-2 w-fit">
                                        <div className="">
                                            <FiSearch size={20} />
                                        </div>
                                        <input type="text" name="" className=" border-0 outline-none w-17" placeholder="Search..." id="" />
                                    </div>
                                    <div className={`${Style.nav_right_corner} cursor-pointer text-[0.875rem] h-full flex items-center justify-center bg-white w-full`}>
                                        <button className=" w-full h-full">
                                            Request a Quote
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="">
                        <div className=" text-white h-full flex items-center gap-2 pl-2 w-fit">
                            <div className="">
                            <FiSearch size={20} />
                            </div>
                            <input type="text" name="" className=" border-0 outline-none w-17" placeholder="Search..." id="" />
                        </div>
                    </div>
                </div>
                {/* rigth_section_end */}


            </div>

        </nav>
    )
}

export default Nav

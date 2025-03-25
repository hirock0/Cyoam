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
const Nav = () => {
    return (
        <nav>
            <div className=" container mx-auto">
                <div className={`${Style.navbar} h-28 max-md:h-24 max-sm:h-20 flex items-center`}>
                    {/* 3/4-start */}
                    <div className={`${Style.navbar_left} h-full flex items-center w-3/4 `}>
                        <div className=" ">
                            {/* logo_svg */}
                            <svg className="text-white max-md:w-32" width="208" height="40" viewBox="0 0 388 74" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1276_269)">
                                    <path d="M139.88 22.08H122.63C119.43 22.08 116.69 23.24 114.4 25.57C112.11 27.89 110.97 30.65 110.97 33.85V40.13C110.97 43.33 112.11 46.07 114.4 48.36C116.69 50.65 119.43 51.79 122.63 51.79H139.88V62.87H122.63C116.38 62.87 111.03 60.64 106.58 56.19C102.12 51.73 99.9 46.38 99.9 40.14V33.86C99.9 27.54 102.13 22.15 106.58 17.69C111.04 13.23 116.39 11 122.63 11H139.88V22.08Z" />
                                    <path d="M159.19 11.68L174.04 33.28L188.89 11.68H202.37L167.29 62.76H153.81L167.29 43.11L145.69 11.69H159.17L159.19 11.68Z" />
                                    <path d="M227.38 11.34H232.52C239.6 11.34 245.66 13.87 250.69 18.94C255.72 24.01 258.23 30.08 258.23 37.17C258.23 44.26 255.72 50.31 250.69 55.34C245.66 60.37 239.61 62.88 232.52 62.88H227.38C220.3 62.88 214.24 60.37 209.21 55.34C204.18 50.31 201.67 44.26 201.67 37.17C201.67 30.08 204.18 24.01 209.21 18.94C214.24 13.88 220.29 11.34 227.38 11.34ZM232.52 24.02H227.38C223.8 24.02 220.73 25.32 218.18 27.9C215.63 30.49 214.35 33.58 214.35 37.16C214.35 40.74 215.62 43.81 218.18 46.36C220.73 48.91 223.8 50.19 227.38 50.19H232.52C236.1 50.19 239.17 48.92 241.72 46.36C244.27 43.81 245.55 40.74 245.55 37.16C245.55 33.58 244.27 30.49 241.72 27.9C239.17 25.31 236.1 24.02 232.52 24.02Z" />
                                    <path d="M270.54 10.54H292.48C298.27 10.54 302.84 12.71 306.19 17.05C309.16 20.78 310.72 25.62 310.87 31.56V62.87H280.82C276.48 62.87 272.78 61.35 269.74 58.3C266.69 55.25 265.17 51.58 265.17 47.27C265.17 42.96 266.69 39.29 269.74 36.24V36.12C272.79 33.07 276.48 31.55 280.82 31.55H299.67C299.59 28.12 298.87 25.53 297.5 23.78C296.36 22.41 294.68 21.72 292.47 21.72H270.53V10.52L270.54 10.54ZM299.79 51.79V42.65H280.82C279.6 42.65 278.53 43.11 277.62 44.02C276.7 44.93 276.25 46.02 276.25 47.28C276.25 48.54 276.71 49.58 277.62 50.42C278.53 51.34 279.6 51.79 280.82 51.79H299.79Z" />
                                    <path d="M344.35 13.17C348.08 13.17 351.4 14.39 354.29 16.83C357.11 14.39 360.38 13.17 364.12 13.17H372.46C376.73 13.17 380.36 14.68 383.37 17.68C386.38 20.69 387.88 24.33 387.88 28.59V62.87H376.8V28.59C376.8 27.45 376.36 26.44 375.49 25.56C374.61 24.68 373.61 24.25 372.46 24.25H364.12C362.98 24.25 361.97 24.69 361.09 25.56C360.21 26.44 359.78 27.44 359.78 28.59V62.87H348.7V28.59C348.7 27.45 348.28 26.44 347.44 25.56C346.6 24.68 345.57 24.25 344.35 24.25H337.72C336.5 24.25 335.47 24.69 334.64 25.56C333.8 26.44 333.38 27.44 333.38 28.59L333.27 62.87H322.19L322.3 28.59C322.3 24.32 323.82 20.71 326.87 17.74C329.84 14.69 333.46 13.17 337.73 13.17H344.36H344.35Z" />
                                    <path d="M65.05 42.35L39.64 73.36L83.54 73.41C85.93 73.41 87.24 70.64 85.73 68.8L65.05 42.35Z" fill="#" />
                                    <path d="M83.57 0L30.62 0.02C29.78 0.02 28.98 0.4 28.44 1.05L27.37 2.35L0.64 34.91C0.22 35.42 0.01 36.05 0 36.68C0 37.31 0.22 37.93 0.64 38.45L29.27 73.35H29.31L59.41 36.69L85.75 4.62C87.26 2.77 85.95 0 83.57 0Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1276_269">
                                        <rect width="387.89" height="73.41" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {/* logo_svg */}

                        </div>
                        {/* mid-part_start */}
                        <div className=" h-full px-5">
                            <div className={` ${Style.mid_top} h-10 flex items-center gap-3 `}>
                                <div className=" flex items-center gap-2">
                                    <CgMail className=" text-cyan-300" />
                                    <h1>
                                        cyoam.cyoam@gmail.com
                                    </h1>
                                </div>
                                <div className=" flex items-center gap-2">
                                    <MdWifiCalling3 className=" text-cyan-300" />
                                    <h1>
                                        +8801700554293
                                    </h1>
                                </div>
                                <div className=" flex items-center gap-2">


                                    <FiClock className=" text-cyan-300" />
                                    <h1>
                                        Sut - Thur 9:00 - 17:00, Fri off
                                    </h1>


                                </div>

                            </div>
                            {/* ----------------- */}
                            <div className="">
                                <div className=" flex items-center gap-5 max-lg:hidden">
                                    <div className=" flex items-center gap-2 group relative cursor-pointer">
                                        <h1 >Home</h1>
                                        <MdKeyboardArrowDown className=" group-hover:rotate-180" />
                                        <ul className=" bg-red-200 px-5 py-5 space-y-10 hidden group-hover:block absolute z-40 top-5">
                                            <li><Link href={"/sadf"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>




                                        </ul>
                                    </div>
                                    <div className=" flex items-center gap-2 group relative cursor-pointer">
                                        <h1 >About</h1>
                                        <MdKeyboardArrowDown className=" group-hover:rotate-180" />
                                        <ul className=" bg-red-200 px-5 py-5 space-y-10 hidden group-hover:block absolute z-40 top-5">
                                            <li><Link href={"/sadf"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>




                                        </ul>
                                    </div>
                                    <div className=" flex items-center gap-2 group relative cursor-pointer">
                                        <h1 >Service</h1>
                                        <MdKeyboardArrowDown className=" group-hover:rotate-180" />
                                        <ul className=" bg-red-200 px-5 py-5 space-y-10 hidden group-hover:block absolute z-40 top-5">
                                            <li><Link href={"/sadf"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>




                                        </ul>
                                    </div>
                                    <div className=" flex items-center gap-2 group relative cursor-pointer">
                                        <h1 >Work</h1>
                                        <MdKeyboardArrowDown className=" group-hover:rotate-180" />
                                        <ul className=" bg-red-200 px-5 py-5 space-y-10 hidden group-hover:block absolute z-40 top-5">
                                            <li><Link href={"/sadf"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>




                                        </ul>
                                    </div>
                                    <div className=" flex items-center gap-2 group relative cursor-pointer">
                                        <h1 >Contact</h1>
                                        <MdKeyboardArrowDown className=" group-hover:rotate-180" />
                                        <ul className=" bg-red-200 px-5 py-5 space-y-10 hidden group-hover:block absolute z-40 top-5">
                                            <li><Link href={"/sadf"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>
                                            <li><Link href={"/"}>
                                                Home
                                            </Link>
                                            </li>




                                        </ul>
                                    </div>






                                </div>
                            </div>
                        </div>
                        {/* mid-part-end */}

                        {/* Border_Corner_start */}
                        <div className={`${Style.corner_left} overflow-hidden`}
                            style={{
                                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                        >

                        </div>
                        {/* Border_Corner_end */}
                    </div>
                    {/* 3/4-end */}
                    {/* 1/4-start */}
                    <div className={`${Style.navbar_right} h-full w-1/4 flex items-center`}>

                        <div className=" flex flex-col justify-between h-full py-2">
                            <div className="">
                                <div className=" flex items-center gap-5">
                                    <Link href={"/"}>
                                        <FaFacebookF className=" text-white" />
                                    </Link>
                                    <Link href={"/"}>
                                        <FaLinkedinIn className=" text-white" />
                                    </Link>
                                    <Link href={"/"}>
                                        <RiTwitterXFill className=" text-white" />
                                    </Link>
                                    <Link href={"/"}>
                                        <FaInstagram className=" text-white" />
                                    </Link>
                                </div>
                            </div>
                            {/* btm-start */}
                            <div className=" flex items-center">
                                <div className=" flex items-center gap-2 w-3/6">
                                    <div className="">
                                        <FaSearch className="" />
                                    </div>
                                    <input type="text" name="" id="" placeholder="Search..." />
                                </div>
                                <div className="">
                                    <button className={`relative bg-white text-black p-2 `}>
                                        Request a Quota
                                        <div className={`${Style.quota_right}`}>

                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Border_Corner_start */}
                        <div className={`${Style.corner_right} overflow-hidden`}
                            style={{
                                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                        >

                        </div>
                    </div>
                    {/* Border_Corner_end */}
                    {/* 1/4-end */}
                </div>
            </div>
        </nav>
    )
}

export default Nav

import { Bebas_Neue } from "next/font/google"
import Image from "next/image"
import { LuDot } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})
const Acheive_section = () => {


    return (
        <div className=" relative   ">
            <div className=" h-full"
            >
                {/* ........ */}
                <div
                    style={{
                        background: "url(https://s3-alpha-sig.figma.com/img/6580/8079/311c027968265125a07f026a1fd271c6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nMjLjWQcloLPw76EdD07N9ztCobluMQPA7K6zfOs6isP5qL78jn7DxbeAg6Xb58mhxBeHXtI~YDVwRpE3q3EWlNPRbQqEmB31z9sik9YQ7BGIx8BhO14R~CbGswgyUYyaSbjBGaZgWkWawu-c2rRQrbL7QQt4XI0jScM~kaxhMZ2xKhMjApHh8AxHrPnfbs2W79w5zHU3iVRmGT37xTyhHRxJB14ALoSw72q0h9sSpJTGZ480NANgFQ56xohRSNMsILU2C6u~dZRvvn3Emmdf4wlRHUBnGogh84ct1KDHFQF~IWj~4kIxvDl36pPEH4SJOwIJwmF1RDAw~U9fcg98Q__)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    className=" text-white h-full section_corner_cut_bottom_right">



                    <div className=" py-[120px] px-[5.52%] max-sm:px-[2%] mx-auto">
                       

                            <div className=" mt-[28px] flex gap-[24px] max-lg:flex-col">
                                <div className=" text-white">
                                    <button className=" text-[0.938rem] cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3 text-white">
                                        <div className=" ">
                                            <LuDot />
                                        </div>
                                        <div>
                                            Goal
                                        </div>
                                        <div className="">
                                            <LuDot />
                                        </div>
                                    </button>
                                    <h1 className={`${babas_neue.className} mt-[28px] text-8xl max-sm:text-[4rem] max-sm:leading-14 leading-[81px] -tracking-[2px]`}>What We <span className=" text-blue-500 ">Aspire To</span><br></br>Achieve</h1>
                                    <p className=" mt-[30px] w-[410px] text-[1.125rem] leading-7">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>

                                    <div className=" mt-[82px] max-md:flex  max-md:justify-center">
                                        <div className=" w-full flex max-sm:flex-col gap-5  items-center">
                                            <button 
                                            className=" h-[120px] btn_corner_cut_left_top_right_bottom w-full overflow-hidden bg-white"
                                            >

                                                <div className=" flex items-center justify-between text-start p-8 w-full h-full">
                                                    <p className={`${babas_neue.className} text-black text-[2rem] text-nowrap leading-8 `}>
                                                        What We <span className=" text-blue-900">Aspire To</span><br />Achieve
                                                    </p>
                                                    <div className="">
                                                        <FiArrowUpRight className=" text-blue-500" size={50} />
                                                    </div>
                                                </div>
                                            </button>
                                            {/* ---------------------------- */}
                                            <button className=" h-[120px] w-full btn_corner_cut_left_top_right_bottom  overflow-hidden bg-blue-500 text-white"
                                            >

                                                <div className=" flex items-center justify-between text-start p-8 w-full h-full">
                                                    <p className={`${babas_neue.className} text-[2rem] text-nowrap  leading-8 `}>
                                                        What We <span className=" ">Aspire To</span><br />Achieve
                                                    </p>
                                                    <div className="">
                                                        <FiArrowUpRight className="" size={50} />
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                                {/* Image part */}
                                <div className=" ">
                                    <div className=" h-full overflow-hidden bg-white"
                                        style={{
                                            clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",

                                        }}>

                                        <div className=" h-full">
                                            <Image
                                                src={"https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"}
                                                alt={"img"}
                                                width={500}
                                                height={500}
                                                priority
                                                className="w-full h-full object-cover grayscale"
                                            />
                                        </div>
                                    </div>

                                </div>

                       
                        </div>
                    </div>














                </div>

            </div>
        </div>
    )
}

export default Acheive_section


'use client';

import ProjectCard from '@/components/projectCard/projectCard';
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { Bebas_Neue } from "next/font/google"

const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})
const projects = [
    {
        title: "Development",
        descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
        image: "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
    },
    {
        title: "Ui/UX Design",
        descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
        image: "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
    }
]
const projects2 = [
    {
        title: "Development",
        descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
        image: "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
    },
    {
        title: "Ui/UX Design",
        descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
        image: "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
    },
    {
        title: "Ui/UX Design",
        descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
        image: "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
    }
]

export default function PopularProjects() {
    return (
        <section className="bg-gray-100  py-20">
            <div className=" container mx-auto px-3">

                <div className=" space-y-5">
                    <div className=" lg:flex gap-5">
                        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">

                            {projects.map((item, index) => (
                                <ProjectCard key={index} item={item} />
                            ))}
                        </div>
                        <div className=" w-3/6 max-md:w-full">
                            <button className=" max-lg:mt-10 max-md:mt-5 cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                                <div className=" ">
                                    <LuDot />
                                </div>
                                <div>
                                    Work
                                </div>

                                <div className="">
                                    <LuDot />
                                </div>
                            </button>
                            <h1 className={` mt-5 ${babas_neue.className} text_less text-8xl  `}>
                                <span className='text-nowrap'>
                                    check our
                                </span><br></br>

                                <span className=' text-nowrap text-blue-500'>
                                    popular projects
                                </span>
                                <br></br>Website
                            </h1>
                        </div>
                    </div>



                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">

                        <div className="  h-full max-md:h-96 max-sm:h-64 overflow-hidden bg-blue-500 text-white flex justify-center items-center p-10 rounded-lg"
                            style={{
                                clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                            }}>

                            <div className="">
                                <FiArrowUpRight size={40} />
                            </div>
                        </div>
                        {projects2.map((item, index) => (
                            <ProjectCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

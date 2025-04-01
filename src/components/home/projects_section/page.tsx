"use client";
import ProjectCard from "@/components/projectCard/projectCard";
import { FiArrowUpRight } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { Bebas_Neue } from "next/font/google";
import Explore_btn from "@/components/ui/buttons/explore_btn/explore_btn";
import Image from "next/image";
Image;
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const projects = [
  {
    title: "Development",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image:
      "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
  },
  {
    title: "Ui/UX Design",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image:
      "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
  },
];
const projects2 = [
  {
    title: "Development",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image:
      "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
  },
  {
    title: "Ui/UX Design",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image:
      "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
  },
  {
    title: "Ui/UX Design",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image:
      "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
  },
];

export default function PopularProjects() {
  return (
    <section
      style={{
        background: "url(https://s3-alpha-sig.figma.com/img/b142/a588/d03272cac3c5aa7d668764cf919f523d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LiahZN8SiiW4bJjD5hnsZXxQxd5lA2~cIeA46A8Jet~vx1AD~HGDXK3QpxqxutkWKbdr6piZcngmlJQfRupD7KOCYot2d6a0fB6nAAG3ZDN3x8i3ZHAeJJilW4ggvDp-PW~bJjpFZfSNizxs8Fks4V749KXlIegjHjjtcjjfD2jpYYRXKXedN22g7kLajgnaLIKUp-cugOJ88~whPeSMOyzZdLk1C1pi4KpLcCgpZCRTt4hGGeu4DjGXvUkoLTTZDpDAf62QdEM6nUVHBRs-HbGWHV2i8wamiCPQWogzHgnMFvinfaBOtPIUGtiGKhu5Jcx5E3jnnUnAEBdsImP55Q__)",
      }}
      className="">
      <div className=" bg-[#f6f6f6f6] "
      >
        <div className="px-[7.52%] max-sm:px-[6.52%] mx-auto py-[140px]  max-lg:py-[80px]  max-md:py-[48px] ">
          <div className=" max-md:hidden space-y-5">
            <div className="  lg:flex gap-5">
              <div className="  grid grid-cols-2 max-lg:grid-cols-2 gap-5">
                {projects.map((item, index) => (
                  <ProjectCard key={index} item={item} />
                ))}
              </div>
              <div className="  w-3/6 max-md:w-full max-md:text-center">
                <button className=" max-lg:mt-10 max-md:mt-5 cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                  <div className=" ">
                    <LuDot />
                  </div>
                  <div>Work</div>

                  <div className="">
                    <LuDot />
                  </div>
                </button>
                <h1
                  className={` mt-[58px] ${babas_neue.className} text-8xl -tracking-[2px] leading-[81px]  `}
                >
                  <span className="text-nowrap">check our</span>
                  <br></br>
                  <span className=" text-nowrap text-blue-500">
                    popular projects
                  </span>
                  <br></br>Website
                </h1>
              </div>
            </div>

            <div className="grid  grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
              <div
                className="  h-full max-md:h-96 max-sm:h-64 overflow-hidden bg-[#0C5DB6] text-white flex justify-center items-center"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                }}
              >
                <div className="">
                  <FiArrowUpRight size={100} />
                </div>
              </div>
              {projects2.map((item, index) => (
                <ProjectCard key={index} item={item} />
              ))}
            </div>
          </div>
          {/* small_section_start */}
          <div className=" md:hidden max-md:w-full">
            <button className=" cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
              <div className=" ">
                <LuDot />
              </div>
              <div>Work</div>

              <div className="">
                <LuDot />
              </div>
            </button>
            <h1
              className={` ${babas_neue.className} mt-[24px]  mb-[24px] text-[4rem] leading-14 -tracking-[1px]  `}
            >
              <span className="">check our</span>
              <br></br>
              <span className=" text-blue-500">popular projects</span>
              <br></br>Website
            </h1>

            <div className=" ">
              {/* SliderImage */}
              <div className=" h-[314px]">
                <div
                  className="  h-full overflow-hidden bg-white"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                  }}
                >
                  <div className=" h-full">
                    <Image
                      src={
                        "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
                      }
                      alt={"projects"}
                      width={500}
                      height={500}
                      priority
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
              {/* SliderImage */}
            </div>

            <div className=" w-full mt-[58px]">
              <Explore_btn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

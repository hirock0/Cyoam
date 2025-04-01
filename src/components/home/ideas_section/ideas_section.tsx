import { FiArrowUpRight } from "react-icons/fi";
import { Bebas_Neue } from "next/font/google";
import { LuDot } from "react-icons/lu";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Ideas_section = () => {
  return (
    
      <div className=" "
        style={{
          background: "url(https://s3-alpha-sig.figma.com/img/b142/a588/d03272cac3c5aa7d668764cf919f523d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LiahZN8SiiW4bJjD5hnsZXxQxd5lA2~cIeA46A8Jet~vx1AD~HGDXK3QpxqxutkWKbdr6piZcngmlJQfRupD7KOCYot2d6a0fB6nAAG3ZDN3x8i3ZHAeJJilW4ggvDp-PW~bJjpFZfSNizxs8Fks4V749KXlIegjHjjtcjjfD2jpYYRXKXedN22g7kLajgnaLIKUp-cugOJ88~whPeSMOyzZdLk1C1pi4KpLcCgpZCRTt4hGGeu4DjGXvUkoLTTZDpDAf62QdEM6nUVHBRs-HbGWHV2i8wamiCPQWogzHgnMFvinfaBOtPIUGtiGKhu5Jcx5E3jnnUnAEBdsImP55Q__)",

        }}
      >
        <div className="bg-[#f6f6f6f6]">
        <div className="px-[7.52%] max-sm:px-[6.52%] mx-auto ">
          <div className=" flex justify-center items-center">
            <div className=" idea_section_inside_div_cut relative bg-[#0C5DB6] max-lg:w-full mx-auto my-[160px] max-lg:my-[80px] overflow-hidden text-white">
              <div
                className="
                     px-[102px] max-lg:px-[16px] py-[80px] grid grid-cols-2 max-lg:grid-cols-1 gap-5"
              >
                <div className="  ">
                  <button className=" max-lg:mt-10 max-md:mt-5 cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                    <div className=" ">
                      <LuDot />
                    </div>
                    <div>Start With Solutions</div>

                    <div className="">
                      <LuDot />
                    </div>
                  </button>
                  <p
                    className={`${babas_neue.className} text-[4rem] leading-14 -tracking-[1px] mt-[32px] `}
                  >
                    Showcase your ideas with a{" "}
                    <span className=" text-cyan-300">
                      professional portfolio site
                    </span>
                  </p>
                </div>
                <div className="  flex max-lg:flex-col max-lg:gap-[16px] items-end">
                  <div className=" idea_section_right_bottom_corner_cut relative bg-white p-[8px]  h-[72px] w-full flex items-center justify-end ">
                    <div
                      className=" max-lg:hidden h-full flex items-center justify-center  overflow-hidden bg-blue-500 text-white"
                      style={{
                        clipPath:
                          "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                      }}
                    >
                      <p className={` text-nowrap w-[200px] text-center `}>
                        Explore All Services
                      </p>
                    </div>
                  </div>
                  <div
                    className=" h-full lg:hidden flex items-center justify-center  overflow-hidden bg-blue-500 text-white max-lg:w-full"
                    style={{
                      clipPath:
                        "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                    }}
                  >
                    <p
                      className={` text-nowrap w-[200px] max-lg:w-full text-center `}
                    >
                      Explore All Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas_section;

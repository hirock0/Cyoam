import Nav from "@/components/nav/nav";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { LuDot } from "react-icons/lu";
import Style from "./banner.module.css";
import { GoArrowLeft } from "react-icons/go";
import { FiArrowLeft } from "react-icons/fi";
import Explore_btn from "@/components/ui/buttons/explore_btn/explore_btn";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const Banner = () => {
  return (
    <div
      className={`  `}
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/b142/a588/d03272cac3c5aa7d668764cf919f523d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LiahZN8SiiW4bJjD5hnsZXxQxd5lA2~cIeA46A8Jet~vx1AD~HGDXK3QpxqxutkWKbdr6piZcngmlJQfRupD7KOCYot2d6a0fB6nAAG3ZDN3x8i3ZHAeJJilW4ggvDp-PW~bJjpFZfSNizxs8Fks4V749KXlIegjHjjtcjjfD2jpYYRXKXedN22g7kLajgnaLIKUp-cugOJ88~whPeSMOyzZdLk1C1pi4KpLcCgpZCRTt4hGGeu4DjGXvUkoLTTZDpDAf62QdEM6nUVHBRs-HbGWHV2i8wamiCPQWogzHgnMFvinfaBOtPIUGtiGKhu5Jcx5E3jnnUnAEBdsImP55Q__)`,
      }}
    >
      <div className="bg-slate-50/95">
        {/* main_start */}
        <div className=" px-[5.52%] max-sm:px-[2%]  mx-auto relative h-full  ">
          <div className=" relative w-full h-full ">
            {/* nav_start */}
            <div className="sticky -top-[40px] max-md:top-0 z-50 pt-[40px] max-md:pt-0 ">
              <Nav />
            </div>
            {/* nav_end */}

            {/* banner_start */}
            <div className=" px-[2%] max-sm:px-[3%] mx-auto  flex max-[1300px]:flex-col pt-[72px] max-md:pt-[40px] max-sm:pt-[32px] pb-[120px] max-md:pb-[100px] max-sm:pb-[80px] ">
              <div className=" w-1/2 max-[1300px]:w-full max-md:w-full">
                <div className="">
                  <button className=" flex items-center text-[1rem] border px-2">
                    <span>
                      <LuDot />
                    </span>
                    Start With Solutions
                    <span>
                      <LuDot />
                    </span>
                  </button>
                </div>
                <h1
                  className={`${babas_neue.className} text-[6rem] leading-[81px] tracking-[-2px] max-sm:text-[4rem] max-sm:leading-[56px] max-sm:tracking-[-1px] mt-[28px] max-sm:mt-[24px] `}
                >
                  Transforming Businesses{" "}
                  <span className=" text-[#00AEEF]">with Expertise</span>
                </h1>
                <p className="text-[1.125rem] leading-[28px] tracking-[0px] my-[33px] max-sm:my-[23px] w-3/4 max-md:w-full text-[#5D5D5D] ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                {/* -------------------------------- */}
                <div
                  className={`botton_rigth_corner overflow-hidden md:hidden`}
                >
                  <Image
                    src={
                      "https://s3-alpha-sig.figma.com/img/8688/1d52/655f8f75a9a7704a051d0abc4df36080?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omt7wV0-b0gsRYDcJMrmpS~plPmYJhqijJc4ADhI3EXkat980MPJYYJLuhXNsX7O2JoIWW1oItC~sT011S5y07BtUFERkCZ3ouRt7jDBVngeQLWSYs8Bu210XDiSkGagpw-Q3AYif4or1X6HlutoLPvX7rxUFLujwnZG1EPsrH3EGkd-kWa8V5t-ebhiGzgoFc1xahZdlyhp~JCpUS5kRGZui0UC4022kCVwed-XOi9OvxWrTfDn7Tka3a1K8Vaxuyp-MGWKbArXCChvpuZxVQ5uMv3FDrcxAZviNeNUeILZJomGa9KYqEVc6mp2DcyRdYSAfUQQWcSdkjrxH78xxw__"
                    }
                    alt="img"
                    width={500}
                    height={500}
                    priority
                    className=" max-sm:h-[400px] w-full object-cover grayscale"
                  />
                </div>
                <div className=" max-md:hidden">
                  <Explore_btn />
                </div>
                {/* ------------------------------------------- */}
                {/* divider_start */}

                <div className=" bg-gradient-to-r from-[#00AEEF] to-[#B0B0B000] h-[2px] w-full my-[33px] max-sm:mt-[44px] max-sm:mb-[32px] "></div>
                {/* divider_end */}
                <div className=" flex  items-center h-[96px] max-[1300px]:hidden">
                  {/* three_person_section_start */}
                  <div className="h-full  w-[148px] max-md:hidden  relative">
                    <div className=" absolute flex gap-5 items-center top-0 left-0 ">
                      <button className=" text-[#00AEEF]">
                        <FiArrowLeft size={25} />
                      </button>
                      <button className=" text-[#0C5DB6] rotate-180">
                        <FiArrowLeft size={25} />
                      </button>
                    </div>
                    <div className="flex items-end h-full  absolute ">
                      <div className=" p-1 bg-[#00AEEF] h-[64px] w-[64px] overflow-hidden rounded-full ">
                        <Image
                          src={
                            "https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__"
                          }
                          alt="img-1"
                          width={500}
                          height={500}
                          priority
                          className="w-full rounded-full h-full object-cover"
                        />
                      </div>
                      <div className=" p-1 relative -left-5 bg-[#00AEEF] h-[64px] w-[64px] rounded-full ">
                        <Image
                          src={
                            "https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FOtG~kfDN6pW1XkRZttKrAey9NbC~YEBmkFoFcryJKwTFmJM~0gdOAcubWD2U1JAEUeL0Z6ca1Apuo9blgHjXz15GkzhePIjO-HD3J4tD77tID7jxfd5~ySZKIhktzxyXcG8WB2r7o7NYgC7IElVzjmyzLkQeHzqZSFTOh7yJq4X5nNf1ri~5a55PZGd0UG--QxscdHvSliIibF79XEr-JcT3HPuKiE09D3dkBh7NBdUe8Hdi~C9bzlFL4inGp2fFjCsCQ3bSkjZh7QBkUCXR1Ek70tQR0tIfm7rYY3L~BGOkDAeKCS6OkSKJKz8LTl1zfqbmr6UJAd7z0nBnuCg1Q__"
                          }
                          alt="img-2"
                          width={500}
                          height={500}
                          priority
                          className="w-full rounded-full h-full object-cover"
                        />
                      </div>
                      <div className=" relative p-1 -left-10 bg-[#00AEEF] h-[96px] w-[96px] rounded-full ">
                        <Image
                          src={
                            "https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__"
                          }
                          alt="img-3"
                          width={500}
                          height={500}
                          priority
                          className="w-full rounded-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className=" max-md:relative w-3/4 max-md:w-full h-full flex items-center justify-center max-md:rounded-l-full"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,174,239,0.0984768907563025) 2%, rgba(176,176,176,0) 100%)",
                    }}
                  >
                    <p className="pl-[60px] pr-[30px] max-md:pl-[120px] max-md:pr-[20px] text-[#6D6D6D] text-[1.125rem] leading-[28px] tracking-[0px]">
                      It is a long established fact that a reader will be
                      distracted by the readable conten.
                    </p>
                  </div>
                </div>
                {/* max-[1300px]-users_status_start */}
                <div className=" lg:hidden flex  items-center h-[96px]">
                  <div
                    className=" max-[1300px]:relative w-3/4 max-[1300px]:w-full h-full flex items-center justify-center max-[1300px]:rounded-l-full "
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,174,239,0.0984768907563025) 2%, rgba(176,176,176,0) 100%)",
                    }}
                  >
                    <div className=" max-[1300px]:absolute max-[1300px]:left-0 max-[1300px]:top-0 max-[1300px]:bottom-0  p-1 bg-[#00AEEF] h-[96px] w-[96px] rounded-full ">
                      <Image
                        src={
                          "https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbiGRi6qe4PkFTkZJYH-0v6G4O6iku6l9n0yphBLZbD1buy036viu7S72ZgNoeou~tXqgX9i4QxC15bgrrvSRbpr2W0fAVo~gU2~fvHN5bSCfTODj3GPZmowYNsZnkTzHR72jhO4ysvlVd0myIe5AUNpGn6pLBcgfE6pr5u2iS-C1iyaOqpBjHvTFWn-gsXsrYN8oVhOc5jgypAxxZJDUstGBT0DYDK-YH3rULWVZ-Mrf3CdDDWtIq3fV5Jz-71bX8unUbNn1Bes0GDVeqqbkwLOOHzl2F5Nw67phHgryT-IeuNu6n18dakZ4oyzamUcwopVcGkJEa1RqKdJVBn0vQ__"
                        }
                        alt="img-3"
                        width={500}
                        height={500}
                        priority
                        className="w-full rounded-full h-full object-cover"
                      />
                    </div>
                    <p className="  pl-[72px] pr-[30px] max-[1300px]:pl-[100px] max-[1300px]:pr-[20px] text-[#6D6D6D] text-[1.125rem] leading-[28px] max-[1300px]:leading-[20px] tracking-[0px] ">
                      It is a long established fact that a reader will be
                      distracted by the readable conten.
                    </p>
                  </div>
                </div>
                {/* max-[1300px]-users_status_start */}
                {/* max-md:button_start */}
                <div className=" md:hidden max-md:my-[32px] ">
                  <Explore_btn />
                </div>
                {/* max-md:button_end */}
              </div>
              {/* ----------------- */}
              {/* 2nd_part */}
              <div className="  w-1/2 max-[1300px]:mt-[32px] max-[1300px]:w-full max-md:hidden max-md:w-full max-sm:h-1/2">
                <div className={`botton_rigth_corner overflow-hidden`}>
                  <Image
                    src={
                      "https://s3-alpha-sig.figma.com/img/8688/1d52/655f8f75a9a7704a051d0abc4df36080?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omt7wV0-b0gsRYDcJMrmpS~plPmYJhqijJc4ADhI3EXkat980MPJYYJLuhXNsX7O2JoIWW1oItC~sT011S5y07BtUFERkCZ3ouRt7jDBVngeQLWSYs8Bu210XDiSkGagpw-Q3AYif4or1X6HlutoLPvX7rxUFLujwnZG1EPsrH3EGkd-kWa8V5t-ebhiGzgoFc1xahZdlyhp~JCpUS5kRGZui0UC4022kCVwed-XOi9OvxWrTfDn7Tka3a1K8Vaxuyp-MGWKbArXCChvpuZxVQ5uMv3FDrcxAZviNeNUeILZJomGa9KYqEVc6mp2DcyRdYSAfUQQWcSdkjrxH78xxw__"
                    }
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

            {/* vector_start */}
            <div className=" absolute -bottom-50 -left-20 h-fit w-fit max-md:hidden">
              <svg
                width="415"
                height="667"
                viewBox="0 0 415 667"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1745_6710)">
                  <path
                    d="M149.264 218.87L-85.9005 195.498L96.8747 12.29C106.812 2.35319 123.836 8.41262 125.224 22.4251L149.264 218.87Z"
                    fill="black"
                    fill-opacity="0.03"
                  />
                  <path
                    d="M402.985 318.22L182.176 538.813C178.659 542.329 173.736 544.079 168.777 543.592L158.894 542.618L-88.2269 518.362C-92.1403 517.983 -95.6389 516.252 -98.2719 513.655C-100.869 511.022 -102.6 507.523 -102.979 503.61L-129.146 238.78L-128.984 238.618L149.3 265.939L392.85 289.87C406.844 291.241 412.922 308.283 402.985 318.22Z"
                    fill="black"
                    fill-opacity="0.03"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1745_6710">
                    <rect
                      width="509.315"
                      height="432.778"
                      fill="white"
                      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 54.639 666.566)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* vector_end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

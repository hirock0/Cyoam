import Image from "next/image";
import React from "react";

interface Item {
  title: string;
  descriptions: string;
  image: string;
}

const ServiceCard = ({ item }: { item: Item }) => {
  return (
    <div className="bg-[#F6F6F6]"
        style={{
             clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
        }}
    >
      <div className=""
        style={{
          background: "url(https://s3-alpha-sig.figma.com/img/5e4e/9e0a/0ebc7e606033a33f1e6912221a3f04d2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fxhykfNQyDWViaTduU6VMjqwgfjCTJKEWJEzhDOp6Gq1uIYyMwOrinRy9VBxZ95ZWkFKu-unvfeK1oPtXguNSzvvOYFiSZ2MbIUF4GMKYNXVV6skwXoURGW-91zQpZK3m4xVZi7EiJE7gKlHWnMtnN-jNrkONyB2StSAgRUtV1lgx6G7Lid3V1cRQiAthli7XHxr~fbO5~7DJ80jtnq9yOUJKdsRcLtRkzSgh9dxS-o438xYLtRI0ntGhMnR6muSukl-eeUynXyP3gMdniowKG2JzTO1bZrSh5~Cdn6KxaZymjkmHnjXlA1p4V6WAeawAn2w7Kp7ULiKjIdXJ3A4Mg__)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}>
        <div
          className=" h-[517px]   text-black p-2"
          style={{
           

          }}
        >
          <div
            className="   h-full overflow-hidden"
            style={{
              clipPath:
                "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",

            }}
          >

            <div className=" pt-[48px] px-[48px] ">
              <h1 className=" text-[2rem] leading-[30px] tracking-[0px]">
                <span className=" text-blue-500">I</span> {item?.title}
              </h1>
              <p className=" mt-[36px] text-[1.125rem] leading-7">
                {item?.descriptions}
              </p>
            </div>
            <div className=" mt-[44px] ">
              <Image
                src={item?.image}
                alt="Teamwork"
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
  );
};

export default ServiceCard;

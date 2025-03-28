import Image from "next/image"
import React from "react"

interface Item {
    title: string,
    descriptions: string,
    image: string
}

const ServiceCard = ({ item }: { item: Item }) => {

    return (
        <div className=" h-[517px] bg-white  text-black p-2"
            style={{
                clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
            }}
        >
            <div className="  h-full overflow-hidden bg-white"
                style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                }}>
                <div className=" pt-[48px] px-[48px] ">
                    <h1 className=" text-[2rem] leading-[30px] tracking-[0px]"> <span className=" text-blue-500">I</span> {item?.title}</h1>
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
    )
}

export default ServiceCard

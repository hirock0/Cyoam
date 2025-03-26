import Image from "next/image"
import React from "react"

interface Item {
    title: string,
    descriptions: string,
    image: string
}

const ServiceCard = ({ item }: { item: Item }) => {

    return (
        <div className=" h-full bg-white p-2"
            style={{
                clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
            }}
        >
            <div className="  h-full overflow-hidden bg-white"
                style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                }}>
                <div className=" pt-10 px-5 max-sm:px-0">
                    <h1 className="text-3xl font-semibold"> <span className=" text-blue-500">I</span> {item?.title}</h1>
                    <p className=" mt-5">
                        {item?.descriptions}
                    </p>
                </div>
                <div className=" mt-5">
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

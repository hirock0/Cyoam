import Image from "next/image"
import React from "react"

interface Item {
    title: string,
    descriptions: string,
    image: string,
}

const ProjectCard = ({ item }: { item: Item }) => {
    return (
        <div className=" h-full"

        >
            <div className="  h-full overflow-hidden bg-white"
                style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                }}>
 
                <div className=" h-full">
                    <Image
                        src={item?.image}
                        alt={item?.title}
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

export default ProjectCard

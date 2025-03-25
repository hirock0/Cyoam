
import Nav from "@/components/nav/nav"
import Image from "next/image"
import { Bebas_Neue } from "next/font/google"
const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})
const Banner = () => {
    return (
        <div className={``}
            style={{
                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >

            <Nav />

            {/* banner_section_start */}
            <section>
                <div className=" container mx-auto">
                    <div className=" flex py-10 justify-between">
                        <div className={`${babas_neue.className} w-1/2 text-7xl`}>
                            <span >
                                Transforming
                                Businesses
                            </span>
                            <span style={{
                                color: "#00AEEF"
                            }}>
                                with
                                Expertise
                            </span>

                        </div>



                  


                            <div className="relative h-[500px] p-4">

                                <div className=" w-full h-full overflow-hidden bg-white"
                                    style={{
                                        clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                                    }}>
                                    <Image
                                        src="https://s3-alpha-sig.figma.com/img/8688/1d52/655f8f75a9a7704a051d0abc4df36080?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omt7wV0-b0gsRYDcJMrmpS~plPmYJhqijJc4ADhI3EXkat980MPJYYJLuhXNsX7O2JoIWW1oItC~sT011S5y07BtUFERkCZ3ouRt7jDBVngeQLWSYs8Bu210XDiSkGagpw-Q3AYif4or1X6HlutoLPvX7rxUFLujwnZG1EPsrH3EGkd-kWa8V5t-ebhiGzgoFc1xahZdlyhp~JCpUS5kRGZui0UC4022kCVwed-XOi9OvxWrTfDn7Tka3a1K8Vaxuyp-MGWKbArXCChvpuZxVQ5uMv3FDrcxAZviNeNUeILZJomGa9KYqEVc6mp2DcyRdYSAfUQQWcSdkjrxH78xxw__" // Replace with your actual image
                                        alt="Teamwork"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                                <div className=" ">

                                </div>
                            </div>





                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner

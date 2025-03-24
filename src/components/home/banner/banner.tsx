import Nav from "@/components/nav/nav"

const Banner = () => {
    return (
        <div className={`h-screen `}
            style={{
                backgroundImage: "url('https://i.ibb.co/23T1jk7W/dots-back.png')", // Or use local path: "url('/dots-back.png')"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className=" h-full">
                <Nav />
            </div>
        </div>
    )
}

export default Banner

import ServiceCard from "@/components/serviceCard/serviceCard"
import { Bebas_Neue } from "next/font/google"
const babas_neue = Bebas_Neue({
    weight: ["400", "400"],
    subsets: ["latin"]
})
const Service_section = () => {

    const cardsInfo = [
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
            title: "SEO Management",
            descriptions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
            image: "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
        },
    ]

    return (
        <div className=" h-screen  ">
            <div
                style={{
                    backgroundImage: "url(https://s3-alpha-sig.figma.com/img/6580/8079/311c027968265125a07f026a1fd271c6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nMjLjWQcloLPw76EdD07N9ztCobluMQPA7K6zfOs6isP5qL78jn7DxbeAg6Xb58mhxBeHXtI~YDVwRpE3q3EWlNPRbQqEmB31z9sik9YQ7BGIx8BhO14R~CbGswgyUYyaSbjBGaZgWkWawu-c2rRQrbL7QQt4XI0jScM~kaxhMZ2xKhMjApHh8AxHrPnfbs2W79w5zHU3iVRmGT37xTyhHRxJB14ALoSw72q0h9sSpJTGZ480NANgFQ56xohRSNMsILU2C6u~dZRvvn3Emmdf4wlRHUBnGogh84ct1KDHFQF~IWj~4kIxvDl36pPEH4SJOwIJwmF1RDAw~U9fcg98Q__)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                   
                }}
                className=" relative section_corner_cut -top-19 h-full w-full px-[5.52%] max-sm:px-[2%] mx-auto">

            </div>
        </div>
    )
}

export default Service_section

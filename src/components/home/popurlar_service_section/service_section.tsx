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
        <div className=" relative">
            <div className=" max-md:hidden -rotate-45 -top-24 -left-29 absolute w-48 h-48 bg-gradient-to-b from-slate-900 to-sky-950 via-slate-900 " style={{ clipPath: "polygon(0 0, 100% 100%, 150% 0%)" }}>

            </div>

            <div className="pb-10"
                style={{
                    background: "url(https://s3-alpha-sig.figma.com/img/6580/8079/311c027968265125a07f026a1fd271c6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nMjLjWQcloLPw76EdD07N9ztCobluMQPA7K6zfOs6isP5qL78jn7DxbeAg6Xb58mhxBeHXtI~YDVwRpE3q3EWlNPRbQqEmB31z9sik9YQ7BGIx8BhO14R~CbGswgyUYyaSbjBGaZgWkWawu-c2rRQrbL7QQt4XI0jScM~kaxhMZ2xKhMjApHh8AxHrPnfbs2W79w5zHU3iVRmGT37xTyhHRxJB14ALoSw72q0h9sSpJTGZ480NANgFQ56xohRSNMsILU2C6u~dZRvvn3Emmdf4wlRHUBnGogh84ct1KDHFQF~IWj~4kIxvDl36pPEH4SJOwIJwmF1RDAw~U9fcg98Q__)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className=" flex justify-center">
                    <svg className=" relative -top-15" width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60.7354" cy="60" r="60" fill="white" />
                        <path d="M33.7476 100.877L32.6868 100.057L33.1111 92.4045L29.2497 97.4116L28.1182 96.5347L33.5496 89.4625L34.6104 90.2687L34.2002 97.9208L38.0474 92.9279L39.1931 93.8048L33.7476 100.877Z" fill="#0B4D99" />
                        <path d="M21.1025 88.6987L22.0926 87.8783L24.9215 91.2305L26.831 89.6605L24.5396 86.8316L25.5156 86.0254L27.7928 88.8543L29.7871 87.2135L26.9583 83.734L27.9625 82.8995L31.7532 87.5106L24.8791 93.1683L21.1025 88.6987Z" fill="#0B4D99" />
                        <path d="M16.0392 79.9576L17.1849 79.3635L19.2075 83.2108L21.3999 82.0368L19.7308 78.8544L20.8482 78.2744L22.5173 81.4569L24.7803 80.2829L22.687 76.2942L23.8468 75.686L26.6757 80.976L18.7832 85.1061L16.0392 79.9576Z" fill="#0B4D99" />
                        <path d="M13.6781 73.1259C13.4583 72.3422 13.434 71.5166 13.6074 70.7214C13.7916 69.9919 14.1791 69.3298 14.7248 68.8119C15.3207 68.2632 16.0457 67.874 16.8323 67.6803C17.6169 67.4833 18.438 67.4833 19.2226 67.6803C19.9596 67.856 20.6285 68.2446 21.1463 68.7977C21.7003 69.4085 22.094 70.1472 22.2919 70.9477L23.0133 73.5502L14.3994 75.8699L13.6781 73.1259ZM19.6611 69.3069C18.8937 68.9507 18.0205 68.8952 17.2141 69.1513C16.3889 69.3235 15.6604 69.8041 15.1774 70.4951C14.9674 70.8364 14.8323 71.2184 14.7811 71.6159C14.7299 72.0134 14.7637 72.4172 14.8803 72.8006L15.234 74.1301L21.3726 72.5035L21.0331 71.174C20.9492 70.7836 20.7835 70.4153 20.547 70.0935C20.3105 69.7718 20.0086 69.5037 19.6611 69.3069Z" fill="#0B4D99" />
                        <path d="M11.909 57.1004L15.6431 57.4823L16.0674 53.3663L12.3192 52.9844L12.4748 51.5699L21.3574 52.461L21.2018 53.8755L17.3546 53.4936L16.9444 57.6095L20.7916 57.9914L20.6502 59.4059L11.7676 58.5572L11.909 57.1004Z" fill="#0B4D99" />
                        <path d="M15.4314 41.4426L16.662 41.8528L15.2475 45.9829L17.5955 46.775L18.7412 43.3804L19.9293 43.7764L18.7836 47.1852L21.2306 48.0056L22.645 43.7623L23.8755 44.1866L21.9661 49.8443L13.4795 47.0155L15.4314 41.4426Z" fill="#0B4D99" />
                        <path d="M17.2559 37.5955L17.9914 36.3225L24.5684 40.1415L26.4921 36.7751L27.6236 37.4258L24.9645 42.0085L17.2559 37.5955Z" fill="#0B4D99" />
                        <path d="M25.9832 26.1103C26.4324 25.9328 26.9221 25.8838 27.3976 25.9689C27.9283 26.0694 28.4191 26.3197 28.812 26.6902C29.2117 27.0267 29.5103 27.4673 29.6748 27.9632C29.8054 28.4256 29.8054 28.9152 29.6748 29.3776C29.5133 29.9057 29.2326 30.3896 28.8545 30.7921L27.44 32.3196L29.8446 34.4696L28.8686 35.5728L22.3057 29.7029L24.6536 27.0863C25.0151 26.6622 25.4703 26.3281 25.9832 26.1103ZM27.8361 30.1131C28.1591 29.7891 28.3462 29.354 28.3594 28.8967C28.3584 28.6843 28.3096 28.4748 28.2166 28.2838C28.1235 28.0928 27.9886 27.9252 27.8219 27.7935C27.6733 27.6396 27.4917 27.5215 27.2908 27.448C27.0899 27.3745 26.8749 27.3476 26.6621 27.3691C26.2111 27.4317 25.8012 27.6645 25.5164 28.0198L24.2293 29.4342L26.5631 31.5134L27.8361 30.1131Z" fill="#0B4D99" />
                        <path d="M30.8623 21.7256C31.0953 21.2176 31.462 20.7825 31.9231 20.4668C32.3174 20.1502 32.776 19.9233 33.2669 19.802C33.694 19.7035 34.1402 19.728 34.554 19.8727C34.951 20.019 35.2956 20.2799 35.5441 20.6224C35.8255 20.9743 35.9932 21.4035 36.025 21.8529C36.032 22.2958 35.9602 22.7365 35.8128 23.1542C35.6773 23.5053 35.5824 23.8707 35.5299 24.2433C35.5171 24.5074 35.5972 24.7676 35.7562 24.9788L35.9118 25.1768L34.8652 25.9548L34.6813 25.6295C34.5012 25.4086 34.3795 25.1459 34.3277 24.8657C34.2781 24.623 34.2781 24.3728 34.3277 24.1302C34.3277 23.9039 34.4833 23.6068 34.6106 23.2532C34.729 22.9664 34.7868 22.6582 34.7803 22.348C34.7752 22.0754 34.6808 21.812 34.5115 21.5983C34.4164 21.4605 34.2926 21.3448 34.1485 21.2594C34.0045 21.1739 33.8436 21.1207 33.677 21.1033C33.2983 21.0838 32.9256 21.2047 32.6304 21.4427C32.4446 21.5611 32.289 21.7212 32.1761 21.9103C32.0631 22.0993 31.9959 22.3122 31.9797 22.5319C31.9428 22.9957 32.0845 23.4561 32.3758 23.819L31.2442 24.6535C30.9303 24.238 30.7216 23.7527 30.636 23.2391C30.5632 22.7233 30.6418 22.1975 30.8623 21.7256ZM36.0957 26.4781C36.2778 26.341 36.506 26.2801 36.7322 26.3084C36.8463 26.3235 36.9558 26.3629 37.0534 26.4239C37.151 26.4849 37.2344 26.5661 37.298 26.662C37.4338 26.8447 37.4945 27.0724 37.4677 27.2985C37.4199 27.5263 37.2888 27.7281 37.0999 27.8642C36.9131 28.0035 36.6814 28.0689 36.4493 28.0481C36.2226 28.0066 36.0202 27.8801 35.8835 27.6945C35.8117 27.604 35.7606 27.4988 35.7337 27.3864C35.7068 27.274 35.7049 27.1571 35.728 27.0439C35.7456 26.9289 35.7876 26.819 35.851 26.7214C35.9144 26.6239 35.9978 26.5409 36.0957 26.4781Z" fill="#0B4D99" />
                        <path d="M49.3633 12.3479L49.7594 13.5926L47.1285 14.413L49.4199 21.6831L48.0055 22.1216L45.7424 14.8514L43.1682 15.6859L42.7863 14.4413L49.3633 12.3479Z" fill="#0B4D99" />
                        <path d="M54.6956 11.5134L56.4354 11.3154L60.6787 19.802L59.1087 19.9717L58.0478 17.8642L54.4835 18.2886L53.8894 20.5658L52.376 20.7214L54.6956 11.5134ZM57.5245 16.7044L55.6857 12.9986L54.6815 16.9731L57.5245 16.7044Z" fill="#0B4D99" />
                        <path d="M63.6488 11.1881L65.0632 11.3437L64.2428 18.9109L68.0476 19.3069L67.9062 20.6082L62.6445 20.0424L63.6488 11.1881Z" fill="#0B4D99" />
                        <path d="M74.2849 13.0268L72.8704 17.3974L78.2028 14.3139L79.9001 14.8797L75.6569 17.3832L77.3542 23.4228L75.6993 22.8571L74.2849 18.1187L72.2622 19.2786L71.5267 21.4851L70.1123 21.0325L72.9412 12.5459L74.2849 13.0268Z" fill="#0B4D99" />
                        <path d="M93.6631 23.7624L92.8569 24.7808L90.6928 23.0834L85.9828 29.0523L84.8371 28.1471L89.5471 22.1782L87.3972 20.4668L88.1893 19.4484L93.6631 23.7624Z" fill="#0B4D99" />
                        <path d="M93.5782 36.2942C92.8381 36.0026 92.1922 35.5133 91.7112 34.8797C91.2064 34.2784 90.8783 33.5489 90.7635 32.7722C90.6505 32.0247 90.7485 31.2605 91.0464 30.5657C91.384 29.8306 91.8861 29.1829 92.514 28.6727C93.1418 28.1626 93.8786 27.8037 94.6673 27.6237C95.4103 27.4782 96.1791 27.5418 96.888 27.8076C97.6307 28.0946 98.2777 28.5847 98.755 29.222C99.2684 29.8228 99.6104 30.5508 99.7451 31.3295C99.8599 32.0783 99.7568 32.8443 99.4481 33.536C99.1423 34.276 98.656 34.9276 98.0337 35.4314C97.4089 35.9523 96.6658 36.3117 95.8696 36.478C95.1039 36.6372 94.3087 36.5734 93.5782 36.2942ZM92.1638 32.7157C92.2184 33.2379 92.4305 33.7312 92.772 34.1301C93.0908 34.5393 93.524 34.8446 94.0167 35.007C94.5149 35.1564 95.046 35.1564 95.5443 35.007C96.1038 34.8687 96.6255 34.6079 97.0718 34.2432C97.523 33.8839 97.89 33.4301 98.1468 32.9137C98.3453 32.4454 98.4089 31.931 98.3307 31.4285C98.2761 30.9063 98.064 30.413 97.7225 30.0141C97.4037 29.6049 96.9704 29.2996 96.4778 29.1372C95.9782 28.9971 95.4498 28.9971 94.9502 29.1372C94.3922 29.2868 93.8718 29.5518 93.4226 29.9151C92.9714 30.2744 92.6045 30.7282 92.3477 31.2447C92.1374 31.7047 92.0544 32.2126 92.1072 32.7157H92.1638Z" fill="#0B4D99" />
                        <path d="M107.001 44.2575L107.539 45.9124L100.056 51.8105L99.5753 50.3112L101.414 48.8968L100.311 45.4173L97.9487 45.2617L97.4961 43.8473L107.001 44.2575ZM102.489 48.0906L105.756 45.5446L101.626 45.3749L102.489 48.0906Z" fill="#0B4D99" />
                        <path d="M109.221 53.0835L109.306 54.4131L103.309 59.1655L109.603 58.7412L109.702 60.1556L100.82 60.8204L100.721 59.406L106.732 54.6535L100.438 55.0778L100.339 53.6634L109.221 53.0835Z" fill="#0B4D99" />
                        <path d="M106.931 76.2234L105.672 75.884L106.86 71.6407L104.484 70.9759L103.508 74.4271L102.291 74.0876L103.267 70.7213L100.778 70.0141L99.5616 74.3564L98.3311 73.9603L99.9576 68.2036L108.529 70.6223L106.931 76.2234Z" fill="#0B4D99" />
                        <path d="M105.403 79.9858L104.583 81.5133L100.821 81.7962L102.631 85.106L101.867 86.5204L99.4344 82.0367L94.0879 82.4186L94.9224 80.8627L98.9252 80.5374L96.9167 76.9872L97.6805 75.5728L100.255 80.3677L105.403 79.9858Z" fill="#0B4D99" />
                        <path d="M95.7285 93.6209C95.2826 93.8109 94.7906 93.865 94.3141 93.7765C93.7865 93.684 93.296 93.4437 92.8996 93.0834C92.4978 92.743 92.199 92.2972 92.0368 91.7963C91.8967 91.3352 91.8967 90.8429 92.0368 90.3818C92.1858 89.8515 92.4626 89.3658 92.843 88.9674L94.2575 87.4257L91.8388 85.2899L92.8148 84.1866L99.4908 90.0848L97.058 92.6449C96.7006 93.0733 96.2443 93.4083 95.7285 93.6209ZM93.8473 89.6322C93.6858 89.7938 93.5577 89.9857 93.4703 90.1968C93.3829 90.408 93.338 90.6342 93.3381 90.8627C93.3707 91.288 93.5677 91.6838 93.8871 91.9663C94.2066 92.2488 94.6235 92.3958 95.0496 92.3762C95.4991 92.3108 95.9052 92.0722 96.1811 91.7114L97.4682 90.297L95.1203 88.2319L93.8473 89.6322Z" fill="#0B4D99" />
                        <path d="M87.241 101.146L86.463 100.099L89.9708 97.5954L88.5564 95.6011L85.6002 97.6662L84.8506 96.6478L87.7502 94.512L86.2084 92.4328L82.5875 95.1061L81.8096 94.0594L86.6186 90.5233L91.9086 97.6945L87.241 101.146Z" fill="#0B4D99" />
                        <path d="M78.6131 105.134C78.1044 105.13 77.6097 104.967 77.1987 104.668C76.7678 104.365 76.4299 103.949 76.2227 103.465C75.9938 102.955 75.9343 102.385 76.053 101.839C76.1421 101.295 76.411 100.797 76.8168 100.424L73.6484 97.9491L75.1336 97.2843L77.9624 99.5474L79.7871 98.7412L78.5282 95.8133L79.8578 95.2192L83.4928 103.366L80.2821 104.781C79.763 105.033 79.1899 105.154 78.6131 105.134ZM78.6131 100.721C78.1884 100.889 77.8441 101.213 77.6513 101.627C77.4926 102.019 77.4958 102.458 77.6601 102.847C77.8245 103.237 78.1367 103.546 78.5282 103.706C78.9665 103.837 79.4385 103.791 79.8436 103.579L81.6117 102.801L80.3387 99.9717L78.6131 100.721Z" fill="#0B4D99" />
                        <path d="M67.4118 108.515L67.1572 107.242L69.8446 106.676L68.2746 99.2221L69.6891 98.925L71.2449 106.379L73.9323 105.813L74.2011 107.086L67.4118 108.515Z" fill="#0B4D99" />
                        <path d="M61.1172 90.9052C55.1003 90.8912 49.2223 89.095 44.2253 85.7435C39.2282 82.392 35.336 77.6352 33.0399 72.0736C30.7438 66.512 30.1467 60.3949 31.324 54.4943C32.5012 48.5936 35.4001 43.174 39.6547 38.9194C43.9093 34.6648 49.329 31.7659 55.2296 30.5886C61.1302 29.4113 67.2474 30.0084 72.809 32.3046C78.3706 34.6007 83.1273 38.4929 86.4789 43.4899C89.8304 48.487 91.6265 54.3649 91.6405 60.3818C91.6442 64.3912 90.8573 68.3621 89.3246 72.067C87.792 75.7719 85.5438 79.1383 82.7087 81.9734C79.8736 84.8085 76.5073 87.0567 72.8023 88.5893C69.0974 90.1219 65.1266 90.9089 61.1172 90.9052ZM61.1172 31.1315C55.315 31.1315 49.6433 32.8529 44.8199 36.0779C39.9966 39.3029 36.2385 43.8864 34.0213 49.2483C31.8042 54.6101 31.2277 60.5092 32.3648 66.1989C33.5019 71.8885 36.3015 77.1129 40.4092 81.2107C44.5169 85.3085 49.748 88.0955 55.4404 89.2188C61.1328 90.3422 67.0305 89.7514 72.3869 87.5213C77.7434 85.2912 82.3178 81.5221 85.5312 76.691C88.7445 71.8598 90.4522 66.184 90.4382 60.3818C90.4308 52.6077 87.3392 45.1541 81.842 39.657C76.3449 34.1598 68.8913 31.0682 61.1172 31.0608V31.1315Z" fill="#0B4D99" />
                        <path d="M60.7354 120C48.8685 120 37.2681 116.481 27.4012 109.888C17.5342 103.295 9.84386 93.9246 5.30261 82.961C0.761349 71.9974 -0.426851 59.9335 1.88826 48.2946C4.20337 36.6557 9.91782 25.9648 18.309 17.5736C26.7001 9.18247 37.3911 3.46802 49.0299 1.15291C60.6688 -1.1622 72.7328 0.0259971 83.6964 4.56725C94.6599 9.10851 104.031 16.7989 110.624 26.6658C117.216 36.5328 120.735 48.1331 120.735 60C120.717 75.9072 114.389 91.1576 103.141 102.406C91.893 113.654 76.6426 119.981 60.7354 120ZM60.7354 1.18815C49.0875 1.17696 37.6981 4.62145 28.0085 11.0857C18.319 17.5499 10.7649 26.7434 6.30229 37.5025C1.83967 48.2616 0.669106 60.1027 2.93875 71.5274C5.2084 82.952 10.8162 93.4465 19.0525 101.683C27.2888 109.919 37.7834 115.527 49.208 117.797C60.6326 120.066 72.4738 118.896 83.2329 114.433C93.992 109.97 103.185 102.416 109.65 92.7269C116.114 83.0373 119.558 71.6479 119.547 60C119.529 44.4027 113.328 29.4487 102.304 18.4144C91.2807 7.38005 76.3327 1.16524 60.7354 1.13157V1.18815Z" fill="#0B4D99" />
                        <path d="M51.8526 107.115C53.9696 107.115 55.6857 105.398 55.6857 103.281C55.6857 101.164 53.9696 99.4484 51.8526 99.4484C49.7357 99.4484 48.0195 101.164 48.0195 103.281C48.0195 105.398 49.7357 107.115 51.8526 107.115Z" fill="#0B4D99" />
                        <path d="M55.7354 65L65.7354 55" stroke="#0B4D99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M55.7354 55H65.7354V65" stroke="#0B4D99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className=" container mx-auto px-3">


                    <div className=" pb-10">
                        <div className=" max-md:text-center text-white">
                            <h1 className={`${babas_neue.className} text-8xl max-md:text-7xl max-sm:text-6xl`}>Popular <span className=" text-blue-500">Services</span></h1>
                            <p className=" w-1/2 max-md:w-5/6 max-md:mx-auto">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <div className=" mt-10 max-md:mt-5">
                            <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center">
                                {
                                    cardsInfo.map((item, index) => (
                                        <ServiceCard key={index} item={item} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-white rotate-450 bottom-0 right-0 absolute md:w-18 md:h-18" style={{ clipPath: "polygon(0 0, 100% 100%, 150% 0%)" }}>

            </div>
        </div>
    )
}

export default Service_section

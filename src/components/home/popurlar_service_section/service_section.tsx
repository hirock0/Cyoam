import ServiceCard from "@/components/serviceCard/serviceCard";
import Left_top_cut from "@/components/ui/corner_cut/left_top_cut";
import { Bebas_Neue } from "next/font/google";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const Service_section = () => {
  const cardsInfo = [
    {
      title: "Development",
      descriptions:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
      image:
        "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
    },
    {
      title: "Ui/UX Design",
      descriptions:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
      image:
        "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
    },
    {
      title: "SEO Management",
      descriptions:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
      image:
        "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
    },
  ];
  const cardsInfo2 = [
    {
      title: "Development",
      descriptions:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
      image:
        "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__",
    },
  ];
  return (
    <div className=""
      style={{
        background: "url(https://s3-alpha-sig.figma.com/img/b142/a588/d03272cac3c5aa7d668764cf919f523d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LiahZN8SiiW4bJjD5hnsZXxQxd5lA2~cIeA46A8Jet~vx1AD~HGDXK3QpxqxutkWKbdr6piZcngmlJQfRupD7KOCYot2d6a0fB6nAAG3ZDN3x8i3ZHAeJJilW4ggvDp-PW~bJjpFZfSNizxs8Fks4V749KXlIegjHjjtcjjfD2jpYYRXKXedN22g7kLajgnaLIKUp-cugOJ88~whPeSMOyzZdLk1C1pi4KpLcCgpZCRTt4hGGeu4DjGXvUkoLTTZDpDAf62QdEM6nUVHBRs-HbGWHV2i8wamiCPQWogzHgnMFvinfaBOtPIUGtiGKhu5Jcx5E3jnnUnAEBdsImP55Q__)",
      }}
    >

      <div className="bg-[#f6f6f6f6]">
      <div className=" lg:h-[1018px] relative ">
          {/* top_left_cut_start */}
          <Left_top_cut />
          {/* top_left_cut_send */}
          <div className=" h-full   ">
            <div className=" right-0 -top-[60px] absolute left-0 w-full z-30 flex justify-center ">
              <svg
                width="120"
                height="120"
                className=" "
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="60" fill="white" />
                <path
                  d="M33.0122 100.877L31.9514 100.057L32.3757 92.4045L28.5144 97.4116L27.3828 96.5347L32.8142 89.4625L33.875 90.2687L33.4648 97.9208L37.3121 92.9279L38.4578 93.8048L33.0122 100.877Z"
                  fill="#0B4D99"
                />
                <path
                  d="M20.3672 88.6987L21.3573 87.8783L24.1861 91.2305L26.0956 89.6605L23.8042 86.8316L24.7802 86.0254L27.0574 88.8543L29.0518 87.2135L26.2229 83.734L27.2272 82.8995L31.0178 87.5106L24.1437 93.1683L20.3672 88.6987Z"
                  fill="#0B4D99"
                />
                <path
                  d="M15.3039 79.9576L16.4495 79.3635L18.4722 83.2108L20.6645 82.0368L18.9955 78.8544L20.1129 78.2744L21.7819 81.4569L24.045 80.2829L21.9517 76.2942L23.1115 75.686L25.9404 80.976L18.0479 85.1061L15.3039 79.9576Z"
                  fill="#0B4D99"
                />
                <path
                  d="M12.9427 73.1259C12.723 72.3422 12.6987 71.5166 12.872 70.7214C13.0562 69.9919 13.4437 69.3298 13.9894 68.8119C14.5854 68.2632 15.3103 67.874 16.0969 67.6803C16.8815 67.4833 17.7027 67.4833 18.4873 67.6803C19.2242 67.856 19.8932 68.2446 20.4109 68.7977C20.9649 69.4085 21.3586 70.1472 21.5566 70.9477L22.2779 73.5502L13.6641 75.8699L12.9427 73.1259ZM18.9258 69.3069C18.1583 68.9507 17.2852 68.8952 16.4788 69.1513C15.6535 69.3235 14.925 69.8041 14.442 70.4951C14.232 70.8364 14.097 71.2184 14.0458 71.6159C13.9945 72.0134 14.0284 72.4172 14.145 72.8006L14.4986 74.1301L20.6372 72.5035L20.2978 71.174C20.2138 70.7836 20.0481 70.4153 19.8117 70.0935C19.5752 69.7718 19.2733 69.5037 18.9258 69.3069Z"
                  fill="#0B4D99"
                />
                <path
                  d="M11.1737 57.1004L14.9078 57.4823L15.3321 53.3663L11.5839 52.9844L11.7395 51.5699L20.6221 52.461L20.4665 53.8755L16.6192 53.4936L16.2091 57.6095L20.0563 57.9914L19.9149 59.4059L11.0323 58.5572L11.1737 57.1004Z"
                  fill="#0B4D99"
                />
                <path
                  d="M14.696 41.4426L15.9266 41.8528L14.5122 45.9829L16.8601 46.775L18.0058 43.3804L19.1939 43.7764L18.0482 47.1852L20.4952 48.0056L21.9096 43.7623L23.1402 44.1866L21.2307 49.8443L12.7441 47.0155L14.696 41.4426Z"
                  fill="#0B4D99"
                />
                <path
                  d="M16.5205 37.5955L17.256 36.3225L23.8331 40.1415L25.7567 36.7751L26.8883 37.4258L24.2291 42.0085L16.5205 37.5955Z"
                  fill="#0B4D99"
                />
                <path
                  d="M25.2478 26.1103C25.697 25.9328 26.1868 25.8838 26.6623 25.9689C27.1929 26.0694 27.6837 26.3197 28.0767 26.6902C28.4763 27.0267 28.7749 27.4673 28.9395 27.9632C29.0701 28.4256 29.0701 28.9152 28.9395 29.3776C28.7779 29.9057 28.4972 30.3896 28.1191 30.7921L26.7047 32.3196L29.1092 34.4696L28.1333 35.5728L21.5703 29.7029L23.9183 27.0863C24.2798 26.6622 24.7349 26.3281 25.2478 26.1103ZM27.1007 30.1131C27.4237 29.7891 27.6109 29.354 27.6241 28.8967C27.6231 28.6843 27.5743 28.4748 27.4812 28.2838C27.3882 28.0928 27.2533 27.9252 27.0866 27.7935C26.9379 27.6396 26.7563 27.5215 26.5554 27.448C26.3545 27.3745 26.1396 27.3476 25.9267 27.3691C25.4758 27.4317 25.0658 27.6645 24.7811 28.0198L23.4939 29.4342L25.8277 31.5134L27.1007 30.1131Z"
                  fill="#0B4D99"
                />
                <path
                  d="M30.1269 21.7256C30.3599 21.2176 30.7266 20.7825 31.1878 20.4668C31.582 20.1502 32.0406 19.9233 32.5315 19.802C32.9586 19.7035 33.4049 19.728 33.8186 19.8727C34.2156 20.019 34.5602 20.2799 34.8087 20.6224C35.0901 20.9743 35.2579 21.4035 35.2896 21.8529C35.2966 22.2958 35.2248 22.7365 35.0774 23.1542C34.9419 23.5053 34.847 23.8707 34.7946 24.2433C34.7817 24.5074 34.8618 24.7676 35.0209 24.9788L35.1764 25.1768L34.1298 25.9548L33.9459 25.6295C33.7658 25.4086 33.6442 25.1459 33.5923 24.8657C33.5428 24.623 33.5428 24.3728 33.5923 24.1302C33.5923 23.9039 33.7479 23.6068 33.8752 23.2532C33.9936 22.9664 34.0514 22.6582 34.0449 22.348C34.0398 22.0754 33.9454 21.812 33.7762 21.5983C33.6811 21.4605 33.5572 21.3448 33.4132 21.2594C33.2691 21.1739 33.1082 21.1207 32.9417 21.1033C32.5629 21.0838 32.1902 21.2047 31.895 21.4427C31.7092 21.5611 31.5537 21.7212 31.4407 21.9103C31.3277 22.0993 31.2605 22.3122 31.2443 22.5319C31.2074 22.9957 31.3491 23.4561 31.6404 23.819L30.5088 24.6535C30.1949 24.238 29.9862 23.7527 29.9006 23.2391C29.8278 22.7233 29.9064 22.1975 30.1269 21.7256ZM35.3603 26.4781C35.5424 26.341 35.7707 26.2801 35.9968 26.3084C36.1109 26.3235 36.2204 26.3629 36.318 26.4239C36.4156 26.4849 36.499 26.5661 36.5626 26.662C36.6984 26.8447 36.7591 27.0724 36.7323 27.2985C36.6846 27.5263 36.5534 27.7281 36.3646 27.8642C36.1777 28.0035 35.946 28.0689 35.7139 28.0481C35.4872 28.0066 35.2849 27.8801 35.1482 27.6945C35.0763 27.604 35.0252 27.4988 34.9983 27.3864C34.9714 27.274 34.9695 27.1571 34.9926 27.0439C35.0102 26.9289 35.0522 26.819 35.1156 26.7214C35.179 26.6239 35.2624 26.5409 35.3603 26.4781Z"
                  fill="#0B4D99"
                />
                <path
                  d="M48.628 12.3479L49.024 13.5926L46.3932 14.413L48.6845 21.6831L47.2701 22.1216L45.007 14.8514L42.4328 15.6859L42.0509 14.4413L48.628 12.3479Z"
                  fill="#0B4D99"
                />
                <path
                  d="M53.9603 11.5134L55.7 11.3154L59.9433 19.802L58.3733 19.9717L57.3125 17.8642L53.7481 18.2886L53.1541 20.5658L51.6406 20.7214L53.9603 11.5134ZM56.7891 16.7044L54.9504 12.9986L53.9461 16.9731L56.7891 16.7044Z"
                  fill="#0B4D99"
                />
                <path
                  d="M62.9134 11.1881L64.3278 11.3437L63.5075 18.9109L67.3123 19.3069L67.1708 20.6082L61.9092 20.0424L62.9134 11.1881Z"
                  fill="#0B4D99"
                />
                <path
                  d="M73.5495 13.0268L72.1351 17.3974L77.4675 14.3139L79.1648 14.8797L74.9215 17.3832L76.6188 23.4228L74.9639 22.8571L73.5495 18.1187L71.5269 19.2786L70.7914 21.4851L69.377 21.0325L72.2058 12.5459L73.5495 13.0268Z"
                  fill="#0B4D99"
                />
                <path
                  d="M92.9278 23.7624L92.1215 24.7808L89.9575 23.0834L85.2474 29.0523L84.1017 28.1471L88.8118 22.1782L86.6619 20.4668L87.4539 19.4484L92.9278 23.7624Z"
                  fill="#0B4D99"
                />
                <path
                  d="M92.8429 36.2942C92.1027 36.0026 91.4569 35.5133 90.9758 34.8797C90.471 34.2784 90.143 33.5489 90.0282 32.7722C89.9152 32.0247 90.0131 31.2605 90.311 30.5657C90.6486 29.8306 91.1508 29.1829 91.7786 28.6727C92.4065 28.1626 93.1433 27.8037 93.932 27.6237C94.6749 27.4782 95.4437 27.5418 96.1526 27.8076C96.8954 28.0946 97.5424 28.5847 98.0197 29.222C98.533 29.8228 98.875 30.5508 99.0098 31.3295C99.1246 32.0783 99.0215 32.8443 98.7127 33.536C98.4069 34.276 97.9206 34.9276 97.2983 35.4314C96.6736 35.9523 95.9304 36.3117 95.1342 36.478C94.3686 36.6372 93.5733 36.5734 92.8429 36.2942ZM91.4284 32.7157C91.483 33.2379 91.6951 33.7312 92.0366 34.1301C92.3554 34.5393 92.7887 34.8446 93.2813 35.007C93.7796 35.1564 94.3107 35.1564 94.8089 35.007C95.3684 34.8687 95.8902 34.6079 96.3365 34.2432C96.7877 33.8839 97.1546 33.4301 97.4115 32.9137C97.6099 32.4454 97.6736 31.931 97.5953 31.4285C97.5408 30.9063 97.3286 30.413 96.9871 30.0141C96.6683 29.6049 96.2351 29.2996 95.7424 29.1372C95.2429 28.9971 94.7144 28.9971 94.2149 29.1372C93.6569 29.2868 93.1365 29.5518 92.6873 29.9151C92.2361 30.2744 91.8692 30.7282 91.6123 31.2447C91.4021 31.7047 91.3191 32.2126 91.3719 32.7157H91.4284Z"
                  fill="#0B4D99"
                />
                <path
                  d="M106.266 44.2575L106.803 45.9124L99.3209 51.8105L98.8399 50.3112L100.679 48.8968L99.5754 45.4173L97.2134 45.2617L96.7607 43.8473L106.266 44.2575ZM101.754 48.0906L105.021 45.5446L100.891 45.3749L101.754 48.0906Z"
                  fill="#0B4D99"
                />
                <path
                  d="M108.486 53.0835L108.571 54.4131L102.574 59.1655L108.868 58.7412L108.967 60.1556L100.084 60.8204L99.9854 59.406L105.997 54.6535L99.7025 55.0778L99.6035 53.6634L108.486 53.0835Z"
                  fill="#0B4D99"
                />
                <path
                  d="M106.195 76.2234L104.937 75.884L106.125 71.6407L103.748 70.9759L102.773 74.4271L101.556 74.0876L102.532 70.7213L100.043 70.0141L98.8263 74.3564L97.5957 73.9603L99.2223 68.2036L107.794 70.6223L106.195 76.2234Z"
                  fill="#0B4D99"
                />
                <path
                  d="M104.668 79.9858L103.848 81.5133L100.085 81.7962L101.896 85.106L101.132 86.5204L98.6991 82.0367L93.3525 82.4186L94.187 80.8627L98.1899 80.5374L96.1814 76.9872L96.9452 75.5728L99.5194 80.3677L104.668 79.9858Z"
                  fill="#0B4D99"
                />
                <path
                  d="M94.9931 93.6209C94.5473 93.8109 94.0552 93.865 93.5787 93.7765C93.0511 93.684 92.5606 93.4437 92.1643 93.0834C91.7625 92.743 91.4637 92.2972 91.3015 91.7963C91.1614 91.3352 91.1614 90.8429 91.3015 90.3818C91.4504 89.8515 91.7273 89.3658 92.1077 88.9674L93.5221 87.4257L91.1035 85.2899L92.0794 84.1866L98.7555 90.0848L96.3227 92.6449C95.9653 93.0733 95.509 93.4083 94.9931 93.6209ZM93.1119 89.6322C92.9504 89.7938 92.8223 89.9857 92.7349 90.1968C92.6476 90.408 92.6026 90.6342 92.6027 90.8627C92.6354 91.288 92.8323 91.6838 93.1518 91.9663C93.4713 92.2488 93.8882 92.3958 94.3142 92.3762C94.7637 92.3108 95.1698 92.0722 95.4457 91.7114L96.7329 90.297L94.3849 88.2319L93.1119 89.6322Z"
                  fill="#0B4D99"
                />
                <path
                  d="M86.5056 101.146L85.7277 100.099L89.2355 97.5954L87.821 95.6011L84.8649 97.6662L84.1152 96.6478L87.0148 94.512L85.4731 92.4328L81.8522 95.1061L81.0742 94.0594L85.8833 90.5233L91.1732 97.6945L86.5056 101.146Z"
                  fill="#0B4D99"
                />
                <path
                  d="M77.8777 105.134C77.369 105.13 76.8744 104.967 76.4633 104.668C76.0325 104.365 75.6945 103.949 75.4873 103.465C75.2584 102.955 75.1989 102.385 75.3176 101.839C75.4067 101.295 75.6757 100.797 76.0814 100.424L72.9131 97.9491L74.3982 97.2843L77.2271 99.5474L79.0517 98.7412L77.7929 95.8133L79.1224 95.2192L82.7575 103.366L79.5468 104.781C79.0276 105.033 78.4546 105.154 77.8777 105.134ZM77.8777 100.721C77.453 100.889 77.1087 101.213 76.9159 101.627C76.7572 102.019 76.7604 102.458 76.9248 102.847C77.0892 103.237 77.4013 103.546 77.7929 103.706C78.2312 103.837 78.7032 103.791 79.1083 103.579L80.8763 102.801L79.6033 99.9717L77.8777 100.721Z"
                  fill="#0B4D99"
                />
                <path
                  d="M66.6765 108.515L66.4219 107.242L69.1093 106.676L67.5393 99.2221L68.9537 98.925L70.5096 106.379L73.197 105.813L73.4657 107.086L66.6765 108.515Z"
                  fill="#0B4D99"
                />
                <path
                  d="M60.3818 90.9052C54.3649 90.8912 48.487 89.095 43.4899 85.7435C38.4929 82.392 34.6007 77.6352 32.3046 72.0736C30.0084 66.512 29.4113 60.3949 30.5886 54.4943C31.7659 48.5936 34.6648 43.174 38.9194 38.9194C43.174 34.6648 48.5936 31.7659 54.4943 30.5886C60.3949 29.4113 66.512 30.0084 72.0736 32.3046C77.6352 34.6007 82.392 38.4929 85.7435 43.4899C89.095 48.487 90.8912 54.3649 90.9052 60.3818C90.9089 64.3912 90.1219 68.3621 88.5893 72.067C87.0567 75.7719 84.8085 79.1383 81.9734 81.9734C79.1383 84.8085 75.7719 87.0567 72.067 88.5893C68.3621 90.1219 64.3912 90.9089 60.3818 90.9052ZM60.3818 31.1315C54.5796 31.1315 48.9079 32.8529 44.0846 36.0779C39.2612 39.3029 35.5031 43.8864 33.286 49.2483C31.0688 54.6101 30.4923 60.5092 31.6294 66.1989C32.7665 71.8885 35.5661 77.1129 39.6738 81.2107C43.7815 85.3085 49.0127 88.0955 54.705 89.2188C60.3974 90.3422 66.2951 89.7514 71.6516 87.5213C77.0081 85.2912 81.5825 81.5221 84.7958 76.691C88.0091 71.8598 89.7169 66.184 89.7029 60.3818C89.6954 52.6077 86.6038 45.1541 81.1067 39.657C75.6095 34.1598 68.1559 31.0682 60.3818 31.0608V31.1315Z"
                  fill="#0B4D99"
                />
                <path
                  d="M60 120C48.1331 120 36.5328 116.481 26.6658 109.888C16.7989 103.295 9.10851 93.9246 4.56725 82.961C0.0259971 71.9974 -1.1622 59.9335 1.15291 48.2946C3.46802 36.6557 9.18247 25.9648 17.5736 17.5736C25.9648 9.18247 36.6557 3.46802 48.2946 1.15291C59.9335 -1.1622 71.9974 0.0259971 82.961 4.56725C93.9246 9.10851 103.295 16.7989 109.888 26.6658C116.481 36.5328 120 48.1331 120 60C119.981 75.9072 113.654 91.1576 102.406 102.406C91.1576 113.654 75.9072 119.981 60 120ZM60 1.18815C48.3521 1.17696 36.9627 4.62145 27.2732 11.0857C17.5836 17.5499 10.0296 26.7434 5.56694 37.5025C1.10431 48.2616 -0.0662451 60.1027 2.2034 71.5274C4.47305 82.952 10.0809 93.4465 18.3172 101.683C26.5535 109.919 37.048 115.527 48.4727 117.797C59.8973 120.066 71.7384 118.896 82.4976 114.433C93.2567 109.97 102.45 102.416 108.914 92.7269C115.379 83.0373 118.823 71.6479 118.812 60C118.793 44.4027 112.593 29.4487 101.569 18.4144C90.5454 7.38005 75.5973 1.16524 60 1.13157V1.18815Z"
                  fill="#0B4D99"
                />
                <path
                  d="M51.1173 107.115C53.2342 107.115 54.9504 105.398 54.9504 103.281C54.9504 101.164 53.2342 99.4484 51.1173 99.4484C49.0003 99.4484 47.2842 101.164 47.2842 103.281C47.2842 105.398 49.0003 107.115 51.1173 107.115Z"
                  fill="#0B4D99"
                />
                <path
                  d="M55 65L65 55"
                  stroke="#0B4D99"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M55 55H65V65"
                  stroke="#0B4D99"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* ........ */}
            <div
              style={{
                background:
                  "url(https://s3-alpha-sig.figma.com/img/6580/8079/311c027968265125a07f026a1fd271c6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kpYyAWvFlu~tJRg9zxavXEqmGoEumAR385UqDg0QE7eL9GkUP4wgJ6z7LxWeEbRRujoDxCQF~mEOZvKl0OK9BRWt1M2or3sIZ3bCGPFoq4ohJ-ZSAq-EjIwSOjuigl7f~osjojNwJIrFd2J9N-lY4~Ts2Zs3cdKbiKBqGX4k-fJ5qcgxdg2tC0zhAL2N7e2b-AXGvPmZ3UUrQQq6l2LjlA133Wb8PXLQBqrEfx8mDNPyEn-9CBLX3irHRfs~r9dIsz~JM1zf2JNbjNxyZAmXLhfE2f7j6Sm9exgTLFTvYgvyQ5UQWtOX0objwT4bseA-ag80eM-UIysKS8xqIrsVww__)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                MozBackgroundSize:"cover"
              }}
              className="  h-full section_corner_cut_bottom_right "
            >
              {/* main_start */}
              {/* Element_start */}

              <section className="px-[7.52%] max-sm:px-[6.52%] mx-auto">
                <div className="  py-[120px] text-white">
                  <h1
                    className={`${babas_neue.className} text-8xl leading-[81px] tracking-[-2px] max-md:text-7xl max-sm:text-6xl`}
                  >
                    Popular <span className=" text-[#00AEEF]">Services</span>
                  </h1>

                  <p className=" text-[1.125rem] leading-7 tracking-[0px] my-[40px] w-1/2 max-md:w-5/6 max-md:mt-0 max-md:my-[32px] ">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </p>

                  <div className="">
                    <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-md:hidden gap-5 justify-items-center">
                      {cardsInfo.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                      ))}
                    </div>

                    <div className=" md:hidden">
                      {cardsInfo2.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Elelement_end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_section;

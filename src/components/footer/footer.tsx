import { FaDribbble, FaInstagram, FaBehance } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-white py-20">
            <div className=" container mx-auto px-3">
                <div className=" grid md:grid-cols-4 gap-8 text-gray-700 justify-items-center">
                    {/* Logo & Description */}
                    <div>

                        <div className="flex items-center gap-2 ">
                            <svg width="265" height="51" className=" max-lg:w-52 max-md:w-full" viewBox="0 0 265 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1412_3564)">
                                    <path d="M96.0085 15.1199H84.2594C82.0798 15.1199 80.2136 15.91 78.6539 17.497C77.0942 19.0771 76.3177 20.957 76.3177 23.1365V27.4139C76.3177 29.5934 77.0942 31.4596 78.6539 33.0194C80.2136 34.5791 82.0798 35.3556 84.2594 35.3556H96.0085V42.9022H84.2594C80.0025 42.9022 76.3586 41.3833 73.3276 38.3524C70.2899 35.3147 68.7778 31.6708 68.7778 27.4207V23.1433C68.7778 18.8387 70.2967 15.1676 73.3276 12.1298C76.3654 9.09211 80.0093 7.57324 84.2594 7.57324H96.0085V15.1199Z" fill="#4D4D4D" />
                                    <path d="M109.161 8.03613L119.275 22.748L129.389 8.03613H138.571L114.678 42.827H105.496L114.678 29.4433L99.9657 8.04294H109.147L109.161 8.03613Z" fill="#4D4D4D" />
                                    <path d="M155.605 7.80469H159.106C163.928 7.80469 168.056 9.52789 171.482 12.9811C174.908 16.4343 176.617 20.5686 176.617 25.3977C176.617 30.2267 174.908 34.3474 171.482 37.7734C168.056 41.1993 163.935 42.9089 159.106 42.9089H155.605C150.783 42.9089 146.656 41.1993 143.23 37.7734C139.804 34.3474 138.094 30.2267 138.094 25.3977C138.094 20.5686 139.804 16.4343 143.23 12.9811C146.656 9.5347 150.776 7.80469 155.605 7.80469ZM159.106 16.4411H155.605C153.167 16.4411 151.076 17.3265 149.339 19.0838C147.602 20.8479 146.73 22.9525 146.73 25.3908C146.73 27.8292 147.595 29.9202 149.339 31.657C151.076 33.3938 153.167 34.2657 155.605 34.2657H159.106C161.544 34.2657 163.635 33.4007 165.372 31.657C167.109 29.9202 167.981 27.8292 167.981 25.3908C167.981 22.9525 167.109 20.8479 165.372 19.0838C163.635 17.3197 161.544 16.4411 159.106 16.4411Z" fill="#4D4D4D" />
                                    <path d="M185.002 7.25972H199.945C203.889 7.25972 207.002 8.73772 209.283 11.6937C211.306 14.2342 212.369 17.5308 212.471 21.5766V42.902H192.004C189.048 42.902 186.527 41.8667 184.457 39.7893C182.38 37.712 181.344 35.2123 181.344 32.2767C181.344 29.3412 182.38 26.8415 184.457 24.7641V24.6824C186.534 22.605 189.048 21.5698 192.004 21.5698H204.842C204.788 19.2336 204.298 17.4695 203.364 16.2776C202.588 15.3444 201.444 14.8745 199.938 14.8745H184.995V7.24609L185.002 7.25972ZM204.924 35.3553V29.13H192.004C191.173 29.13 190.444 29.4433 189.824 30.0631C189.197 30.683 188.891 31.4254 188.891 32.2836C188.891 33.1417 189.204 33.8501 189.824 34.4222C190.444 35.0488 191.173 35.3553 192.004 35.3553H204.924Z" fill="#4D4D4D" />
                                    <path d="M235.274 9.05078C237.815 9.05078 240.076 9.88173 242.044 11.5436C243.965 9.88173 246.192 9.05078 248.74 9.05078H254.42C257.328 9.05078 259.801 10.0793 261.851 12.1226C263.901 14.1727 264.923 16.6519 264.923 19.5534V42.9017H257.376V19.5534C257.376 18.777 257.076 18.0891 256.484 17.4897C255.884 16.8903 255.203 16.5974 254.42 16.5974H248.74C247.963 16.5974 247.275 16.8971 246.676 17.4897C246.077 18.0891 245.784 18.7702 245.784 19.5534V42.9017H238.237V19.5534C238.237 18.777 237.951 18.0891 237.379 17.4897C236.807 16.8903 236.105 16.5974 235.274 16.5974H230.758C229.928 16.5974 229.226 16.8971 228.661 17.4897C228.089 18.0891 227.802 18.7702 227.802 19.5534L227.728 42.9017H220.181L220.256 19.5534C220.256 16.6451 221.291 14.1863 223.368 12.1634C225.391 10.0861 227.857 9.05078 230.765 9.05078H235.281H235.274Z" fill="#4D4D4D" />
                                    <path d="M45.0413 28.9258L27.7344 50.0469L57.6349 50.0809C59.2628 50.0809 60.155 48.1943 59.1266 46.941L45.0413 28.9258Z" fill="#0C5DB6" />
                                    <path d="M57.6554 0.0810547L21.5908 0.0946768C21.0187 0.0946768 20.4738 0.353497 20.106 0.796216L19.3772 1.68165L1.17126 23.8585C0.885195 24.2058 0.742163 24.6349 0.735352 25.064C0.735352 25.4931 0.885195 25.9154 1.17126 26.2696L20.6713 50.0402H20.6986L41.1999 25.0708L59.1402 3.22776C60.1687 1.96772 59.2764 0.0810547 57.6554 0.0810547Z" fill="#00AEEF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1412_3564">
                                        <rect width="264.194" height="50" fill="white" transform="translate(0.735352 0.0810547)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>



                        <p className="mt-3 text-sm">A modern agency with new solution to creating website</p>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="text-gray-900 font-semibold underline underline-offset-4 decoration-2 decoration-blue-500 ">Menu</h3>
                        <ul className="mt-2 space-y-1">
                            <li><Link href="#" className="hover:text-blue-600">All Portfolio</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Products</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Collections</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">About us</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-gray-900 font-semibold underline underline-offset-4 decoration-2 decoration-blue-500">Resource</h3>
                        <ul className="mt-2 space-y-1">
                            <li><Link href="#" className="hover:text-blue-600">Help center</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Docs</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Newsletter</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-gray-900 font-semibold underline underline-offset-4 decoration-2 decoration-blue-500">Company</h3>
                        <ul className="mt-2 space-y-1">
                            <li><Link href="#" className="hover:text-blue-600">About us</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Contact us</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Support</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="relative z-50 ">
                    <div className=" absolute -top-10">
                        <svg width="125" height="80" viewBox="0 0 125 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="84.6556" y="79.5981" width="56" height="56" transform="rotate(-135 84.6556 79.5981)" fill="#00AEEF" />
                            <rect x="40.3333" y="79.5981" width="56" height="56" transform="rotate(-135 40.3333 79.5981)" fill="#00AEEF" />
                            <rect x="62.4946" y="79.5981" width="56" height="56" transform="rotate(-135 62.4946 79.5981)" fill="#0C5DB6" />
                        </svg>

                    </div>


                    <div className=" mt-10 border-t relative z50 bg-white border-gray-200 pt-6 flex justify-between items-center px-6 lg:px-20">
                        <p className="text-sm text-gray-500">@2025 All Right Reserved.</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-blue-500 text-white rounded-md"><FaDribbble /></Link>
                            <Link href="#" className="p-2 bg-blue-500 text-white rounded-md"><FaInstagram /></Link>
                            <Link href="#" className="p-2 bg-blue-500 text-white rounded-md"><FaBehance /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

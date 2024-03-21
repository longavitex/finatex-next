import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavFour = () => {
    return (
        <>
            <div className="top-nav style-one bg-white">
                <div className="container flex items-center justify-between h-16">
                    <Link className="menu-left-block" href="/">
                        <Image
                            src={'/images/Logo.png'}
                            width={1800}
                            height={1600}
                            alt="logo"
                            priority={true}
                            className="w-[149px] max-sm:w-[132px]"
                        />
                    </Link>
                    <div className="right-block flex items-center gap-8">
                        <div className="location flex items-center max-lg:hidden">
                            <Icon.MapPin className=" text-xl" />
                            <span className="ml-2 caption1 ">160 Broadway 15th floor, New York</span>
                        </div>
                        <div className="list-social style-two flex items-center gap-2.5 max-sm:hidden">
                            <div className="caption2">Follow Us</div>
                            <Link className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center" href="https://www.facebook.com/" target="_blank">
                                <i className="icon-facebook text-sm"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center" href="https://www.linkedin.com/" target="_blank">
                                <i className="icon-in text-xs"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center" href="https://www.twitter.com/" target="_blank">
                                <i className="icon-twitter text-[10px]"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center" href="https://www.instagram.com/" target="_blank">
                                <i className="icon-insta text-[10px]"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border flex items-center justify-center" href="https://www.youtube.com/" target="_blank">
                                <i className="icon-youtube text-[10px]"></i>
                            </Link>
                        </div>
                        <div className="select-block relative">
                            <select className="border-none outline-none bg-white p-2 caption2">
                                <option value="English">English</option>
                                <option value="France">France</option>
                                <option value="Espana">Espana</option>
                            </select>
                            <Icon.CaretDown weight="bold" className="text-xs icon -right-2" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopNavFour
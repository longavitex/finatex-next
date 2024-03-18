import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavOne = () => {
    return (
        <>
            <div className="top-nav style-one bg-dark">
                <div className="container flex items-center justify-between h-[44px]">
                    <div className="left-block flex items-center">
                        <div className="location flex items-center max-lg:hidden">
                            <Icon.MapPin className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">160 Broadway 15th floor, New York</span>
                        </div>
                        <div className="mail lg:ml-7 flex items-center">
                            <Icon.Envelope className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">hi.avitex@gmail.com</span>
                        </div>
                    </div>
                    <div className="right-block flex items-center gap-5">
                        <div className="select-block relative">
                            <select className="border-none outline-none bg-dark text-white p-2 caption2">
                                <option value="English">English</option>
                                <option value="France">France</option>
                                <option value="Espana">Espana</option>
                            </select>
                            <Icon.CaretDown weight="bold" className="text-xs text-white icon -right-2" />
                        </div>
                        <div className="line h-6 w-px bg-grey max-sm:hidden"> </div>
                        <div className="list-social flex items-center gap-2.5 style-one max-sm:hidden">
                            <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" href="https://www.facebook.com/" target="_blank">
                                <i className="icon-facebook text-sm"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" href="https://www.linkedin.com/" target="_blank">
                                <i className="icon-in text-xs"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" href="https://www.twitter.com/" target="_blank">
                                <i className="icon-twitter text-[10px]"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" href="https://www.instagram.com/" target="_blank">
                                <i className="icon-insta text-[10px]"></i>
                            </Link>
                            <Link className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center" href="https://www.youtube.com/" target="_blank">
                                <i className="icon-youtube text-[10px]"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopNavOne
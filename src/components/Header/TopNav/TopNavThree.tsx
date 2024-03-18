import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavThree = () => {
    return (
        <>
            <div className="top-nav style-three bg-gradient">
                <div className="container flex items-center justify-between sm:h-14 h-[44px]">
                    <div className="left-block flex items-center">
                        <div className="location flex items-center max-lg:hidden">
                            <i className="ph-light ph-map-pin text-white fs-20"></i>
                            <Icon.MapPin className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">160 Broadway 15th floor, New York</span>
                        </div>
                        <div className="mail lg:ml-7 flex items-center">
                            <Icon.Clock className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">8:00 am - 6:00 pm</span>
                        </div>
                    </div>
                    <div className="right-block flex items-center gap-3">
                        <div className="mail flex items-center">
                            <Icon.Envelope className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">hi.avitex@gmail.com</span>
                        </div>
                        <div className="w-px h-6 bg-white max-sm:hidden"></div>
                        <div className="phone-number flex items-center bg-white py-0.5 px-2 rounded-full gap-2 max-sm:hidden">
                            <div className="icon-call">
                                <i className="icon-phone-call text-2xl"></i>
                            </div>
                            <div className="number text-button text-gradient">123 456 7890</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopNavThree
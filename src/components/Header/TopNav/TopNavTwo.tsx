import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavTwo = () => {
    return (
        <>
            <div className="top-nav style-two bg-dark-blue">
                <div className="container flex items-center justify-between h-[44px]">
                    <div className="select-block relative">
                        <select className="border-none outline-none bg-dark-blue text-white p-2 caption2">
                            <option value="English">English</option>
                            <option value="France">France</option>
                            <option value="Espana">Espana</option>
                        </select>
                        <Icon.CaretDown weight="bold" className="text-xs text-white icon -right-2" />
                    </div>
                    <div className="right-block flex items-center">
                        <div className="location flex items-center max-lg:hidden">
                            <i className="ph-light ph-map-pin text-white fs-20"></i>
                            <Icon.MapPin className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">160 Broadway 15th floor, New York</span>
                        </div>
                        <div className="mail lg:ml-7 flex items-center">
                            <Icon.Envelope className="text-white text-xl" />
                            <span className="ml-2 caption1 text-white">hi.avitex@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopNavTwo
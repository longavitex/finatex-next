import React from "react"
import Link from "next/link"
import { ServiceType } from "@/type/ServiceType"
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: ServiceType
    style: string
    number: number
}

const ServiceItemOne: React.FC<Props> = ({ data, style, number }) => {
    return (
        <>
            {style === 'style-one' &&
                <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
                    <Link className="service-item-main h-full" href={"/service"}>
                        <div className="heading flex items-center justify-between">
                            <i className={`${data.icon} text-blue text-6xl`}></i>
                            <div className="number heading3 text-placehover">{number + 1}</div>
                        </div>
                        <div className="heading6 hover-text-blue mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                    </Link>
                </div>
            }
            {style === 'style-about' &&
                <div className="service-item py-8 px-7 bg-white rounded-lg hover-box-shadow">
                    <Link className="service-item-main flex flex-col justify-between h-full" href={"/service"}>
                        <div className="heading flex items-center gap-4">
                            <i className={`${data.icon} text-blue text-5xl`}></i>
                            <div className="heading7 hover-text-blue">{data.title}</div>
                        </div>
                        <div className="text-secondary mt-4">{data.desc}</div>
                        <div className="flex items-center gap-1 mt-4">
                            <div className="text-button-sm">Explore Plan</div>
                            <Icon.CaretRight weight="bold" className="text-blue text-sm" />
                        </div>
                    </Link>
                </div>
            }
        </>
    )
}

export default ServiceItemOne
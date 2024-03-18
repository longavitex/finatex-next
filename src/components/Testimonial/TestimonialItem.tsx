import React from "react"
import Link from "next/link"
import { TestimonialType } from "@/type/TestimonialType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Rate from "../Other/Rate";

interface Props {
    data: TestimonialType
    style: string
}

const TestimonialItem: React.FC<Props> = ({ data, style }) => {
    return (
        <>
            {style === 'style-three' &&
                <div className="item p-8 bg-white rounded-xl box-shadow-sm hover-box-shadow h-full">
                    <a href={'#!'} className="block h-full">
                        <div className="body3 text-secondary">{data.desc}</div>
                        <div className="infor mt-4 flex items-center gap-4">
                            <div className="avatar w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                                <img className="w-full h-full" src={data.img} alt={data.author} />
                            </div>
                            <div className="desc">
                                <div className="text-button">{data.author}</div>
                                <div className="caption2 text-secondary mt-1">{data.position}</div>
                            </div>
                        </div>
                    </a>
                </div>
            }
            {style === 'style-four' &&
                <div className="item p-8 bg-white rounded-xl box-shadow-sm hover-box-shadow h-full">
                    <a href={'#!'} className="block h-full">
                        <Rate currentRate={data.star} size={12} />
                        <div className="heading7 mt-4">{data.title}</div>
                        <div className="body3 mt-2">{data.desc}</div>
                        <div className="infor mt-4 flex items-center gap-4">
                            <div className="avatar w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                                <img className="w-full h-full" src={data.img} alt={data.author} />
                            </div>
                            <div className="desc">
                                <div className="text-button">{data.author}</div>
                                <div className="caption2 text-secondary mt-1">{data.position}</div>
                            </div>
                        </div>
                    </a>
                </div>
            }
        </>
    )
}

export default TestimonialItem
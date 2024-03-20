import React from "react"
import Link from "next/link"
import { TestimonialType } from "@/type/TestimonialType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Rate from "../Other/Rate";
import Image from "next/image";

interface Props {
    data: TestimonialType
    style: string
}

const TestimonialItem: React.FC<Props> = ({ data, style }) => {
    return (
        <>
            {style === 'style-three' &&
                <div className="item bg-surface rounded-xl box-shadow-sm hover-box-shadow block">
                    <a href={'#!'} className=" p-8 flex flex-col justify-between h-full">
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
                <div className="item bg-white rounded-xl box-shadow-sm hover-box-shadow block">
                    <a href={'#!'} className=" p-8 flex flex-col justify-between h-full">
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
            {style === 'style-five' &&
                <div className="item bg-surface rounded-xl box-shadow-sm hover-box-shadow block">
                    <a href={'#!'} className=" p-8 flex flex-col justify-between h-full">
                        <Icon.Quotes weight="fill" className="text-4xl rotate-180" />
                        <div className="body3 mt-3">{`"${data.desc}"`}</div>
                        <div className="infor mt-4 flex items-center gap-4">
                            <div className="desc">
                                <div className="text-button">{data.author}</div>
                                <div className="caption2 text-secondary mt-1">{data.position}</div>
                            </div>
                        </div>
                    </a>
                </div>
            }
            {style === 'style-six' &&
                <div className="item flex max-sm:flex-col-reverse">
                    <div className="sm:w-7/12">
                        <div className="comment-item style-six lg:py-[72px] lg:px-[60px] sm:py-12 sm:px-10 p-8 rounded-2xl block">
                            <div className="flex flex-col justify-between h-full">
                                <div className="icon mb-4">
                                    <i className="icon-quotes text-6xl"></i>
                                </div>
                                <Rate currentRate={data.star} size={20} />
                                <div className="heading6 text-white mt-4">{`"${data.desc}"`}</div>
                                <div className="infor mt-5">
                                    <div className="text-button text-white">{data.author}</div>
                                    <div className="caption1 text-placehover mt-1">{data.position}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-5/12">
                        <Image width={5000} height={4000} className="w-full h-full object-cover" src={data.img} alt="" />
                    </div>
                </div>
            }
        </>
    )
}

export default TestimonialItem
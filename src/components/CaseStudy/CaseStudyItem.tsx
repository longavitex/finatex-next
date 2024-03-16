import React from "react"
import Link from "next/link"
import { CaseStudyType } from "@/type/CaseStudyType"
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: CaseStudyType
    style: string
    number: number
}

const CaseStudyItemOne: React.FC<Props> = ({ data, style, number }) => {
    return (
        <>
            {style === 'style-one' &&
                <div className="case-study-item item-filter">
                    <Link
                        className="item-main"
                        href={"/case-studies/detail/[slug]"}
                        as={"/case-studies/detail/" + data.title.toLowerCase().replace(/ /g, '-')}
                    >
                        <div className="bg-img rounded-xl overflow-hidden">
                            <img className="w-full h-full rounded-xl block" src={data.img} alt="" />
                        </div>
                        <div className="infor bg-white rounded-lg px-6 py-4 text-center">
                            <div className="category text-button-uppercase text-secondary">{data.subTitle}</div>
                            <div className="heading6 mt-2">{data.title}</div>
                        </div>
                    </Link>
                </div>
            }
            {style === 'style-two' &&
                <div className="case-study-item style-two item-filter">
                    <div className="item-main">
                        <div className="bg-img rounded-xl overflow-hidden">
                            <img className="w-full h-full rounded-xl display-block" src={data.img} alt="" />
                            <Link
                                className="flex flex-col items-center py-8 px-5 bg-white rounded-full text-center"
                                href={"/case-studies/detail/[slug]"}
                                as={"/case-studies/detail/" + data.title.toLowerCase().replace(/ /g, '-')}
                            >
                                <div className="text-button-small text-blue">Discovery</div>
                                <Icon.ArrowUpRight className="text-blue" />
                            </Link>
                        </div>
                        <div className="infor bg-white rounded-lg pt-6">
                            <div className="heading6">{data.subTitle}</div>
                            <div className="body2 text-secondary mt-2">{data.title}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CaseStudyItemOne
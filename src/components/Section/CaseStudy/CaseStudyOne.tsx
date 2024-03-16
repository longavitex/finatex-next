import Link from "next/link"
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const CaseStudyOne = () => {
    return (
        <>
            <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
                <div className="container">
                    <div className="heading text-center">
                        <div className="heading3">Case Studies</div>
                        <div className="right flex flex-col items-center gap-2 mt-3">
                            <div className="body3">Exploring In-Depth and Inspiring Case Studies of Success Stories</div>
                            <Link className="flex items-center gap-2 hover:text-blue duration-300" href="/case-studies/case-studies-one">
                                <div className="text-button">View Our Case Studies</div>
                                <Icon.CaretDoubleRight weight="bold" className="text-xs mt-1" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="list-case-study md:mt-10 mt-6">
                    <div className="list grid lg:grid-cols-4 sm:grid-cols-2">
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img">
                                    <img className="w-full h-full block" src="/images/component/benefit1.png" alt="img" />
                                </div>
                                <div className="text flex flex-col justify-between gap-3">
                                    <div className="heading5"><Link className="text-white" href="/case-studies/case-studies-one">Trusted Advisor</Link></div>
                                    <div className="body2 text-white">We are committed to providing reliable and high-quality financial advisory in our services.</div>
                                    <Link className="flex items-center gap-1" href="service-detail.html">
                                        <div className="text-button text-white">Read More </div>
                                        <Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <img className="w-full h-full block" src="/images/component/benefit2.png" alt="img" /></div>
                                <div className="text flex flex-col justify-between gap-3">
                                    <div className="heading5"><Link className="text-white" href="/case-studies/case-studies-one">Team Augmentation</Link></div>
                                    <div className="body2 text-white">With an experienced and skilled team, we bring the necessary expertise to enhance work productivity.</div><Link className="flex items-center gap-1" href="service-detail.html">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <img className="w-full h-full block" src="/images/component/benefit3.png" alt="img" /></div>
                                <div className="text flex flex-col justify-between gap-3">
                                    <div className="heading5"><Link className="text-white" href="/case-studies/case-studies-one">Innovation</Link></div>
                                    <div className="body2 text-white">We constantly seek advanced solutions to address challenges and deliver the highest value to our customers.</div><Link className="flex items-center gap-1" href="service-detail.html">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="case-study-item">
                                <div className="bg-img"> <img className="w-full h-full block" src="/images/component/benefit4.png" alt="img" /></div>
                                <div className="text flex flex-col justify-between gap-3">
                                    <div className="heading5"><Link className="text-white" href="/case-studies/case-studies-one">Experience</Link></div>
                                    <div className="body2 text-white">With over 21 years of serving industrial customers and over 3000 projects, we have the experience to solve almost.</div><Link className="flex items-center gap-1" href="service-detail.html">
                                        <div className="text-button text-white">Read More </div><Icon.CaretDoubleRight weight="bold" className="text-xs text-white mt-1" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CaseStudyOne
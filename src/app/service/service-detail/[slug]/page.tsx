'use client'

import { useState } from "react"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFilter from "@/components/Section/Service/ServiceFilter"
import serviceData from '@/data/service.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import faqData from '@/data/faqs.json'
import Image from "next/image"

export default function ServiceStyleOne({ params: { slug } }: { params: { slug: string } }) {
    const foundPost = serviceData.find(item => {
        return item.title.toLowerCase().replace(/ /g, '-') === slug
    })

    const [faq, setFaq] = useState<number | null>(1)

    const handleFaq = (id: number) => {
        setFaq(prevId => prevId === id ? null : id)
    }

    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Our Services" img="/images/banner/about1.png" title={foundPost?.title || 'Our Services'} desc={foundPost?.desc || "Expand your knowledge and skills in cryptocurrency trading through our educational resources."} />
                    <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
                        <div className="container">
                            <div className="flex max-xl:flex-col gap-y-8">
                                <div className="w-full xl:w-3/4">
                                    <div className="content-para xl:pr-[80px]">
                                        <div className="heading3">Portfolio Management for Financial Growth</div>
                                        <div className="body2 text-secondary mt-4">Our objective for this project was to develop a comprehensive financial management platform that provided users with a centralized dashboard for managing their finances. We wanted to create a platform that was user-friendly, easy to navigate, and offered a range of features to help users track their spending, monitor their investments, and plan for their financial future. Our goal was to provide users with the tools and resources they need to make informed financial decisions and achieve their financial goals.</div>
                                        <div className="bg-img mt-8 mb-8"><Image width={5000} height={5000} className="w-full h-full rounded-xl" src="/images/component/gateway1.png" alt="" /></div>
                                        <div className="heading6">We offer diverse business solutions.</div>
                                        <div className="body2 text-secondary mt-4">{`At our company, we offer a comprehensive suite of business services tailored to meet our clients unique needs and goals. Our services range from financial planning and accounting to marketing and brand management, delivered with exceptional value and expertise across various industries and business types. Our customized approach ensures that our solutions fit your specific objectives, whether you're a small startup or a large multinational corporation.`}</div>
                                        <div className="list-feature mt-8">
                                            <div className="flex max-lg:flex-col gap-y-3">
                                                <div className="w-full lg:w-1/2 gap-y-3 flex flex-col">
                                                    <div className="item flex items-center gap-4">
                                                        <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                        <div className="text-button">Identification of monthly income</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4">
                                                        <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                        <div className="text-button">Creation of savings and investment plan</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4">
                                                        <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                        <div className="text-button">Management and calculation of monthly expenses</div>
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-1/2 gap-y-3 flex flex-col">
                                                    <div className="item flex items-center gap-4">
                                                        <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                        <div className="text-button">Research and Analysis</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4">
                                                        <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                        <div className="text-button">Investment Management and Investment Advice</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4">
                                                        <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                        <div className="text-button">Education and Resources</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-question lg:mt-[60px] mt-8">
                                            <div className="heading6">Questions about service</div>
                                            {faqData.slice(0, 4).map(item => (
                                                <div
                                                    key={item.id}
                                                    className={`question-item hover-box-shadow pointer mt-5 px-7 rounded-lg border border-line cursor-pointer ${faq === item.id ? 'open' : ''}`}
                                                    onClick={() => handleFaq(item.id)}
                                                >
                                                    <div className="question-item-main flex items-center justify-between py-4 heading7">{item.title}
                                                        {faq === item.id ? (
                                                            <Icon.Minus weight="bold" className="text-xl" />
                                                        ) : (
                                                            <Icon.Plus weight="bold" className="text-xl" />
                                                        )}
                                                    </div>
                                                    <div className="content-question">
                                                        <div className="border-line w-full"></div>
                                                        <div className="body3 text-secondary pb-4">{item.desc}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full xl:w-1/4">
                                    <div className="more-infor border border-line rounded-xl py-8 px-6">
                                        <div className="heading6">The best our Services</div>
                                        <div className="body3 text-secondary mt-2">Whether you have a team of 2 or 200, our shared team inboxes </div>
                                        <div className="list-nav mt-4">
                                            <a className="nav-item rounded-lg flex-between p-12" href="service-detail.html">
                                                <div className="text-button text-secondary">
                                                    Financial Planning
                                                </div>
                                                <i className="ph-bold ph-caret-right hidden"></i>
                                            </a>
                                            <a className="nav-item rounded-lg flex-between p-12 mt-12" href="service-investment-advice.html">
                                                <div className="text-button text-secondary">
                                                    Payment Solution
                                                </div><i className="ph-bold ph-caret-right hidden"></i>
                                            </a>
                                            <a className="nav-item rounded-lg flex-between p-12 mt-12" href="service-cryptocurrency-trading.html">
                                                <div className="text-button text-secondary">
                                                    Cryptocurrency Financial
                                                </div><i className="ph-bold ph-caret-right hidden"></i>
                                            </a>
                                            <a className="nav-item rounded-lg flex-between p-12 mt-12" href="service-research-analysis.html">
                                                <div className="text-button text-secondary">
                                                    Blockchain
                                                </div><i className="ph-bold ph-caret-right hidden"></i>
                                            </a>
                                            <a className="nav-item rounded-lg flex-between p-12 mt-12" href="service-education-resources.html">
                                                <div className="text-button text-secondary">
                                                    Online Banking
                                                </div><i className="ph-bold ph-caret-right hidden"></i>
                                            </a>
                                            <a className="nav-item rounded-lg flex-between p-12 mt-12 active" href="service-portfolio-management.html">
                                                <div className="text-button text-secondary">
                                                    Personal Financial</div><i className="ph-bold ph-caret-right hidden"></i></a></div>
                                    </div>
                                    <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                                        <div className="bg-img"> <Image width={5000} height={5000} src="/images/component/ads.png" alt="" /></div>
                                        <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                                            <div className="title">
                                                <div className="heading5 text-white">Let’s talk</div>
                                                <div className="body3 text-white mt-4">If you have project,<br />contact us!</div>
                                            </div>
                                            <div className="button-block md:mt-10 mt-6"> <a className="button-main hover:bg-black hover:text-white inline-block bg-white text-button" href="contact-style-one.html">Learn now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CtaOne />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
'use client'

import { useState } from "react"
import Link from "next/link"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import faqData from '@/data/faqs.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image"

export default function Faqs() {
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
                    <BreadcrumbItem link="FAQs" img="/images/banner/case-studies.png" title="FAQs" desc="Explore our frequently asked questions and our answers to them." />
                    <div className="faq-block lg:py-[100px] sm:py-16 py-10">
                        <div className="container flex items-center justify-center">
                            <div className="w-full lg:w-2/3">
                                <div className="heading6">Payments</div>
                                <div className="list-question">
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
                                <div className="heading6 md:mt-10 mt-6">Suggestion</div>
                                <div className="list-question">
                                    {faqData.slice(4, 8).map(item => (
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
                    </div>
                    <div className="more-question-block mb-[100px]">
                        <div className="container">
                            <div className="row flex items-center justify-center">
                                <div className="w-full lg:w-2/3">
                                    <div className="content bg-gradient-blue rounded-xl flex flex-col items-center gap-4 py-8 px-7">
                                        <div className="bg-img w-[120px]"><Image width={4000} height={4000} className="w-full" src="/images/component/avatar-group.png" alt="" /></div>
                                        <div className="text text-center">
                                            <div className="heading6 text-white">Still have questions?</div>
                                            <div className="body3 text-white mt-2">Can’t find the answer you’re looking for? Please chat to our friendly team.</div>
                                        </div>
                                        <Link className="button-main hover:bg-black bg-blue text-white rounded-full" href="/contact/contact-two">Chat Center</Link>
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
'use client'

import { useState } from "react"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function Pricing() {
    const [switchBtn, setSwitchBtn] = useState(false)

    const handleSwitchChange = () => {
        setSwitchBtn(!switchBtn)
    }

    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Contact us" img="/images/banner/case-studies.png" title="Contact us" desc="Discover transparent pricing options tailored to your budget on our Pricing page." />
                    <div className="pricing-block style-pricing">
                        <div className="pricing-main lg:py-[100px] sm:py-16 py-10">
                            <div className="container">
                                <div className="heading flex flex-col items-center gap-y-8">
                                    <div className="title text-center">
                                        <div className="heading3">Pricing</div>
                                        <div className="body1 mt-2">Choose a plan that’s right for you</div>
                                    </div>
                                    <div className="choose-type flex items-center gap-5">
                                        <div className={`body3 ${!switchBtn ? 'text-black' : 'text-placehover'}`}>Pay Monthly</div>
                                        <div className={`switch ${switchBtn ? 'enable' : ''}`} onClick={handleSwitchChange}>
                                            <div className="bg-placehover"></div>
                                        </div>
                                        <div className={`body3 ${switchBtn ? 'text-black' : 'text-placehover'}`}>Pay Yearly</div>
                                    </div>
                                </div>
                                <div className={`list-pricing ${!switchBtn ? 'show' : 'hide'} mt-[60px]`}>
                                    <div className="flex gap-8">
                                        <div className="w-full lg:w-1/3">
                                            <div className="pricing-item py-9 px-6 rounded-xl box-shadow">
                                                <div className="heading6">Freebie</div>
                                                <div className="price flex items-end gap-2 mt-5">
                                                    <div className="heading2">$0</div>
                                                    <div className="body3">/ Month</div>
                                                </div>
                                                <div className="button-block w-full mt-6"><a className="button-main text-center block hover:text-white hover:bg-blue bg-white border border-blue text-black text-button w-full py-3 rounded-full" href="#!">Get Started</a>
                                                </div>
                                                <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">20,000+ of PNG & SVG graphics</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Access to 100 million stock images</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Upload custom icons and fonts</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Unlimited Sharing</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Upload graphics & video in up to 4k</div>                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Unlimited Projects</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/3">
                                            <div className="pricing-item py-9 px-6 rounded-xl box-shadow bg-blue text-white">
                                                <div className="heading6">Professional</div>
                                                <div className="price flex items-end gap-2 mt-5">
                                                    <div className="heading2">$25</div>
                                                    <div className="body3">/ Month</div>
                                                </div>
                                                <div className="button-block w-full mt-6"><a className="button-main text-center block hover-button-black bg-white border border-blue text-black text-button w-full py-3 rounded-full" href="#!">Get Started</a>
                                                </div>
                                                <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">20,000+ of PNG & SVG graphics</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">Access to 100 million stock images</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">Upload custom icons and fonts</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">Unlimited Sharing</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Upload graphics & video in up to 4k</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Unlimited Projects</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/3">
                                            <div className="pricing-item py-9 px-6 rounded-xl box-shadow">
                                                <div className="heading6">Enterprise</div>
                                                <div className="price flex items-end gap-2 mt-5">
                                                    <div className="heading2">$100</div>
                                                    <div className="body3">/ Month</div>
                                                </div>
                                                <div className="button-block w-full mt-6"><a className="button-main text-center block hover:text-white hover:bg-blue bg-white border border-blue text-black text-button w-full py-3 rounded-full" href="#!">Get Started</a>
                                                </div>
                                                <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">20,000+ of PNG & SVG graphics</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Access to 100 million stock images</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Upload custom icons and fonts</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Unlimited Sharing</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Upload graphics & video in up to 4k</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Unlimited Projects</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`list-pricing-year ${switchBtn ? 'show' : 'hide'} mt-[60px]`}>
                                    <div className="flex gap-8">
                                        <div className="w-full lg:w-1/3">
                                            <div className="pricing-item py-9 px-6 rounded-xl box-shadow">
                                                <div className="heading6">Freebie</div>
                                                <div className="price flex items-end gap-2 mt-5">
                                                    <div className="heading2">$0</div>
                                                    <div className="body3">/ Year</div>
                                                </div>
                                                <div className="button-block w-full mt-6"><a className="button-main text-center block hover:text-white hover:bg-blue bg-white border border-blue text-black text-button w-full py-3 rounded-full" href="#!">Get Started</a>
                                                </div>
                                                <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">20,000+ of PNG & SVG graphics</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Access to 100 million stock images</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Upload custom icons and fonts</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Unlimited Sharing</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Upload graphics & video in up to 4k</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Unlimited Projects</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/3">
                                            <div className="pricing-item py-9 px-6 rounded-xl box-shadow bg-blue text-white">
                                                <div className="heading6">Professional</div>
                                                <div className="price flex items-end gap-2 mt-5">
                                                    <div className="heading2">$200</div>
                                                    <div className="body3">/ Year</div>
                                                </div>
                                                <div className="button-block w-full mt-6"><a className="button-main text-center block hover-button-black bg-white border border-blue text-black text-button w-full py-3 rounded-full" href="#!">Get Started</a>
                                                </div>
                                                <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">20,000+ of PNG & SVG graphics</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">Access to 100 million stock images</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">Upload custom icons and fonts</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-white text-3xl" />
                                                        <div className="body3">Unlimited Sharing</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Upload graphics & video in up to 4k</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-placehover text-3xl" />
                                                        <div className="body3 text-placehover">Unlimited Projects</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/3">
                                            <div className="pricing-item py-9 px-6 rounded-xl box-shadow">
                                                <div className="heading6">Enterprise</div>
                                                <div className="price flex items-end gap-2 mt-5">
                                                    <div className="heading2">$800</div>
                                                    <div className="body3">/ Year</div>
                                                </div>
                                                <div className="button-block w-full mt-6"><a className="button-main text-center block hover:text-white hover:bg-blue bg-white border border-blue text-black text-button w-full py-3 rounded-full" href="#!">Get Started</a>
                                                </div>
                                                <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">20,000+ of PNG & SVG graphics</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Access to 100 million stock images</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Upload custom icons and fonts</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Unlimited Sharing</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Upload graphics & video in up to 4k</div>
                                                    </div>
                                                    <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-blue text-3xl" />
                                                        <div className="body3">Unlimited Projects</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CTA />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
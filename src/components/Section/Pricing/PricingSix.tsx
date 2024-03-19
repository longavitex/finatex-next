'use client'

import { useState } from "react"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PricingSix = () => {
    const [switchBtn, setSwitchBtn] = useState(false)

    const handleSwitchChange = () => {
        setSwitchBtn(!switchBtn)
    }

    return (
        <div className="pricing-block style-six">
            <div className="pricing-main text-white lg:py-[100px] sm:py-16 py-10">
                <div className="container">
                    <div className="heading flex max-lg:flex-col lg:items-center justify-between gap-y-5">
                        <div className="title">
                            <div className="uppercase text-xs font-bold text-orange">Pricing</div>
                            <div className="lg:text-center heading3 text-white mt-3">Choose The <span className="text-orange">Plan & Pricing</span></div>
                        </div>
                        <div className="choose-type flex items-center gap-3">
                            <div className={`switch ${switchBtn ? 'enable' : ''}`} onClick={handleSwitchChange}>
                                <div className="bg-placehover"></div>
                            </div>
                            <div className="text-white">Annual pricing (save 20%)</div>
                        </div>
                    </div>
                    <div className={`list-pricing ${!switchBtn ? 'show' : 'hide'} lg:mt-[60px] mt-10`}>
                        <div className="flex max-lg:flex-wrap gap-8">
                            <div className="w-full lg:w-1/3">
                                <div className="pricing-item border border-secondary py-9 px-6 rounded-xl box-shadow duration-500">
                                    <div className="heading7 text-orange text-center">Standard</div>
                                    <div className="price text-center justify-center flex items-end gap-2 mt-3">
                                        <div className="heading2">$40</div>
                                        <div className="body3">/month</div>
                                    </div>
                                    <div className="text-center text-white mt-3">Billed annually.</div>
                                    <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">20,000+ of PNG & SVG graphics</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Access to 100 million stock images</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Upload custom icons and fonts</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Unlimited Sharing</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Upload graphics & video in up to 4k</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Unlimited Projects</div>
                                        </div>
                                    </div>
                                    <div className="button-block w-full mt-6"><Link className="button-main text-center block hover:text-white hover:bg-orange bg-white border border-orange text-black text-button w-full py-3" href="/pages/pricing">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="pricing-item border border-secondary py-9 px-6 rounded-xl box-shadow duration-500">
                                    <div className="heading7 text-orange text-center">Premium</div>
                                    <div className="price text-center justify-center flex items-end gap-2 mt-3">
                                        <div className="heading2">$60</div>
                                        <div className="body3">/month</div>
                                    </div>
                                    <div className="text-center text-white mt-3">Billed annually.</div>
                                    <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">20,000+ of PNG & SVG graphics</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Access to 100 million stock images</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Upload custom icons and fonts</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Unlimited Sharing</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Upload graphics & video in up to 4k</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Unlimited Projects</div>
                                        </div>
                                    </div>
                                    <div className="button-block w-full mt-6"><Link className="button-main text-center block hover-button-black hover:text-white hover:bg-orange bg-white border border-orange text-black text-button w-full py-3" href="/pages/pricing">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="pricing-item border border-secondary py-9 px-6 rounded-xl box-shadow duration-500">
                                    <div className="heading7 text-orange text-center">Enterprise</div>
                                    <div className="price text-center justify-center flex items-end gap-2 mt-3">
                                        <div className="heading2">$90</div>
                                        <div className="body3">/month</div>
                                    </div>
                                    <div className="text-center text-white mt-3">Billed annually.</div>
                                    <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">20,000+ of PNG & SVG graphics</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Access to 100 million stock images</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Upload custom icons and fonts</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Unlimited Sharing</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Upload graphics & video in up to 4k</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Unlimited Projects</div>
                                        </div>
                                    </div>
                                    <div className="button-block w-full mt-6">
                                        <Link className="button-main text-center block hover:text-white hover:bg-orange bg-white border border-orange text-black text-button w-full py-3" href="/pages/pricing">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`list-pricing-year ${switchBtn ? 'show' : 'hide'} lg:mt-[60px] mt-10`}>
                        <div className="flex max-lg:flex-wrap gap-8">
                            <div className="w-full lg:w-1/3">
                                <div className="pricing-item border border-secondary py-9 px-6 rounded-xl box-shadow">
                                    <div className="heading7 text-orange text-center">Standard</div>
                                    <div className="price text-center justify-center flex items-end gap-2 mt-3">
                                        <div className="heading2">$300</div>
                                        <div className="body3">/month</div>
                                    </div>
                                    <div className="text-center text-white mt-3">Billed annually.</div>
                                    <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">20,000+ of PNG & SVG graphics</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Access to 100 million stock images</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Upload custom icons and fonts</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Unlimited Sharing</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Upload graphics & video in up to 4k</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Unlimited Projects</div>
                                        </div>
                                    </div>
                                    <div className="button-block w-full mt-6"><Link className="button-main text-center block hover:text-white hover:bg-orange bg-white border border-orange text-black text-button w-full py-3" href="/pages/pricing">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="pricing-item border border-secondary py-9 px-6 rounded-xl box-shadow duration-500">
                                    <div className="heading7 text-orange text-center">Primeum</div>
                                    <div className="price text-center justify-center flex items-end gap-2 mt-3">
                                        <div className="heading2">$500</div>
                                        <div className="body3">/month</div>
                                    </div>
                                    <div className="text-center text-white mt-3">Billed annually.</div>
                                    <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">20,000+ of PNG & SVG graphics</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Access to 100 million stock images</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Upload custom icons and fonts</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Unlimited Sharing</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Upload graphics & video in up to 4k</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="light" className="text-secondary text-3xl" />
                                            <div className="body3 text-secondary">Unlimited Projects</div>
                                        </div>
                                    </div>
                                    <div className="button-block w-full mt-6"><Link className="button-main text-center block hover-button-black bg-white text-black border border-orange hover:text-white hover:bg-orange text-button w-full py-3" href="/pages/pricing">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="pricing-item border border-secondary py-9 px-6 rounded-xl box-shadow">
                                    <div className="heading7 text-orange text-center">Enterprise</div>
                                    <div className="price text-center justify-center flex items-end gap-2 mt-3">
                                        <div className="heading2">$800</div>
                                        <div className="body3">/month</div>
                                    </div>
                                    <div className="text-center text-white mt-3">Billed annually.</div>
                                    <div className="list-feature md:mt-10 mt-6 flex flex-col gap-3">
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">20,000+ of PNG & SVG graphics</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Access to 100 million stock images</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Upload custom icons and fonts</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Unlimited Sharing</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Upload graphics & video in up to 4k</div>
                                        </div>
                                        <div className="item flex items-center gap-4"> <Icon.CheckCircle weight="fill" className="text-orange text-3xl" />
                                            <div className="body3">Unlimited Projects</div>
                                        </div>
                                    </div>
                                    <div className="button-block w-full mt-6"><Link className="button-main text-center block hover:text-white hover:bg-orange bg-white border border-orange text-black text-button w-full py-3" href="/pages/pricing">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PricingSix
import React from 'react'

const ServiceSixSecond = () => {
    return (
        <>
            <div className="service-block style-six style-second">
                <div className="container">
                    <div className="uppercase text-xs font-bold text-orange">How we work</div>
                    <div className="heading flex max-lg:flex-col lg:items-center justify-between gap-8 gap-y-4 mt-3">
                        <div className="heading3 text-white">Streamlining Your <br />Blockchain Experience</div>
                        <div className="body2 text-placehover lg:w-1/2">Efficiently navigate the world of blockchain with our streamlined approach, from discovery and planning to development and ongoing support.</div>
                    </div>
                    <div className="list-service grid xl:grid-cols-4 sm:grid-cols-2 gap-8 gap-y-20 mt-20">
                        <div className="service-item rounded-2xl border border-line hover-box-shadow">
                            <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                                <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                    <span className={`heading4 text-white`}>01</span>
                                </div>
                                <div className="heading7 text-white hover:text-orange duration-300 mt-6">Consultation</div>
                                <div className="text-placehover mt-3">We understand your business requirements and goals, analyzing challenges and opportunities to devise an effective blockchain strategy.</div>
                            </div>
                        </div>
                        <div className="service-item rounded-2xl border border-line hover-box-shadow">
                            <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                                <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                    <span className={`heading4 text-white`}>02</span>
                                </div>
                                <div className="heading7 text-white hover:text-orange duration-300 mt-6">Planning and Strategy</div>
                                <div className="text-placehover mt-3">We develop a tailored plan and roadmap, defining objectives, timelines, and milestones for successful implementation</div>
                            </div>
                        </div>
                        <div className="service-item rounded-2xl border border-line hover-box-shadow">
                            <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                                <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                    <span className={`heading4 text-white`}>03</span>
                                </div>
                                <div className="heading7 text-white hover:text-orange duration-300 mt-6">Blockchain Development</div>
                                <div className="text-placehover mt-3">Our skilled team creates robust and scalable blockchain solutions, including smart contracts and decentralized applications (DApps).</div>
                            </div>
                        </div>
                        <div className="service-item rounded-2xl border border-line hover-box-shadow">
                            <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                                <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                    <span className={`heading4 text-white`}>04</span>
                                </div>
                                <div className="heading7 text-white hover:text-orange duration-300 mt-6">Deployment and Support</div>
                                <div className="text-placehover mt-3">We deploy your blockchain solution securely, integrate it into your infrastructure, provide training, and offer ongoing support and maintenance.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSixSecond
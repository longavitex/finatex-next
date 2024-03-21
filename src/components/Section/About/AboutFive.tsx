import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const AboutFive = () => {
    return (
        <div className="about-five lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="main flex max-lg:flex-col-reverse items-center justify-between max-lg:justify-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <div className="text-about">
                            <div className="text-sub-heading2 text-white py-2 px-4 bg-blue rounded-lg inline-block">About</div>
                            <div className="heading3 mt-6">Empowering Your Cryptocurrency Trading Journey</div>
                            <div className="body3 text-secondary mt-5">Explore our mission to provide reliable and innovative cryptocurrency trading solutions, backed by expert insights and cutting-edge technology.</div>
                            <div className="list mt-10">
                                <div className="grid sm:grid-cols-2 gap-y-3 gap-7">
                                    <div className="w-full left">
                                        <div className="item flex items-center gap-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Blockchain Stratery</div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">ICO Progress</div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Crypto Trading</div>
                                        </div>
                                    </div>
                                    <div className="w-full right">
                                        <div className="item flex items-center gap-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Financial assessment</div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Blockchain Stratery </div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">ICO Progress</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 sm:w-2/3">
                        <div className="bg-img w-full">
                            <Image width={5000} height={5000} className="w-full" src="/images/component/about-home5.png" alt="" />
                        </div>
                        <div className="sub-img">
                            <Image width={5000} height={5000} src="/images/component/sub-about5-left.png" alt="" />
                            <Image width={5000} height={5000} src="/images/component/sub-about5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive
import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import Image from 'next/image';

const ProjectFive = () => {
    return (
        <div className="project-five lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading text-center">
                    <div className="text-sub-heading2 text-white py-2 px-4 bg-blue rounded-lg inline-block">Projects</div>
                    <div className="heading3 text-center mt-4">Projects that have helped many people <br className='max-md:hidden' />become successful thanks to Crypto</div>
                </div>
                <div className="list-project lg:mt-10 mt-7">
                    <div className="project-above">
                        <div className="flex max-lg:flex-col items-center justify-between gap-y-8">
                            <div className="w-full lg:w-1/2 sm:w-2/3 lg:pr-20">
                                <div className="bg-img w-full">
                                    <Image width={5000} height={5000} className="w-full" src="/images/banner/project-above-home5.png" alt="" />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="text-infor">
                                    <div className="heading4">Personal Financial Assessment</div>
                                    <div className="body2 text-secondary mt-4">Our groundbreaking Project A revolutionizes cryptocurrency trading with its advanced algorithmic trading strategies</div>
                                    <div className="list-service mt-8">
                                        <div className="service-item flex items-center">
                                            <Icon.Check weight='bold' className="text-blue text-2xl" />
                                            <div className="text-button ml-3">Debt evaluation and ability to repay</div>
                                        </div>
                                        <div className="service-item flex items-center mt-3"><Icon.Check weight='bold' className="text-blue text-2xl" />
                                            <div className="text-button ml-3">Calculation of credit limit</div>
                                        </div>
                                        <div className="service-item flex items-center mt-3"><Icon.Check weight='bold' className="text-blue text-2xl" />
                                            <div className="text-button ml-3">Consolidation of personal financial data</div>
                                        </div>
                                    </div>
                                    <div className="button-block mt-8">
                                        <Link className="button-main hover:bg-blue text-white bg-black inline-flex py-3 px-7 rounded-lg items-center gap-2" href="/service/service-one">
                                            <Icon.ArrowRight weight='bold' className="text-white text-xl" />
                                            <span>Discovery</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-below lg:mt-[100px] sm:mt-16 mt-10">
                        <div className="flex max-lg:flex-col-reverse items-center justify-between gap-y-8">
                            <div className="w-full lg:w-5/12">
                                <div className="text-infor">
                                    <div className="heading4">Budget Planning</div>
                                    <div className="body2 text-secondary mt-4">We have created a user-friendly and intuitive cryptocurrency exchange platform. It provides a secure and seamless trading experience, empowering users to buy, sell, and manage their digital assets with ease.</div>
                                    <div className="button-block mt-8">
                                        <Link className="button-main hover:bg-blue text-white bg-black inline-flex py-3 px-7 rounded-lg items-center gap-2" href="service-one.html">
                                            <Icon.ArrowRight weight='bold' className="text-white text-xl" />
                                            <span>Discovery</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 sm:w-2/3">
                                <div className="bg-img w-full">
                                    <Image width={5000} height={5000} className="w-full" src="/images/banner/project-below-home5.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectFive
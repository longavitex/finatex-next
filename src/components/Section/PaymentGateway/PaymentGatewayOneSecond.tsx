'use client'

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import { useInView } from "framer-motion";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PaymentGatewayOneSecond = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10" ref={ref}>
            <div className="container">
                <div className="content flex items-center gap-8">
                    <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
                        <h3 className="heading3">Payment Gateway Services</h3>
                        <div className="body2 text-secondary">We provide reliable and secure payment gateway services for businesses of all sizes. With our cutting-edge technology and 24/7 customer support, you can easily accept payments from customers all over the world.</div>
                        <div className="list-service">
                            <div className="service-item flex items-center">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Debt evaluation and ability to repay</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Calculation of credit limit</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Consolidation of personal financial data</div>
                            </div>
                        </div>
                        <div className="button-block">
                            <Link className="button-main hover:bg-blue text-white bg-black rounded-full" href="contact-two.html">Get started</Link>
                        </div>
                    </div>
                    <div className="w-11/12 xl:w-7/12">
                        <div
                            className="right pl-10"
                            style={{
                                transform: isInView ? "none" : "translateX(60px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                            }}
                        >
                            <div className="bg-img">
                                <Image width={5000} height={5000} className="w-full" src="/images/component/gateway2-bg.png" alt="" />
                            </div>
                            <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                                <i className="icon-list text-2xl bg-orange p-4 rounded-2xl"> </i>
                                <div className="text">
                                    <div className="heading7">2K+</div>
                                    <div className="heading7 text-secondary">Projects</div>
                                </div>
                            </div>
                            <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                                <Icon.Star weight="fill" className="text-yellow text-3xl" />
                                <div className="text">
                                    <div className="heading7">4.8</div>
                                    <div className="heading7 text-secondary">Satisfaction</div>
                                </div>
                            </div>
                            <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                                <i className="icon-user text-2xl bg-orange py-4 px-5 rounded-2xl"> </i>
                                <div className="text">
                                    <div className="heading7">5 Years</div>
                                    <div className="heading7 text-secondary">Product Designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PaymentGatewayOneSecond
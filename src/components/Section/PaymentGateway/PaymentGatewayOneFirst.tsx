import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PaymentGatewayOneFirst = () => {
    return (
        <section className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative">
            <div className="bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0">
                <Image className="w-full h-full object-cover" width={5000} height={5000} src="/images/component/gateway1.png" alt="" />
            </div>
            <div className="container w-full lg:py-[150px] pt-14 py-16">
                <div className="w-full flex items-center lg:justify-end">
                    <div className="payment-infor lg:w-1/2 xl:pl-20 lg:pl-10">
                        <div className="heading flex items-center gap-4 max-lg:flex-wrap">
                            <div className="flex items-center">
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[3]">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar3.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[2] -ml-3">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar4.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[1] -ml-3">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar5.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[0] -ml-3">
                                    <span className="w-full h-full flex items-center justify-center bg-white rounded-full text-button">5M</span>
                                </div>
                            </div>
                            <div className="text-button text-secondary">Trusted by 50M+ People <br />around the globe</div>
                        </div>
                        <div className="text lg:mt-14 mt-5">
                            <div className="heading3">Payment Gateway Services</div>
                            <div className="body3 text-secondary lg:mt-6 mt-4">We provide reliable and secure payment gateway services for businesses of all sizes. With our cutting-edge technology and 24/7 customer support, you can easily accept payments from customers all over the world.</div>
                        </div>
                        <div className="button-block flex items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit">
                            <Link className="button-main box-shadow hover:bg-black text-white bg-blue whitespace-nowrap rounded-full" href="/contact-two">Get started</Link>
                            <div className="relative">
                                <Link className="button-main box-shadow hover:bg-black hover:text-white text-on-surface bg-white flex items-center gap-2 rounded-full relative z-[1]" href="/contact-two">
                                    <Icon.Phone weight="fill" className="text-xl" />
                                    <span className="whitespace-nowrap">(00) 123 456 789</span>
                                </Link>
                                <Image src="/images/component/gateway1-dot.png" className="absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2" width={4000} height={4000} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PaymentGatewayOneFirst
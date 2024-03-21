import Image from "next/image"
import Link from "next/link"

const CtaFour = () => {
    return (
        <div className="cta-block style-four bg-white relative">
            <div className="bg-cta w-full h-full absolute top-0 left-0">
                <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/cta/bg-cta4.png" alt="" />
            </div>
            <div className="container flex flex-col items-center h-full py-20 relative z-[1]">
                <div className="heading3 text-white text-center">Take control of your financial future.</div>
                <div className="body3 text-white text-center mt-4">Let us help you achieve your financial goals. Contact us today to schedule a consultation</div>
                <a className="button-main hover:bg-white hover:text-black bg-success text-white mt-8" href="/contact/contact-two">Get A Quote</a>
            </div>
        </div>
    )
}
export default CtaFour
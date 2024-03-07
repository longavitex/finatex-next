import Link from "next/link"

const CTA = () => {
    return (
        <div className="cta-block style-two relative h-[120px]">
            <div className="bg-cta w-full h-full absolute top-0 left-0 z-[-1]">
                <img className="w-full h-full object-cover" src="/images/cta/bg-cta1.png" alt="" />
            </div>
            <div className="container flex items-center justify-between h-full">
                <div className="heading5 text-white">Looking for a first-class business consultant?</div>
                <Link className="button-main rounded-full hover:bg-black hover:text-white bg-white text-button px-9 py-3" href="/contact/contact-two">Get A Quote</Link>
            </div>
        </div>
    )
}
export default CTA
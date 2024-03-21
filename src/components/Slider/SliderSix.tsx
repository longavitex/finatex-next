import Image from "next/image"
import Link from "next/link"
import 'swiper/css/bundle';

const SliderSix = () => {
    return (
        <>
            <div className="slider-block style-six">
                <div className="slider-main">
                    <div className="slider-item slider-first">
                        <div className="bg-img">
                            <Image
                                src={'/images/slider/slider6.png'}
                                width={4000}
                                height={3000}
                                alt="bgslider"
                                priority={true}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="container">
                            <div className="text-content">
                                <div className="heading2">
                                    <div className="relative overflow-hidden">
                                        <span className="block text-white relative overflow-hidden">Discover the Power of </span>
                                        <span className="block text-white absolute top-0 left-0 w-full h-full">Discover the Power of </span>
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <span className="block text-white relative overflow-hidden">Blockchain with Finatex</span>
                                        <span className="block text-white absolute top-0 left-0 w-full h-full">Blockchain with Finatex</span>
                                    </div>
                                </div>
                                <div className="body2 md:mt-6 mt-4 text-white xl:w-1/2 sm:w-2/3 w-full">{`Our platform offers you the flexibility to manage your finances on-the-go. Whether you're at home, at work, or on the move, you can easily check your account balances, transfer funds, pay bills, and more with just a few clicks.`}</div>
                                <div className="button-block md:mt-7 mt-5">
                                    <Link className="button-main bg-orange text-white hover:bg-white hover:text-black rounded-full" href="/service/service-one">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderSix
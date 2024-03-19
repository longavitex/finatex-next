import Image from 'next/image'
import React from 'react'

const AboutSix = () => {
    return (
        <div className="about-block style-six pt-[100px] bg-on-surface">
            <div className="container">
                <div className="flex max-lg:flex-col items-center justify-between gap-y-8">
                    <div className="w-full lg:w-1/2 sm:w-2/3 xl:px-16 px-10">
                        <div className="bg-img w-full">
                            <Image width={4000} height={4000} className="w-full" src="/images/component/earth6.png" alt="img" /></div>
                    </div>
                    <div className="w-full xl:w-5/12 lg:w-1/2">
                        <div className="text-button-uppercase text-orange">People Trust Us</div>
                        <div className="heading3 text-white mt-3">The #1 blockchain company in the Asian</div>
                        <div className="body1 text-placehover mt-10">{`At Finatex, we're passionate about helping freelancers succeed in today's competitive digital landscape. With years of experience in the industry, we understand the unique challenges & opportunities that freelancers face when it comes to SEO and digital marketing.`}</div>
                        <div className="flex items-center gap-4 mt-9">
                            <div className="flex items-center">
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[3]">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar3.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[2] -ml-3">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar4.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[1] -ml-3">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar5.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[2] -ml-3 max-[450px]:hidden">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar1.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[1] -ml-3 max-[400px]:hidden">
                                    <Image className="full h-full rounded-full" width={300} height={300} src="/images/member/avatar2.png" alt="" />
                                </div>
                                <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[0] -ml-3">
                                    <span className="w-full h-full flex items-center justify-center bg-white rounded-full text-button">5M</span>
                                </div>
                            </div>
                            <div className="text-button text-white">Trusted by 50M+ People around <br className='max-xl:hidden max-lg:block max-[400px]:hidden' /> the globe</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSix
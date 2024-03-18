const ServiceThreeFirst = () => {
    return (
        <div className="service-block style-three mt-[60px]">
            <div className="container">
                <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-[60px] gap-10">
                    <div className="w-full">
                        <div className="service-item box-shadow-none">
                            <div className="service-item-main flex flex-col gap-4">
                                <i className="icon-hand-touch text-gradient text-4xl"></i>
                                <div className="desc">
                                    <div className="heading7 hover-text-blue">Convenience</div>
                                    <div className="body3 text-secondary mt-1">Experience the convenience of banking with easy access to your accounts anytime, anywhere.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="service-item box-shadow-none">
                            <div className="service-item-main flex flex-col gap-4">
                                <i className="icon-user-lock text-gradient text-4xl"></i>
                                <div className="desc">
                                    <div className="heading7 hover-text-blue">24/7 account access</div>
                                    <div className="body3 text-secondary mt-1">Rest assured with our robust security measures to protect your transactions and sensitive.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="service-item box-shadow-none">
                            <div className="service-item-main flex flex-col gap-4">
                                <i className="icon-coin-bag text-gradient text-4xl"></i>
                                <div className="desc">
                                    <div className="heading7 hover-text-blue"> safe transactions</div>
                                    <div className="body3 text-secondary mt-1">Stay in control of your finances with effortless tracking and monitoring of your transactions.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-xl:hidden max-md:block">
                        <div className="service-item box-shadow-none">
                            <div className="service-item-main flex flex-col gap-4">
                                <i className="icon-chart-blue text-gradient text-4xl"></i>
                                <div className="desc">
                                    <div className="heading7 hover-text-blue">Easily track finances</div>
                                    <div className="body3 text-secondary mt-1">Enjoy round-the-clock access to your accounts for tracking seamless financial management.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceThreeFirst
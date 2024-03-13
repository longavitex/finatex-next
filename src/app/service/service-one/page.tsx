import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFive from "@/components/Section/Service/ServiceFive"
import serviceData from '@/data/service.json'
import Partner from "@/components/Section/Partner/Partner"
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function ServiceStyleOne() {
    return (
        <>
            <div className="overflow-x-hidden">
                <div id="header">
                    <TopNavOne />
                    <MenuOne />
                </div>
                <div className="content">
                    <BreadcrumbItem link="Our Services" img="/images/banner/about1.png" title="Our Services" desc="Expand your knowledge and skills in cryptocurrency trading through our educational resources." />
                    <div className="mt-[100px]">
                        <div className="container">
                            <div className="flex gap-8 max-lg:flex-col-reverse">
                                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                                    <div className="heading3">Effective Risk Management Solutions for Financial Stability</div>
                                    <div className="body2 text-secondary">We offer reliable Risk Management services to safeguard your assets, ensure financial stability, and navigate rapidly changing business environments. We understand that managing risks is crucial for the sustainability and success of your enterprise</div>
                                    <div className="button-block">
                                        <a className="button-main hover:bg-black text-white bg-blue text-button inline-block py-3 px-9 rounded-full" href="/service-detail">Discovery</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-img w-full overflow-hidden rounded-xl">
                                        <img className="w-full h-full block" src="/images/component/bottom-slider-three.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceFive data={serviceData} title="" />
                    <Partner />
                    <CTA />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFilter from "@/components/Section/Service/ServiceFilter"
import serviceData from '@/data/service.json'
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function ServiceStyleTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
                <div id="header">
                    <TopNavOne />
                    <MenuOne />
                </div>
                <div className="content">
                    <BreadcrumbItem link="Our Services" img="/images/banner/about1.png" title="Our Services" desc="Expand your knowledge and skills in cryptocurrency trading through our educational resources." />
                    <ServiceFilter data={serviceData} />
                    <CTA />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}
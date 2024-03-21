import MenuFour from "@/components/Header/Menu/MenuFour";
import TopNavFour from "@/components/Header/TopNav/TopNavFour";
import SliderFour from "@/components/Slider/SliderFour";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import serviceData from '@/data/service.json'
import ServiceFour from "@/components/Section/Service/ServiceFour";
import CounterFour from "@/components/Section/Counter/CounterFour";
import caseStudyData from '@/data/case-study.json'
import CaseStudyFour from "@/components/Section/CaseStudy/CaseStudyFour";
import testimonialData from '@/data/testimonial.json'
import TestimonialFour from "@/components/Section/Testimonial/TestimonialFour";
import PricingFour from "@/components/Section/Pricing/PricingFour";
import CtaFour from "@/components/Section/CTA/CtaFour"
import blogData from '@/data/blog.json'
import BlogFour from "@/components/Section/Blog/BlogFour";
import FormRequestFour from "@/components/Section/FormRequest/FormRequestFour";
import Footer from "@/components/Footer/Footer";


export default function HomeFour() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavFour />
                    <MenuFour />
                </header>
                <main className="content">
                    <SliderFour />
                    <PartnerOne classname='bg-deep-purple' />
                    <ServiceFour data={serviceData} />
                    <CounterFour />
                    <CaseStudyFour data={caseStudyData} />
                    <TestimonialFour data={testimonialData} />
                    <PricingFour />
                    <CtaFour />
                    <BlogFour data={blogData} />
                    <FormRequestFour />
                </main>
                <footer id="footer" className="style-four">
                    <Footer />
                </footer>
            </div>
        </>
    )
}
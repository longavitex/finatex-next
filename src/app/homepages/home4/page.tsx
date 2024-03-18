import MenuFour from "@/components/Header/Menu/MenuFour";
import TopNavFour from "@/components/Header/TopNav/TopNavFour";
import SliderFour from "@/components/Slider/SliderFour";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import ServiceThreeFirst from "@/components/Section/Service/ServiceThreeFirst";
import AboutThree from "@/components/Section/About/AboutThree";
import serviceData from '@/data/service.json'
import ServiceThree from "@/components/Section/Service/ServiceThree";
import caseStudyData from '@/data/case-study.json'
import CaseStudyThree from "@/components/Section/CaseStudy/CaseStudyThree";
import testimonialData from '@/data/testimonial.json'
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo";
import blogData from '@/data/blog.json'
import BlogOne from "@/components/Section/Blog/BlogOne";
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer";
import TestimonialThree from "@/components/Section/Testimonial/TestimonialThree";


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
                    <ServiceThreeFirst />
                    <AboutThree />
                    <ServiceThree data={serviceData} />
                    <CaseStudyThree data={caseStudyData} />
                    <TestimonialThree data={testimonialData} />
                    <FormRequestTwo classname="style-two style-three" bgImg="" />
                    <BlogOne data={blogData} />
                    <div className="pb-[100px]"></div>
                    <CTA />
                </main>
                <footer id="footer" className="style-three">
                    <Footer />
                </footer>
            </div>
        </>
    )
}
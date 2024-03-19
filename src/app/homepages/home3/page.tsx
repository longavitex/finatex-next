import MenuThree from "@/components/Header/Menu/MenuThree";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import SliderThree from "@/components/Slider/SliderThree";
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
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer";
import TestimonialThree from "@/components/Section/Testimonial/TestimonialThree";


export default function HomeThree() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavThree />
                    <MenuThree />
                </header>
                <main className="content">
                    <SliderThree />
                    <ServiceThreeFirst />
                    <AboutThree />
                    <ServiceThree data={serviceData} />
                    <CaseStudyThree data={caseStudyData} />
                    <TestimonialThree data={testimonialData} />
                    <FormRequestTwo classname="style-two style-three" bgImg="" />
                    <BlogOne data={blogData} />
                    <div className="pb-[100px]"></div>
                    <CtaOne />
                </main>
                <footer id="footer" className="style-three">
                    <Footer />
                </footer>
            </div>
        </>
    )
}
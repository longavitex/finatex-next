import MenuTwo from "@/components/Header/Menu/MenuTwo";
import TopNavTwo from "@/components/Header/TopNav/TopNavTwo";
import AboutTwo from "@/components/Section/About/AboutTwo";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import ProjectTwo from "@/components/Section/Project/ProjectTwo";
import SliderTwo from "@/components/Slider/SliderTwo";
import serviceData from '@/data/service.json'
import ServiceTwo from "@/components/Section/Service/ServiceTwo";
import TestimonialTwo from "@/components/Section/Testimonial/TestimonialTwo";
import blogData from '@/data/blog.json'
import BlogOne from "@/components/Section/Blog/BlogOne";
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer";
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo";


export default function HomeTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavTwo />
                    <MenuTwo />
                </header>
                <main className="content">
                    <SliderTwo />
                    <PartnerOne classname='bg-dark-blue' />
                    <AboutTwo />
                    <CounterTwo classname='lg:py-10 py-7 border-t border-line' />
                    <ProjectTwo />
                    <ServiceTwo data={serviceData} />
                    <TestimonialTwo />
                    <FormRequestTwo classname="style-two" bgImg="/images/banner/form-benefit-two.png" />
                    <BlogOne data={blogData} />
                    <div className="pb-[100px]"></div>
                    <CtaOne />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    )
}
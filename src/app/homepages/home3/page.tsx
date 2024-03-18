import MenuThree from "@/components/Header/Menu/MenuThree";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import ProjectTwo from "@/components/Section/Project/ProjectTwo";
import SliderThree from "@/components/Slider/SliderThree";
import serviceData from '@/data/service.json'
import ServiceTwo from "@/components/Section/Service/ServiceTwo";
import TestimonialTwo from "@/components/Section/Testimonial/TestimonialTwo";
import blogData from '@/data/blog.json'
import BlogOne from "@/components/Section/Blog/BlogOne";
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer";
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo";
import ServiceThreeFirst from "@/components/Section/Service/ServiceThreeFirst";
import AboutThree from "@/components/Section/About/AboutThree";


export default function HomeTwo() {
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
                    <ProjectTwo />
                    <ServiceTwo data={serviceData} />
                    <TestimonialTwo />
                    <FormRequestTwo classname="style-two" bgImg="/images/banner/form-benefit-two.png" />
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
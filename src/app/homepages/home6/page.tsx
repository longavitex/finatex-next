import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuSix from "@/components/Header/Menu/MenuSix";
import SliderSix from "@/components/Slider/SliderSix";
import PartnerSix from "@/components/Section/Partner/PartnerSix";
import CounterSix from "@/components/Section/Counter/CounterSix";
import serviceData from '@/data/service.json'
import ServiceSix from "@/components/Section/Service/ServiceSix";
import AboutSix from "@/components/Section/About/AboutSix";
import PricingSix from "@/components/Section/Pricing/PricingSix";
import ServiceSixSecond from "@/components/Section/Service/ServiceSixSecond";
import testimonialData from '@/data/testimonial.json'
import TestimonialSix from "@/components/Section/Testimonial/TestimonialSix";
import blogData from '@/data/blog.json'
import BlogSix from "@/components/Section/Blog/BlogSix";
import Footer from "@/components/Footer/Footer";
import FormRequestSix from "@/components/Section/FormRequest/FormRequestSix";

export default function HomeSix() {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <header id="header" className="style-five style-six">
          <TopNavOne />
          <MenuSix />
        </header>
        <main className="content">
          <SliderSix />
          <PartnerSix classname='bg-black' />
          <CounterSix />
          <ServiceSix data={serviceData} />
          <AboutSix />
          <PricingSix />
          <ServiceSixSecond />
          <TestimonialSix data={testimonialData} />
          <BlogSix data={blogData} />
          <FormRequestSix bgImg="/images/cta/bg-cta6.png" classname="style-two style-six" />
        </main>
        <footer id="footer" className="style-six">
          <Footer />
        </footer>
      </div>
    </>
  );
}

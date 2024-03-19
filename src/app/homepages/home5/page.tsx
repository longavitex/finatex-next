import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderFive from "@/components/Slider/SliderFive";
import ServiceFive from "@/components/Section/Service/ServiceFive";
import serviceData from '@/data/service.json'
import FormRequestFive from "@/components/Section/FormRequest/FormRequestFive";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import testimonialData from '@/data/testimonial.json'
import Footer from "@/components/Footer/Footer";
import CounterFive from "@/components/Section/Counter/CounterFive";
import AboutFive from "@/components/Section/About/AboutFive";
import CardFive from "@/components/Section/Card/CardFive";
import OurTeam from "@/components/Section/OurTeam/OurTeam";
import ProjectFive from "@/components/Section/Project/ProjectFive";
import TestimonialFive from "@/components/Section/Testimonial/TestimonialFive";

export default function HomeFive() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header" className="style-five">
            <TopNavOne />
            <MenuOne />
        </header>
        <main className="content">
          <SliderFive />
          <CounterFive classname="bg-surface rounded-2xl py-8 px-10 lg:mt-[100px] sm:mt-16 mt-10" />
          <ServiceFive title="Services that Empower Your Cryptocurrency Trading" data={serviceData} />
          <AboutFive />
          <CardFive />
          <PartnerOne classname='bg-black lg:mt-[60px] sm:mt-12 mt-8' />
          <ProjectFive />
          <TestimonialFive data={testimonialData} />
          <FormRequestFive />
          <OurTeam />
          <div className="lg:pb-[100px] sm:pb-16 pb-10"></div>
        </main>
        <footer id="footer" className="style-five">
          <Footer />
        </footer>
      </div>
    </>
  );
}

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import ServiceAboutTwo from "@/components/Section/Service/ServiceAboutTwo"
import serviceData from '@/data/service.json'
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo"
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import Partner from "@/components/Section/Partner/PartnerAbout"
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function AboutStyleTwo() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem link="About Us" img="/images/banner/about1.png" title="About Us" desc="We perform a full analysis of the client’s website and collect information about all the competitors to formulate a proper strategy." />
          <AboutTwo />
          <ServiceAboutTwo data={serviceData} />
          <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form-cta-about.png" />
          <OurTeam />
          <Partner />
          <CTA />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  )
}
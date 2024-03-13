import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import ServiceAboutTwo from "@/components/Section/Service/ServiceAboutTwo"
import serviceData from '@/data/service.json'
import FormCtaTwo from "@/components/Section/FormCTA/FormCtaTwo"
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import Partner from "@/components/Section/Partner/Partner"
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function AboutStyleTwo() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div id="header">
          <TopNavOne />
          <MenuOne />
        </div>
        <div className="content">
          <BreadcrumbItem link="About Us" img="/images/banner/about1.png" title="About Us" desc="We perform a full analysis of the client’s website and collect information about all the competitors to formulate a proper strategy." />
          <AboutTwo />
          <ServiceAboutTwo data={serviceData} />
          <FormCtaTwo />
          <OurTeam />
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
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceOne from "@/components/Section/Service/ServiceOne";
import serviceData from '@/data/service.json'
import PaymentGateway from "@/components/Home1/PaymentGateway";

export default function Home() {
  return (
    <>
      <div className="">
        <div id="header">
          <TopNavOne />
          <MenuOne />
        </div>
        <div className="content overflow-x-hidden pb-36">
          <SliderOne />
          <ServiceOne data={serviceData} />
          <PaymentGateway />
        </div>
      </div>
    </>
  );
}

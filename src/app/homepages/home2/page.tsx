import MenuTwo from "@/components/Header/Menu/MenuTwo";
import TopNavTwo from "@/components/Header/TopNav/TopNavTwo";
import AboutTwo from "@/components/Section/About/AboutTwo";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import SliderTwo from "@/components/Slider/SliderTwo";


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
                </main>
                <footer id="footer">
                </footer>
            </div>
        </>
    )
}
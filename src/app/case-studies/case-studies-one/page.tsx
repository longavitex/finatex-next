import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne"
import caseStudyData from '@/data/case-study.json'
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function CaseStudyStyleOne() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Case Studies" img="/images/banner/case-studies.png" title="Case Studies" desc="Discover our collection of compelling Case Studies showcasing our successful projects and the positive impact we've made for our clients." />
                    <CaseStudyOne data={caseStudyData} />
                    <CTA />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
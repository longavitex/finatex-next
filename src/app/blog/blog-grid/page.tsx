import Link from "next/link"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import faqData from '@/data/faqs.json'
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function BlogStyleGrid() {
    return (
        <>
            <div className="overflow-x-hidden">
                <div id="header">
                    <TopNavOne />
                    <MenuOne />
                </div>
                <div className="content">
                    <BreadcrumbItem link="Blog" img="/images/banner/blog.png" title="Blog" desc="Discover valuable insights and expert advice on budgeting, investing, and retirement planning in our Financial Blogs section." />
                    
                    <CTA />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}
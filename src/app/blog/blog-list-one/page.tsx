import Link from "next/link"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import LayoutListOne from "@/components/Blog/LayoutListOne"
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function BlogListStyleOne() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Blog" img="/images/banner/blog.png" title="Blog" desc="Discover valuable insights and expert advice on budgeting, investing, and retirement planning in our Financial Blogs section." />
                    <LayoutListOne />
                    <CTA />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
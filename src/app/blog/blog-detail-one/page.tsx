import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import LayoutDetailOne from "@/components/Blog/LayoutDetailOne"
import blogData from '@/data/blog.json'
import CTA from "@/components/Section/CTA/CTA"
import Footer from "@/components/Footer/Footer"

export default function CaseStudyDetail({ params: { slug } }: { params: { slug: string } }) {
    const foundPost = blogData.find(item => {
        return item.title.toLowerCase().replace(/ /g, '-') === slug
    })

    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Case Studies" img="/images/banner/case-studies.png" title="Blog Detail" desc="Discover valuable insights and expert advice on budgeting, investing, and retirement planning in our Financial Blogs section." />
                    <LayoutDetailOne data={foundPost} />
                    <CTA />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
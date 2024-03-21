import Image from "next/image"
import Link from "next/link"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import LayoutDetailTwo from "@/components/Blog/LayoutDetailTwo"
import blogData from '@/data/blog.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";

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
                    <div className="breadcrumb-block w-full lg:h-[400px] h-[360px] relative">
                        <div className="bg-img w-full h-full absolute top-0 left-0 z-[-1]">
                            <Image src="/images/banner/case-studies.png" width={4000} height={3000} alt="banner" className="w-full h-full object-cover" />
                        </div>
                        <div className="container relative h-full flex items-center justify-center">
                            <div className="heading-nav flex items-center gap-1 absolute top-8 left-4 py-1.5 px-4 rounded-full bg-line">
                                <Link className="hover:underline caption1 text-white" href="/">Home</Link>
                                <Icon.CaretDoubleRight className="text-white" />
                                <div className="caption1 text-white">Blog Detail</div>
                            </div>
                            <div className="text-nav flex flex-col items-center justify-center xl:w-2/3 lg:w-3/4 sm:w-5/6">
                                <div className="caption2 text-center py-2 px-4 bg-surface rounded-2xl inline-block">{foundPost?.tag || 'Design'}</div>
                                <div className="heading4 text-center mt-4 text-white">{foundPost?.title || 'Earn good money and make you very successful creative Business'}</div>
                                <div className="date flex items-center justify-center gap-4 mt-4">
                                    <div className="author flex items-center gap-4"><Image width={4000} height={4000} className="w-10 h-10 border border-line rounded-full" src={foundPost?.img || "/images/member/avatar4.png"} alt="" /><span className="text-button text-white">{foundPost?.author || 'Avitex'} </span></div>
                                    <div className="space text-3xl font-normal text-white">-</div>
                                    <div className="item-date flex items-center">
                                        <Icon.CalendarBlank weight="bold" className="text-white" />
                                        <span className="ml-1 caption2 text-white">{foundPost?.date || '2 days ago'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LayoutDetailTwo data={foundPost} />
                    <CtaOne />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
'use client'

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuFour = () => {
    const pathname = usePathname()
    const [fixedHeader, setFixedHeader] = useState(false)
    // const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 400);
            // setLastScrollPosition(scrollPosition);
        };

        // Gắn sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Hủy sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header-menu style-four bg-black ${fixedHeader ? 'fixed' : ''}`}>
                <div className="container flex items-center justify-between h-20">
                    <div className="menu-humburger hidden max-lg:block pointer" onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                        <Icon.List className="text-2xl text-white" weight="bold" />
                    </div>
                    <div className="menu-center-block h-full">
                        <ul className="menu-nav flex items-center xl:gap-2 h-full">
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' || pathname.includes('/homepages/') ? 'active' : ''}`}>
                                <Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                    <span>Home</span>
                                    <span><Icon.CaretDown className="text-sm" /></span>
                                </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/' ? 'active' : ''}`}><Link className="sub-nav-link font-medium" href="/">Payment Solution</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/homepages/home2">Financial Planning</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/homepages/home3">Online Banking</Link></li>
                                    <li className={`sub-nav-item active`}> <Link className="sub-nav-link font-medium" href="/homepages/home4">Personal Finance</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/homepages/home5">Cryptocurrency Financial</Link></li>
                                    <li className={`sub-nav-item`}> <Link className="sub-nav-link font-medium" href="/homepages/home6">Blockchain</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/about/') ? 'active' : ''}`}><Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                <span>About</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/about/about-one' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/about/about-one">About Style 1</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/about/about-two' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/about/about-two">About Style 2</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/service') ? 'active' : ''}`}><Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                <span>Services</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/service/service-one' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/service/service-one">Service Style 1</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/service/service-two' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/service/service-two">Service Style 2</Link></li>
                                    <li className={`sub-nav-item ${pathname.includes('/service/service-detail') ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/service/service-detail">Services Detail</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/case-studies/') ? 'active' : ''}`}><Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                <span>Case Studies</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/case-studies/case-studies-one' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/case-studies/case-studies-one">Case Studies 1</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/case-studies/case-studies-two' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/case-studies/case-studies-two">Case Studies 2</Link></li>
                                    <li className={`sub-nav-item ${pathname.includes('/case-studies/detail') ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/case-studies/detail">Case Studies Detail</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/pages/') ? 'active' : ''}`}><Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                <span>Pages</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/pages/faqs' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/pages/faqs">FAQs</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/pages/pricing' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/pages/pricing">Pricing</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/pages/partners' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/pages/partners">Partners</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/blog/') ? 'active' : ''}`}><Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                <span>Blog</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/blog/blog-list-one' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/blog/blog-list-one">Blog List 1</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/blog/blog-list-two' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/blog/blog-list-two">Blog List 2</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/blog/blog-grid' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/blog/blog-grid">Blog Grid</Link></li>
                                    <li className={`sub-nav-item ${pathname.includes('/blog/blog-detail-one') ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/blog/blog-detail-one">Blog Detail 1</Link></li>
                                    <li className={`sub-nav-item ${pathname.includes('/blog/blog-detail-two') ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/blog/blog-detail-two">Blog Detail 2</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/contact/') ? 'active' : ''}`}><Link className="nav-link text-white text-title flex items-center gap-1" href="#!">
                                <span>Contact</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/contact/contact-one' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/contact/contact-one">Contact Style 1</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/contact/contact-two' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/contact/contact-two">Contact Style 2</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-right-block flex items-center">
                        <Link href={'/contact/contact-one'} className="button-main bg-success hover:bg-white hover:text-black text-white rounded-full mr-5 max-sm:hidden">Get a quote</Link>
                        <div className="icon-call"><i className="icon-phone-call text-4xl"></i></div>
                        <div className="text ml-3">
                            <div className="text-button-sm text-placehover">Call us 24/7</div>
                            <div className="number text-white text-button">+123 456 7890</div>
                        </div>
                    </div>
                </div>
                <div id="menu-mobile-block" className={`${openMenuMobile && 'open'}`}>
                    <div className="menu-mobile-main">
                        <div className="container">
                            <ul className="menu-nav-mobile h-full pt-1 pb-1">
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${openSubNavMobile === 1 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(1)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Home </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 1 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/">Payment Solution</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home2">Financial Planning</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home3">Online Banking</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2 active"> <Link className="sub-nav-link text-base" href="/homepages/home4">Personal Finance</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home5">Cryptocurrency Financial</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/homepages/home6">Blockchain</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${openSubNavMobile === 2 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(2)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">About </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 2 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/about/about-one">About Style 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/about/about-two">About Style 2</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services ${openSubNavMobile === 3 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(3)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Services </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 3 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/service/service-one">Service Style 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/service/service-two">Service Style 2</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/service/service-detail">Services Detail</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer case ${openSubNavMobile === 4 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(4)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Case Studies </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 4 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/case-studies/case-studies-one">Case Studies 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/case-studies/case-studies-two">Case Studies 2</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/case-studies/detail">Case Studies Detail</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer pages ${openSubNavMobile === 5 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(5)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Pages </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 5 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/pages/faqs">FAQs</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/pages/pricing">Pricing</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/pages/partners">Partners</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer blog ${openSubNavMobile === 6 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(6)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Blog </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 6 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/blog/blog-list-one">Blog List 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/blog/blog-list-two">Blog List 2</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/blog/blog-grid">Blog Grid</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/blog/blog-detail-one">Blog Detail 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/blog/blog-detail-two">Blog Detail 2</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer contact ${openSubNavMobile === 7 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(7)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="#!">
                                        <span className="body2 font-semibold">Contact </span>
                                        <Icon.CaretRight className="text-base" />
                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 7 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/contact/contact-one">Contact Style 1</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/contact/contact-two">Contact Style 2</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuFour
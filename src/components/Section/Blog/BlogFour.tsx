import React from "react"
import Link from "next/link"
import BlogItem from "@/components/Blog/BlogItem"
import { BlogType } from "@/type/BlogType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface Props {
    data: Array<BlogType>
}

const BlogFour: React.FC<Props> = ({ data }) => {
    return (
        <section className="list-blog three-col lg:py-[100px] sm:py-16 py-10">
            <div className="container">
                <div className="heading flex items-center justify-between">
                    <h3 className="heading3">Latest News</h3>
                    <Link className="text-button underline hover:text-success duration-300" href="/blog/blog-list-one">
                        View All
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2 sm:gap-y-10 gap-y-8 md:mt-10 mt-6">
                    <div className="left lg:pr-16">
                        {data.slice(3, 4).map((item) => (
                            <Link
                                key={item.id}
                                className="blog-item block"
                                href={"/blog/blog-detail-one/[slug]"}
                                as={"/blog/blog-detail-one/" + item.title.toLowerCase().replace(/ /g, '-')}
                            >
                                <div className="w-full">
                                    <div className="bg-img w-full overflow-hidden rounded-xl">
                                        <Image width={5000} height={5000} className="w-full h-full block" src={item.img} alt={item.title} />
                                    </div>
                                    <div className="heading4 mt-4">{item.title}</div>
                                    <div className="body3 text-secondary mt-3">{item.desc}</div>
                                    <div className="date flex items-center gap-4 mt-3">
                                        <div className="author caption2 text-secondary">by <span className="text-black">{item.author} </span></div>
                                        <div className="item-date flex items-center">
                                            <Icon.CalendarBlank weight='bold' />
                                            <span className="ml-1 caption2">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="right flex flex-col gap-8 lg:pl-4">
                        {data.slice(5, 8).map((item) => (
                            <Link
                                key={item.id}
                                className="blog-item flex max-sm:flex-col items-start gap-7 gap-y-5"
                                href={"/blog/blog-detail-one/[slug]"}
                                as={"/blog/blog-detail-one/" + item.title.toLowerCase().replace(/ /g, '-')}
                            >
                                <div className="bg-img sm:w-[197px] flex-shrink-0 overflow-hidden rounded-lg">
                                    <Image width={5000} height={5000} className="w-full h-full object-cover block" src={item.img} alt={item.title} />
                                </div>
                                <div className="infor">
                                    <div className="heading6">{item.title}</div>
                                    <div className="body3 text-secondary mt-2">{item.desc}</div>
                                    <div className="date flex items-center gap-4 mt-2">
                                        <div className="author caption2 text-secondary">by <span className="text-on-surface">{item.author} </span></div>
                                        <div className="item-date flex items-center">
                                            <Icon.CalendarBlank weight='bold' />
                                            <span className="ml-1 caption2">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogFour
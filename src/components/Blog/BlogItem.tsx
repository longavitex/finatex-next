import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogType } from '@/type/BlogType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface BlogProps {
    data: BlogType
    type: string
}

const BlogItem: React.FC<BlogProps> = ({ data, type }) => {

    return (
        <>
            {type === 'list-one' && (
                <Link
                    className="blog-item flex max-md:flex-col md:items-center gap-7 gap-y-5"
                    href={"/blog/blog-detail-one/[slug]"}
                    as={"/blog/blog-detail-one/" + data.title.toLowerCase().replace(/ /g, '-')}
                >
                    <div className="w-full md:w-1/2">
                        <div className="bg-img w-full overflow-hidden rounded-2xl"><Image width={5000} height={5000} className="w-full h-full block" src={data.img} alt={data.title} /></div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize">{data.tag}</div>
                        <div className="heading6 mt-2">{data.title}</div>
                        <div className="date flex items-center gap-4 mt-2">
                            <div className="author caption2 text-secondary">by <span className="text-on-surface">{data.author} </span></div>
                            <div className="item-date flex items-center">
                                <Icon.CalendarBlank weight='bold' />
                                <span className="ml-1 caption2">{data.date}</span>
                            </div>
                        </div>
                        <div className="body3 text-secondary mt-4 pb-4">{data.desc}</div>
                        <div className="read font-bold underline">Read More</div>
                    </div>
                </Link>
            )}
            {type === 'list-two' && (
                <Link
                    className="blog-item block"
                    href={"/blog/blog-detail-one/[slug]"}
                    as={"/blog/blog-detail-one/" + data.title.toLowerCase().replace(/ /g, '-')}
                >
                    <div className="w-full">
                        <div className="bg-img w-full overflow-hidden rounded-2xl">
                            <Image width={5000} height={5000} className="w-full h-full block" src={data.img} alt={data.title} />
                        </div>
                        <div className="date flex items-center gap-4 mt-5">
                            <div className="author caption2 text-secondary">by <span className="text-on-surface">{data.author} </span></div>
                            <div className="item-date flex items-center">
                                <Icon.CalendarBlank weight='bold' />
                                <span className="ml-1 caption2">{data.date}</span>
                            </div>
                            <div className="item-date flex items-center">
                                <Icon.Chat />
                                <span className="ml-1 caption2">19</span>
                            </div>
                            <div className="item-date flex items-center">
                                <Icon.Eye />
                                <span className="ml-1 caption2">130</span>
                            </div>
                        </div>
                        <div className="heading6 mt-2">{data.title}</div>
                        <div className="body3 text-secondary mt-2 pb-4">{data.desc}</div>
                        <div className="read font-bold underline">Read More</div>
                    </div>
                </Link>
            )}
            {type === 'grid' && (
                <div className="blog-item">
                    <Link
                        className="blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500"
                        href={"/blog/blog-detail-one/[slug]"}
                        as={"/blog/blog-detail-one/" + data.title.toLowerCase().replace(/ /g, '-')}
                    >
                        <div className="bg-img w-full overflow-hidden">
                            <Image width={5000} height={5000} className="w-full h-full block" src={data.img} alt={data.title} />
                        </div>
                        <div className="infor sm:p-6 p-4">
                            <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize">{data.tag}</div>
                            <div className="heading6 mt-2">{data.title}</div>
                            <div className="date flex items-center gap-4 mt-2">
                                <div className="author caption2 text-secondary">by <span className="text-on-surface">{data.author} </span></div>
                                <div className="item-date flex items-center">
                                    <Icon.CalendarBlank weight='bold' />
                                    <span className="ml-1 caption2">{data.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}
export default BlogItem
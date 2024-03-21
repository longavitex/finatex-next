'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import blogData from '@/data/blog.json'
import BlogItem from '@/components/Blog/BlogItem';
import HandlePagination from '@/components/Other/HandlePagination'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import Image from 'next/image';

const LayoutListOne = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 5;
  const offset = currentPage * productsPerPage;

  const searchParams = useSearchParams()
  let dataCategory = searchParams.get('category')
  let dataTag = searchParams.get('tag')
  const [category, setCategory] = useState<string | null>(dataCategory);
  const [tag, setTag] = useState<string | null>(dataTag);

  const handleCategory = (category: string) => {
    setCategory(prevCategory => prevCategory === category ? null : category)
    setCurrentPage(0)
  }

  const handleTag = (tag: string) => {
    setTag(prevTag => prevTag === tag ? null : tag)
    setCurrentPage(0)
  }

  let filteredData = blogData.filter(blog => {
    let isCategoryMatched = true
    if (category) {
      isCategoryMatched = blog.category === category
    }

    let isTagMatched = true
    if (tag) {
      isTagMatched = blog.tag === tag
    }

    return isCategoryMatched && isTagMatched
  })

  if (filteredData.length === 0) {
    filteredData = [{
      id: -1,
      category: "no-data",
      tag: "no-data",
      title: "no-data",
      date: "no-data",
      author: "no-data",
      avatar: "no-data",
      img: "",
      desc: "no-data",
      listImg: [],
    }];
  }

  const pageCount = Math.ceil(filteredData.length / productsPerPage);

  // If page number 0, set current page = 0
  if (pageCount === 0) {
    setCurrentPage(0);
  }

  const currentBlogs = filteredData.slice(offset, offset + productsPerPage);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  return (
    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
      <div className="container">
        <div className="flex max-lg:flex-col gap-y-10">
          <div className="w-full lg:w-2/3">
            <div className="list flex flex-col gap-y-10">
              {currentBlogs.map(item => (
                item.id === -1 ? (
                  <div key={item.id} className="no-data-blog">No blogs match the selected criteria.</div>
                ) : (
                  <BlogItem key={item.id} data={item} type='list-one' />
                )
              ))}
            </div>
            {pageCount > 1 && (
              <div className="list-pagination w-full flex items-center md:mt-10 mt-6">
                <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3 lg:pl-[55px]">
            <div className="search-block rounded-lg bg-surface h-[50px] relative">
              <input className="rounded-lg bg-surface w-full h-full pl-4 pr-12" type="text" placeholder="Search" />
              <Icon.MagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer' />
            </div>
            <div className="cate-block md:mt-10 mt-6">
              <div className="heading7">Categories</div>
              <div className="list-nav mt-4">
                {['financial planning', 'payment solution', 'cryptocurrency financial', 'blockchain', 'online banking', 'personal financial'].map(item => (
                  <div
                    key={item}
                    className={`nav-item rounded-lg flex items-center justify-between p-3 cursor-pointer text-button text-secondary capitalize ${item === category ? 'active' : ''}`}
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                    <Icon.CaretRight weight="bold" />
                  </div>
                ))}
              </div>
            </div>
            <div className="recent-post-block md:mt-10 mt-6">
              <div className="recent-post-heading heading7">Recent Posts</div>
              <div className="list-recent-post flex flex-col gap-6 mt-4">
                {blogData.slice(4, 7).map(item => (
                  <Link
                    key={item.id}
                    href={"/blog/blog-detail-one/[slug]"}
                    as={"/blog/blog-detail-one/" + item.title.toLowerCase().replace(/ /g, '-')}
                    className="recent-post-item flex items-start gap-4 cursor-pointer"
                  >
                    <div className="item-img flex-shrink-0 w-20 h-20 rounded">
                      <Image width={5000} height={5000} src={item.img} alt={item.title} className='w-full h-full object-cover' />
                    </div>
                    <div className="item-infor w-full">
                      <div className="item-date flex items-center">
                        <Icon.CalendarBlank weight='bold' />
                        <span className="ml-1 caption2">{item.date}</span>
                      </div>
                      <div className="item-title mt-1">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="tags-popular-block md:mt-10 mt-6">
              <div className="tag-heading heading7">Popular Tags</div>
              <div className="list-tag mt-4 flex flex-wrap gap-3">
                {['featured', 'experience', 'interview', 'skill', 'business', 'design'].map(item => (
                  <div
                    key={item}
                    className={`caption2 py-2 px-4 rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer ${item === tag ? 'bg-black text-white' : 'bg-surface'}`}
                    onClick={() => handleTag(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutListOne
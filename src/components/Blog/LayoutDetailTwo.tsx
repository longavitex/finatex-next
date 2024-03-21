'use client'

import React, { useState } from 'react'
import blogData from '@/data/blog.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation';
import { BlogType } from '@/type/BlogType';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  data: BlogType | undefined
}

const LayoutDetailTwo: React.FC<Props> = ({ data }) => {
  const router = useRouter()

  const handleTag = (tag: string) => {
    router.push(`/blog/blog-list-one?tag=${tag}`)
  }


  return (
    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-2/3">
            <div className="blog-paragraph">
              <div className="paragraph-heading">
                <div className="bg-img"><Image width={4000} height={4000} className="w-full rounded-2xl" src={data?.img || "/images/blog/item3.png"} alt="img" /></div>
              </div>
              <div className="paragraph-content mt-8">
                <div className="body2 text-secondary">{`Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance, we empower you to unlock your creative business potential and thrive in today's competitive landscape.`}</div>
                <div className="review pl-4 py-2 border-l-2 border-line mt-4">
                  <div className="body2 italic">“ Seize control of your financial future and unleash your potential for success. Our expert guidance will empower you to navigate the intricacies of financial management. From budgeting and saving to investing and debt management, we provide the tools and knowledge you need to achieve your goals.”.</div>
                  <li className="text-xs uppercase font-bold mt-4">Tony Nguyen, CEO of Avitex</li>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-7 mt-8">
                {data?.listImg ? data?.listImg.map(item => (
                  <div className="w-full" key={item}> <Image width={4000} height={4000} className="w-full rounded-xl" src={item} alt="img" /></div>
                )) : (
                  <>
                    <div className="w-full"> <Image width={4000} height={4000} className="w-full rounded-xl" src="/images/blog/item13.png" alt="img" /></div>
                    <div className="w-full"> <Image width={4000} height={4000} className="w-full rounded-xl" src="/images/blog/item7.png" alt="img" /></div>
                  </>
                )}
              </div>
              <div className="paragraph-content mt-8">
                <div className="heading6">How to Saving Finacial</div>
                <div className="body2 text-secondary mt-4">{`Let us help you navigate the complexities of the financial world, maximize your earnings, and turn your creative passion into a lucrative venture. It's time to unleash your full potential and embark on a journey towards financial prosperity.`}</div>
                <div className="list-feature mt-8">
                  <div className="grid lg:grid-cols-2 gap-y-3">
                    <div className="w-full gap-y-3 flex flex-col">
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Identification of monthly income</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Creation of savings and investment plan</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Management and calculation expenses</div>
                      </div>
                    </div>
                    <div className="w-full gap-y-3 flex flex-col">
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Research and Analysis</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Investment Management and Investment Advice</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Education and Resources</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 border border-line"></div>
                <div className="list-li mt-5 px-3">
                  <li className="body3 text-secondary">15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                  <li className="body3 text-secondary mt-2">Deep knowledge and experience with different security areas like identity and access management, cryptography, network security, etc.</li>
                  <li className="body3 text-secondary mt-2">Experience with database systems and database internals, such as query engines and optimizers are a big plus. </li>
                  <li className="body3 text-secondary mt-2">Strong fundamentals in computer science skills.</li>
                </div>
                <div className="end mt-5 body2 text-secondary">{`Saving money is an essential skill for financial stability and long-term success. We understand the importance of efficient resource management, and we're here to guide you through proven strategies to optimize your financial savings. Our experts will provide you with practical tips and insights, such as budgeting techniques, expense tracking, smart investment options, and ways to reduce unnecessary expenses.`}</div>
              </div>
            </div>
            <div className="blog-more-infor mt-8">
              <div className="infor-above flex items-center justify-between flex-wrap gap-6">
                <div className="tags-cloud-block flex items-center gap-3 max-sm:flex-wrap">
                  <div className="body3">Tag(s):</div>
                  <div className="list-nav flex items-center gap-3 max-sm:flex-wrap">
                    <span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer" onClick={() => handleTag('featured')}>Featured</span>
                    <span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer" onClick={() => handleTag('interview')}>Interview</span>
                    <span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer" onClick={() => handleTag('business')}>Business</span></div>
                </div>
                <div className="share-block flex items-center gap-4 max-sm:flex-wrap">
                  <div className="caption2 py-2 px-4 rounded-lg border border-line">Copy the link</div>
                  <div className="social-media flex items-center gap-3 max-sm:flex-wrap">
                    <a href="http://facebook.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-facebook text-black"></i></a>
                    <a href="http://linkedin.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-in text-black"></i></a>
                    <a href="http://twitter.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-twitter text-black text-sm"></i></a>
                    <a href="http://instagram.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-insta text-black text-sm"></i></a>
                    <a href="http://youtube.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-youtube text-black text-xs"></i></a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border border-line"></div>
              <div className="infor-below flex max-sm:flex-wrap items-center justify-between gap-6 py-5">
                <div className="prev-block"> <div className="text-left">
                  <div className="text-button-uppercase text-blue">Previous</div>
                  <div className="heading7 mt-1">How to choose the right customer </div></div></div>
                <div className="next-block"> <div className="sm:text-right">
                  <div className="text-button-uppercase text-blue">Next</div>
                  <div className="heading7 mt-1">Starting your traveling blog with Vasco</div></div></div>
              </div>
              <div className="border border-line"></div>
            </div>
            <div className="blog-form-contact mt-8 md:p-10 p-7 bg-surface rounded-xl">
              <div className="heading7">Leave a Comment</div>
              <form className="form-contact-input mt-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="w-full">
                    <div className="body3 pb-3">Name</div>
                    <input className="bg-white rounded-lg p-4 w-full" type="text" placeholder="Alexander" required />
                  </div>
                  <div className="w-full">
                    <div className="body3 pb-3">Email</div>
                    <input className="bg-white rounded-lg p-4 w-full" type="email" placeholder="avitex@mail.com" required />
                  </div>
                  <div className="w-full sm:col-span-2">
                    <div className="body3 pb-3">Comment</div>
                    <textarea className="bg-white rounded-lg w-full p-4" rows={3} placeholder="Write comment..." required ></textarea>
                  </div>
                  <div className="w-full sm:col-span-2 flex items-center">
                    <input type="checkbox" id='check' name="check" />
                    <label htmlFor='check' className="caption1 pl-2">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                </div>
                <div className="button-block mt-8">
                  <button className="button-main hover:bg-black bg-blue text-white text-button rounded-full">Submit Comment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetailTwo
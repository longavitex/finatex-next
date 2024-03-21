'use client'

import { useState } from 'react';
import faqData from '@/data/faqs.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const FaqsOne = () => {
  const [faq, setFaq] = useState<number | null>(5)

  const handleFaq = (id: number) => {
    setFaq(prevId => prevId === id ? null : id)
  }

  return (
    <section className="faqs-block style-one lg:mt-[100px] sm:mt-16 mt-10">
      <div className="flex max-xl:flex-wrap main">
        <div className="w-full xl:w-1/2">
          <div className="bg-img w-full">
            <Image width={5000} height={5000} src="/images/component/item1.png" alt="img" className="w-full" />
          </div>
          <div className="desc bg-blue flex items-center justify-center">
            <div className="content flex gap-8">
              <i className="icon-hand-team text-white flex-shrink-0"></i>
              <h4 className="heading4 text-white">We aim for a world of convenience and value for many customers</h4>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 bg-surface">
          <div className="content-main">
            <div className="heading3">Frequently Asked questions</div>
            <div className="list-question">
              {faqData.slice(3, 8).map(item => (
                <div
                  key={item.id}
                  className={`question-item hover-box-shadow pointer mt-5 px-7 rounded-lg border border-line cursor-pointer ${faq === item.id ? 'open' : ''}`}
                  onClick={() => handleFaq(item.id)}
                >
                  <div className="question-item-main flex items-center justify-between py-4 heading7">{item.title}
                    {faq === item.id ? (
                      <Icon.Minus weight="bold" className="text-xl" />
                    ) : (
                      <Icon.Plus weight="bold" className="text-xl" />
                    )}
                  </div>
                  <div className="content-question">
                    <div className="border-line w-full"></div>
                    <div className="body3 text-secondary pb-4">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FaqsOne
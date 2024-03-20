'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutTwo = () => {
  const [tabActive, setTabActive] = useState<string>('about us')

  const handleTabActive = (item: string) => {
    setTabActive(item)
  }

  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-white">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/component/assessment.png"
                width={4000}
                height={4000}
                alt=""
                className="w-full h-full block"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-col lg:pl-20">
            <div className="heading3">Financial assessment</div>
            <div className="nav-infor mt-8">
              <div className="list-nav flex items-center gap-10 border-b border-line w-fit">
                {
                  ['about us', 'mission', 'vision'].map((item, index) => (
                    <div className={`text-button-sm has-line-before line-2px line-blue cursor-pointer capitalize ${tabActive === item ? 'active' : ''}`}
                      key={index}
                      onClick={() => handleTabActive(item)}
                    >
                      {item}
                    </div>
                  ))
                }
              </div>
              <div className={`description item-filter ${tabActive === 'about us' ? 'show' : 'hide'}`}>
                <div className="title text-secondary mt-4">
                  We are devoted team providing premium financial solutions.
                  Explore our mission, values, and achievements as we empower
                  clients for a secure financial future.
                </div>
                <div className="more-infor mt-6">
                  <div className="infor flex items-center gap-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Identification of monthly income
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Creation of savings and investment plan
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Management and calculation of monthly expenses
                    </div>
                  </div>
                </div>
              </div>
              <div className={`description item-filter ${tabActive === 'mission' ? 'show' : 'hide'}`}>
                <div className="title body3 text-secondary mt-4">
                  Our mission is to provide comprehensive and personalized
                  financial solutions that empower our clients to achieve their
                  financial goals and secure their future.
                </div>
                <div className="more-infor mt-6">
                  <div className="infor flex items-center gap-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Management and calculation of monthly expenses
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Identification of monthly income
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Creation of savings and investment plan
                    </div>
                  </div>
                </div>
              </div>
              <div className={`description item-filter ${tabActive === 'vision' ? 'show' : 'hide'}`}>
                <div className="title body3 text-secondary mt-4">
                  Our unwavering vision is to be the most trusted and preferred
                  partner in achieving financial success, diligently guiding our
                  valued clients toward a secure and prosperous future.
                </div>
                <div className="more-infor mt-6">
                  <div className="infor flex items-center gap-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Creation of savings and investment plan
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Management and calculation of monthly expenses
                    </div>
                  </div>
                  <div className="infor flex items-center gap-3 mt-3">
                    <Icon.CheckCircle weight="fill" className="text-blue text-xl" />
                    <div className="text-button">
                      Identification of monthly income
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
              <a
                className="button-main text-white bg-blue hover-button-black text-button rounded-full"
                href="contact-two.html"
              >
                Get started
              </a>
              <a
                className="button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button rounded-full border-2 border-blue flex items-center gap-2"
                href="contact-two.html"
              >
                <i className="ph ph-phone text-xl"></i>
                <span>(00) 123 456 789</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTwo;

import Link from 'next/link'
import Image from 'next/image'
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import caseStudyData from '@/data/case-study.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import TestimonialTwo from '@/components/Section/Testimonial/TestimonialTwo'

export default function CaseStudyDetail() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Case Studies"
            img="/images/banner/case-studies.png"
            title="Retirement Planning Strategies"
            desc="Experience the excitement and potential of the cryptocurrency market with our expert trading services."
          />
          <div className="project-infor lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
              <div className="flex max-lg:flex-col justify-between items-start gap-y-8">
                <div className="w-full lg:w-7/12">
                  <div className="heading3">
                    E-Commerce Platform Development
                  </div>
                  <div className="body3 text-secondary mt-4">
                    Our objective for this project was to develop a
                    comprehensive financial management platform that provided
                    users with a centralized dashboard for managing their
                    finances. We wanted to create a platform that was
                    user-friendly, easy to navigate, and offered a range of
                    features to help users track their spending, monitor their
                    investments, and plan for their financial future. Our goal
                    was to provide users with the tools and resources they need
                    to make informed financial decisions and achieve their
                    financial goals.
                  </div>
                  <div className="count-number flex items-center justify-between mt-8 gap-5">
                    <div className="item">
                      <div className="count-block flex items-center">
                        <div className="counter heading4">2.3</div>
                        <span className="heading4">k</span>
                      </div>
                      <div className="body3 text-secondary mt-4">
                        Business Setup Growth
                      </div>
                    </div>
                    <div className="item">
                      <div className="count-block flex items-center">
                        <div className="counter heading4">1.77</div>
                        <span className="heading4">k</span>
                      </div>
                      <div className="body3 text-secondary mt-4">
                        Business Problem Solving
                      </div>
                    </div>
                    <div className="item">
                      <div className="count-block flex items-center">
                        <div className="counter heading4">246</div>
                        <span className="heading4">k</span>
                      </div>
                      <div className="body3 text-secondary mt-4">
                        Passive income earners
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="rounded-xl bg-white box-shadow p-8 flex flex-col justify-between">
                    <div className="heading6">Project Information</div>
                    <div className="infor-item flex items-center justify-between mt-8">
                      <div className="text-button">Client</div>
                      <div className="body3 text-secondary">
                        Maverick Nguyen
                      </div>
                    </div>
                    <div className="line-x mt-4"></div>
                    <div className="infor-item flex items-center justify-between mt-4">
                      <div className="text-button">Completed Date</div>
                      <div className="body3 text-secondary">09/07/2024</div>
                    </div>
                    <div className="line-x mt-4"></div>
                    <div className="infor-item flex items-center justify-between mt-4">
                      <div className="text-button">Manager</div>
                      <div className="body3 text-secondary">John Doe</div>
                    </div>
                    <div className="line-x mt-4"></div>
                    <div className="infor-item flex items-center justify-between mt-4">
                      <div className="text-button">Location</div>
                      <div className="body3 text-secondary">New York, USA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-we-did lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
              <div className="flex max-lg:flex-col gap-y-8">
                <div className="w-full lg:w-1/2 lg:pr-10 bg-video">
                  <div className="bg-img h-full w-full">
                    <img
                      className="w-full block rounded-2xl"
                      src="/images/blog/item1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="desc lg:pl-10 lg:pr-3">
                    <div className="heading3">How We Did It</div>
                    <div className="body3 text-secondary md:mt-10 mt-6">
                      We began by conducting extensive market research to
                      identify the key pain points of existing e-commerce
                      platforms. Based on our findings, we developed a custom
                      solution that leveraged the latest technology and design
                      trends. Throughout the development process, we worked
                      closely with our clients to ensure that their unique needs
                      were met.{" "}
                    </div>
                    <div className="list-feature gap-y-3 flex flex-col mt-6">
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle
                          weight="fill"
                          className="text-xl text-blue"
                        />
                        <div className="text-button">
                          Identification of monthly income
                        </div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle
                          weight="fill"
                          className="text-xl text-blue"
                        />
                        <div className="text-button">
                          Creation of savings and investment plan
                        </div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle
                          weight="fill"
                          className="text-xl text-blue"
                        />
                        <div className="text-button">
                          Management and calculation of monthly expenses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" layout-item lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
              <div className="flex max-lg:flex-col items-center gap-y-8">
                <div className="w-full lg:w-1/2 lg:pr-[40px] flex flex-col justify-center">
                  <div className="heading3">Final outcome of this project</div>
                  <div className="body2 text-secondary mt-5">
                    Online banking allows you to manage your finances from
                    anywhere, anytime. You can access your bank account, check
                    your balance, view transactions, and transfer money without
                    having to visit a physical bank.
                  </div>
                  <div className="button-block mt-6">
                    <Link
                      className="button-main bg-black hover:bg-blue text-white text-button w-fit rounded-lg flex items-center gap-2"
                      href="contact-two.html"
                    >
                      <Icon.ArrowRight
                        weight="bold"
                        className="text-white rounded-xl"
                      />
                      <span>start now</span>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-[55px]">
                  <div className="bg-img w-full overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-full hover-scale block"
                      src="/images/component/assessment.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialTwo />
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  );
}
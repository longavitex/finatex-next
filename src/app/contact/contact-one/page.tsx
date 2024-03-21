import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function ContactStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Contact us"
            img="/images/banner/case-studies.png"
            title="Contact us"
            desc="Explore our Contact Us page for prompt assistance from our dedicated team."
          />
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col xl:items-center gap-y-8">
                <div className="w-full xl:w-2/5">
                  <div className="infor bg-blue rounded-xl p-10">
                    <div className="heading5 text-white">Get it touch</div>
                    <div className="body3 text-white mt-2">
                      We will get back to you within 24 hours, or call us
                      everyday
                    </div>
                    <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <i className="icon-facebook text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.linkedin.com/"
                        target="_blank"
                      >
                        <i className="icon-in text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.twitter.com/"
                        target="_blank"
                      >
                        <i className="icon-twitter text-sm text-black ml-1"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <i className="icon-insta text-sm text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.youtube.com/"
                        target="_blank"
                      >
                        <i className="icon-youtube text-xs text-black"></i>
                      </a>
                    </div>
                    <div className="list-more-infor md:mt-10 mt-6">
                      <div className="item flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Clock
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          8AM - 6PM, Mon - sun
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Phone
                            weight="fill"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          123 456 7890
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.EnvelopeSimple
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          hi.avitex@gmail.com
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.MapPin
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          4140 Rd. Allentown, New Mexico 31134
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-3/5 xl:pl-20">
                  <form className="form-block flex flex-col justify-between gap-5">
                    <div className="heading">
                      <div className="heading5">Request a quote</div>
                      <div className="body3 text-secondary mt-2">
                        We will get back to you within 24 hours, or call us
                        everyday
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="w-full">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <select
                          className="w-full bg-surface text-secondary caption1 pl-3 py-3 rounded-lg"
                          name="form"
                        >
                          <option value="Financial Planning">
                            Financial Planning
                          </option>
                          <option value="Business Planning">
                            Business Planning
                          </option>
                          <option value="Development Planning">
                            Development Planning
                          </option>
                        </select>
                        <i className="ph ph-caret-down"></i>
                      </div>
                      <div className="col-span-2 w-full">
                        <textarea
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          name="message"
                          rows={4}
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="button-block">
                      <button className="button-main hover:border-blue bg-blue text-white text-button rounded-full">
                        Submit request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

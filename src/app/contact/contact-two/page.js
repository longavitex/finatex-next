import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CTA from "@/components/Section/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function ContactStyleTwo() {
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
            <div className="container flex items-center justify-between">
              <div className="w-full xl:w-1/2">
                <div className="">
                  <div className="text-button-uppercase text-blue">
                    Contact us
                  </div>
                  <div className="heading5 mt-3">Get it touch</div>
                  <div className="body3 mt-2">
                    We will get back to you within 24 hours, or call us everyday
                  </div>
                  <div className="list-more-infor mt-8">
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full flex-shrink-0">
                        <Icon.Phone
                          weight="fill"
                          className="text-white text-2xl"
                        />
                      </div>
                      <div className="line-y"> </div>
                      <div className="body2">123 456 7890</div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full flex-shrink-0">
                        <Icon.EnvelopeSimple
                          weight="bold"
                          className="text-white text-2xl"
                        />
                      </div>
                      <div className="line-y"> </div>
                      <div className="body2">hi.avitex@gmail.com</div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full flex-shrink-0">
                        <Icon.MapPin
                          weight="bold"
                          className="text-white text-2xl"
                        />
                      </div>
                      <div className="line-y"> </div>
                      <div className="body2">
                        4140 Rd. Allentown, New Mexico 31134
                      </div>
                    </div>
                  </div>
                  <div className="list-social flex items-center gap-3 mt-8">
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
                      <i className="icon-twitter text-sm text-black"></i>
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
                </div>
              </div>
              <div className="w-full xl:w-5/12 bg-white p-10 rounded-2xl box-shadow">
                <form className="form-block flex flex-col justify-between gap-5">
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
                        name=""
                        rows="4"
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
          <iframe
            className="h-[500px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7212.823144874193!2d-99.1401739338783!3d19.435895215060164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9315ce03079%3A0x7b6d1555d27fc3fa!2sCentral%20De%20Mayoreo!5e0!3m2!1svi!2s!4v1710150086015!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <CTA />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

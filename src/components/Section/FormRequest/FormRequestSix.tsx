import React from "react"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    bgImg: string
    classname: string
}

const FormRequestSix: React.FC<Props> = ({ bgImg, classname }) => {
    return (
        <div
            className={`form-request-block ${classname} relative`}
            style={bgImg ? { backgroundImage: `url('${bgImg}')` } : {backgroundColor: `var(--surface)`}}
        >
            <div className="container h-full py-[60px]">
                <div className="flex max-lg:flex-col lg:items-center justify-between gap-8 h-full">
                    <div className="lg:w-1/2">
                        <div className="heading2 text-white">Let’s build<br />future together</div>
                        <div className="caption1 text-surface mt-4">Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn<br />money in the process!</div>
                    </div>
                    <div className="lg:w-1/2">
                        <form className="form-block rounded-xl bg-white p-7 flex flex-col justify-between gap-5">
                            <div className="heading6 text-white">Need Help?</div>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="max-sm:col-span-2">
                                    <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" placeholder="Name" required />
                                </div>
                                <div className="max-sm:col-span-2">
                                    <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="email" placeholder="Email" required />
                                </div>
                                <div className="col-span-2 select-block relative">
                                    <select className="w-full bg-surface caption1 pl-4 py-3 rounded-lg" name="form">
                                        <option value="Financial Planning">Financial Planning</option>
                                        <option value="Business Planning">Business Planning</option>
                                        <option value="Development Planning">Development Planning</option>
                                    </select>
                                    <Icon.CaretDown className="absolute top-1/2 -translate-y-1/2 right-4" />
                                </div>
                                <div className="col-span-2">
                                    <textarea className="w-full bg-surface caption1 px-4 py-3 rounded-lg" name="message" rows={3} placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                            <div className="button-block">
                                <button className="button-main bg-orange text-white hover:bg-white hover:text-black text-button rounded-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormRequestSix
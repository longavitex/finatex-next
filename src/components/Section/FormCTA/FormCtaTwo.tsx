import Link from "next/link"

const FormCtaTwo = () => {
    return (
        <div className="form-cta-block style-about relative">
            <div className="bg-img absolute top-0 left-0 w-full h-full z-[-1]"> <img src="/images/banner/form-cta-about.png" alt="" className="w-full h-full object-cover" /></div>
            <div className="container h-full py-[60px]">
                <div className="flex items-center justify-between h-full">
                    <div className="lg:w-1/2">
                        <div className="heading2 text-white">Let’s build<br />future together</div>
                        <div className="caption1 text-surface mt-4">Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn<br />money in the process!</div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="form-block rounded-xl bg-grey p-7 flex flex-col justify-between gap-5">
                            <div className="heading6 text-white">Need Help?</div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="">
                                    <input className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg" type="text" placeholder="Name" required />
                                </div>
                                <div className="">
                                    <input className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg" type="text" placeholder="Email" required />
                                </div>
                                <div className="col-span-2">
                                    <select className="w-full bg-white text-secondary caption1 pl-3 py-3 rounded-lg" name="form">
                                        <option value="Financial Planning">Financial Planning</option>
                                        <option value="Business Planning">Business Planning</option>
                                        <option value="Development Planning">Development Planning</option>
                                    </select><i className="ph ph-caret-down"></i>
                                </div>
                                <div className="col-span-2">
                                    <textarea className="w-full bg-white text-secondary caption1 px-4 py-3 rounded-lg" name="" rows={3} placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                            <div className="button-block">
                                <button className="button-main w-full text-center bg-blue text-white text-button pl-36 pr-36 py-3 bora-48">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormCtaTwo
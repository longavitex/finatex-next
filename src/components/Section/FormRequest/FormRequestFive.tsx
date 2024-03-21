import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const FormRequestFive = () => {
    return (
        <div className="form-request-block bg-surface lg:py-[60px] sm:py-12 py-10 lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading3">Request a free call back.</div>
                <div className="body3 text-secondary lg:mt-5 mt-3">Working with this agency has been a game-changer for our business Forem ipsum <br className="max-md:hidden" />dolor sit amet, consectetur adipiscing elit. </div>
                <form className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 bg-white p-4 rounded-xl">
                    <div className="grid lg:grid-cols-3 gap-6 w-full">
                        <div className="w-full">
                            <input className="body3 md:py-[14px] py-3 px-5 bg-white border border-line rounded-lg w-full" type="text" placeholder="First name*" required />
                        </div>
                        <div className="w-full">
                            <input className="body3 md:py-[14px] py-3 px-5 bg-white border border-line rounded-lg w-full" type="email" placeholder="Email" required />
                        </div>
                        <div className="w-full select-arrow-none relative">
                            <select className="body3 md:py-[14px] py-3 px-5 bg-white border border-line rounded-lg w-full" name="category">
                                <option value="Financial Planning">Financial Planning</option>
                                <option value="Business Planning">Business Planning</option>
                                <option value="Development Planning">Development Planning</option>
                            </select>
                            <Icon.CaretDown className="absolute top-1/2 -translate-y-1/2 right-5" />
                        </div>
                    </div>
                    <button className="button-main flex-shrink-0 bg-black hover:bg-blue text-white rounded-full">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FormRequestFive
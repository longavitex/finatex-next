import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const FormRequestFour = () => {
    return (
        <div
            className="form-request-block relative style-four style-two"
            style={{ backgroundImage: `url('/images/banner/form-request4.png')` }}
        >
            <div className="container relative z-[1] py-[60px]">
                <div className="heading3 text-center text-white">Request a free call back.</div>
                <div className="body3 text-center text-white mt-4">Working with this agency has been a game-changer for our business</div>
                <form className="form mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 p-4 rounded-xl">
                    <div className="grid lg:grid-cols-3 gap-6 w-full">
                        <div className="w-full">
                            <input className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full" type="text" placeholder="First name*" required />
                        </div>
                        <div className="w-full">
                            <input className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full" type="email" placeholder="Email" required />
                        </div>
                        <div className="w-full select-arrow-none relative">
                            <select className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full" name="category">
                                <option value="Financial Planning">Financial Planning</option>
                                <option value="Business Planning">Business Planning</option>
                                <option value="Development Planning">Development Planning</option>
                            </select>
                            <Icon.CaretDown className="absolute top-1/2 -translate-y-1/2 right-5" />
                        </div>
                    </div>
                    <button className="button-main flex-shrink-0 bg-black hover:bg-success text-white rounded-full">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FormRequestFour
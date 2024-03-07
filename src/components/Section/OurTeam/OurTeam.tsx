import Link from "next/link"
import Image from "next/image"

const OurTeam = () => {
    return (
        <div className="our-team-block pt-[100px] bg-white">
            <div className="container">
                <div className="heading-block">
                    <div className="heading3">Our Professional Team</div>
                </div>
                <div className="list-member mt-10 grid grid-cols-4 gap-8">
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/mem1.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Maria Takado</div>
                            <div className="caption1 text-secondary">Senior UI-UX Designer </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/mem2.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Kim Naika </div>
                            <div className="caption1 text-secondary">CEO Technology Avitex</div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/mem3.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">John Doe</div>
                            <div className="caption1 text-secondary">Creative Director at Avitex </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/mem4.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Dave Nguyen</div>
                            <div className="caption1 text-secondary">CEO Technology Avitex</div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 hidden">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/mem2.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Christina</div>
                            <div className="caption1 text-secondary">CEO Technology Avitex</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurTeam
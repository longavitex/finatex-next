import Image from 'next/image'
import React from 'react'

const CardFive = () => {
    return (
        <div className="card-block lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="bg-img w-full">
                    <Image width={5000} height={5000} src="/images/component/phone1-home5.png" alt="" className='w-[330px]' />
                    <Image width={5000} height={5000} src="/images/component/phone2-home5.png" alt="" className='w-[270px]' />
                    <Image width={5000} height={5000} src="/images/component/phone3-home5.png" alt="" className='w-[330px]' /></div>
                <div className="text lg:mt-10 mt-7 text-center">
                    <div className="heading3 text-center">One of the Most Trusted Wealth Management Companies</div>
                    <div className="body3 text-secondary mt-3 text-center">Finatex - Empowering Your Cryptocurrency Trading Journey. Experience secure and transparent trading with our expert team and cutting-edge solutions.</div>
                </div>
            </div>
        </div>
    )
}

export default CardFive
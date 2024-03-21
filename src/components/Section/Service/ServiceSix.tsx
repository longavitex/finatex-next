import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import Link from 'next/link'

interface Props {
    data: Array<ServiceType>
}

const ServiceSix: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="service-block style-six lg:pt-[100px] sm:pt-16 pt-10">
                <div className="container flex flex-col items-center">
                    <div className="heading3 lg:w-7/12 text-white text-center">Our services</div>
                    <div className="body3 text-surface text-center mt-6 w-full lg:w-1/2 sm:w-2/3">
                        {`This is  simply dummy text printing and typesetting industry been industry's. This is  simply dummy text been industry.`}
                        <Link className="text-button duration-300 underline ml-2 text-white hover:text-orange" href="/service/service-one">View case</Link>
                    </div>
                    <div className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-10 gap-y-20 mt-20">
                        {data.filter(item => item.category === 'blockchain').slice(0, 6).map((item, index) => (
                            <ServiceItem data={item} style='style-six' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSix
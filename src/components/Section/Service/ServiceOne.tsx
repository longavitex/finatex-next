import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'

interface Props {
    data: Array<ServiceType>
}

const ServiceOne: React.FC<Props> = ({ data }) => {
    return (
        <>
            <section className="service-block lg:mt-[100px] sm:mt-16 mt-10">
                <div className="container">
                    <div className="heading3 text-center">Our Services</div>
                    <div className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10">
                        {data.slice(0, 6).map((item, index) => (
                            <ServiceItem data={item} style='style-one' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceOne
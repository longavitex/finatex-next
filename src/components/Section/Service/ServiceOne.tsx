import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'

interface Props {
    data: Array<ServiceType>
}

const ServiceOne: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="service-block mt-[100px]">
                <div className="container">
                    <div className="heading3 text-center">Our Services</div>
                    <div className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-10 gap-y-10">
                        {data.slice(0, 8).map((item, index) => (
                            <ServiceItem data={item} style='style-one' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceOne
import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'

interface Props {
    data: Array<ServiceType>
    title: string
}

const ServiceFive: React.FC<Props> = ({ title, data }) => {
    return (
        <>
            <div className="service-block lg:pt-[100px] sm:pt-16 pt-10">
                <div className="container flex flex-col items-center">
                    {title && (
                        <div className="heading3 lg:w-7/12 text-center pb-10">{title}</div>
                    )}
                    <div className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-10">
                        {data.slice(0, 6).map((item, index) => (
                            <ServiceItem data={item} style='style-five' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceFive
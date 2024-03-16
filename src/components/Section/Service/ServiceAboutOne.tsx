import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import TextHeadingItem from '@/components/TextHeading/TextHeadingItem'

interface Props {
    data: Array<ServiceType>
}

const ServiceAboutOne: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="service-block bg-surface lg:py-[100px] sm:py-16 py-10">
                <div className="container">
                    <TextHeadingItem style='' title='Our Services' desc='Customized financial services designed to meet your unique needs and drive your financial success' />
                    <div className="list-service grid xl:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10">
                        {data.slice(0, 4).map((item, index) => (
                            <ServiceItem data={item} style='style-about' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceAboutOne
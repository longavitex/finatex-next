import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import TextHeadingItem from '@/components/TextHeading/TextHeadingItem'

interface Props {
    data: Array<ServiceType>
}

const ServiceThree: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="service-block style-three bg-surface lg:py-[100px] sm:py-16 py-10 lg:mt-[100px] sm:mt-16 mt-10">
                <div className="container">
                    <TextHeadingItem style='' title='Our Services' desc='Online banking allows you to manage your finances from anywhere, anytime.' />
                    <div className="list-service grid xl:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10">
                        {data.filter(item => item.category === 'online banking').slice(0, 4).map((item, index) => (
                            <ServiceItem data={item} style='style-three' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceThree
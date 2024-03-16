import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import TextHeadingItem from '@/components/TextHeading/TextHeadingItem'

interface Props {
    data: Array<ServiceType>
}

const ServiceAboutTwo: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="service-block bg-surface lg:py-[100px] sm:py-16 py-10">
                <div className="container">
                    <TextHeadingItem style='md:w-3/4 w-full' title='Our Services' desc='Online banking allows you to manage your finances from anywhere, anytime. You can access your bank account, check your balance, view transactions, and transfer money without having to visit a physical bank.' />
                    <div className="list-service grid xl:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10 p-8 bg-white rounded-[40px] overflow-hidden">
                        {data.slice(0, 4).map((item, index) => (
                            <ServiceItem data={item} style='style-about-two' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceAboutTwo
import Link from "next/link"
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import caseStudyData from '@/data/case-study.json'
import { CaseStudyType } from "@/type/CaseStudyType";

interface Props {
    data: Array<CaseStudyType>
}

const CaseStudyFour = ({ data }: Props) => {
    return (
        <>
            <section className="case-study-block style-four lg:py-[100px] sm:py-16 py-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <h3 className="heading3">Case Studies</h3>
                        <Link className="text-button underline hover:text-success duration-300" href="/case-studies/case-studies-one">
                            View All
                        </Link>
                    </div>
                    <div className="list-case-study grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        {data.slice(0, 3).map((item, index) => (
                            <CaseStudyItem data={item} key={index} style="style-one" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default CaseStudyFour
import React from "react"

interface Props {
    style: string
    title: string
    desc: string
}

const TextHeadingItem: React.FC<Props> = ({ style, title, desc }) => {
    return (
        <div className={`text-heading ${style}`}>
            <div className="heading3 text-center">{title}</div>
            <div className="desc text-secondary text-center mt-3">{desc}</div>
        </div>
    )
}

export default TextHeadingItem
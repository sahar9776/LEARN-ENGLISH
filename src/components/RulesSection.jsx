import React from 'react'

function RulesSection({ item }) {
    const { id, title, content, examples, examplesMean, category } = item;
    return (
        <div>
            <h3>{title}</h3>
            <p className="text-gray-400 my-6">{content}</p>
            <div className="">
                {/* right : معنی فارسی مثال ها */}
                <div className="w-[50%]">
                    {
                        examplesMean.map(example => (
                            <p className="text-slate-700 my-5">{example}</p>
                        ))
                    }</div>
                {/* left : مثال ها */}
                <div className="w-[50%]">
                    {/* {
                        examples.map(example => (
                            <p lang='en_US' className="text-slate-700">{example}</p>
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}

export default RulesSection
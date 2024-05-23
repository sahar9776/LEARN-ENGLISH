import React from 'react'

function TenseVItem({ item }) {
    return (
        <div className="w-full h-auto shadow-md border-2 p-10">
            <h4 className="">{item.title}</h4>
            <p className="text-gray-400 my-2">{item.explanation}</p>
            <div className="my-8">
                <p className="my-2 text-2xl"> <span className="text-secondary border-b-2 border-secondary">ساختار مثبت جمله : </span> <br /> <br /> {item.formula}</p>
                <p className="my-2 text-2xl"> <span className="text-secondary border-b-2 border-secondary">ساختار منفی جمله : </span> <br /> <br /> {item.NegativeFormula}</p>
                <p className="my-2 text-2xl"> <span className="text-secondary border-b-2 border-secondary">ساختار سوالی جمله : </span> <br /> <br /> {item.QuestionFormula}</p>
            </div>
            <div className="w-full">
                {/* right  */}
                <div className="w-full my-5">
                    <p className='text-2xl text-center mb-2'>مثال : </p>
                    {
                        item.examples.map((result, index) => (
                            (index % 2 == 0) ? (<p lang='en_US' className="text-gray-500 my-2">{result}</p>) : (<p className="text-gray-400 my-2">{result}</p>)
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TenseVItem
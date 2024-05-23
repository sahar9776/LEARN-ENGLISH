import React, { useContext, useEffect  } from 'react'
import tense from '../asstes/imges/tense.jpg'
import { TenseContext } from '../context/TenseContext';
import TenseVItem from '../components/TenseVItem';

function TenseVerbs() {
    const {newTense } = useContext(TenseContext);
    return (
        <div className="w-[100%] h-auto">
            {/* banner Tense  */}
            <div className="mb-16">
                <img src={tense} alt="" className="w-full h-auto " />
            </div>
            {/* Tense Verbs  */}
            <div className="container">
                {
                    newTense.map(result => (
                        <div className="w-full h-auto text-center my-10">
                            <h3 className="mb-5">{result.persianTitle}</h3>
                            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                                {
                                    result.time.map(item => (
                                        <TenseVItem item={item} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TenseVerbs
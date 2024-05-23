import React from 'react'

function FunSentencesSection({item}) {
    const {sentence, mean} = item;
    return (
        <div className='w-full h-[200px] shadow-md border-2 p-10 '>
            <p lang='en_US' className="text-xl text-slate-500 my-2">{sentence}</p>
            <p className="text-xl text-slate-400 my-2">{mean}</p>
        </div>
    )
}

export default FunSentencesSection
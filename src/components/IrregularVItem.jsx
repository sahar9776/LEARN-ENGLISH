import React from 'react'

function IrregularVItem({ result }) {
    const { id, verb, simplePast, pastParticiple, mean, startLetter } = result;
    return (
        <div className='w-full h-[80px] rounded-s-lg flex'>
            <span className='w-1/4 h-full flex justify-center items-center border-b-2 px-1 border text-center'>{mean} </span>
            <span className='w-1/4 h-full flex justify-center items-center border-b-2 text-2xl px-1 border text-center'>{pastParticiple}</span>
            <span className='w-1/4 h-full flex justify-center items-center border-b-2 text-2xl px-1 border text-center'>{simplePast}</span>
            <span className='w-1/4 h-full flex justify-center items-center border-b-2 text-2xl px-1 border text-center'>{verb}</span>
        </div>
    )
}

export default IrregularVItem
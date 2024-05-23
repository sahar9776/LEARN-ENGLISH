import React, { useContext, useState } from 'react'
import { IrregularVContext } from '../context/IrregularVContext'
import IrregularVItem from './IrregularVItem';

function IrregularVerbs() {
    const { info, alphabet, specialVerb, setSpecialVerb, flag, setFlag } = useContext(IrregularVContext);
    const aCategory = info.filter(result => result.startLetter == "Aa");
    const changeTable = (item) => {
        // startLetter یک آرایه برای دسته بندی آرایه کلی بر اساس  
        setSpecialVerb(info.filter(result => result.startLetter == item));
        setFlag(true);
    }
    return (
        <div className="w-[100%] max-w-full h-auto py-16" id='IrregularVerbs'>
            <div className="container">
                <h3>افعال بی قاعده</h3>
                <div className="py-12 flex flex-col-reverse lg:flex-row">
                    {/* right  */}
                    <div className="w-full lg:w-[50%] flex flex-wrap gap-5">
                        {/* table */}
                        <div className="w-[100%] h-auto flex flex-col items-start">
                            {/* table's title  */}
                            <div className='w-full h-[80px] shadow-md flex'>
                                <span className='w-1/4 h-full text-2xl text-center flex justify-center items-center bg-slate-200 border-e border-white'>معنی</span>
                                <span className='w-1/4 h-full text-2xl text-center flex justify-center items-center bg-slate-200 border-s border-e border-white'>قسمت سوم</span>
                                <span className='w-1/4 h-full text-2xl text-center flex justify-center items-center bg-slate-200 border-s border-e border-white'>قسمت دوم</span>
                                <span className='w-1/4 h-full text-2xl text-center flex justify-center items-center bg-slate-200 border-s border-white'>فعل</span>
                            </div>
                            {
                                flag ? (specialVerb.map(iVerb => (
                                    <IrregularVItem result={iVerb} />
                                ))) : (aCategory.map(iVerb => (
                                    <IrregularVItem result={iVerb} />
                                )))
                            }
                        </div>
                    </div>
                    {/* left  */}
                    <div className="w-full lg:w-[50%] h-[400px] flex flex-row-reverse gap-5 flex-wrap">
                        {
                            alphabet.map(item => (
                                <button onClick={() => changeTable(item)} className="w-[50px] h-[50px] font-semibold text-3xl flex justify-center items-center bg-white border-b-2 border-white text-primary duration-700 hover:border-primary focus:border-primary">{item}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IrregularVerbs
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FunSentencesContext } from '../context/FunSentencesContext'
import FunSentencesSection from '../components/FunSentencesSection';

function FunSentencesPage() {
  const { newSentences } = useContext(FunSentencesContext);
  const params = useParams();
  const { category } = params;
  useEffect(() => {
    scroller.scrollTo(category, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 10
    });
  }, [])
  return (
    <div className="w-[100%] h-[600px] py-16">
      <div className="container">
        {
          newSentences.map(result => (
            <div className="w-full h-auto text-center my-10" id={result.category}>
              <h3 className="mb-5">{result.title}</h3>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                  result.sentencesArray.map(item => (
                    <FunSentencesSection item={item} />
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

export default FunSentencesPage
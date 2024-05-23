import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { RulesContext } from '../context/RulesContext'
import RulesSection from '../components/RulesSection';

function RulesDetailPage() {
  const { rules } = useContext(RulesContext);
  const params = useParams();
  const {category} = params;
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
        {/* <h1 className="inline-block text-8xl text-primary text-center uppercase relative top-[0%] py-1 border-b-4 border-primary">
          گرامر
        </h1> */}
        <div className="" >
          {
            rules.map(item => (
              <div className="w-[100%] h-[500px]" id={item.category} key={item.id}>
                <RulesSection item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RulesDetailPage
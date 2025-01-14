import React from 'react'
import Banner from '../components/Banner'
import Rules from '../components/Rules'
import Times from '../components/Times'
import IrregularVerbs from '../components/IrregularVerbs'
import FunctionalSentences from '../components/FunctionalSentences'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-[100%] max-w-full' id='Home' >
      {/* بنر  */}
      <Banner/>
      {/* گرامر */}
      <Rules/>
      {/* زمان افعال  */}
      <Times/>
      {/* افعال بی قاعده  */}
      <IrregularVerbs/>
      {/* جملات کاربردی  */}
      <FunctionalSentences/>
      {/* فوتر */}
      <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import { Route, Routes } from 'react-router-dom'
import RulesDetailPage from './pages/RulesDetailPage'
import AboutUs from './pages/AboutUs'
import TenseVerbs from './pages/TenseVerbs'
import FunSentencesPage from './pages/FunSentencesPage'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about-us' element={<AboutUs/>} />
       <Route path='/rules-details/:category' element={<RulesDetailPage/>} />
       <Route path='/tense-Verbs' element={<TenseVerbs/>} />
       <Route path='/functional-sentences/:category' element={<FunSentencesPage/> } />
      </Routes>
      <BackToTop/>
    </div>
  )
}

export default App
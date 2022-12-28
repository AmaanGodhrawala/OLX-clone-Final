import React from 'react'
import Header from "./Header"
import Banner from "./Banner"
import Signup from './Signup'
import Sales from './Sales'
const HomePage = () => {
  return (
    <div className='HomePageCon'>
        <Header/>
        <Banner/>
        <Sales/>
    </div>
  )
}

export default HomePage
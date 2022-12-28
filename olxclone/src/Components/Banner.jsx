import React from 'react'
import homeBanner from "../images/banner.jpg"
import "../Stylesheet/Banner.css"
const Banner = () => {
  return (
    <div className='BannerCon'>
      <img src={homeBanner} className="homeBanner" alt="banner image" />
      <div className="categories">
        <div className="catTitle">
          <h2>All Categories</h2>
        </div>
        <div className="actualCat">

          <h4 className='catInstock'>Cars</h4>
          <h4 className='catInstock'>Mobiles</h4>
          <h4 className='catInstock'>Gaming</h4>
        </div>
      </div>
    </div>
  )
}

export default Banner
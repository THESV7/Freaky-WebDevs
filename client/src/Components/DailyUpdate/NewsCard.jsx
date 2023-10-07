import React from 'react'
import './NewsCard.css'
const NewsCard = () => {
  return (
    <>
      <div className="newscard_container">
        <div className="newscard_img">

        </div>
        <div className="content_card_container">
          <div className='newscard_heading'>
            <h1>Headline</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis molestias in, aut maiores eum.</p>
          </div>
          <div className="newscard_btn">
            <span>Read More</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard
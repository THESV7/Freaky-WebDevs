import React from 'react'
import './DailyUpdate.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import NewsCard from './NewsCard'
const DailyUpdate = () => {
  return (
    <>
      <section className='dailyupdate_section'>
        <div className="dailyupdate_container">
          <div className="dailyupdate_heading">
            <h1>Daily Update</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam rem deleniti explicabo quae, nulla sint?</p>
          </div>
          <div className="dailyupdate_content_container">
            <div className="daily_swiper_content">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                speed="3000"
                loop={true}
                modules={[Autoplay]}>
                <SwiperSlide>
                  <div className='silder_content'>
                    <div className='img_div'></div>
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum dolorem nesciunt. Facere?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='silder_content'>
                    <div className='img_div'></div>
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum dolorem nesciunt. Facere?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='silder_content'>
                    <div className='img_div'></div>
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum dolorem nesciunt. Facere?</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="Top_news_today dailyupdate_heading">
            <h1>Daily Update</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam rem deleniti explicabo quae, nulla sint?</p>
          </div>
          <div className="Top_news_card">
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default DailyUpdate
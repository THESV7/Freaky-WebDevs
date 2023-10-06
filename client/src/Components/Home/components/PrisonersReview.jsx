import React from 'react'
import './PrisonorsReview.css'
// Import Swiper styles
import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

const PrisonersReview = () => {
    return (
        <>
            <div className="AboutUs_Team_container">
                <div className='gredient_ball'></div>
                <div className="AboutUs_team_content">
                    <h1>Reviews</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi possimus officia doloribus ipsa porro mollitia veritatis accusamus id nesciunt odio nam ipsum?</p>
                </div>
                <div className="Prisoners_review_container">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed="3000"
                        loop={true}
                        modules={[Autoplay]}>
                        <SwiperSlide>
                            <div className='AboutUs_team_center'>
                                <div className="AboutUs_team_card">
                                    <div className="AboutUs_team_img">
                                        <img src='' alt="" />
                                    </div>
                                    <div className="AboutUs_team_header">
                                        <div className='AboutUs_team_title'>
                                            <h1>Sahil Wagh</h1>
                                            <p>Review</p>
                                        </div>
                                        <p>Introducing Sahil, our versatile developer proficient in both frontend and backend development. Sahil's keen design sense and mastery of server-side technologies ensure a visually appealing and high-performing platform. Bridging the gap between user interface and functionality, Sahil makes Ace Aptitude a seamless, efficient, and user-friendly experience for you.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='AboutUs_team_center'>
                                <div className="AboutUs_team_card">
                                    <div className="AboutUs_team_img">
                                        <img src='' alt="" />
                                    </div>
                                    <div className="AboutUs_team_header">
                                        <div className='AboutUs_team_title'>
                                            <h1>Rishabh Tiwari</h1>
                                            <p>Review</p>
                                        </div>
                                        <p>Meet Rishabh , our meticulous web scraper. He's the data wizard behind the scenes, ensuring that Ace Aptitude is always stocked with the most current and relevant content. Rishabh's dedication to collecting and maintaining accurate data enriches your learning experience and keeps you up-to-date with the latest insights.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='AboutUs_team_center'>
                                <div className="AboutUs_team_card">
                                    <div className="AboutUs_team_img">
                                        <img src='' alt="" />
                                    </div>
                                    <div className="AboutUs_team_header">
                                        <div className='AboutUs_team_title'>
                                            <h1>Smit Vadhel</h1>
                                            <p>Review</p>
                                        </div>
                                        <p>Smit excels in crafting visually stunning designs that seamlessly merge aesthetics and functionality, meeting user requirements impeccably. With strong project management skills, Smit adeptly oversees projects from start to finish, collaborating effortlessly with cross-functional teams, and ensuring effective stakeholder communication for project triumph.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='AboutUs_team_center'>
                                <div className="AboutUs_team_card">
                                    <div className="AboutUs_team_img">
                                        <img src='' alt="" />
                                    </div>
                                    <div className="AboutUs_team_header">
                                        <div className='AboutUs_team_title'>
                                            <h1>Vighnesh Bidaye</h1>
                                            <p>Review</p>
                                        </div>
                                        <p>Meet Vighnesh, our skilled UI designer, the creative genius behind captivating visuals that elevate user experiences. With an artistic eye and a flair for aesthetics, Vighnesh crafts designs harmonizing form and function. His meticulous attention to detail ensures every element is user-friendly and visually pleasing. Vighnesh's vital contributions create stunning, intuitive interfaces leaving lasting user impressions.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default PrisonersReview
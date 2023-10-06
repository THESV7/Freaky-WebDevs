import React from 'react'
import './PlatformServices.css'
import coursesIcon from '../../../assets/courses.png'
import activitiesIcon from '../../../assets/activites.png' 
import videoIcon from '../../../assets/video_conferernce.png' 
const PlatformServices = () => {
    const serviceData = [
        {
            title: 'Courses',
            description: 'Courses for prisoners to acquire new skills and knowledge.',
            icon: coursesIcon, 
        },
        {
            title: 'Activities for Prisoners',
            description: 'Activities to engage and support prisoners.',
            icon: activitiesIcon, 
        },
        {
            title: 'Video Conferencing',
            description: 'Secure video conferencing services for live communicate with mentor',
            icon: videoIcon, 
        }
    ];
    
    return (
        <>
            <section className='Service_section'>
                <div className="service_container">
                    <div className="service_title">
                        <span>Our Services</span>
                    </div>
                    <div className="service_description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="service_cards">
                        {
                            serviceData.map(({icon, title , description}) => (
                                <div className="service_card">
                                    <div className="service_icon_title">
                                        <img src={icon} alt="" />
                                        <span>{title}</span>
                                    </div>
                                    <div className="service_card_description">
                                        <p>{description}</p>
                                    </div>
                                    <div className='service_card_btn'>
                                        <button >Learn More</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlatformServices
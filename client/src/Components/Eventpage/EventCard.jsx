import React from 'react'
import './EventCard.css'
const EventCard = () => {
    return (
        <>
            <div className="EventPage_card">
                <div className="EventPage_card_img">
                    <img src="event1.jpg" alt="Event 1" />
                </div>
                <div className="EventPage_card_content">
                    <div className="EventPage_card_title">Event Title 1</div>
                    <div className="EventPage_card_description">
                        This event covers various topics related to the specific event theme, providing valuable insights and networking opportunities.
                    </div>
                    <div className='EventPage_card_rating'>Time: </div>
                    <div className='EventPage_card_rating'>Venu: </div>
                </div>
            </div>

        </>
    )
}

export default EventCard
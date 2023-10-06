import React from 'react'
import './CoursesCard.css'
const CoursesCard = () => {
    return (
        <>
            <div className="CoursesList_card">
                <div className="Courses_card_img">
                    <img src="course1.jpg" alt="Course 1" />
                </div>
                <div className="Courses_card_content">
                    <div className="Courses_card_title">Course Title 1</div>
                    <div className="Courses_card_description">
                        This course covers various topics in web development and programming, providing valuable skills for the future.
                    </div>
                    <div className='Courses_card_rating'>4.8</div>
                </div>
            </div>
        </>
    )
}

export default CoursesCard
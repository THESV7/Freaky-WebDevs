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

            <div className="CoursesList_card">
                <div className="Courses_card_img">
                    <img src="course2.jpg" alt="Course 2" />
                </div>
                <div className="Courses_card_content">
                    <div className="Courses_card_title">Course Title 2</div>
                    <div className="Courses_card_description">
                        Course 2 is an advanced course in data science, focusing on machine learning and artificial intelligence.
                    </div>
                    <div className='Courses_card_rating'>4.5</div>
                </div>
            </div>

            <div className="CoursesList_card">
                <div className="Courses_card_img">
                    <img src="course3.jpg" alt="Course 3" />
                </div>
                <div className="Courses_card_content">
                    <div className="Courses_card_title">Course Title 3</div>
                    <div className="Courses_card_description">
                        Explore Course 3, which delves into graphic design and digital media creation techniques.
                    </div>
                    <div className='Courses_card_rating'>4.2</div>
                </div>
            </div>
        </>
    )
}

export default CoursesCard
import React from 'react'
import './CoursesList.css'
import CoursesCard from './CoursesCard'
const CoursesList = () => {
    return (
        <>
            <section className='CoursesList'>
                <div className="CoursesList_container">
                    <div className='CoursesList_content'>
                        <p className="CoursesList_title">Available Courses</p>
                        <h1 className="Courses_short_description">
                        Welcome to our e-learning platform for prisoners. Explore and enhance your skills.

                        </h1>
                        <p className="Courses_description">
                        Discover a variety of courses to support your growth and learning during your time in prison.
                        </p>
                    </div>
                    <div className="CoursesList_card_container">
                       <CoursesCard/>
                       <CoursesCard/>
                       <CoursesCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoursesList
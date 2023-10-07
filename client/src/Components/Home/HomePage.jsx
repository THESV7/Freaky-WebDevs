import React from 'react'
import Herosection from './components/Herosection'
import PlatformServices from './components/PlatformServices'
import CoursesList from './components/CoursesList'
import PrisonersReview from './components/PrisonersReview'

const HomePage = () => {
    return (
        <>
            <Herosection/>
            <PlatformServices/>
            <CoursesList/>
            <PrisonersReview/>
        </>
    )
}

export default HomePage
import React from 'react'
import Herosection from './components/Herosection'
import PlatformServices from './components/PlatformServices'
import CoursesList from './components/CoursesList'

const HomePage = () => {
    return (
        <>
            <Herosection/>
            <PlatformServices/>
            <CoursesList/>
        </>
    )
}

export default HomePage
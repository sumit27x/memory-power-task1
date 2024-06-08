import React from 'react';
import HeroSection from "./../components/homeContent/Hero-Section/HeroSection";
import AboutUs from "./../components/homeContent/About-us/AboutUs";
import Courses from "./../components/homeContent/Courses-section/Courses";
import FreeCourse from "./../components/homeContent/Free-course-section/FreeCourse";



function Home() {
  return (
    <>
    <div className='home'>
      <HeroSection />
      <AboutUs />
      <Courses />
      <FreeCourse />
    </div>
    
    </>
  )
}

export default Home
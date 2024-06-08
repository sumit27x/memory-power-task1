import React from 'react';
import "./../App";
import HeroSection from '../components/aboutContent/heroSection';
import SecondSection from '../components/aboutContent/secondSection';
import NewsLetterSection from '../components/aboutContent/newLetterSection';
function About() {
  return (
    <>
    <div className='about'>
      <HeroSection/>
      <SecondSection/>
      <NewsLetterSection/>
    </div>
    </>
  )
}

export default About
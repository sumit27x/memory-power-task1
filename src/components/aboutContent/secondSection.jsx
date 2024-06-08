import React from 'react';
import "./about.css";
import Idea from "./../../asset/image/img12.jpg"
import Done from "./../../asset/icon/accept.png"
function secondSection() {
  return (
    <div className='second-section'>
        <div className='second-section-image'>
            <img src={Idea} alt='g' />
        </div>
        <div className='second-section-content'>
            <h3>We Provide You a Comfortable Learning Experience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed iaculis elit.
             Ut eu purus vitae turpis commodo dictum at.</p>

             <div className='second-section-text'>
                <img src={Done} alt='' />
                <span >
                    You work in a comfortable seat
                </span>
             </div>

             <div className='second-section-text'>
                <img src={Done} alt='' />
                <span >
                    You work in a comfortable seat
                </span>
             </div>

             <div className='second-section-text'>
                <img src={Done} alt='' />
                <span >
                    You work in a comfortable seat
                </span>
             </div>
        </div>
    </div>
  )
}

export default secondSection
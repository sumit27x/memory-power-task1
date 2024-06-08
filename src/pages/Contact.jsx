import React from 'react';
import FormSection from '../components/contactUS/FormSection';
import MapComponent from '../components/contactUS/MapComponent';
import CardContainer from '../components/cards/CardContainer';

function Contact() {
  return (
    <div className='contact-content'>  
    <CardContainer/>
      <MapComponent/>
      <FormSection/>
    </div>
  )
}

export default Contact
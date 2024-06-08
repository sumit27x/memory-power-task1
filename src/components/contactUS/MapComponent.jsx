import React from 'react';

const MapComponent = () => {
  return (
    <div className='map'>
        <iframe className='map-component' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292377882!2d72.71637020684099!3d19.082502007739045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717786847449!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MapComponent;

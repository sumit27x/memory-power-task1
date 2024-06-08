// src/Card.js
import React from 'react';
import './style.css';

const Card = ({ title, content, link}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
            <a href="#">{link}</a>
        </div>
    );
}

export default Card;

import React from 'react';
import './Footer.css'; 
import Logo from "./../../asset/create/logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img src={Logo} alt='' />
                    <p>EduVerse is a cutting-edge education platform designed to revolutionize 
                     the learning experience for students, educators, and institutions. Our mission
                     is to provide accessible, personalized, and engaging education solutions through innovative technology and a user-friendly interface.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Meet Founder</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Our Certificates</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-section links">
                    <h2>Support Links</h2>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Teacher Login</a></li>
                        <li><a href="#">Student Login</a></li>
                        <li><a href="#">Register Now</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-contact">
                    <h2>Contact Us</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Memory Power | Designed by Sumit Gupta
            </div>
        </footer>
    );
};

export default Footer;

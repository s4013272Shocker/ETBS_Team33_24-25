import React from 'react';
import './AboutUs.css';

import Part2Image from '../assets/Part2AboutUs.png';
import Part3Image from '../assets/Part3AboutUs.png';
import Part4LeftImage from '../assets/Part4LeftAboutUs.png';
import Part4RightImage from '../assets/Part4RightAboutUs.png';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <section className="about-us-part1">
                <nav className="navbar">
                    <div className="logo">Logo Placeholder</div>
                    <ul className="core-navbar">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Upcoming events</li>
                        <li>Event Organizers</li>
                        <li>Donations</li>
                    </ul>
                    <div className="access-buttons">
                        <button className="login-button">Login</button>
                        <button className="sign-up-button">Sign Up</button>
                    </div>
                </nav>
                <h1 className="how-we-started">How we Started</h1>
            </section>

            <section className="about-us-part2">
                <img src={Part2Image} alt="About Us Part 2" />
            </section>

            <section className="about-us-part3">
                <img src={Part3Image} alt="About Us Part 3" />
            </section>

            <section className="about-us-part4">
                <div className="left-image">
                    <img src={Part4LeftImage} alt="About Us Part 4 - Left" />
                </div>
                <div className="right-image">
                    <img src={Part4RightImage} alt="About Us Part 4 - Right" />
                </div>
            </section>


            <footer className="about-us-part5">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <span className="icon facebook" aria-label="Facebook"></span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <span className="icon instagram" aria-label="Instagram"></span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <span className="icon x" aria-label="X"></span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <span className="icon linkedin" aria-label="LinkedIn"></span>
                </a>
            </footer>
        </div>
    );
};

export default AboutUs;
import React from 'react';

const Footer = () => {
  return (
    
        <footer>
            <div class="footer-nav">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Upcoming Events</a></li>
                    <li><a href="">Event Organizers</a></li>
                    <li><a href="">Donations</a></li>
                   
                </ul>
            </div>
            <div class="divider"></div>
            <div class="footer-contact">
                <p>Email: info@tickeven.co.uk</p>
                <p>Phone: 020 430 5294</p>
                <div class="footer-social">
                    <a href="facebook.com" class="social-icon">f</a>
                    <a href="linkedin.com" class="social-icon">in</a>
                    <a href="twitter.com" class="social-icon">X</a>
                    <a href="instagram.com" class="social-icon">ig</a>
                </div>
            </div>
            <div class="divider"></div>
            <div class="footer-address">
                <p>49 Stoneton Crescent,</p>
                <p>Balsall Common</p>
            </div>
        </footer>

  );
}

export default Footer;
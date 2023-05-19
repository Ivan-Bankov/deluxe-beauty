import './Footer.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3 className="salon-name footer-salon-name">D&nbsp;E&nbsp;L&nbsp;U&nbsp;X&nbsp;E</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="footer-nav">
            <h4 className="footer-title">LINKS:</h4>
            <Link to='/' className='footer-link footer-link-first'>Home</Link>
            <Link to='/contacts' className='footer-link'>Contacts</Link>
          </div>
          <div className="footer-services">
            <h4 className="footer-title">SERVICES:</h4>
            <a href="#aroma-therapy" className="footer-link footer-link-first">Aroma Therapy</a>
            <a href="#hair-styling" className="footer-link footer-link-first">Hair Styling</a>
            <a href="#manicure" className="footer-link footer-link-first">Manicure</a>
            <a href="#massage" className="footer-link footer-link-first">Massage</a>
            <a href="#hair-removal" className="footer-link footer-link-first">Hair Removal</a>
            <a href="#eyelash-extentions" className="footer-link">Eyelash Extentions</a>
          </div>
          <div className="footer-contacts">
            <h4 className="footer-title">CONTACT US:</h4>
            <p className="about-info footer-p footer-link-first">✆: 090 597 2370</p>
            <p className="about-info footer-p">✉: support@deluxe.beauty</p>
          </div>
        </div>
      </footer>
    </>
  )
}
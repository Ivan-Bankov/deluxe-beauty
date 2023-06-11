import '../index.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="mobile-footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3 className="footer-salon-name">D&nbsp;E&nbsp;L&nbsp;U&nbsp;X&nbsp;E</h3>
            <p className="paragraph-size">The Finnish standard for cosmetic procedures for over 10 years.</p>
          </div>
          <div className="mobile-nav">
            <div className="footer-nav">
              <h4 className="footer-title">LINKS:</h4>
              <Link to='/' className='footer-link footer-link-first'>Home</Link>
              <Link to='/contacts' className='footer-link'>Contacts</Link>
            </div>
            <div className="footer-services">
              <h4 className="footer-title">SERVICES:</h4>
              <a href="#aroma-therapy" className="footer-link footer-link-first">Aromatherapy</a>
              <a href="#hair-styling" className="footer-link footer-link-first">Hair Styling</a>
              <a href="#manicure" className="footer-link footer-link-first">Manicure</a>
              <a href="#massage" className="footer-link footer-link-first">Massage</a>
              <a href="#hair-removal" className="footer-link footer-link-first">Laser Hair Removal</a>
              <a href="#eyelash-extentions" className="footer-link">Eyelash Extentions</a>
            </div>
            <div className="footer-contacts">
              <h4 className="footer-title">CONTACT US:</h4>
              <p className="paragraph-size footer-p footer-link-first">✆: 090 597 2370</p>
              <p className="paragraph-size footer-p">✉: support@deluxe.beauty</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="desktop-footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3 className="footer-salon-name">D&nbsp;E&nbsp;L&nbsp;U&nbsp;X&nbsp;E</h3>
            <p className="paragraph-size">The Finnish standard for cosmetic procedures for over 10 years.</p>
          </div>
          <div className="footer-nav">
            <h4 className="footer-title">LINKS:</h4>
            <Link to='/' className='footer-link footer-link-first'>Home</Link>
            <Link to='/contacts' className='footer-link'>Contacts</Link>
          </div>
          <div className="footer-services">
            <h4 className="footer-title">SERVICES:</h4>
            <a href="#aroma-therapy" className="footer-link footer-link-first">Aromatherapy</a>
            <a href="#hair-styling" className="footer-link footer-link-first">Hair Styling</a>
            <a href="#manicure" className="footer-link footer-link-first">Manicure</a>
            <a href="#massage" className="footer-link footer-link-first">Massage</a>
            <a href="#hair-removal" className="footer-link footer-link-first">Laser Hair Removal</a>
            <a href="#eyelash-extentions" className="footer-link">Eyelash Extentions</a>
          </div>
          <div className="footer-contacts">
            <h4 className="footer-title">CONTACT US:</h4>
            <p className="paragraph-size footer-p footer-link-first">✆: 090 597 2370</p>
            <p className="paragraph-size footer-p">✉: support@deluxe.beauty</p>
          </div>
        </div>
      </footer>
    </>
  )
}
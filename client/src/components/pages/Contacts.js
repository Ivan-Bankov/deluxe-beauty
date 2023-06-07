import './Contacts.scss';
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from '../Footer';

export default function Contacts() {
  return (
    <>
        <Navbar />

        {/* CONTACTS SECTION */}
        <section className="contacts-page">
            <div className="contacts-page-title">
                <div className="title-line">&nbsp;</div>
                <h3 className='title'>ABOUT DELUXE</h3>
                <div className="title-line">&nbsp;</div>
            </div>
            <div className="contacts-page-container">
                <div className="contacts-page-info">
                  <div className="addresses">
                    <h4>ADDRESSES:</h4>
                    <p className='address'>▷ Fredrikinkatu 54, 00120 Helsinki, Finland</p>
                    <p className='address'>▷ Henrikinkatu 20, 20500 Turku, Finland</p>
                  </div>
                  <div className="phone-numbers">
                    <h4>PHONE NUMBERS:</h4>
                    <p className="phone-number">✆ 090 597 2370 </p>
                    <p className="phone-number">✆ 092 603 7874</p>
                    <p className="phone-number">✆ 096 115 7005</p>
                  </div>
                  <div className="emails">
                    <h4>EMAIL:</h4>
                    <p className="email">✉ support@deluxe.beauty</p>
                  </div>
                </div>
                <div className="location-map-container">
                  <iframe className='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254500.69274032104!2d24.689054603440347!3d60.109754137726206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sbg!4v1682672876564!5m2!1sen!2sbg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
                </div>
            </div>
        </section>

        {/* CONTACTS FORM */}
        <section className="contacts-form">
          <div className="contacts-page-title">
              <div className="form-title-line">&nbsp;</div>
              <h3 className='title'>SEND US AN EMAIL</h3>
              <div className="form-title-line">&nbsp;</div>
          </div>
          <form action="POST" className="email-form">
            <label htmlFor="messageName">NAME:</label>
            <input required type="text" id='messageName' name='messageName' placeholder='Type here...' />
            <label htmlFor="messageEmail">EMAIL:</label>
            <input required type="email" id='messageEmail' name='messageEmail' placeholder='Type here...' />
            <label htmlFor="messageDetails">MESSAGE:</label>
            <textarea name="messageDetails" id="messageDetails" cols="30" rows="10" placeholder='Type here...'></textarea>
            <button type='button' className="btn">SEND NOW</button>
          </form>
        </section>

        <Footer />
    </>
  )
}
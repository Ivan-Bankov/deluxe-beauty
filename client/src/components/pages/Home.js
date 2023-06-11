import '../../index.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Navbar from "../Navbar";
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

export default function Home() {
    const [auth, setAuth] = useState(false)
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(res => {
            if(res.data.Status === "Success!") {
                setAuth(true)
            } else {
                setAuth(false)
            }
        })
        .then(error => console.log(error))
    }, [])

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
        .then(res => {
            window.location.reload(true)
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <Navbar />
            <ScrollButton />

            {/* HERO SECTION WHEN LOGGED OUT */}
            <section className="hero-section">
                <div className="container">
                    <Link to='/contacts'><button type='button' className="btn hero-btn appointment-btn">SCHEDULE AN APPOINTMENT</button></Link>

                    {
                        auth ?
                        <Link to='/login'><button type='button' className="btn hero-btn" onClick={handleLogout}>LOG OUT</button></Link>
                        :
                        <Link to='/login'><button type='button' className="btn hero-btn">LOG IN</button></Link>
                    }
                    
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services-section">
            <div className="service">
                <div className="service-img">
                    <img src="/images/aroma-therapy.png" alt="" />
                </div>
                <div className="service-info" id='aroma-therapy'>
                    <h3 className='title'>AROMATHERAPY</h3>
                    <p className="service-description paragraph-size">Aromatherapy is based on the usage of aromatic materials including essential oils and other aroma compounds, with claims for improving psychological and physical well-being. It is offered as a complementary therapy or as a form of alternative medicine, the first meaning alongside standard treatments, the second instead of conventional, evidence-based treatments.</p>
                    <Link to="/contacts"><button type='button' className="btn service-cta">SCHEDULE NOW</button></Link>
                </div>
            </div>
            <div className="service column-reverse">
                <div className="service-info" id='hair-styling'>
                    <h3 className='title'>HAIR STYLING</h3>
                    <p className="service-description paragraph-size">A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human head but sometimes on the face or body. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
                <div className="service-img">
                    <img src="/images/hair-styling.png" alt="" />
                </div>
            </div>
            <div className="service" id='manicure'>
                <div className="service-img">
                    <img src="/images/manicure.png" alt="" />
                </div>
                <div className="service-info">
                    <h3 className='title'>MANICURE</h3>
                    <p className="service-description paragraph-size">A manicure is a mostly cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon. A manicure usually consists of filing and shaping the free edge of nails, pushing and clipping (with a cuticle pusher and cuticle nippers) any nonliving tissue (but limited to the cuticle and hangnails), treatments with various liquids, massage of the hand, and the application of fingernail polish.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
            </div>
            <div className="service column-reverse" id='massage'>
                <div className="service-info">
                    <h3 className='title'>MASSAGE</h3>
                    <p className="service-description paragraph-size">Massage is the manipulation of the body's soft tissues. Massage techniques are commonly applied with hands, fingers, elbows, knees, forearms, feet or a device. The purpose of massage is generally for the treatment of body stress or pain.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
                <div className="service-img">
                    <img src="/images/massage.png" alt="" />
                </div>
            </div>
            <div className="service" id='hair-removal'>
                <div className="service-img">
                    <img src="/images/hair-removal.png" alt="" />
                </div>
                <div className="service-info">
                    <h3 className='title'>LASER HAIR REMOVAL</h3>
                    <p className="service-description paragraph-size">Laser hair removal is a medical procedure that uses a concentrated beam of light (laser) to remove unwanted hair. During laser hair removal, a laser emits a light that is absorbed by the pigment (melanin) in the hair. The light energy is converted to heat, which damages the tube-shaped sacs within the skin (hair follicles) that produce hairs. This damage inhibits or delays future hair growth.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
            </div>
            <div className="service column-reverse" id='eyelash-extentions'>
                <div className="service-info">
                    <h3 className='title'>EYELASH EXTENSIONS</h3>
                    <p className="service-description paragraph-size">Eyelash extensions are a cosmetic enhancement attaching synthetic or natural fibers to the natural eyelashes to create a fuller, more dramatic look. They are available in various lengths, thicknesses, and curvatures.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
                <div className="service-img">
                    <img src="/images/eyelash-extentions.png" alt="" />
                </div>
            </div>
        </section>

            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="section-title">
                    <div className="title-line">&nbsp;</div>
                    <h3 className='title'>ABOUT DELUXE</h3>
                    <div className="title-line">&nbsp;</div>
                </div>
                <div className="about-container">
                    <p className="paragraph-size">DELXUE is a Finnish beauty salon located in Helsinki and Turku. We offer many servies and our equipment is one of the best in the country. Our certified staff's main goal is your comfort and beauty. After your procedure is done we guarantee you'll be feeling as beautiful as ever! Our building offers a playground for the kids of any and all busy parents who want our services. Be sure to <Link to="/register" className='account-link'>REGISTER</Link> and schedule an appointment!</p>
                    <Link to="/contacts"><button type='button' className="btn">CONTACT US NOW</button></Link>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </>
    )
}
import './Home.scss';
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
                    <h3 className='title'>AROMA THERAPY</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/contacts"><button type='button' className="btn service-cta">SCHEDULE NOW</button></Link>
                </div>
            </div>
            <div className="service">
                <div className="service-info" id='hair-styling'>
                    <h3 className='title'>HAIR STYLING</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
            </div>
            <div className="service" id='massage'>
                <div className="service-info">
                    <h3 className='title'>MASSAGE</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                    <h3 className='title'>HAIR REMOVAL</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
            </div>
            <div className="service" id='eyelash-extentions'>
                <div className="service-info">
                    <h3 className='title'>EYELASH EXTENSIONS</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/contacts"><button type='button' className=" btn service-cta">SCHEDULE NOW</button></Link>
                </div>
                <div className="service-img">
                    <img src="/images/eyelash-extentions.png" alt="" />
                </div>
            </div>
        </section>

            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="about-title">
                    <div className="title-line">&nbsp;</div>
                    <h3 className='title'>ABOUT DELUXE</h3>
                    <div className="title-line">&nbsp;</div>
                </div>
                <div className="about-container">
                    <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/contacts"><button type='button' className="btn">CONTACT US NOW</button></Link>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </>
    )
}
import '../../index.scss';
import axios from "axios";
import Navbar from '../Navbar';
import Footer from '../Footer';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserProfile() {
    const [username, setUsername] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(res => {
            if(res.data.Status === "Success!") {
                setUsername(res.data.username)
            } else {
                navigate('/')
            }
        })
        .then(error => console.log(error))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+username)
        .then(res => {
            if(res.data.Status === "Success!") {
                window.location.reload(true)
                navigate('/')
            } else {
                alert("Couldn't delete user...")
            }
        })
        .then(error => console.log(error))
    }

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

        <section className="profile-section">
            <div className="profile-container">
                <h4 className="title">Welcome, {username}!</h4>
                <p>Thank you for choosing us. By registering you now have the ability to schedule appointments any time you want by going to the <Link to="/contacts" className='account-link'>CONTACTS</Link> page. Here you can log out, change your username, or delete your profile. (We hope you never have to click on that last button.) Changing the username requires a logout to take effect. We're hopeful you'll enjoy our services.</p>
                <div className="user-btns">
                    <Link to='/login'><button type='button' className="btn hero-btn" onClick={handleLogout}>LOG OUT</button></Link>
                    <Link to={`/user-profile/edit-profile/`+username}><button type='button' className='btn'>CHANGE USERNAME</button></Link>
                    <button type='button' className='btn' onClick={e => handleDelete(username)}>DELETE USER</button>
                </div>
            </div>
        </section>

        <Footer />
      </>
    )
}
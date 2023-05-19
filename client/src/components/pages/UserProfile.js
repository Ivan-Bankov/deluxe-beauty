import './UserProfile.scss';
import axios from "axios";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserProfile() {
    const [username, setUsername] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3002')
        .then(res => {
            if(res.data.Status === "Success!") {
                setUsername(res.data.username)
            } else {
                navigate('/')
            }
        })
        .then(error => console.log(error))
    }, [])

    const handleDelete = (username) => {
        axios.delete('http://localhost:3002/delete/'+username)
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

    return (
      <>
        <Navbar />

        <section className="profile-section">
            <div className="profile-container">
                <h4 className="title">Welcome, {username}!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="user-btns">
                    <Link to={`/user-profile/edit-profile/`+username}><button type='button' className='btn'>CHANGE USERNAME</button></Link>
                    <button type='button' className='btn' onClick={e => handleDelete(username)}>DELETE USER</button>
                </div>
            </div>
        </section>

        <Footer />
      </>
    )
}
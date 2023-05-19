import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../index.css';
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from '../Footer';

export default function EditProfile() {
    const [userInfo, setuserInfo] = useState({
        username: ''
    })

    const{username} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3002/user-profile/edit-profile/'+username)
        .then(res => {
            setuserInfo({...userInfo, username: res.data.Result[0].username})
        })
        .catch(error => console.log(error))
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3002/register', userInfo)
        .then(res => {
            if(res.data.Status === "Successfully registered user!") {
                navigate('/login')
            } else {
                alert("Couldn't register user...")
            }
        })
        .then(error => console.log(error))
    }


    return (
        <>
            <Navbar />

            {/* CONTACTS SECTION */}
            <section className="edit-profile-section">
                <form className="account-form" onSubmit={handleSubmit}>
                    <h2 className="title">EDIT USERNAME</h2>
                    <label htmlFor='userName'>NEW USERNAME:</label>
                    <input required type='text' id='userName' name='userName' onChange={e => setuserInfo({...userInfo, username: e.target.value})} />
                    <button type='submit' className="btn">SAVE</button>
                </form>
            </section>

            <Footer />
        </>
    )
}
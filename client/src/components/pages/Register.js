import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import './LogInandRegister.scss';

export default function Register() {
    const [userInfo, setuserInfo] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/register', userInfo)
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
        <div className="account-form-container">
            <form className="account-form" onSubmit={handleSubmit}>
                <h2 className="title">REGISTER</h2>
                <label htmlFor='userName'>USERNAME:</label>
                <input required type='text' id='userName' name='userName' onChange={e => setuserInfo({...userInfo, username: e.target.value})} />
                <label htmlFor='userPassword'>PASSWORD:</label>
                <input required type='password' id='userPassword' name='userPassword' onChange={e => setuserInfo({...userInfo, password: e.target.value})} />
                <button type='submit' className="btn">REGISTER</button>
                <p>Already have an account? <Link to='/login' className="account-link">LOG IN!</Link></p>
            </form>
        </div>
      </>
  );
}
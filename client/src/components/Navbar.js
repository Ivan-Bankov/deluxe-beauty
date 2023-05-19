import './Navbar.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [auth, setAuth] = useState(false)
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3002')
        .then(res => {
            if(res.data.Status === "Success!") {
                setAuth(true)
            } else {
                setAuth(false)
            }
        })
        .then(error => console.log(error))
    }, [])
   
    return (
      <>
        <nav className='navbar' id='top'>

        {/* NAVBAR TITLE TEXT */}
          <div className='navbar-top'>
            <Link to='/' className='title-link'><h1>BEAUTY SALON<br /><span className='salon-name'>D&nbsp;E&nbsp;L&nbsp;U&nbsp;X&nbsp;E</span></h1></Link>
          </div>

          {/* CONTAINER FOR THE MENU */}
          <div className='navbar-container'>

            {
              auth ?
              <div className='nav-row'>
                <ul className='nav-menu'>
                  <Link to='/' className='nav-link'><li className='nav-item'>HOME</li></Link>
                  <Link to='/contacts' className='nav-link'><li className='nav-item'>CONTACTS</li></Link>
                </ul>
                <div><Link to='/user-profile'><button className='profile-btn'></button></Link></div>
              </div>
              :
              <div>
                <ul className='nav-menu'>
                  <Link to='/' className='nav-link'><li className='nav-item'>HOME</li></Link>
                  <Link to='/contacts' className='nav-link'><li className='nav-item'>CONTACTS</li></Link>
                </ul>
              </div>
            }
            
          </div>
        </nav>
      </>
    )
}
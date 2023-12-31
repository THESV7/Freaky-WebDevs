import React, { useEffect, useState } from 'react'
import './NavBar.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div className='Nav_div'
            >
                <nav className='navbar'>

                    <div className='Navbar_logo_flex'>
                    <FontAwesomeIcon icon={faUnlockAlt} className='logo' />
                        <span className="logo-text">Unlock</span>
                        <span className="logo-subtext">U</span>
                    </div>
                    <div className='nav_menu'>
                        <ul className='nav_lists'>
                            <Link to='/'><li className='nav_text' >Home</li></Link>
                            <Link to='/courses'><li className='nav_text' >Courses</li></Link>
                            <Link to='/selectmentor'><li className='nav_text' >Connect</li></Link>
                            <Link to='/dailyupdates'><li className='nav_text' >Updates</li></Link>
                            <Link to='/events'><li className='nav_text' >Events</li></Link>
                        </ul>
                    </div>
                    <div className='btn_div'>
                        <button className='nav_btn_signup' onClick={() => navigate('/signup')}>Sign up</button>
                        <button className='nav_btn_login' onClick={() => navigate('/login')}>Login</button>
                    </div>
                    <div className='mobile_size'>
                        <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt="" width={40} />

                        <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`} >
                            <ul className='nav_lists_mobile'>
                                <Link to='/'><li className='nav_text' onClick={() => setToggle(!toggle)}>Home</li></Link>
                                <Link to='/courses'><li className='nav_text' onClick={() => setToggle(!toggle)}>Courses</li></Link>
                                <Link to='/activities'><li className='nav_text' onClick={() => setToggle(!toggle)}>Activites</li></Link>
                                <Link to='/dailyupdates'><li className='nav_text' onClick={() => setToggle(!toggle)}>Updates</li></Link>
                            </ul>
                            <div className='btn_div_mobile'>
                                {

                                    <>
                                        <button className='nav_btn_signup' onClick={() => { navigate('/signup'); setToggle(!toggle) }}>Sign up</button>
                                        <button className='nav_btn_login' onClick={() => { navigate('/login'); setToggle(!toggle) }}>Login</button>
                                    </>
                                }
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar
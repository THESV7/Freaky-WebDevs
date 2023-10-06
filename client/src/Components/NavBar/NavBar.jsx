import React, { useEffect, useState } from 'react'
import './NavBar.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className='Nav_div'
            >
                <nav className='navbar'>

                    <div className='Navbar_logo_flex'>
                        <img src='' alt="" className='logo' />
                        <span className="logo-text">Ace</span>
                        <span className="logo-subtext">Aptitude</span>
                    </div>
                    <div className='nav_menu'>
                        <ul className='nav_lists'>
                            <Link to='/'><li className='nav_text'>Home</li></Link>
                            <Link to='/aptitude'><li className='nav_text'>Practice Tests</li></Link>
                            <Link to='/test'><li className='nav_text'>Test</li></Link>
                            <Link to='/LeaderBoard'><li className='nav_text'>LeaderBoard</li></Link>
                            <Link to='/about'><li className='nav_text'>About us</li></Link>
                        </ul>
                    </div>
                    <div className='btn_div'>
                        <button className='nav_btn_signup' >Sign up</button>
                        <button className='nav_btn_login'>Login</button>
                    </div>
                    <div className='mobile_size'>
                        <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt="" width={40} />

                        <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`} >
                            <ul className='nav_lists_mobile'>
                                <Link to='/'><li className='nav_text' onClick={() => setToggle(!toggle)}>Home</li></Link>
                                <Link to='/aptitude'><li className='nav_text' onClick={() => setToggle(!toggle)}>Practice Tests</li></Link>
                                <Link to='/test'><li className='nav_text' onClick={() => setToggle(!toggle)}>Test</li></Link>
                                <Link to='/LeaderBoard'><li className='nav_text' onClick={() => setToggle(!toggle)}>LeaderBoard</li></Link>
                                <Link to='/about'><li className='nav_text' onClick={() => setToggle(!toggle)}>About us</li></Link>
                            </ul>
                            <div className='btn_div_mobile'>
                                {

                                    <>
                                        <button className='nav_btn_signup' onClick={() => { setToggle(!toggle) }}>Sign up</button>
                                        <button className='nav_btn_login' onClick={() => { setToggle(!toggle) }}>Login</button>
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
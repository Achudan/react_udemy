import React, { useState } from 'react'
import Profile from './Profile'
import './../navbar.styles.scss'


const Navbar = () => {

    const [focused, isFocused] = useState(false);

    return (
        <div className='navbar'>
            <div className='container-left'>
                <div className='nav_elements'>
                    <span className='menu-items'>Home</span>
                </div>
                <div className='nav_elements'>
                    <span className='menu-items'>Today</span>
                </div>
                <div className='nav_elements'>
                    <span className='menu-items'>Tasks</span>
                </div>
            </div>

            <div className='container-right'>
                <div className='nav_elements'>
                    <span className='menu-items right-child'>About</span>
                </div>
                <div className='nav_elements-has-sub' onMouseOver={() => { isFocused(true) }} onMouseLeave={() => { isFocused(false) }}   >
                    <span className='menu-items right-child' ><Profile /></span>
                    {focused ? (<ul className='container-focused'>
                        <li>My Profile</li>
                        <li>Logout</li>
                    </ul>) : null}
                </div>
                <div className='nav_elements'>
                    <span className='menu-items right-child'>About</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
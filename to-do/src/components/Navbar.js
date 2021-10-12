import React from'react'
import Profile from './Profile'
import './../navbar.styles.scss'


const Navbar = () =>{
    return(
        <div className='navbar'>
            <div className='nav_elements'>
                <span className='menu-items'>Home</span>
            </div>
            <div className='nav_elements'>
                <span className='menu-items'>Today</span>
            </div>
            <div className='nav_elements'>
                <span className='menu-items'>Tasks</span>
            </div>
            <div className='nav_elements'>
                <span className='menu-items right-child'><Profile /></span>
            </div>
            <div className='nav_elements'>
                <span className='menu-items right-child'>About</span>
            </div>
        </div>
    )
}

export default Navbar
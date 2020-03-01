import React from 'react'
import {Link} from 'react-router-dom'

// Top Navigation for App
export const Nav = () => {
    return (
        <div>
            <Link to='/auctions'>Auctions</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}

// Top Navigation for App
export const Footer = () => {
    return (
        <div>
            <p>get Footer from ui</p>
        </div>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ to, icon, name }) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>
                <i className={`fas fa-fw ${icon}`}></i>
                <span>{name}</span>
            </Link>
        </li>
    )
}

export default NavItem

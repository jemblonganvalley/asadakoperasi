import React from 'react'
import { Link } from 'react-router-dom'
import MainLink from './MainLink'
const NavItemLi = ({ to, icon, name, list = [{
    tolink: '/',
    namelink: 'contoh'
}] }) => {

    return (
        <li className="nav-item">
            <Link as='a' className="nav-link collapsed" to={to} data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i className={`fas fa-fw ${icon}`} />
                <span>{name}</span>
            </Link>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    {list.map((e, i) => {
                        i += 1
                        return (
                            <MainLink key={i} tolink={e.tolink} namelink={e.namelink} />
                        )
                    })}
                </div>
            </div>
        </li>
    )
}

export default NavItemLi

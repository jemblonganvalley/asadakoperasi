import React from 'react'
import './topBar.scss'

const TopBar = () => {
    return (

        <nav className='content navbar navbar-expand-lg navbar-primary bg-primary navbarTop' >
            <a href="#" className='bg-primary buttonMenu'>
                <span className="material-icons">
                    menu
                </span>
            </a>
            <div className="navbar custom-menu navbar-primary bg-primary">
                <ul className="navbar-nav">
                    <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle bg-primary linkUser" data-toggle="dropdown" aria-expanded="false">
                            <span className="hidden-xs">user</span>
                            &nbsp;
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="https://picsum.photos/seed/picsum/300" alt="User Image" className="img-circle" />
                                <p>Welcome - User</p>
                            </li>
                            <li className="user-body">
                                <div className="row">

                                </div>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    07-08-2020
                                </div>
                                <div className="pull-right">
                                    <a href="#" className="btn btn-default btn-flat" >Logout</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default TopBar

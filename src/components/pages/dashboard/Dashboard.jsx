import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../../topbar/TopBar'
import ContentHeader from '../../contentHeader/ContentHeader'
import Footer from '../../footer/Footer'


const Dashboard = ({ children }) => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id='content-wrapper' className="d-flex flex-column">
                <TopBar />

                {children}
                <Footer />

            </div>
        </div>

    )
}

export default Dashboard

import React from 'react'
import NavItem from './NavItem'

import NavItemLi from './NavItemLi'

const Sidebar = () => {
    return (
        <ul className="navbar-nav  sidebar sidebar-dark accordion" id="accordionSidebar" style={{
            backgroundColor: 'black'
        }}>
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center bg-primary" href="index.html" style={{
                backgroundColor: 'blue',
                height: '3.45rem',
                marginBottom: '10px'
            }}>

                <div className="sidebar-brand-text mx-3">raja KOPERASI</div>
            </a>
            {/* Divider */}

            <div className="heading">
                Main Navigation
            </div>
            {/* Nav Item - Dashboard */}
            <NavItem to='/dashboard' icon='fa-tachometer-alt' name='Dasboard' />
            <NavItem to='/users' icon='fa-user' name='Register Member' />



            <NavItemLi to='/' icon="fa-users" name='Users and Members' list={[
                {
                    tolink: '/',
                    namelink: 'Data User'
                },
                {
                    tolink: '/',
                    namelink: 'Data Member'
                }
            ]} />
            <NavItemLi to='/' icon="fa-tasks" name='Transaction' list={[
                {
                    tolink: '/',
                    namelink: 'Simpan'
                },
                {
                    tolink: '/',
                    namelink: 'Pinjam'
                },
                {
                    tolink: '/',
                    namelink: 'Withdraw'
                },
                {
                    tolink: '/',
                    namelink: 'Angusran'
                },
            ]} />
            <NavItemLi to='/' icon="fa-briefcase" name='Bagi Hasil' list={[
                {
                    tolink: '/',
                    namelink: 'Mudarabah'
                }
            ]} />
            <NavItemLi to='/' icon="fa-print" name='Report' list={[
                {
                    tolink: '/',
                    namelink: 'Simpan'
                },
                {
                    tolink: '/',
                    namelink: 'Pinjam'
                },
                {
                    tolink: '/',
                    namelink: 'Withdraw'
                },
                {
                    tolink: '/',
                    namelink: 'Angusran'
                },
                {
                    tolink: '/',
                    namelink: 'Bagi Hasil'
                }
            ]} />








        </ul>

    )
}

export default Sidebar

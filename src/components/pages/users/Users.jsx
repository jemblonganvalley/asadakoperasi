import React from 'react'
import ContentHeader from '../../contentHeader/ContentHeader'
import ContentUsers from './ContentUsers'


const Users = () => {
    return (
        <div className="wrapper">
            <ContentHeader namaContentHead="Form" namaContent="Register Member" namaToLink="> Register Member" />
            <ContentUsers />

        </div>



    )
}

export default Users

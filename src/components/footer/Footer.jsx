import React from 'react'

const Footer = () => {
    return (
        <footer className="main-footer row" style={{
            marginTop: 'auto',
            padding: '0px 40px',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            height: '60px',
            color: '#444',
            fontWeight: '100',
            fontFamily: 'Source Sans Pro, sans-serif'
        }}>
            Copyright &copy; 2020&nbsp;
            <a href="#" style={{
                textDecoration: 'none'
            }}>
                raja KOPERASI.&nbsp;</a>All rights reserved
            <div className="pull-right hidden-xs" style={{
                marginLeft: 'auto',
                // paddingRight: '18px'
            }}>
                <b style={{ fontWeight: 'bold' }}>version </b>1.0
            </div>
        </footer>
    )
}

export default Footer

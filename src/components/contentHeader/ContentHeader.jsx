import React from 'react'

const ContentHeader = ({ namaContentHead, namaContent, namaToLink }) => {
    return (

        <section className='content row' style={{
            width: '100%',
            display: 'flex',
            height: '90px',
            alignItems: 'center',
            padding: '30px 40px',
            paddingTop: 'auto',
            marginTop: '30px'
        }}>
            <h4 className='' style={{
                marginLeft: '10px',
                fontWeight: 'normal',
                color: 'black',
                display: 'flex',
                paddingTop: '5px'
            }} >{namaContentHead}</h4>
            <small className='' style={{
                fontSize: '16px',
                marginLeft: '5px'
            }} > {namaContent} </small>
            <ol className="breadcrumb" style={{
                marginLeft: 'auto',
                display: 'flex',
                paddingTop: '20px',
                backgroundColor: 'transparent'
            }}>
                <li className='breadcrumb-item active' aria-current='page' style={{
                    paddingTop: 'auto',

                }}>
                    <a href="a" style={{
                        color: '#404040',
                        textDecoration: 'none'
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        &nbsp;
                        Dashboard
                    </a>
                    &nbsp;
                    {namaToLink}
                </li>
            </ol>
        </section>



    )
}

export default ContentHeader

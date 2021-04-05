import React from 'react'

function Footer() {
    return (
        <div className="Footer" style={{
            position: 'relative',
            top: '10rem',
            width: '100%',
            height: '10vh',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            overflowX: 'hidden',
            backgroundColor:'black',
            color:'#fff',
        }}>
            <p style={{
                padding:'10px 20px',
                textAlign:'center',
            }}
            >© 2023 by Anton & Lily. Proudly created with Wix.com</p>
        </div>
    )
}

export default Footer

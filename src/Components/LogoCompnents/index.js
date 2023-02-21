import React from 'react'
import './index.css'
function LogoComponents({image,text,role}) {
    return (
        <div className='divLogo'>
         <img src={image} alt="logo" />
         <p className={role?"textLogo":"games"}>{text}</p>
        </div>
    )
}

export default LogoComponents

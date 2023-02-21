import React from 'react'
import './index.css'
function TextForm({title,subTitle,role}) {
    return (
        <div className={role?"textForm":"textFormLogin"} >
            <h1   className={role?"title":"titleLogin"}>{title}</h1>
            <p className={role?"subTitle":"SubLogin"} >{subTitle}</p>
        </div>
    )
}

export default TextForm

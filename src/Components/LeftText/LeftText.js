import React from 'react'
import './index.css'
function LeftText({ children,role }) {
    return (
        <div  className={role?"textLeft":"textLeftLogin"}>
            <p className={role?"des":"decLogin"}>
                <span className={role?"quotation":"quotationLogin"}>“</span>
                I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
            <span className={role?"Hideo":"HideoLogin"} >Hideo Kojima</span>
            {children}
        </div>
    )
}

export default LeftText

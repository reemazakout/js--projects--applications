import React from 'react'
import './index.css'
function InputComponent({name,placeHolder}) {
    return (
        <div className=''>
            <label className='name'>{name}</label>
            <input 
            className='InputFiled'
             placeholder={placeHolder}/>
        </div>
    )
}

export default InputComponent

import React from 'react'
import Index from '../Components'

function Register({StateRoute}) {
    console.log(StateRoute,"setStatesetState")

    return (
        <div className='app'>
    
        <Index StateRoute={StateRoute}/>
        </div>
    )
}

export default Register

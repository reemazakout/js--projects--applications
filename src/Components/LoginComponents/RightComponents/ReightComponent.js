import React from 'react'
import Continers from '../../ContainersComponent/Continers'
import TextForm from '../../TextUPForm/TextForm'
import Tab from './TabComponent/Tab'
import FormLogin from './FormLogin/FormLogin'

function ReightComponent({StateRoutes}) {
console.log(StateRoutes,"mai")
    return (
        <>
            <Continers>

                <div className='divContentFormLogin'>
                    <TextForm role={false} title={"Join the game!"}
                        subTitle={"Go inside the best gamers social network!"} />
                    <Tab />
                    <div className='dividers'>
                        <hr />
                        <p>Or</p>
                        <hr />
                    </div>
                    <FormLogin StateRoutes={StateRoutes}/>

                </div>
            </Continers>
        </>
    )
}

export default ReightComponent

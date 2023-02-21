import React from 'react'
import LogoComponents from '../LogoCompnents'
import logo from '../../assets/Group 3.png'
import Continers from '../ContainersComponent/Continers'
import LeftText from '../LeftText/LeftText'
import vector from '../../assets/Vector 1.png'
import star from '../../assets/Group.png'

import './index.css'
function LeftSeactn() {
    return (

             <div className='LeftSeactnHome'>

                <div className='leftSeaction'>
                    <Continers>
                        <LogoComponents role={true} image={logo} text={"Gamers"} />
                        <img src={star} alt="star" className='stars' />
                        <LeftText  role={true}>
                            <img src={vector} alt="vector" className='vector' />
                        </LeftText>
                    </Continers>
                </div>
 

        </div>
    )
}

export default LeftSeactn

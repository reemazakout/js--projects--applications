import React from 'react'
import Continers from '../ContainersComponent/Continers'
 import LogoComponents from '../LogoCompnents'
import trans from '../../assets/superscene-34-joystick_trans 1.png'
import star from '../../assets/Group.png'
import logo from '../../assets/Group 3 (1).png'
import LeftText from '../LeftText/LeftText'
import './index.css'
function LeftLogin() {
    return (
        <div className='LeftSeactnLogin'>

                <div className='leftSeaction'>
                    <Continers>
                        <LogoComponents role={false} image={logo} text={"Gamers"} />
                         <LeftText role={false}>
                            <img src={trans} alt="vector" className='trans' />
                        </LeftText>
                    </Continers>
                </div>
 

        </div>
    )
}

export default LeftLogin

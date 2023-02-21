import React from 'react'
import Linked from '../../../../assets/Vector (1).png'
import gitHub from '../../../../assets/Vector.png'
import twiiter from '../../../../assets/Vector (2).png'

import google from '../../../../assets/flat-color-icons_google.png'

import './index.css'
const DataImage = [
    { image: Linked },
    { image: gitHub },
    { image: twiiter },
    { image: google },
]
function Tab() {

    return (
        <div className='allTab'>
            {DataImage.map((item) =>
                <div className='itemTab'>
                    <img className='iconSocail' src={item.image} alt={item.image} />
                </div>
            )}

        </div>
    )
}

export default Tab

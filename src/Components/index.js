import React, { Component } from 'react'
import Form from './Form'
import './style.css'
import LeftSeactn from './LeftSeaction/LeftSeactn'
import TextForm from './TextUPForm/TextForm'
import RightSecation from './LeftSeaction/RightSecation/RightSecation'
class Index extends Component {
 
    render() {
        const {StateRoute}=this.props

        return (
            <div className='all_content'>
                <div className='contentleftSeaction'>
                    <LeftSeactn />
                </div>
                <div className='RightSecation'>
                <RightSecation StateRoute={StateRoute} />

                </div>
             </div>
        )
    }
}

export default Index
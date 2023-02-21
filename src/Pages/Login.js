import React, { PureComponent } from 'react'
 import LeftLogin from '../Components/LoginComponents/LeftLogin'
import ReightComponent from '../Components/LoginComponents/RightComponents/ReightComponent'
import './login.css'
class Login extends PureComponent {

    

    render() {
        const { StateRoutes } = this.props;
console.log(StateRoutes,StateRoutes)
          return (
            <div className='all_content'>
            <div className='contentleftSeactionLogin'>
                <LeftLogin />
            </div>
            <div className='RightSecation'>
            <ReightComponent  StateRoutes={StateRoutes} />

            </div>
         </div>        )
    }
}

export default Login
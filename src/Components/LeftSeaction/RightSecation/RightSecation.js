import React from 'react'
import Continers from '../../ContainersComponent/Continers'
import Form from '../../Form'
import TextForm from '../../TextUPForm/TextForm'
import './index.css'
import arrow from '../../../assets/arrow_back_ios_24px.png'
import Register from '../../../Pages/Register'
import Login from '../../../Pages/Login'
function RightSecation({ StateRoute }) {

    //     this.setState((prevState) => ({ pathHome: prevState.pathHome ===false ?<Login />:""}));
    console.log(StateRoute)
    const componentDidUpdate = () => {
        StateRoute((prevState) =>
            ({ pathHome: prevState.pathHome === false ? <Login /> : <Register /> })
        )
    }



    //     const componentDidUpdate = () => {
    //         console.log(as, "testStae")
    //         this.setState((prevState) => ({ pathHome: prevState.pathHome ==='/' ?<Login />:""})
    //         // if (StateRoute.state.pathHome === '/') {
    //         //     return StateRoute.setState.pathHome != '/'
    //         //     console.log(StateRoute.state.pathHome)
    //         // }
    //         // StateRoute.setState.pathHome !='/' ? <Login /> : ""
    //         // console.log(StateRoute.state.pathHome)

    //   )  }


    return (
        <>
            <Continers>
                <div className='divBack' >
                    <img src={arrow} alt="arrow" />
                    <p className='TextBack' onClick={componentDidUpdate} >Back</p>
                </div>
                <div className='divContentForm'>
                    <TextForm  role={true}  title={"Register Individual Account!"} subTitle={"For the purpose of gamers regulation, your details are required."} />
                    <Form />

                </div>
            </Continers>
        </>
    )
}


export default RightSecation

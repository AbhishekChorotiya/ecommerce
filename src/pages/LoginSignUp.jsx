import React, { useState } from 'react'
import LoginNavbar from '../components/LoginSingup_Page_Components/LoginNavbar'
import Login from "../components/LoginSingup_Page_Components/Login"
import SignUp from '../components/LoginSingup_Page_Components/SignUp'
import Footer from "../components/Footer"

const LoginSignUp = () => {

    const [state, setState] = useState("SignUp")

    const changeState = () => {
        if (state === "SignUp") {
            setState("Login")
        }

        else {
            setState("SignUp")
        }
    }

    return (
        <div>
            <LoginNavbar></LoginNavbar>
            {state === "SignUp" ? <Login changeStateFunc={changeState}></Login> : <SignUp changeStateFunc={changeState}></SignUp>}

            <Footer></Footer>
        </div>
    )
}

export default LoginSignUp
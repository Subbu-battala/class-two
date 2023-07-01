import React, { useState } from "react";

// Login component
const LoginForm = (props) => {
    return (
        <div className="form">
            <form>
                <fieldset>
                    <legend>Login Form</legend>
                    <div className="row">
                        <label htmlFor="user">User name</label>
                        <input type="text" name="user" id="user" required/>
                    </div>
                    <div className="row">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" required />
                    </div>
                    <div className="row">
                        <input type="submit" value="Login" className="btn" />
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

// register component
const RegisterForm = (props) => {
    return (
            <div className="form">
            <form>
                <fieldset>
                    <legend>Register Form</legend>
                    <div className="row">
                        <label htmlFor="user">User name</label>
                        <input type="text" name="user" id="user" required/>
                    </div>

                    <div className="row">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" required />
                    </div>

                    <div className="row">
                        <input type="submit" value="Register" className="btn" />
                    </div>

                </fieldset>
            </form>

        </div>
        
    )
}

const Ex6 = (props) => {
    // const [state,handler] = useState(intial value)
    const [view,setView] = useState(false)

    const toggle = () => {
        if(view) {
            setView(false) // register
        } else {
            setView(true) // Log in
        }
    }

    return (
        <div>
            <h3>State handler</h3>
            <button onClick={toggle} className="btn">{view ? "Register" : "Login"} </button>
            <section>
                {
                    view ? <LoginForm/> : <RegisterForm/>
                }
            </section>
        </div>
    )
}

export default Ex6
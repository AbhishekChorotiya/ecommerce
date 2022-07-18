import React, { useEffect, useState } from 'react'
import PageTitle from "../Common_Components/PageTitle"

const Login = (props) => {
    return (
        <div>
            <body>
                <main>
                    <section class="card-block dark-bg">
                        <div class="container">

                            <PageTitle
                                title="Log In"
                                desc="Log In to continue..."
                            ></PageTitle>

                            <form id='myForm' class="card-style" action="/login" method="post">
                                <div class="mb-3">
                                    <label class="form-label" for="email"><b>Email</b></label>
                                    <input class="form-control item" type="email" id="email" name="Email" required />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="password"><b>Password</b></label>
                                    <input class="form-control" type="password" id="password" name="Password" required />
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary" type="submit">Login</button>
                                </div>

                                <div class="d-flex justify-content-center align-items-center mt-3">
                                    <p class="align-middle my-0 me-2">Don't have an account?</p>
                                    <button class="btn btn-success btn-sm" type="submit" onClick={props.changeStateFunc}>Sign Up</button>
                                </div>
                            </form>

                        </div>
                    </section>
                </main>

            </body>
        </div>
    )
}

export default Login
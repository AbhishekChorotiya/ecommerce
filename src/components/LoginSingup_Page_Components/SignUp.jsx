import React from 'react'
import PageTitle from "../PageTitle"

const SignUp = (props) => {
    return (
        <div>
            <main>
                <section class="card-block dark-bg">
                    <div class="container">

                        <PageTitle
                            title="Sign Up"
                            desc="Sign Up to proceed..."
                        ></PageTitle>

                        {/* In forms, name filed is very Important, because it is used in 'req.body.' while connecting to database */}
                        <form method="post" class= "card-style" action="/signUp">

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3"><label class="form-label" for="first_name"><strong>First Name</strong></label><input class="form-control" type="text" id="first_name" placeholder="John" name="first_name" /></div>
                                </div>
                                <div class="col">
                                    <div class="mb-3"><label class="form-label" for="last_name"><strong>Last Name</strong></label><input class="form-control" type="text" id="last_name" placeholder="Doe" name="last_name" /></div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="email"><b>Email</b></label>
                                <input class="form-control item" type="email" id="email" name="Email" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="password"><b>Password</b></label>
                                <input class="form-control item" type="password" id="password" name="Password" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="phone"><b>Phone Number</b></label>
                                <input class="form-control item" type="tel" id="phone" name="Phone" />
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3"><label class="form-label" for="city"><strong>City</strong></label><input class="form-control" type="text" id="city" placeholder="Los Angeles" name="City" /></div>
                                </div>
                                <div class="col">
                                    <div class="mb-3"><label class="form-label" for="country"><strong>Country</strong></label><input class="form-control" type="text" id="country" placeholder="USA" name="Country" /></div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="address"><strong>Address</strong></label>

                                <input class="form-control" type="text" id="address" placeholder="Sunset Valley, 38" name="Address" />
                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary" type="submit">Sign Up</button>
                            </div>

                            <div class="d-flex justify-content-center align-items-center mt-3">
                                <p class="align-middle my-0 me-2">Already have an account?</p>
                                <button class="btn btn-success btn-sm" type="submit" onClick={props.changeStateFunc}>Login</button>
                            </div>
                        </form>

                    </div>
                </section>
            </main>
        </div>

    )
}

export default SignUp
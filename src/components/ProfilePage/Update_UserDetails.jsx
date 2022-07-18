import React from 'react'

const User_Details = () => {



    return (
        <div class="mt-5 col-5">

            <h2 class="text-info d-flex justify-content-center">User Details</h2>
            <p class=" d-flex justify-content-center">Update User Details...</p>

            <form action="/updateDetails" class="card-style" method="post">

                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><strong>First Name</strong></label>
                            <input class="form-control" type="text" placeholder="John" name="first_name" />
                        </div>
                    </div>

                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><strong>Last Name</strong></label>
                            <input class="form-control" type="text" placeholder="Doe" name="last_name" />
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label"><b>Email</b></label>
                    <input class="form-control item" type="email" name="Email" placeholder='someone@gmail.com' />
                </div>

                <div class="mb-3">
                    <label class="form-label"><b>Password</b></label>
                    <input class="form-control item" type="password" name="Password" />
                </div>

                <div class="mb-3">
                    <label class="form-label"><b>Phone Number</b></label>
                    <input class="form-control item" type="tel" name="Phone" />
                </div>

                <div class="row">
                    <div class="col">
                        <div class="mb-3"><label class="form-label" ><strong>City</strong></label><input class="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                    </div>
                    <div class="col">
                        <div class="mb-3"><label class="form-label"><strong>Country</strong></label><input class="form-control" type="text" placeholder="USA" name="country" /></div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label"><strong>Address</strong></label>

                    <input class="form-control" type="text" id="address" placeholder="Sunset Valley, 38" name="address" />
                </div>

                <div class="d-flex justify-content-center">
                    <button class="btn btn-success" type="submit">Update</button>
                </div>

            </form>
        </div>
    )
}

export default User_Details
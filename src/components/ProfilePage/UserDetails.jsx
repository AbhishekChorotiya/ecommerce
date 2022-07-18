import React, { useState, useEffect } from 'react'
import axios from 'axios';


const UserDetails = () => {
    //  (Refer point 1 from Image-Route.js)
    //  2. Hum API de saara data yaha get kar rahe hai.
    const url = 'http://localhost:8000/getProfile';
    const [imageSrc, setImageSrc] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => {
            setImageSrc(res.data);
        })
    }, [])

    console.log(imageSrc);

    return (
        <div class="container">
            {
                imageSrc.map((contents) => {
                    console.log(contents);
                    return (
                        <div>
                            <div class="d-flex justify-content-center pb-4">
                                <img src={contents.imageURL} class="rounded-circle" style={{ height: "220px", width: "220px", }} />
                            </div>

                            <form action="/profile" method="post" class= "card-style">
                                <div class="mb-3">
                                    <label><b>Name: </b></label>
                                    <label>{contents.Fname+ " "+ contents.Lname}</label>
                                </div>

                                <div class="mb-3">
                                    <label><b>Phone: </b></label>
                                    <label>{contents.Phone}</label>
                                </div>

                                <div class="mb-3">
                                    <label><b>City: </b></label>
                                    <label> Los Angeles</label>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <a class="btn btn-warning" type="submit" href='/update'>Update Details</a>
                                </div>
                            </form>
                        </div>
                    )

                })
            }


        </div>
    )
}

export default UserDetails
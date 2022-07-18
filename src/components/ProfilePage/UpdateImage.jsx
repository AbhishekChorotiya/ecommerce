import React, { useEffect, useState } from 'react'
import PageTitle from "../Common_Components/PageTitle"
import ImageCard from './ImageCard';
import Update_UserDetails from "./Update_UserDetails"
import { profileImage } from '../../Data';
import axios from 'axios';

import RefreshIcon from '@mui/icons-material/Refresh';

const UpdateImage = (props) => {

    // const url = "http://localhost:8000/login"

    // useEffect(() => {
    //     axios.get(url).then(res => {
    //         localStorage.setItem("userDetails", JSON.stringify(res))
    //         console.log("res: " + res);
    //     })
    // }, [])

    // console.log("here: " + localStorage.getItem("userDetails"));

    var [selectedImage, setselectedImage] = useState({
        image: "",
        myStyle: ""
    })

    function selectImage(event, imageSource) {
        setselectedImage(previousState => {
            return { ...previousState, image: imageSource, myStyle: "5px solid red" }
        });
    }

    console.log(selectedImage.image);
    console.log(selectedImage.myStyle);

    var selectedImageBorder = "";

    return (
        <div>
            <body>
                <main class="page login-page">
                    <section class="clean-block clean-form dark m-0">
                        <div class="container">
                            <PageTitle
                                title="Change Avatar"
                            ></PageTitle>


                            <div class="row row-cols-3 row-cols-lg-6 g-5 g-lg-4">

                                {
                                    profileImage.map((contents) => {

                                        if (contents.src === selectedImage.image) {
                                            selectedImageBorder = selectedImage.myStyle
                                        }
                                        else {
                                            selectedImageBorder = ""
                                        }

                                        return (
                                            <ImageCard
                                                key={contents.id}
                                                ImgSrc={contents.src}
                                                ImgAltText={contents.altText}
                                                selectImageFunction={selectImage}
                                                selectedStyle={selectedImageBorder}
                                            />
                                        )
                                    })
                                }

                            </div>

                        </div>

                        <div class="d-flex justify-content-evenly flex-wrap mt-2">

                            <div class="mt-5 col-5">
                                <h2 class="text-info d-flex justify-content-center">Profile Photo</h2>
                                <p class=" d-flex justify-content-center">Selected Profile Photo...</p>

                                <form action="/saveImage" method='post' class= "card-style">
                                    <div class= "d-flex justify-content-center mb-4">
                                        <img class="mb-1" style={{ height: "150px", width: "150px" }} src={selectedImage.image}></img>
                                    </div>
                                    <input class="form-control item d-none" type="text" id="email" name="mySelectedImage" value={selectedImage.image} required />

                                    <div class="d-flex justify-content-between mt-4">
                                        <a href='/update'>
                                            <button class="btn btn-primary" type="submit">Refresh <RefreshIcon /></button>
                                        </a>

                                        <button class="btn btn-primary" type="submit">Set Profile</button>
                                    </div>
                                </form>
                            </div>

                            <Update_UserDetails />
                        </div>

                    </section>
                </main>

            </body>
        </div>
    )
}

export default UpdateImage
import React from 'react'
import Navbar from '../components/Navbar'
import Update_UserDetails from "../components/profilePage_Components/Update_UserDetails"
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import UpdateImage from '../components/profilePage_Components/UpdateImage'

const UpdateInfo = () => {

    return (
        <div>
            <Navbar></Navbar>

            <section class="clean-block clean-form dark">
                <div class="container-fluid px-5">
                    <PageTitle
                        title="Update Profile"
                        desc=""
                    ></PageTitle>

                    <UpdateImage
                        imgSrc= { Math.floor(Math.random() * 1000000) }
                    ></UpdateImage>

                </div>
            </section>

            <Footer></Footer>

        </div>
    )
}

export default UpdateInfo
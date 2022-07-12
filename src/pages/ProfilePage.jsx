import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageTitle from "../components/PageTitle"
import UserDetails from '../components/profilePage_Components/UserDetails'

const ProfilePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section class="clean-block clean-form dark">
                <div class="container-fluid px-5">
                    <PageTitle
                        title="My Profile"
                        desc=""
                    ></PageTitle>

                    <UserDetails />

                </div>
            </section>

            <Footer></Footer>

        </div>

    )
}

export default ProfilePage
import React, {useState, useEffect} from 'react'

import Navbar2 from '../components/Navbar2'
import Slider from '../components/homePage_Components/Slider'
import Offers from '../components/homePage_Components/Offers'
import Categories from '../components/homePage_Components/Categories'
import ContactMe from '../components/homePage_Components/ContactMe'
import FlashDeals from '../components/homePage_Components/FlashDeals'
import TopPicks from '../components/homePage_Components/TopPicks'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <Slider></Slider>
            <Categories></Categories>
            <TopPicks></TopPicks>
            <FlashDeals></FlashDeals>
            <Offers></Offers>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    )
}

export default Home
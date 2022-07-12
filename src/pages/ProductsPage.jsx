import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/productsPage_Components/Products'
import Footer from '../components/Footer'
import News from '../components/News'
const ProductsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <News></News>
            <Products
                heading= "Dresses"
            ></Products>
            <Footer></Footer>
        </div>
    )
}

export default ProductsPage
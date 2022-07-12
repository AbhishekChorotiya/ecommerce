import React from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'
import ProductInfo from '../components/selectedProduct_Components/ProductInfo'
import Footer from '../components/Footer'

const SelectedProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <News></News>
            <ProductInfo></ProductInfo>
            <Footer></Footer>
        </div>
    )
}

export default SelectedProduct
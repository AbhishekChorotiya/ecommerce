import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageTitle from '../components/PageTitle';
import Cart_Item from '../components/cart/Cart_Item';
import Shopping_Summary from '../components/cart/Shopping_Summary';

const Cart = () => {
    return (
        <div>
            <Navbar></Navbar>

            <main>
                <section class="clean-block clean-cart dark-bg">
                    <div class="container">

                        <PageTitle
                            title="Shopping Cart"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
                        />

                        <div class="white-bg row g-0">

                            <div>
                                <Cart_Item></Cart_Item>
                                <Cart_Item></Cart_Item>
                                <Cart_Item></Cart_Item>
                            </div>
                        </div>

                        {/* Shopping Summary */}
                        <Shopping_Summary />

                    </div>
                </section>
            </main>

            <Footer></Footer>
        </div>
    )
}

export default Cart
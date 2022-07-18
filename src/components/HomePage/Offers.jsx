import React, { useEffect, useState } from 'react'
import PageTitle from "../Common_Components/PageTitle"
import { productsData } from '../../Data'
import axios from 'axios'

const Offers = () => {

    var url= "https://free-store-api.herokuapp.com/offers"
    var [offers, setOffers]= useState([])

    useEffect( () =>{
        axios.get(url).then(res =>{
            setOffers(res.data)
        })
    } )

    return (
        <div>
            <main class="page projects-page">
                <section class="portfolio-block projects-cards py-0">
                    <div class="container">
                        <PageTitle
                            title= "Exclusive Offers"
                            desc= "Check out the amazing offers!!"
                        />

                        <div class="row">

                            {
                                offers.map((contents) => {
                                    return (
                                        <div key={contents.id} class="col-md-6 col-lg-4" style={{display: contents.id >6 ? "none" : ""}}>
                                            <div class="card border-0">
                                                <a href="#">
                                                    <img class="card-img-top scale-on-hover1" src={contents.image} alt="{contents.altText}" />
                                                </a>

                                                <div class="card-body dark-bg">
                                                    <h6><a href="#">{contents.item}</a></h6>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Offers
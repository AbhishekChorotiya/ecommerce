import React from 'react'
import PageTitle from "../PageTitle"
import { productsData } from '../Data'

const Offers = () => {
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
                                productsData.map((contents) => {
                                    return (
                                        <div class="col-md-6 col-lg-4">
                                            <div class="card border-0"><a href="#"><img class="card-img-top scale-on-hover1" src={contents.src} alt={contents.altText} /></a>
                                                <div class="card-body dark-bg">
                                                    <h6><a href="#">{contents.label}</a></h6>
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
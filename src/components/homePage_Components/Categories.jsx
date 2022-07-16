import React, { useState, useEffect } from 'react'
import axios from "axios"

import PageTitle from "../PageTitle"

const Categories = () => {

    const url = "https://free-store-api.herokuapp.com/categories"

    var [category, setCategory]= useState([])

    useEffect( ()=>{
        axios.get(url).then(res => {
            setCategory(res.data)
        })
    }, [] )

    return (
        <main class="page projets-page dark-bg">
            <section class="portfolio-block projects compact-grid pt-5 pb-5">

                <PageTitle
                    title="Categories"
                    desc="Explore various categories!!"
                ></PageTitle>

                <div class="row g-0">

                    {
                        category.map((contents) => {

                            return (
                                <div key= {contents.id} class="col-6 col-lg-4 item1 zoom-on-hover1 position-relative pb-0" style={{display: contents.id > 6 ? "none" : "" }}>
                                    <a href="#">
                                        <img class="img-fluid image cover-image" src={contents.image} alt="{contents.altText}" />
                                        <span class="info">
                                            <span class="info-heading">contents.label</span>
                                            <span class="info-body">contents.desc</span>
                                        </span>
                                    </a>
                                </div>
                            )

                        })
                    }

                </div>
            </section>
        </main>
    )
}

export default Categories
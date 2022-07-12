import React from 'react'
import { categoriesData } from '../Data'
import PageTitle from "../PageTitle"

const Categories = () => {

    return (
        <main class="page projets-page dark-bg">
            <section class="portfolio-block projects compact-grid pt-5 pb-5">

                <PageTitle
                    title="Categories"
                    desc="Explore various categories!!"
                ></PageTitle>

                <div class="row g-0">

                    {
                        categoriesData.map((contents) => {
                            return (
                                <div class="col-6 col-lg-4 item1 zoom-on-hover1 position-relative pb-0">
                                    <a href="#">
                                        <img class="img-fluid image" src={contents.src} alt={contents.altText} />
                                        <span class="info">
                                            <span class="info-heading">{contents.label}</span>
                                            <span class="info-body">{contents.desc}</span>
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
import React from 'react'

import PageTitle from '../PageTitle'
import SortProducts from './SortProducts'
import Filter_Products from './Filter_Products'
import Catalog_Image from './Catalog_Image'

const Products = (props) => {
    return (
        <main class="page catalog-page">
            <section class="clean-block clean-catalog dark pt-0">
                <div class="container px-0">

                    <PageTitle
                        title="Catalog"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
                    ></PageTitle>

                    <SortProducts></SortProducts>

                    <div class="content">
                        <div class="row">

                            {/* Filter Products */}
                            <Filter_Products></Filter_Products>

                            {/* Products Section */}
                            <div class="col-8 col-md-9">

                                <div class="p-4">

                                    {/* Catalog Images */}
                                    <div class="row g-1">
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                        <Catalog_Image />
                                    </div>

                                    {/* Pagination */}
                                    {/* <ul class="pagination mt-3">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                            </a>
                                        </li>

                                        <li class="page-item active">
                                            <a class="page-link" href="#">1</a>
                                        </li>

                                        <li class="page-item">
                                            <a class="page-link" href="#">2</a>
                                        </li>

                                        <li class="page-item">
                                            <a class="page-link" href="#">3</a>
                                        </li>

                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul> */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Products
import React from 'react'

import Star_Rating from '../Common_Components/Star_Rating'

const Catalog_Image = () => {
    return (
        <div class="col-12 col-lg-4">

            <div class="box p-3">
                <div class="mb-4">
                    <a href="#">
                        <img class="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg" />
                    </a>
                </div>

                <h5 class="d-flex justify-content-center mb-3">Product Name</h5>

                <div class="d-flex justify-content-between">
                    <Star_Rating />

                    <div>
                        <h5><b>$100</b></h5>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Catalog_Image
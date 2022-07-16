import React from 'react'

const Cart_Item = () => {
    return (
        <div class="product m-5">
            <div class="row justify-content-center align-items-center">

                <div class="col-md-3">
                    <div class="product-image"><img class="img-fluid d-block mx-auto image" src="assets/img/tech/image2.jpg" /></div>
                </div>

                <div class="col-md-5">
                    <a href="#">Lorem Ipsum dolor</a>

                    {/* Specifications */}
                    <div class="d-flex align-items-center mt-2">
                        <h6><b>Display: </b></h6>
                        <p class="ms-2 mb-auto">5 inch</p>
                    </div>

                    <div class="d-flex align-items-center">
                        <h6><b>RAM: </b></h6>
                        <p class="ms-2 mb-auto">4GB</p>
                    </div>

                    <div class="d-flex align-items-center">
                        <h6><b>Memory: </b></h6>
                        <p class="ms-2 mb-auto">32GB</p>
                    </div>

                </div>

                {/* Quantity */}
                <div class="col-6 col-md-2">
                    <div class="d-flex justify-content-center">
                        <h6 class="d-none d-md-block"><b>Quantity</b></h6>
                    </div>

                    <div class="d-flex justify-content-center">
                        <input type="number" id="number" class="form-control" defaultValue={1} min={1} />
                    </div>
                </div>

                {/* Price */}
                <div class="col-6 col-md-2">
                    <div class="d-flex justify-content-center">
                        <h6 class="d-none d-md-block"><b>Price</b></h6>
                    </div>

                    <div class="d-flex justify-content-center">
                        <p>$120</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cart_Item
import React from 'react'

const Shopping_Summary = () => {
    return (
        <div class="greenish-bg mt-4 p-4">

            <h2 class="d-flex justify-content-center">Order Summary</h2>

            <div class="card-style mt-4 ">

                {/* Sub-Total */}
                <div class="d-flex justify-content-between">
                    <div>
                        <h5>Subtotal</h5>
                    </div>

                    <div>
                        <p>$360</p>
                    </div>
                </div>

                {/* Discount */}
                <div class="d-flex justify-content-between">
                    <div>
                        <h5>Discount</h5>
                    </div>

                    <div>
                        <p>$0</p>
                    </div>
                </div>

                {/* Shipping Amount */}
                <div class="d-flex justify-content-between">
                    <div>
                        <h5>Shipping</h5>
                    </div>

                    <div>
                        <p>$0</p>
                    </div>
                </div>

                <hr></hr>

                {/* Total Amount */}
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="text-primary">Total</h5>
                    </div>

                    <div>
                        <p>$360</p>
                    </div>
                </div>

                {/* Buy Button */}
                <button class="btn btn-primary mt-4 w-100" type="button">Buy</button>
            </div>

        </div>
    )
}

export default Shopping_Summary
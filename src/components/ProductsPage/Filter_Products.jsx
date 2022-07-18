import React from 'react'

const Filter_Products = () => {
    return (
        <div class="col-4 col-md-3">

            <div class="p-5">

                {/* 1. Categories */}
                <div class="mb-5">
                    <h4>Categories</h4>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-1" />
                        <label class="form-check-label ms-2">Phones</label>
                    </div>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-2" />
                        <label class="form-check-label ms-2">Laptops</label>
                    </div>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-3" />
                        <label class="form-check-label ms-2">PC</label>
                    </div>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-4" />
                        <label class="form-check-label ms-2">Tablets</label>
                    </div>

                </div>

                {/* 2. Brands */}
                <div>
                    <h4>Brands</h4>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-5" />
                        <label class="form-check-label ms-2">Samsung</label>
                    </div>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-6" />
                        <label class="form-check-label ms-2">Apple</label>
                    </div>

                    <div>
                        <input class="form-check-input" type="checkbox" id="formCheck-7" />
                        <label class="form-check-label ms-2">HTC</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter_Products
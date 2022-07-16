import React from 'react'

const SortProducts = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex flex-row justify-content-between" >


                <div class= "d-flex">
                    <a class="navbar-brand">Filter:</a>

                    <select class="form-select me-2" aria-label="Default select example">
                        <option selected>Color</option>
                        <option value="1">Red</option>
                        <option value="2">Blue</option>
                        <option value="3">Green</option>
                        <option value="4">Yellow</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Size</option>
                        <option value="1">XS</option>
                        <option value="2">S</option>
                        <option value="3">M</option>
                        <option value="4">L</option>
                        <option value="5">XL</option>
                    </select>

                </div>

                <div class= "d-flex">
                    <a class="navbar-brand">Sort:</a>

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>

            </div>
        </nav>
    )
}

export default SortProducts
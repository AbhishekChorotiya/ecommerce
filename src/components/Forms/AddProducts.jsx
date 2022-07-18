import React from 'react'
import PageTitle from "../Common_Components/PageTitle"

const AddProducts = (props) => {
    return (
        <div>
            <main>
                <section class="card-block dark-bg">
                    <div class="container">

                        <PageTitle
                            title="Add Products"
                            desc="Insert Product Details..."
                        ></PageTitle>

                        {/* In forms, name filed is very Important, because it is used in 'req.body.' while connecting to database */}
                        <form method="post" class="card-style" action="/signUp">

                            <div class="row">
                                <div class="mb-3"><label class="form-label" for="first_name"><strong>Product Name</strong></label><input class="form-control" type="text" placeholder="Jacket" name="product" /></div>

                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label class="form-label" ><b>Category</b></label>
                                        <input class="form-control item" type="text" name="category" placeholder='Fashion' />
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="mb-3">
                                        <label class="form-label" ><b>Price ($) </b></label>
                                        <input class="form-control item" type="number" placeholder='$20' name="price" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label class="form-label" for="phone"><b>Ratings</b></label>
                                        <input class="form-control item" type="number" min={0} max={5} id="phone" name="Phone" placeholder='0 to 5' />
                                    </div>
                                </div>

                                <div className="col">
                                    <div class="mb-3">
                                        <label class="form-label" for="phone"><b>Offers (% Off)</b></label>
                                        <input class="form-control item" type="number" name="offer" placeholder='50% Off' min={10} max={100} />
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="phone"><b>Image</b></label>
                                <input class="form-control item" type="text" name="image" placeholder='Add Image URL' />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="phone"><b>Description</b></label>

                                <textarea class="form-control" name="desc" cols="30" rows="2" placeholder='Product Description Here'></textarea>

                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary" type="submit">Add Product</button>
                            </div>

                        </form>

                    </div>
                </section>
            </main>
        </div>

    )
}

export default AddProducts
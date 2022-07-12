import React from 'react'
import IconButton from '@mui/material/IconButton';
import OpacityIcon from '@mui/icons-material/Opacity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductInfo = () => {
    return (
        <main class="page product-page">
            <section class="clean-block clean-product dark pt-0">
                <div class="container">
                    <div class="block-heading pt-4">
                        <h2 class="text-info">Product Info</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div class="block-content">
                        <div class="product-info">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="gallery">
                                        <div id="product-preview" class="vanilla-zoom">
                                            <div class="zoomed-image"></div>

                                            <div class="sidebar d-flex justify-content-center">
                                                <img class="img-fluid d-block small-preview" src="assets/img/tech/image1.jpg" />
                                                <img class="img-fluid d-block small-preview" src="assets/img/tech/image2.jpg" />
                                                <img class="img-fluid d-block small-preview" src="assets/img/tech/image3.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info">
                                        <h3>Lorem Ipsum</h3>
                                        <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-half-empty.svg" /><img src="assets/img/star-empty.svg" /></div>
                                        <div class="price">
                                            <h3>$300.00</h3>
                                        </div>
                                        
                                        <button class="btn btn-primary d-flex justify-content-between" type="button">
                                            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                            Add to Cart
                                        </button>
                                        
                                        <div class="summary">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Vestibulum diam risus, sagittis at fringilla at, pulvinar vel risus. Vestibulum dignissim eu nulla eu imperdiet. Morbi mollis tellus a nunc vestibulum consequat. Quisque tristique elit et nibh dapibus sodales. Nam sollicitudin a urna sed iaculis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <div>
                                <ul class="nav nav-tabs" role="tablist" id="myTab">
                                    <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" id="description-tab" href="#description">Description</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" id="specifications-tabs" href="#specifications">Specifications</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" id="reviews-tab" href="#reviews">Reviews</a></li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active description" role="tabpanel" id="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div class="row">
                                            <div class="col-md-5">
                                                <figure class="figure"><img class="img-fluid figure-img" src="assets/img/tech/image3.png" /></figure>
                                            </div>
                                            <div class="col-md-7">
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-7 right">
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                            <div class="col-md-5">
                                                <figure class="figure"><img class="img-fluid figure-img" src="assets/img/tech/image3.png" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade specifications" role="tabpanel" id="specifications">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td class="stat">Display</td>
                                                        <td>5.2"</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="stat">Camera</td>
                                                        <td>12MP</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="stat">RAM</td>
                                                        <td>4GB</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="stat">OS</td>
                                                        <td>iOS</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" role="tabpanel" id="reviews">
                                        <div class="reviews">
                                            <div class="review-item">
                                                <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-empty.svg" /></div>
                                                <h4>Incredible product</h4><span class="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div class="reviews">
                                            <div class="review-item">
                                                <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-empty.svg" /></div>
                                                <h4>Incredible product</h4><span class="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div class="reviews">
                                            <div class="review-item">
                                                <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-empty.svg" /></div>
                                                <h4>Incredible product</h4><span class="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clean-related-items">
                            <h3>Related Products</h3>
                            <div class="items">
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="clean-related-item">
                                            <div class="image"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg" /></a></div>
                                            <div class="related-name"><a href="#">Lorem Ipsum dolor</a>
                                                <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-half-empty.svg" /><img src="assets/img/star-empty.svg" /></div>
                                                <h4>$300</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="clean-related-item">
                                            <div class="image"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg" /></a></div>
                                            <div class="related-name"><a href="#">Lorem Ipsum dolor</a>
                                                <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-half-empty.svg" /><img src="assets/img/star-empty.svg" /></div>
                                                <h4>$300</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="clean-related-item">
                                            <div class="image"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg" /></a></div>
                                            <div class="related-name"><a href="#">Lorem Ipsum dolor</a>
                                                <div class="rating"><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star.svg" /><img src="assets/img/star-half-empty.svg" /><img src="assets/img/star-empty.svg" /></div>
                                                <h4>$300</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductInfo
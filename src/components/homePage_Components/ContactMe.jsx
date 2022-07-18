import React from 'react'
import PageTitle from '../PageTitle'
import SnackBarMessageBtn from "../SnackBarMessageBtn"
import ShareIcon from '@mui/icons-material/Share'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

const ContactMe = () => {
    return (
        <main id="main">
            <section id="contact" class="contact pt-0">
                <div class="container">

                    <PageTitle
                        title="Contact"
                        desc="Contact me via any of the options below"
                    ></PageTitle>

                    <div class="row">

                        <div class="col-lg-6">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card-style">

                                        <div class="d-flex justify-content-center">
                                            <i class="contact-btn"><ShareIcon></ShareIcon></i>
                                        </div>

                                        <h3 class="pt-1 pb-2 d-flex justify-content-center" >Social Profiles</h3>

                                        <div class="d-flex justify-content-center">

                                            <a class="contact-btn" href="#"><i class="bi bi-instagram p"></i></a>
                                            <a class="contact-btn" href="https://github.com/Piyush-Parmar-28?tab=repositories" target="_blank"><i class="bi bi-github 2"></i></a>
                                            <a class="contact-btn" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i class="bi bi-linkedin"></i></a>
                                            <a class="contact-btn" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i class="bi bi-twitter"></i></a>
                                            <a class="contact-btn" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i class="bi bi-whatsapp"></i></a>

                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="card-style mt-4 mb-4 d-flex justify-content-between">
                                        <div>
                                            <div class="d-flex justify-content-center">
                                                <i class="contact-btn"><a><EmailOutlinedIcon /></a></i>
                                            </div>

                                            <h3 class="pt-1 pb-2 d-flex justify-content-center">Email Me</h3>
                                            <p class="d-flex justify-content-center">piyush2822ecommerce@gmail.com</p>
                                        </div>


                                        <div >
                                            <div class="d-flex justify-content-center">
                                                <i class="contact-btn"><a><LocalPhoneOutlinedIcon /></a></i>
                                            </div>
                                            <h3 class="pt-1 pb-2 d-flex justify-content-center">Call Me</h3>
                                            <p class="d-flex justify-content-center">7014628881</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <form action="https://formsubmit.co/9136b2c305e27e56dc48df97e6f3158b" method="post" role="form"
                                class="card-style form-background">

                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="http://localhost:3000/home#main" />

                                <div class="row">

                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control"
                                            id="name" placeholder="Your Name" required />
                                    </div>

                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email"
                                            id="email" placeholder="Your Email" required />
                                    </div>

                                </div>

                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject"
                                        id="subject" placeholder="Subject" required />
                                </div>

                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" id="message" rows="6" placeholder="Message" required>
                                    </textarea>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-primary my-3">Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>



        </main>
    )
}

export default ContactMe
import React from 'react';
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
function Contact() {
    return (
        <div>
            <NavBar/>
            <div className='bg-darkBrown pt-5'>
                <div className='d-flex justify-content-center align-items-center pt-5'>
                    <label className='dot dot-lg me-2'></label>
                    <h1 className='fw-bold fs-54'>Let's Talk</h1>
                </div>
                <div className='row'>
                    <div className='col-10 col-md-6 mx-auto my-5 card shadow-lg mb-5 text-start px-4 py-5'>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-sm-6 mb-3">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <label for="lastName" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            
                                <div class="col-12 mb-3">
                                    <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                    <div class="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Please enter subject.
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea type="text" class="form-control" id="message" placeholder="Enter Your Message" required/>
                                    <div class="invalid-feedback">
                                        Please enter your message.
                                    </div>
                                </div>
                                
                            </div>
                            <button class="mt-5 w-50 btn btn-primary btn-lg" type="submit">Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
    
export default Contact;
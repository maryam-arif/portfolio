import React from 'react';
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
function Projects() {
    return (
        <div>
            <NavBar/>
            <div className='bg-darkBrown pt-5'>
                <div className='d-flex justify-content-center align-items-center pt-5'>
                    <label className='dot dot-lg me-2'></label>
                    <h1 className='fw-bold fs-54'>Projects</h1>
                </div>
                <div className='row'>
                    <div className='col-10 col-md-6 mx-auto my-5'>
                        <h1 className='fw-bold fs-1 text-start'>Experience</h1>
                        <div class="card shadow-lg mb-5">
                            <div class="card-body p-0">
                                <div className='row'>
                                    <div className='col-8 min-h-200 my-5'>
                                        <div className='border-left-blue text-start px-3'>
                                            <h3>Expense Reimbursement App</h3>
                                            <label>Aug 2019 - Sep 2019</label>
                                        </div>
                                    </div>
                                    <div className='col-4 pro-pic pro-pic-1'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-lg mb-5">
                            <div class="card-body p-0">
                                <div className='row'>
                                    <div className='col-8 min-h-200 my-5 text-start '>
                                        <div className='border-left-blue px-3'>
                                            <h3>PERFORMANCE ANALYSIS SYSTEM (PAS): A TOOL TO EXTRACT KNOWLEDGE FROM DATA</h3>
                                            <label>Nov 2018 - Apr 2019</label>
                                        </div>
                                        <p className='px-4'>Final Year Project. <br/>I worked as team lead.</p>
                                    </div>
                                    <div className='col-4 pro-pic pro-pic-2'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-lg mb-5">
                            <div class="card-body p-0">
                                <div className='row'>
                                    <div className='col-8 min-h-200 my-5 text-start'>
                                        <div className='border-left-blue  px-3'>
                                            <h3>Covid19 Risk Calculator</h3>
                                        </div>
                                        <p className='px-4'>A web app to calculate the risk to anyone from covid-19 pandemic. It asked a set of questions from different categories, applied algorithms for risk computation and sent the results via mail. It was completed in .NET</p>
                                    </div>
                                    <div className='col-4 pro-pic pro-pic-3'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
    
export default Projects;
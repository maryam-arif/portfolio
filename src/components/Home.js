import React from 'react';
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import {FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,FaTwitter} from "react-icons/fa"
function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <div className="home-banner d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 col-lg-5 home-banner-1">
                <div className="card intro-card shadow">
                    <div className="intro-card-1">
                        <div className="img-block mx-auto my-5">
                        </div>
                        <div>
                            <h3 className="fw-bold">Muzammil</h3>
                            <h3 className="fw-bold">Hussain</h3>
                            <div className="bottom-blue-border width-100 my-3 mx-auto"></div>
                        </div>
                        <p>Enterpreneur & CEO</p>
                    </div>
                    <div className="card-footer">
                        <ul className="list-inline">
                            <li className="list-inline-item fs-4 ps-3"><a href="https://www.facebook.com/smuzammil.shams/"><FaFacebookF /></a></li>
                            <li className="list-inline-item fs-4 ps-3"><a href="#"><FaTwitter /></a></li>
                            <li className="list-inline-item fs-4 ps-3"><a href="https://www.linkedin.com/in/smuzammil-shams/"><FaLinkedinIn /></a></li>
                            <li className="list-inline-item fs-4 ps-3"><a href="#"><FaInstagram /></a></li>
                            <li className="list-inline-item fs-4 ps-3"><a href="https://www.youtube.com/@smuzammil_shams"><FaYoutube /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
                <div className="my-auto intro-card-2">
                    <h1 className="fw-bold">Hello</h1>
                    <h3>Here's Who I am & What I do</h3>
                    <div class="d-flex my-5">
                        <a class="btn btn-outline-primary me-3 rounded-pill white-hover" href='/resume' type="button">Resume</a>
                        <a class="btn btn-outline-dark rounded-pill white-hover" href='/projects' type="button">Projects</a>
                    </div>
                    <p className="lh-lg">
                        I'm passionate about shaping the future of technology while nurturing the next generation of software engineering talent. <br/> As the Director & CEO of SnS Giants, a dynamic tech company specializing in Software Engineering services for businesses worldwide, I'm on a mission to innovate and transform the tech landscape.
                    </p>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  );
}

export default Home;

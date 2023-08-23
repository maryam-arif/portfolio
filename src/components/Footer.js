import {FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,FaTwitter} from "react-icons/fa"

function Footer() {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 ">
            <div class="col-md-4 d-flex align-items-center">
                <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 By Muzammil Hussain</span>
            </div>
        
            <ul className="list-inline">
                <li className="list-inline-item fs-4 ps-3"><a href="https://www.facebook.com/smuzammil.shams/"><FaFacebookF /></a></li>
                <li className="list-inline-item fs-4 ps-3"><a href="#"><FaTwitter /></a></li>
                <li className="list-inline-item fs-4 ps-3"><a href="https://www.linkedin.com/in/smuzammil-shams/"><FaLinkedinIn /></a></li>
                <li className="list-inline-item fs-4 ps-3"><a href="#"><FaInstagram /></a></li>
                <li className="list-inline-item fs-4 ps-3"><a href="https://www.youtube.com/@smuzammil_shams"><FaYoutube /></a></li>
            </ul>
            </footer>
        </div>
  );
}

export default Footer;
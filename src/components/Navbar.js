import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
        <Navbar key='md' expand='md' className="bg-body-tertiary sticky-bar">
          <Container fluid className='mx-lg-5'>
            <Navbar.Brand href="#" className='d-flex py-4 align-items-baseline'>
                <div className='dot'></div>
                <h3 className='col-8 fw-bold'>Muzammil Hussain</h3>
                <label className='col-1'> / </label>
                <h4 className='col-4'>Enterpreneur</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby='offcanvasNavbarLabel-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='px-0'>
                <Nav className="justify-content-end text-center flex-grow-1 pe-md-3 menu-center">
                  <Nav.Link href="/home">About Me</Nav.Link>
                  <Nav.Link href="/resume">Resume</Nav.Link>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
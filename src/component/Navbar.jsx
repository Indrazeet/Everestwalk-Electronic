import React ,{useState}from "react";
import { Nav,Dropdown } from "react-bootstrap";

const Navbar = () => {

  const [show,setShow] = useState (false)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3  shadow-sm">
        <div className="container">
          <Nav.Link className="navbar-brand fw-bold fs-4" href="/">
            Electronics Shop
          </Nav.Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow (!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Nav.Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link" href="/product">
                 Products
                </Nav.Link>
              </li>

              <li className="nav-item">
                <Nav.Link className="nav-link" href="/about">
                  About Us
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link" href="contact">
               Contacts
                </Nav.Link>
              </li>
            </ul>
            <div className="buttons">
                <Nav.Link href="/login" className="btn btn-outline-dark ms-2 mb-3" >
                    <i className="fa fa-sign-in me-1"></i> Login</Nav.Link>
            </div>
            <div className="buttons">
                <Nav.Link href="/register" className="btn btn-outline-dark ms-2  mb-3">
                    <i className="fa fa-user-plus me-1"></i> Register</Nav.Link>
            </div>
            <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="p">
      <i className="fa fa-shopping-cart me-1"></i> Cart (0)
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" className="py-4  px-5">Empty(0)</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
            <div className="buttons">
                <Nav.Link href="/cart" className="btn btn-outline-dark ms-2  mb-3">
                    <i className="fa fa-shopping-cart me-1"></i> Cart (0)
                    </Nav.Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

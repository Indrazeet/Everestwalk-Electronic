import React from 'react'
import {Nav} from 'react-bootstrap'


 const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link to='#'>About</Nav.Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6 col-lg-3'>
                            <h2>Follow Us</h2>
                            <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <Nav.Link to='#'>
                                        <i className='fab fa-facebook-f fontawesome-style'></i>
                                    </Nav.Link>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <Nav.Link to='#'>
                                        <i className='fab fa-instagram fontawesome-style'></i>
                                    </Nav.Link>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <Nav.Link to='#'>
                                        <i className='fab fa-youtube fontawesome-style'></i>
                                    </Nav.Link>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <Nav.Link to='#'>
                                        <i className='fab fa-twitter fontawesome-style'></i>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='mt-5'>
                        <p className='main-hero-para text-center w-100'>Copyright @ 2021 Yadavpay.all righta reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
export default Footer;
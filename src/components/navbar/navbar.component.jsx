import './navbar.styles.scss'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";
const NavbarComponent = ({ isLogin, setIsLogin }) => {
    return (
        <>
        {
            !isLogin ? null : 
            (
                <div className='navbar-component'>
                    <Navbar bg="danger" sticky='top' variant="dark">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                            <Nav className="me-auto nav-menu">
                                <Link to='/assignment' className='nav-link'>Assignment</Link>
                                <Link to='/guardians' className='nav-link'>Guardians</Link>
                                <Link to='/vehicles' className='nav-link'>Vehicles</Link>
                                <Link to='/drivers' className='nav-link'>Drivers</Link>
                                <Link to='/trips' className='nav-link'>Trips</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <span className='nav-link' onClick={() => setIsLogin(false)}>
                                Logout
                            </span>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }
        </>
    )
}

export default NavbarComponent
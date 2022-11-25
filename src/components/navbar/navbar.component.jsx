import './navbar.styles.scss'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <>
            <div className='navbar-component'>
                <Navbar bg="danger" sticky='top' variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                        <Nav className="me-auto nav-menu">
                            <a href='assignment' className='nav-link'>Assignment</a>
                            <a href='guardians' className='nav-link'>Guardians</a>
                            <a href='vehicles' className='nav-link'>Vehicles</a>
                            <a href='drivers' className='nav-link'>Drivers</a>
                            <a href='trips' className='nav-link'>Trips</a>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <span className='nav-link'>
                            Logout
                        </span>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarComponent
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
                            <span className='nav-link'>Assignment</span>
                            <span className='nav-link'>Guardians</span>
                            <span className='nav-link'>Drivers</span>
                            <span className='nav-link'>Vehicles</span>
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
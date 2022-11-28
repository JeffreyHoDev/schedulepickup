import './login.styles.scss'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { Redirect } from 'react-router-dom'

const LoginPage = ({ setIsLogin, isLogin }) => {
    return (
        <>
            {
                isLogin ? <Redirect to={{
                    pathname: "/drivers"
                }}/> : (
                    <div className='login-page-container'>
                        <h1>Welcome to Schedule Pickups Portal</h1>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        <Button variant='primary' onClick={() => setIsLogin(true)}>Login</Button>
                    </div>
                )
            }
        </>
    )
}

export default LoginPage
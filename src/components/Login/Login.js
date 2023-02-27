import React, { useRef, useState } from 'react'
import { Card, Form, Button, FormGroup, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { Link, useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error,  setError] = useState('');
    const [loading,  setLoading] = useState(false);
    const history = useNavigate ();
    async function handleSubmit(e) {
        e.preventDefault();

       
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history('/');
        } catch(err) {
            console.log(err)
            setError('Не удалось войти, попробуйте еще раз');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                <Form onSubmit={handleSubmit}>

                    
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <FormGroup id='email'>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' ref={emailRef} required></FormControl>
                    </FormGroup>
                    <FormGroup id='password'>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' ref={passwordRef} required></FormControl>
                    </FormGroup>
                    
                    <Button disabled={loading} type='submit' className='w-100 mt-2'>Log in</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>Need an account? <Link to='/signup'>Sign Up</Link></div>
        <div className='w-100 text-center mt-2'>Forgot password? <Link to='/reset'>Reset</Link></div>
        </div>
  )
}

export default Login

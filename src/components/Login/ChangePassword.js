import React, { useRef, useState } from 'react'
import { Card, Form, Button, FormGroup, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ChangePassword(){
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { changePassword, logout } = useAuth();
    const [error,  setError] = useState('');
    const [loading,  setLoading] = useState(false);
    const history = useNavigate ();

    async function handleLogout(e) {
        e.preventDefault();
        setError('')
        try {
    
          await logout();
          history('/login')
        }
        catch(err) {
          console.log(err);
          setError('failed to logout')
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        
        //if empty password
        if (!passwordRef.current.value) return;
        //if passwords not match
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Пароли не совпадают');
        }
        
        try {
            setError('');
            setLoading(true);
            await changePassword(passwordRef.current.value);
            history('/');
        } catch(err) {
            console.log(err)
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Change Password</h2>
                <Form onSubmit={handleSubmit}>

                    
                    {error && <Alert variant='danger'>{error}</Alert>}
                    
                    <FormGroup id='password'>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' ref={passwordRef} required></FormControl>
                    </FormGroup>
                    <FormGroup id='password-confirm'>
                        <FormLabel>Password Confirmation</FormLabel>
                        <FormControl type='password' ref={passwordConfirmRef} required></FormControl>
                    </FormGroup>
                    <Button disabled={loading} type='submit' className='w-100 mt-2'>Change Password</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'><Link onClick={handleLogout} to='/login'>Re-Login</Link></div>
        
        </div>
  )
}

export default ChangePassword

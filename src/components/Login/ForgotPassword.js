import React, { useRef, useState } from 'react'
import { Card, Form, Button, FormGroup, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ForgotPassword()  {
    const emailRef = useRef();
    
    const { resetPassword } = useAuth();
    const [error,  setError] = useState('');
    const [loading,  setLoading] = useState(false);
    const history = useNavigate ();
    
    async function handleSubmit(e) {
        e.preventDefault();

       
        try {
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            history('/login');
        } catch(err) {
            console.log(err);
            setError('Не удалось войти, попробуйте еще раз');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Reset Password</h2>
                <Form onSubmit={handleSubmit}>

                    
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <FormGroup id='email'>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' ref={emailRef} required></FormControl>
                    </FormGroup>
                                        
                    <Button disabled={loading} type='submit' className='w-100 mt-2'>Reset Password</Button>
                </Form>
            </Card.Body>
        </Card>
        </div>
  )
}

export default ForgotPassword

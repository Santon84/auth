import React, { useRef, useState } from 'react'
import { Card, Form, Button, FormGroup, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error,  setError] = useState('');
  const [loading,  setLoading] = useState(false);
  const history = useNavigate ();
  async function handleSubmit(e) {
      e.preventDefault();

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError('Пароли не совпадают');
      }
      try {
          setError('');
          setLoading(true);
          await signup(emailRef.current.value, passwordRef.current.value);
          history('/');
      } catch(err) {
          console.log(err)
          setError('Не удалось создать аккаунт, попробуйте еще раз');
      } finally {
          setLoading(false);
      }
  }
  return (
      <div>
      <Card>
          <Card.Body>
              <h2 className='text-center mb-4'>Sign Up</h2>
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
                  <FormGroup id='password-confirm'>
                      <FormLabel>Password Confirmation</FormLabel>
                      <FormControl type='password' ref={passwordConfirmRef} required></FormControl>
                  </FormGroup>
                  <Button disabled={loading} type='submit' className='w-100 mt-2'>Sing Up</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>Already have an account? <Link to='/login'>Log In</Link></div>
      </div>
)
}

export default UpdateProfile

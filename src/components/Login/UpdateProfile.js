import React, { useRef, useState } from 'react'
import { Card, Form, Button, FormGroup, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import Conteiner from '../Layout/Conteiner';
import FormConteiner from '../Layout/FormConteiner';

function UpdateProfile() {
  const { updateUserInfo, currentUser } = useAuth();
  const photoRef = useRef();
  const nameRef = useRef();
  const [error,  setError] = useState('');
  const [loading,  setLoading] = useState(false);
  const history = useNavigate ();

  
  async function handleSubmit(e) {
      e.preventDefault();

      if (!nameRef.current.value && !photoRef.current.value) return;
      
      try {
          setError('');
          setLoading(true);
          await updateUserInfo(nameRef.current.value, photoRef.current.value);
          history('/');
      } catch(err) {
          console.log(err)
          setError(err.message);
      } finally {
          setLoading(false);
      }
  }
  return (
    <Conteiner layout='form'>
    <FormConteiner>
      <Card>
          <Card.Body>
              <h2 className='text-center mb-4'>Update Profile</h2>
              <Form onSubmit={handleSubmit}>

                  
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <FormGroup id='name'>
                      <FormLabel>Name</FormLabel>
                      <FormControl type='text' ref={nameRef} defaultValue={currentUser.displayName}></FormControl>
                  </FormGroup>
                  <FormGroup id='photo'>
                      <FormLabel>Photo url</FormLabel>
                      <FormControl type='text' ref={photoRef} defaultValue={currentUser.photoURL}></FormControl>
                  </FormGroup>
                 
                  <Button disabled={loading} type='submit' className='w-100 mt-2'>Update Profile</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'><Link to='/'>to Dashboard</Link></div>
        
      </FormConteiner>
      </Conteiner>
)
}

export default UpdateProfile

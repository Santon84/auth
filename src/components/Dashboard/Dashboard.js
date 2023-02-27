import React, { useState } from 'react'
import { Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const [error,  setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  async function handleLogout() {
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
  console.log(currentUser);
  return (
    <>
      <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Profile</h2>
                <p>{currentUser.uid}</p>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
                <Link to='/update-profile' className='btn btn-primary w-100 mt-4'>Update Profile</Link>
                <Link to='/change-password' className='btn btn-primary w-100 mt-4'>Change Password</Link>
            </Card.Body>

      </Card>
      <Button variant='link' onClick={handleLogout} >Logout</Button>
                
    </>
  )
}

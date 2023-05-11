import React, {useState} from 'react'
import FormConteiner from '../Layout/FormConteiner'
import { Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function UserPage() {
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
  return (
    <div>
    
      <FormConteiner>
      <Card className='m-4'>
            <Card.Body>
                <h2 className='text-center mb-4'>Profile</h2>
                <p><strong>Name: </strong>{currentUser.displayName}</p>
                <p><strong>uid: </strong> {currentUser.uid}</p>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email: </strong> {currentUser.email}
                <Link to='/update-profile' className='btn btn-primary w-100 mt-4'>Update Profile</Link>
                <Link to='/change-password' className='btn btn-primary w-100 mt-4'>Change Password</Link>
            </Card.Body>

      </Card>
      <Button className='w-100 text-center mt-2' variant='link' onClick={handleLogout} >Logout</Button>
    
    
    </FormConteiner>
    </div>
  )
}

export default UserPage

import React from 'react'
// import { Card, Button, Alert} from 'react-bootstrap'


import Conteiner from '../Layout/Conteiner';
// import FormConteiner from '../Layout/FormConteiner';
import Assessment from '../Assessment/Assessment';
import Header from '../Header/Header';
export default function Dashboard() {

  
  
  return (
    
    <Conteiner layout='dashboard'>
    <Assessment />
    </Conteiner>
  )
}

import React, { useEffect, useState } from 'react'
// import { Card, Button, Alert} from 'react-bootstrap'


import Conteiner from '../Layout/Conteiner';
// import FormConteiner from '../Layout/FormConteiner';
import Assessment from '../Assessment/Assessment';
import { getAssessmentList } from '../Services/getData';
export default function Dashboard() {
  
  const [assessment, setAssessment] = useState([]);
  
  useEffect(() => {
    
    getAssessmentList().then(res => {
      console.log(res);
      setAssessment(res);
     } )
    
  },[]);


  useEffect(()=> {
    console.log(assessment);
  },[assessment])
  return (
    
    <Conteiner layout='dashboard'>

    {assessment.map(assessment => {
     return <Assessment title={assessment.name} description={assessment.description} url={assessment.id}/>
    })}
    

    </Conteiner>
  )
}

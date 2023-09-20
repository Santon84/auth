import React, { useEffect, useState } from 'react'
// import { Card, Button, Alert} from 'react-bootstrap'

import Conteiner from '../components/Layout/Conteiner';
// import FormConteiner from '../Layout/FormConteiner';
import Assessment from '../components/Assessment/Assessment';
import { getAssessmentList } from '../components/Services/getData';
import { type AssessmentData } from '../types/types';




export default function Dashboard() {
  
  const [assessment, setAssessment] = useState<AssessmentData[]>();
  
  useEffect(() => {
    
    getAssessmentList().then((res) => {
      console.log(res);
      setAssessment(res);
     } )
    
  },[]);


  useEffect(()=> {
    console.log(assessment);
  },[assessment])
  return (
    
    <Conteiner layout='dashboard'>
      <div>Dashboard</div>
    {assessment?.map((assessment:AssessmentData) => {
     return <Assessment key={assessment.id} title={assessment.name} description={assessment.description} url={assessment.id}/>
    })}
    

    </Conteiner>
  )
}

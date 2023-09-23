import React, { useEffect, useState } from 'react'
// import { Card, Button, Alert} from 'react-bootstrap'

import Conteiner from '../components/Layout/Conteiner';
// import FormConteiner from '../Layout/FormConteiner';
import Assessment from '../components/Assessment/Assessment';
import { type AssessmentData } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import getAssessmentsActions from '../redux/actions/assessmentActions';
import { IAssessmentState } from '../redux/reducers/assessment';
import { RootState } from '../redux/store';
import Spinner from '../components/Layout/Spinner';



export default function Dashboard() {
  const dispatch :any = useDispatch();
  const [assessment, setAssessment] = useState<AssessmentData[]>();
  const {items = [], loading} = useSelector((state:RootState) => state.assessment);
  useEffect(() => {
    dispatch(getAssessmentsActions());
  },[dispatch]);
  useEffect(() => {
    console.log(items)
  },[items])
  
  if (loading) return <Spinner />;

  return (
    
    <Conteiner layout='dashboard'>
      <div>Dashboard</div>
      {
        items?.map((assessment:AssessmentData) => {
        return <Assessment key={assessment.id} title={assessment.name} description={assessment.description} url={assessment.id}/>
        })
      }
    

    </Conteiner>
  )
}

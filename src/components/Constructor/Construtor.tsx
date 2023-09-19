import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import { Card, Button } from 'react-bootstrap'
import Conteiner from '../Layout/Conteiner'
import {  useSelector  } from 'react-redux'
import { IAssessmentState } from '../../store/assessment'
import { RootState } from '../../store/store'
const Construtor = () => {

  const assessment = useSelector((state: RootState) => state.AssessmentReducer);
  console.log(assessment.id);
    
  
  return (
    <>
    <div>Hello</div>
    </>    

  )
}

export default Construtor

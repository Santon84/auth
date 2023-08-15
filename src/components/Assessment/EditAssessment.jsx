import React, { useEffect, useState } from 'react'
import { getAssessmentById } from '../Services/getData'
import { useParams } from 'react-router'
import Conteiner from '../Layout/Conteiner'

import Question from './Questions/Question'

function EditAssessment() {
    const [assesment, setAssessment] = useState([])
    let { id } = useParams();
    
    useEffect(() => {
        getAssessmentById(id).then(res => setAssessment(res));
    },[id])

    
    
    return (
        
        <Conteiner layout='dashboard'>
        {   
            assesment.sort((a,b) => a.order - b.order).map(question => {
                
                return <Question key={question.id} question={question.question} qId={question.id}/>
            })
        }
        </Conteiner>
        
  )
}

export default EditAssessment

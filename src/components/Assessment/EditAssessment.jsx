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
                return <Question question={question.question}/>
            })
        }
        </Conteiner>
        
  )
}

export default EditAssessment

import React, { useEffect, useState } from 'react'
import { getAssessmentById } from '../Services/getData'
import { useParams } from 'react-router'
import Conteiner from '../Layout/Conteiner'
import { Button } from 'react-bootstrap'

import Question from './Questions/Question'

function EditAssessment() {
    const [assesment, setAssessment] = useState([])
    let { id } = useParams();
    
    useEffect(() => {
        getAssessmentById(id).then(res => setAssessment(res));
    },[id])

    
    
    return (
        
        <Conteiner layout='dashboard'>
            <div className='m-4 container-fluid'>
                {   
                    assesment.sort((a,b) => a.order - b.order).map(question => {
                        
                        return <Question key={question.id} question={question.question} qId={question.id}/>
                    })
                }
                <Button className='mt-4' variant="outline-primary">+</Button>{' '}
            </div>
        </Conteiner>
        
  )
}

export default EditAssessment

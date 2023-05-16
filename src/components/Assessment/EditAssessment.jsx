import React, { useEffect, useState } from 'react'
import { getAssessmentById } from '../Services/getData'
import { useParams } from 'react-router'
function EditAssessment() {
    const [assesment, setAssessment] = useState([])
    let { id } = useParams();
    useEffect(() => {
        getAssessmentById(id).then(res => setAssessment(res));
    },[id])

    
    
    return (
        <div>
            
            {id}
        {   
            assesment.map(question => {
                return <div>{question.question}</div>
            })
        }
        </div>
  )
}

export default EditAssessment

import React from 'react'
import AssessmentCard from './AssessmentCard'
import { type AssessmentProps } from '../../types/types'



function Assessment({title, description, url}: AssessmentProps) {


    return (
    
      <AssessmentCard title={title} description={description} url={`edit/${url}`} />
    
  )
}

export default Assessment

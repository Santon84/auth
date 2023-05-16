import React from 'react'
import AssessmentCard from './AssessmentCard'

function Assessment({title, description, url}) {


    return (
    
      <AssessmentCard title={title} description={description} link={`edit/${url}`} />
    
  )
}

export default Assessment

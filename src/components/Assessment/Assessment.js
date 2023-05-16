import React from 'react'
import AssessmentCard from './AssessmentCard'

function Assessment({title, description}) {


    return (
    
      <AssessmentCard title={title} description={description} link='/' />
    
  )
}

export default Assessment

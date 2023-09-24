import React from 'react'
import AssessmentCard from './AssessmentCard'

export type AssessmentProps = {
  title: string,
  description: string,
  url: string,
}

function Assessment(props: AssessmentProps) {
  const { title, description, url} = props;
    return (
    
      <AssessmentCard 
      title={title} 
      description={description} 
      url={`edit/${url}`} 
      />
  
  )
}

export default Assessment
